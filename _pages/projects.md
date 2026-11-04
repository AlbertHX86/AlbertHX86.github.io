---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<style>
.proj-win{border-radius:18px;overflow:hidden;box-shadow:2px 4px 12px rgba(0,0,0,.08);margin:12px 0 18px;background:#fff;transition:all .3s cubic-bezier(0,0,.5,1)}
.proj-win:hover{transform:scale3d(1.01,1.01,1.01);box-shadow:2px 4px 16px rgba(0,0,0,.16)}
.proj-bar{display:flex;align-items:center;gap:6px;padding:8px 12px;background:#f5f5f7;border-bottom:1px solid #e8e8ed}
.proj-bar i{width:11px;height:11px;border-radius:50%;display:inline-block}
.proj-url{flex:1;margin-left:10px;background:#fff;border-radius:8px;padding:3px 10px;font-size:12px;letter-spacing:-.01em;color:#6e6e73;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.proj-view{position:relative;aspect-ratio:16/10;overflow:hidden;background:#fff}
.proj-view img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;opacity:0;animation:projfade 12s infinite}
.proj-view img:nth-child(1){animation-delay:0s}
.proj-view img:nth-child(2){animation-delay:4s}
.proj-view img:nth-child(3){animation-delay:8s}
@keyframes projfade{0%{opacity:0}4%{opacity:1}33%{opacity:1}37%{opacity:0}100%{opacity:0}}
.proj-cta{position:absolute;right:12px;bottom:12px;background:#0071e3;color:#fff;font-size:14px;letter-spacing:-.016em;padding:8px 16px;border-radius:980px;transition:background .24s cubic-bezier(.4,0,.6,1)}
.proj-win:hover .proj-cta{background:#0077ed}
.proj-win a,.proj-win a:hover{text-decoration:none;border:0}
.pj-hero{margin:.2em 0 2.4em}
.pj-kicker{margin:0;font-size:14px;font-weight:600;letter-spacing:-.01em;color:#0071e3}
#main .pj-title{margin:.15em 0 .35em;padding:0;border:0;font-size:clamp(30px,4.6vw,46px);line-height:1.08;font-weight:700;letter-spacing:-.015em;background:linear-gradient(90deg,#0071e3 0%,#7a5af8 35%,#e5398c 60%,#0071e3 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:pjshine 9s linear infinite}
.pj-sub{margin:0;max-width:38em;font-size:19px;line-height:1.42;letter-spacing:.012em;color:#6e6e73}
.pj-stats{display:flex;flex-wrap:wrap;gap:10px;margin-top:1.2em}
.pj-stat{padding:6px 14px;border-radius:980px;background:#f5f5f7;font-size:14px;letter-spacing:-.016em;color:#1d1d1f}
.pj-stat b{color:#0071e3;font-weight:600}
.pj-item{margin:0 0 3em}
#main .pj-item h3{margin:0 0 .45em;font-size:1.5em;line-height:1.16;font-weight:600;letter-spacing:.009em}
#main .pj-item h3 a{color:#1d1d1f;text-decoration:none}
#main .pj-item h3 a:hover{color:#0066cc}
.pj-head{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 .2em}
.pj-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 11px;border-radius:980px;font-size:12px;font-weight:600;letter-spacing:-.01em}
.pj-badge--live{background:#e8f8ee;color:#1d7d3f}
.pj-badge--live i{position:relative;width:7px;height:7px;border-radius:50%;background:#28c840}
.pj-badge--live i:after{content:"";position:absolute;inset:0;border-radius:50%;background:#28c840;animation:pjping 1.8s cubic-bezier(0,0,.2,1) infinite}
.pj-badge--oss{background:#f0eefe;color:#5b3fd6}
#main a.pj-doc{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:980px;background:#fff;box-shadow:inset 0 0 0 1px #0071e3;font-size:12px;font-weight:600;letter-spacing:-.01em;color:#0066cc;text-decoration:none;transition:background .24s cubic-bezier(.4,0,.6,1),color .24s}
#main a.pj-doc:hover{background:#0071e3;color:#fff}
#main a.pj-doc i{font-size:11px}
.pj-tag{padding:4px 11px;border-radius:980px;background:#f5f5f7;font-size:12px;letter-spacing:-.01em;color:#6e6e73}
.proj-view:after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-130%);transition:transform 1s cubic-bezier(.4,0,.2,1)}
.proj-win:hover .proj-view:after{transform:translateX(130%)}
.proj-cta{z-index:3;animation:pjpulse 2.6s cubic-bezier(.4,0,.6,1) infinite}
.pj-js .pj-reveal{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(0,0,.5,1),transform .9s cubic-bezier(0,0,.5,1)}
.pj-js .pj-reveal.is-in{opacity:1;transform:none}
.pj-band{margin:1em 0 1.5em;padding:40px 32px;border-radius:18px;background:linear-gradient(135deg,#f5f5f7 0%,#eef3ff 55%,#f7eefb 100%);text-align:center}
#main .pj-band h2{margin:0 0 .3em;padding:0;border:0;font-size:28px;line-height:1.14;font-weight:600;letter-spacing:.007em;color:#1d1d1f}
.pj-band p{margin:0 auto 1.3em;max-width:32em;color:#6e6e73}
.pj-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:12px}
#main a.pj-btn{display:inline-block;padding:11px 22px;border-radius:980px;background:#0071e3;color:#fff;font-size:15px;letter-spacing:-.016em;text-decoration:none;transition:background .24s cubic-bezier(.4,0,.6,1),transform .24s}
#main a.pj-btn:hover{background:#0077ed;transform:translateY(-1px)}
#main a.pj-btn--ghost{background:transparent;color:#0066cc;box-shadow:inset 0 0 0 1px #0071e3}
#main a.pj-btn--ghost:hover{background:#0071e3;color:#fff}
@keyframes pjshine{to{background-position:200% center}}
@keyframes pjping{75%,100%{transform:scale(2.4);opacity:0}}
@keyframes pjpulse{0%{box-shadow:0 0 0 0 rgba(0,113,227,.45)}70%{box-shadow:0 0 0 12px rgba(0,113,227,0)}100%{box-shadow:0 0 0 0 rgba(0,113,227,0)}}
@media (prefers-reduced-motion:reduce){#main .pj-title,.proj-cta,.pj-badge--live i:after{animation:none}.proj-view:after{display:none}.pj-js .pj-reveal{opacity:1;transform:none;transition:none}}
</style>
<div class="pj-hero">
<p class="pj-kicker">Selected work</p>
<h2 class="pj-title">Built to be tried.</h2>
<p class="pj-sub">AI evaluation platforms, a multimodal vision tool and a macOS app. Every window below opens the real thing, so click one and try it.</p>
<div class="pj-stats"><span class="pj-stat"><b>3</b> live demos</span><span class="pj-stat"><b>1</b> open-source app</span><span class="pj-stat"><b>2</b> AI evaluation platforms</span></div>
</div>

<div class="pj-item pj-reveal" markdown="1">
### [Video Generation Bench](https://2dn6bddf.qwenwork.host/)
<div class="pj-head"><span class="pj-badge pj-badge--live"><i></i>Live demo</span><span class="pj-tag">Text-to-video evaluation</span><span class="pj-tag">8-dimension rubric</span><span class="pj-tag">Blind Elo voting</span></div>
<div class="proj-win"><a href="https://2dn6bddf.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">2dn6bddf.qwenwork.host · Video Generation Bench</span></div>
<div class="proj-view">
<img src="/images/projects/vgb-benchmark.jpg" alt="Video Generation Bench: benchmark prompt selection">
<img src="/images/projects/vgb-video.jpg" alt="Video Generation Bench: generated video samples">
<img src="/images/projects/vgb-elo.jpg" alt="Video Generation Bench: blind Elo comparison">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

An evaluation platform I designed and built for text-to-video (T2V) generation models. It pairs an 8-dimension scoring rubric with blind head-to-head Elo voting, so it shows both *where* a model is weak and *which* model people actually prefer.
</div>

<div class="pj-item pj-reveal" markdown="1">
### [LLM Coding Eval](https://bai-ai-lab.github.io/coding-eval/)
<div class="pj-head"><span class="pj-badge pj-badge--live"><i></i>Live demo</span><span class="pj-tag">LiveCodeBench</span><span class="pj-tag">Runtime &amp; cost</span><span class="pj-tag">Side-by-side code</span><a class="pj-doc" href="https://github.com/BAI-AI-Lab/codingBench/blob/main/reports/2026-11-03_ladder_technical_report/main.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf" aria-hidden="true"></i>Technical report (PDF) ↗</a></div>
<div class="proj-win"><a href="https://bai-ai-lab.github.io/coding-eval/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">bai-ai-lab.github.io/coding-eval · LLM Coding Eval</span></div>
<div class="proj-view">
<img loading="lazy" src="/images/projects/ce-models.jpg" alt="LLM Coding Eval: pass rate, latency and cost of the three models">
<img loading="lazy" src="/images/projects/ce-results.jpg" alt="LLM Coding Eval: results by difficulty and run settings">
<img loading="lazy" src="/images/projects/ce-code.jpg" alt="LLM Coding Eval: each model's code for a problem">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

A public results site for the coding evaluation I ran at BAI AI Lab, comparing Kimi K3.1 Pro, DeepSeek-V4.1-Flash and DeepSeek-V4-Pro on the newest LiveCodeBench problems. Beyond pass@1 it reports latency, tokens and cost, measures the runtime, memory and static metrics of every passing answer, shows each model's code side by side, and documents the judging rules and the commands for evaluating your own model. The [technical report](https://github.com/BAI-AI-Lab/codingBench/blob/main/reports/2026-11-03_ladder_technical_report/main.pdf) extends it to a five-tier ladder from USACO to FrontierCS and compares Kimi K3.1 Pro at two reasoning efforts with DeepSeek Flash V4.1-1017 and MiniMax M3.1 Flash.
</div>

<div class="pj-item pj-reveal" markdown="1">
### [Panel Intelligence](https://hmm5s69m.qwenwork.host/)
<div class="pj-head"><span class="pj-badge pj-badge--live"><i></i>Live demo</span><span class="pj-tag">Multimodal AI</span><span class="pj-tag">Camera or upload</span><span class="pj-tag">TXT / DOCX export</span></div>
<div class="proj-win"><a href="https://hmm5s69m.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">hmm5s69m.qwenwork.host · Panel Intelligence</span></div>
<div class="proj-view">
<img loading="lazy" src="/images/projects/pi-workbench.jpg" alt="Panel Intelligence: visual analysis workbench" style="animation:none;opacity:1;">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

A visual analysis workbench for equipment control panels. Upload a photo or take one with your camera, and a multimodal AI model reads the image directly, explaining each switch, indicator light and display, and flagging anything it can't read clearly. You can then ask follow-up questions about the panel and export the explanation as TXT or DOCX.
</div>

<div class="pj-item pj-reveal" markdown="1">
### [HealthGlance](https://github.com/AlbertHX86/health-glance)
<div class="pj-head"><span class="pj-badge pj-badge--oss">Open source</span><span class="pj-tag">Swift &amp; SwiftUI</span><span class="pj-tag">WidgetKit</span><span class="pj-tag">Dynamic Island</span></div>
<div class="proj-win"><a href="https://github.com/AlbertHX86/health-glance" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">github.com/AlbertHX86/health-glance · HealthGlance</span></div>
<div class="proj-view">
<img loading="lazy" src="/images/projects/hg-desktop.jpg" alt="HealthGlance: the desktop widget and the opened Dynamic Island">
<img loading="lazy" src="/images/projects/hg-island.jpg" alt="HealthGlance: the Dynamic Island with today's checklist, in Chinese">
<img loading="lazy" src="/images/projects/hg-battles.jpg" alt="HealthGlance: the Puff Battles page shared with friends">
<span class="proj-cta">View on GitHub ↗</span>
</div></a></div>

A macOS menu-bar app and desktop widget I built that turns iPhone Health data into a daily AI summary. An iPhone shortcut exports the numbers to iCloud Drive; the Mac app has MiniMax write a short summary that compares each number with your own 7-day average, and turns its advice into a checklist you tick off. It shows as a WidgetKit widget, a pinned card or a Dynamic Island that appears when you point at the notch, answers questions about your data, and lets friends who share an iCloud folder compete in a daily pet-battle game. Written in Swift and SwiftUI and built with the Command Line Tools alone.
</div>

<div class="pj-band pj-reveal">
<h2>More is on the way.</h2>
<p>New evaluations and tools land on GitHub first. Follow along, or read the research behind them.</p>
<div class="pj-btns"><a class="pj-btn" href="https://github.com/AlbertHX86" target="_blank" rel="noopener">Follow on GitHub ↗</a><a class="pj-btn pj-btn--ghost" href="/publications/">Read my publications</a></div>
</div>

<script>
(function(){
var root=document.documentElement;
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
root.classList.add('pj-js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
document.querySelectorAll('.pj-reveal').forEach(function(el){io.observe(el);});
})();
</script>
