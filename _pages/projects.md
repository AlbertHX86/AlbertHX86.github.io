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
</style>

### [Video Generation Bench](https://2dn6bddf.qwenwork.host/)
<div class="proj-win"><a href="https://2dn6bddf.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">2dn6bddf.qwenwork.host · Video Generation Bench</span></div>
<div class="proj-view">
<img src="/images/projects/vgb-benchmark.jpg" alt="Video Generation Bench: benchmark prompt selection">
<img src="/images/projects/vgb-video.jpg" alt="Video Generation Bench: generated video samples">
<img src="/images/projects/vgb-elo.jpg" alt="Video Generation Bench: blind Elo comparison">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

An evaluation platform I designed and built for text-to-video (T2V) generation models. It pairs an 8-dimension scoring rubric with blind head-to-head Elo voting, so it shows both *where* a model is weak and *which* model people actually prefer.

### [LLM Coding Eval](https://bai-ai-lab.github.io/coding-eval/)
<div class="proj-win"><a href="https://bai-ai-lab.github.io/coding-eval/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">bai-ai-lab.github.io/coding-eval · LLM Coding Eval</span></div>
<div class="proj-view">
<img src="/images/projects/ce-models.jpg" alt="LLM Coding Eval: pass rate, latency and cost of the three models">
<img src="/images/projects/ce-results.jpg" alt="LLM Coding Eval: results by difficulty and run settings">
<img src="/images/projects/ce-code.jpg" alt="LLM Coding Eval: each model's code for a problem">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

A public results site for the coding evaluation I ran at BAI AI Lab, comparing Kimi K3.1 Pro, DeepSeek-V4.1-Flash and DeepSeek-V4-Pro on the newest LiveCodeBench problems. Beyond pass@1 it reports latency, tokens and cost, measures the runtime, memory and static metrics of every passing answer, shows each model's code side by side, and documents the judging rules and the commands for evaluating your own model.

### [Panel Intelligence](https://hmm5s69m.qwenwork.host/)
<div class="proj-win"><a href="https://hmm5s69m.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">hmm5s69m.qwenwork.host · Panel Intelligence</span></div>
<div class="proj-view">
<img src="/images/projects/pi-workbench.jpg" alt="Panel Intelligence: visual analysis workbench" style="animation:none;opacity:1;">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

A visual analysis workbench for equipment control panels. Upload a photo or take one with your camera, and a multimodal AI model reads the image directly, explaining each switch, indicator light and display, and flagging anything it can't read clearly. You can then ask follow-up questions about the panel and export the explanation as TXT or DOCX.

### [HealthGlance](https://github.com/AlbertHX86/health-glance)
<div class="proj-win"><a href="https://github.com/AlbertHX86/health-glance" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">github.com/AlbertHX86/health-glance · HealthGlance</span></div>
<div class="proj-view">
<img src="/images/projects/hg-desktop.jpg" alt="HealthGlance: the desktop widget and the opened Dynamic Island">
<img src="/images/projects/hg-island.jpg" alt="HealthGlance: the Dynamic Island with today's checklist, in Chinese">
<img src="/images/projects/hg-battles.jpg" alt="HealthGlance: the Puff Battles page shared with friends">
<span class="proj-cta">View on GitHub ↗</span>
</div></a></div>

A macOS menu-bar app and desktop widget I built that turns iPhone Health data into a daily AI summary. An iPhone shortcut exports the numbers to iCloud Drive; the Mac app has MiniMax write a short summary that compares each number with your own 7-day average, and turns its advice into a checklist you tick off. It shows as a WidgetKit widget, a pinned card or a Dynamic Island that appears when you point at the notch, answers questions about your data, and lets friends who share an iCloud folder compete in a daily pet-battle game. Written in Swift and SwiftUI and built with the Command Line Tools alone.
