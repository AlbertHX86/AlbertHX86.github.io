#!/usr/bin/env python3
"""Add a photo to the Album page (/album/).

    python3 _tools/add_photo.py ~/Desktop/IMG_1234.jpg --title "Huang Engineering Center" \
        --place "Stanford" --date 2026-11

What it does:
  * rotates the photo upright (EXIF orientation), then strips ALL metadata,
    including GPS, so the published file says nothing about where it was taken;
  * writes images/album/<slug>.jpg (long edge <= 2400 px, opened in the lightbox)
    and images/album/<slug>-thumb.jpg (long edge <= 1000 px, shown in the grid);
  * adds an entry to the top of _data/album.yml (the page shows entries in file order,
    newest first). Edit that file by hand to reorder, re-caption or remove a photo.

Needs Pillow (pip install pillow). Lives in _tools/ so Jekyll does not publish it.
"""
import argparse
import json
import re
import subprocess
import sys
import tempfile
import unicodedata
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageOps

REPO = Path(__file__).resolve().parent.parent
OUT_DIR = REPO / "images" / "album"
DATA = REPO / "_data" / "album.yml"
FULL_EDGE, THUMB_EDGE = 2400, 1000
HEADER = "# Album photos, newest first. Add new ones with: python3 _tools/add_photo.py --help\n"


def slugify(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")[:60] or "photo"  # all-Chinese title -> "photo"


def exif_date(img):
    raw = img.getexif().get_ifd(0x8769).get(0x9003) or img.getexif().get(0x0132)
    try:
        return datetime.strptime(str(raw), "%Y:%m:%d %H:%M:%S").strftime("%Y-%m-%d")
    except ValueError:
        return None


def save(img, path, edge):
    img = img.copy()
    img.thumbnail((edge, edge), Image.LANCZOS)
    # No exif= argument, so Pillow writes none; the ICC colour profile is kept.
    img.save(path, "JPEG", quality=86, optimize=True, progressive=True,
             icc_profile=img.info.get("icc_profile"))
    return img.size


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("photo", type=Path)
    ap.add_argument("--title", required=True, help="short caption shown under the photo")
    ap.add_argument("--place", help="e.g. 'Stanford, CA'")
    ap.add_argument("--date", help="YYYY, YYYY-MM or YYYY-MM-DD; defaults to the camera date if the photo has one")
    ap.add_argument("--note", help="optional longer line shown in the lightbox")
    ap.add_argument("--alt", help="alt text for screen readers; defaults to the title")
    a = ap.parse_args()

    if a.date and not re.fullmatch(r"\d{4}(-\d{2}){0,2}", a.date):
        sys.exit("--date must look like 2026, 2026-11 or 2026-11-14")

    path = a.photo
    if path.suffix.lower() in (".heic", ".heif"):  # iPhone photos: Pillow can't read HEIC, macOS sips can
        tmp = Path(tempfile.mkdtemp()) / "photo.jpg"
        subprocess.run(["sips", "-s", "format", "jpeg", str(path), "--out", str(tmp)],
                       check=True, capture_output=True)
        path = tmp
    src = Image.open(path)
    date = a.date or exif_date(src)
    img = ImageOps.exif_transpose(src).convert("RGB")
    if "icc_profile" in src.info:
        img.info["icc_profile"] = src.info["icc_profile"]

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    base = "-".join(x for x in (date, slugify(a.title)) if x)
    slug, n = base, 2
    while (OUT_DIR / f"{slug}.jpg").exists():
        slug, n = f"{base}-{n}", n + 1

    w, h = save(img, OUT_DIR / f"{slug}.jpg", FULL_EDGE)
    save(img, OUT_DIR / f"{slug}-thumb.jpg", THUMB_EDGE)

    def q(v):  # a JSON string is a valid double-quoted YAML scalar; keep 中文 readable
        return json.dumps(v, ensure_ascii=False)
    lines = [f"- src: {q(slug)}", f"  title: {q(a.title)}"]
    if a.place:
        lines.append(f"  place: {q(a.place)}")
    if date:
        lines.append(f"  date: {q(date)}")  # quoted so YAML keeps it a string
    if a.note:
        lines.append(f"  note: {q(a.note)}")
    lines += [f"  alt: {q(a.alt or a.title)}", f"  width: {w}", f"  height: {h}"]
    entry = "\n".join(lines) + "\n"

    old = DATA.read_text(encoding="utf-8") if DATA.exists() else ""
    body = old[len(HEADER):] if old.startswith(HEADER) else old
    if body.strip() in ("", "[]"):
        body = ""
    DATA.write_text(HEADER + entry + ("\n" + body.lstrip("\n") if body else ""), encoding="utf-8")

    print(f"added images/album/{slug}.jpg ({w}x{h}) and its thumbnail")
    print(f"entry written to the top of {DATA.relative_to(REPO)}:\n{entry}")
    if not date:
        print("no date given and none in the photo; add `date:` in the YAML if you want one")


if __name__ == "__main__":
    main()
