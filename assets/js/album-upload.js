/* Hidden uploader for the Album page: click the "Album" title, enter the password, add a photo.
 *
 * How it works (no server): the password decrypts a GitHub token that is stored, encrypted, in
 * _data/album_upload.json (see _tools/set_album_upload.py). The photo is resized and re-encoded in
 * the browser (which drops EXIF/GPS), then committed to the repo through the GitHub API; GitHub
 * Pages rebuilds the site about a minute later. The password and token live in memory only.
 */
(function () {
  "use strict";
  var cfgEl = document.getElementById("album-upload-config");
  var title = document.querySelector(".page__title");
  if (!cfgEl || !title) return;
  var cfg;
  try { cfg = JSON.parse(cfgEl.textContent); } catch (e) { return; }
  if (!cfg || !cfg.ct || !window.crypto || !crypto.subtle) return;

  var FULL_EDGE = 2400, THUMB_EDGE = 1000, QUALITY = 0.86;
  var token = null; // set after a correct password; never stored anywhere

  function b64ToBytes(s) {
    var bin = atob(s), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function bytesToB64(bytes) {
    var s = "", chunk = 0x8000;
    for (var i = 0; i < bytes.length; i += chunk) s += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    return btoa(s);
  }

  // PBKDF2-SHA256 -> AES-256-GCM; ciphertext is "ct || tag", as produced by _tools/set_album_upload.py
  async function decryptToken(password) {
    var base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
    var key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", hash: "SHA-256", salt: b64ToBytes(cfg.salt), iterations: cfg.iter },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    var plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64ToBytes(cfg.iv) }, key, b64ToBytes(cfg.ct));
    return new TextDecoder().decode(plain);
  }

  function slugify(text) {
    return text.normalize("NFKD").replace(/[^\x00-\x7F]/g, "").toLowerCase()
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "photo";
  }

  async function loadBitmap(file) {
    if (window.createImageBitmap) {
      try { return await createImageBitmap(file, { imageOrientation: "from-image" }); } catch (e) { /* fall through */ }
    }
    return await new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("这张图片浏览器打不开（HEIC 请先转成 JPG，或用 Safari）")); };
      img.src = url;
    });
  }

  // Re-encoding through a canvas writes a fresh JPEG with no EXIF/GPS.
  async function renderJpeg(bitmap, edge) {
    var w = bitmap.width, h = bitmap.height, k = Math.min(1, edge / Math.max(w, h));
    var cw = Math.round(w * k), ch = Math.round(h * k);
    var c = document.createElement("canvas");
    c.width = cw; c.height = ch;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, cw, ch);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bitmap, 0, 0, cw, ch);
    var blob = await new Promise(function (r) { c.toBlob(r, "image/jpeg", QUALITY); });
    if (!blob) throw new Error("图片处理失败");
    return { b64: bytesToB64(new Uint8Array(await blob.arrayBuffer())), w: cw, h: ch };
  }

  async function gh(path, opts) {
    opts = opts || {};
    var res = await fetch("https://api.github.com/repos/" + cfg.repo + path, {
      method: opts.method || "GET",
      headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json",
                 "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" },
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
    if (!res.ok) {
      var msg = "";
      try { msg = (await res.json()).message || ""; } catch (e) { /* ignore */ }
      throw new Error("GitHub " + res.status + (msg ? "：" + msg : ""));
    }
    return res.json();
  }

  function q(v) { return JSON.stringify(v); } // a JSON string is a valid double-quoted YAML scalar

  async function upload(f, setStatus) {
    setStatus("处理图片…");
    var bmp = await loadBitmap(f.file);
    var full = await renderJpeg(bmp, FULL_EDGE);
    var thumb = await renderJpeg(bmp, THUMB_EDGE);

    setStatus("读取相册数据…");
    var branch = cfg.branch || "master";
    var ref = await gh("/git/ref/heads/" + branch);
    var head = ref.object.sha;
    var commit = await gh("/git/commits/" + head);
    var file = await gh("/contents/_data/album.yml?ref=" + encodeURIComponent(branch));
    var old = new TextDecoder().decode(b64ToBytes(file.content.replace(/\s/g, "")));

    var base = (f.date ? f.date + "-" : "") + slugify(f.title), slug = base, n = 2;
    while (old.indexOf("src: " + q(slug)) !== -1) { slug = base + "-" + n; n++; }

    var lines = ["- src: " + q(slug), "  title: " + q(f.title)];
    if (f.place) lines.push("  place: " + q(f.place));
    if (f.date) lines.push("  date: " + q(f.date));
    if (f.note) lines.push("  note: " + q(f.note));
    lines.push("  alt: " + q(f.alt || f.title), "  width: " + full.w, "  height: " + full.h);
    var entry = lines.join("\n") + "\n";

    var parts = old.split("\n"), head1 = "";
    if (parts[0].charAt(0) === "#") head1 = parts.shift() + "\n";
    var body = parts.join("\n").replace(/^\n+/, "");
    if (/^\s*(\[\])?\s*$/.test(body)) body = "";
    var next = head1 + entry + (body ? "\n" + body : "");

    setStatus("上传到 GitHub…");
    var blobs = await Promise.all([
      gh("/git/blobs", { method: "POST", body: { content: full.b64, encoding: "base64" } }),
      gh("/git/blobs", { method: "POST", body: { content: thumb.b64, encoding: "base64" } }),
      gh("/git/blobs", { method: "POST", body: { content: next, encoding: "utf-8" } })
    ]);
    var tree = await gh("/git/trees", { method: "POST", body: { base_tree: commit.tree.sha, tree: [
      { path: "images/album/" + slug + ".jpg", mode: "100644", type: "blob", sha: blobs[0].sha },
      { path: "images/album/" + slug + "-thumb.jpg", mode: "100644", type: "blob", sha: blobs[1].sha },
      { path: "_data/album.yml", mode: "100644", type: "blob", sha: blobs[2].sha }
    ] } });
    var made = await gh("/git/commits", { method: "POST", body: {
      message: "Add album photo: " + f.title, tree: tree.sha, parents: [head] } });
    await gh("/git/refs/heads/" + branch, { method: "PATCH", body: { sha: made.sha } });
  }

  /* ---- UI: a native <dialog>, styled to match the page ---- */
  var css = document.createElement("style");
  css.textContent =
    "#al-up{border:0;border-radius:18px;padding:26px 26px 22px;width:min(92vw,400px);box-shadow:0 20px 60px rgba(0,0,0,.28);" +
    "font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Helvetica,Arial,'PingFang SC',sans-serif;color:#1d1d1f}" +
    "#al-up::backdrop{background:rgba(0,0,0,.45)}" +
    "#al-up h3{margin:0 0 14px;font-size:19px;font-weight:600;letter-spacing:-.016em}" +
    "#al-up label{display:block;margin:10px 0 4px;font-size:13px;color:#6e6e73}" +
    "#al-up input{box-sizing:border-box;width:100%;padding:9px 11px;border:1px solid #d2d2d7;border-radius:10px;font:inherit;font-size:15px;background:#fff;color:inherit}" +
    "#al-up input:focus{outline:2px solid #0071e3;outline-offset:-1px;border-color:transparent}" +
    "#al-up .al-row{display:flex;gap:10px;justify-content:flex-end;margin-top:18px}" +
    "#al-up button{border:0;border-radius:980px;padding:8px 18px;font:inherit;font-size:14px;cursor:pointer}" +
    "#al-up .al-go{background:#0071e3;color:#fff}#al-up .al-x{background:#f5f5f7;color:#1d1d1f}" +
    "#al-up button:disabled{opacity:.5;cursor:default}" +
    "#al-up .al-msg{min-height:1.3em;margin-top:12px;font-size:13px;color:#6e6e73}#al-up .al-msg.err{color:#d70015}#al-up .al-msg.ok{color:#1d8a3b}";
  document.head.appendChild(css);

  var dlg = document.createElement("dialog");
  dlg.id = "al-up";
  document.body.appendChild(dlg);

  function show(html) { dlg.innerHTML = html; if (!dlg.open) dlg.showModal(); }

  function passwordView() {
    show('<form id="al-pw"><h3>Album</h3><label for="al-pass">Password</label>' +
      '<input id="al-pass" type="password" autocomplete="off" autofocus>' +
      '<div class="al-msg" id="al-m"></div><div class="al-row"><button type="button" class="al-x">取消</button>' +
      '<button class="al-go">解锁</button></div></form>');
    var form = dlg.querySelector("#al-pw"), msg = dlg.querySelector("#al-m"), go = dlg.querySelector(".al-go");
    dlg.querySelector(".al-x").onclick = function () { dlg.close(); };
    form.onsubmit = async function (e) {
      e.preventDefault();
      go.disabled = true; msg.className = "al-msg"; msg.textContent = "验证中…";
      try {
        token = await decryptToken(dlg.querySelector("#al-pass").value);
        uploadView();
      } catch (err) {
        await new Promise(function (r) { setTimeout(r, 800); });
        msg.className = "al-msg err"; msg.textContent = "密码不对";
        go.disabled = false;
      }
    };
  }

  function uploadView() {
    var today = new Date().toISOString().slice(0, 10);
    show('<form id="al-f"><h3>上传照片</h3>' +
      '<label for="al-file">照片</label><input id="al-file" type="file" accept="image/*" required>' +
      '<label for="al-t">标题</label><input id="al-t" required maxlength="80">' +
      '<label for="al-p">地点（可选）</label><input id="al-p" maxlength="80">' +
      '<label for="al-d">日期（可选）</label><input id="al-d" type="date" value="' + today + '">' +
      '<label for="al-n">备注（可选，显示在大图里）</label><input id="al-n" maxlength="200">' +
      '<div class="al-msg" id="al-m"></div><div class="al-row"><button type="button" class="al-x">关闭</button>' +
      '<button class="al-go">上传</button></div></form>');
    var form = dlg.querySelector("#al-f"), msg = dlg.querySelector("#al-m"), go = dlg.querySelector(".al-go");
    var fileEl = dlg.querySelector("#al-file"), dateEl = dlg.querySelector("#al-d");
    dlg.querySelector(".al-x").onclick = function () { dlg.close(); };
    fileEl.onchange = function () { // default the date to when the file was last modified
      if (fileEl.files[0] && fileEl.files[0].lastModified) dateEl.value = new Date(fileEl.files[0].lastModified).toISOString().slice(0, 10);
    };
    form.onsubmit = async function (e) {
      e.preventDefault();
      go.disabled = true; msg.className = "al-msg";
      try {
        await upload({
          file: fileEl.files[0], title: dlg.querySelector("#al-t").value.trim(),
          place: dlg.querySelector("#al-p").value.trim(), date: dateEl.value,
          note: dlg.querySelector("#al-n").value.trim()
        }, function (s) { msg.textContent = s; });
        msg.className = "al-msg ok";
        msg.textContent = "已上传。GitHub Pages 约 1 分钟后更新，到时刷新页面即可。";
        form.reset(); dateEl.value = today; go.disabled = false;
      } catch (err) {
        msg.className = "al-msg err"; msg.textContent = String(err.message || err);
        go.disabled = false;
      }
    };
  }

  dlg.addEventListener("close", function () { dlg.innerHTML = ""; });
  title.addEventListener("click", function () { if (token) uploadView(); else passwordView(); });
})();
