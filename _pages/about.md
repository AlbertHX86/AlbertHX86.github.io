---
permalink: /
title: "Welcome"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
.page__content h2.hp-sec{margin:2.6em 0 1em;padding:0 0 .45em;border-bottom:2px solid #e8edf2;font-size:1.45em;display:flex;align-items:center;gap:.55em}
.page__content h2.hp-sec i{display:inline-grid;place-items:center;width:1.9em;height:1.9em;border-radius:.55em;background:#eaf5f9;color:#3a8fae;font-size:.62em}
.page__content h2.hp-sec:first-of-type{margin-top:1.2em}
.hp-jump{display:flex;flex-wrap:wrap;gap:.5em;margin:1.4em 0 .4em;padding:0;list-style:none}
.hp-jump li{margin:0}
.hp-jump a{display:inline-block;padding:.3em .9em;border:1px solid #d6e3ea;border-radius:999px;font-size:.8em;text-decoration:none;color:#3a8fae;background:#f6fbfd}
.hp-jump a:hover{background:#eaf5f9}
.page__content ul.hp-awards{list-style:none;margin-left:0;padding-left:0}
.page__content ul.hp-awards li{margin:.35em 0}
.page__content ul.hp-awards i{color:#d4a017;width:1.4em}
.page__content h3.hp-item{font-size:1em;margin:1.6em 0 .4em}
.page__content{position:relative}
.hp-toc{display:none}
@media (min-width:1100px){
.hp-toc{display:block;position:absolute;top:0;bottom:0;left:calc(100% + 2.6em);width:190px}
.hp-jump{display:none}
}
.hp-toc__inner{position:sticky;top:100px}
.page__content .hp-toc__title{margin:0 0 .9em;font-size:.66em;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#9aa8b2}
.hp-toc__track{position:relative;border-left:2px solid #e8edf2}
.page__content ul.hp-toc__list{list-style:none;margin:0;padding:0}
.hp-toc__list li{margin:0}
.hp-toc__marker{position:absolute;left:-2px;top:0;width:2px;height:0;border-radius:2px;background:#3a8fae;transition:transform .3s ease,height .3s ease}
.page__content .hp-toc__list a{display:flex;align-items:center;gap:.65em;padding:.38em 0 .38em .9em;font-size:.78em;line-height:1.3;color:#7a8791;text-decoration:none;border:0;transition:color .2s}
.hp-toc__list a i{display:inline-grid;place-items:center;flex:none;width:1.85em;height:1.85em;border-radius:.5em;background:#f3f6f8;color:#9aa8b2;font-size:.8em;transition:background .2s,color .2s}
.hp-toc__list a:hover{color:#3a8fae}
.hp-toc__list a:hover i{color:#3a8fae}
.hp-toc__list a.is-active{color:#2f3d47;font-weight:600}
.hp-toc__list a.is-active i{background:#eaf5f9;color:#3a8fae}
.page__content a.hp-toc__top{display:inline-flex;align-items:center;gap:.45em;margin:1.2em 0 0 .9em;font-size:.72em;color:#9aa8b2;text-decoration:none;border:0}
.page__content a.hp-toc__top:hover{color:#3a8fae}
</style>
<div class="hp-toc">
<nav class="hp-toc__inner" aria-label="On this page">
<p class="hp-toc__title">On this page</p>
<div class="hp-toc__track">
<span class="hp-toc__marker"></span>
<ul class="hp-toc__list">
<li><a href="#about-me" data-sec="about-me"><i class="fas fa-user"></i><span>About me</span></a></li>
<li><a href="#work-experience" data-sec="work-experience"><i class="fas fa-briefcase"></i><span>Work experience</span></a></li>
<li><a href="#projects" data-sec="projects"><i class="fas fa-laptop-code"></i><span>Projects</span></a></li>
<li><a href="#research-experience" data-sec="research-experience"><i class="fas fa-flask"></i><span>Research experience</span></a></li>
<li><a href="#awards" data-sec="awards"><i class="fas fa-award"></i><span>Awards</span></a></li>
{% if site.visitor_map.id and site.visitor_map.id != "" %}<li><a href="#visitors" data-sec="visitors"><i class="fas fa-globe"></i><span>Visitors</span></a></li>{% endif %}
</ul>
</div>
<a class="hp-toc__top" href="#" data-top><i class="fas fa-arrow-up"></i>Back to top</a>
</nav>
</div>
## <i class="fas fa-user"></i> About me
{: .hp-sec #about-me}
I am a Master student at Stanford University. I graduated from the National University of Singapore (NUS) with Highest Distinction (First Class Honours).

My research focuses on **agents and multi-agent systems (MAS) for energy systems**. I also work on LLMs, vision-language models for photovoltaic inspection, renewable energy forecasting, energy storage and grid resilience.

I am currently an Investment Analyst intern at **BAI Capital**, focusing on AI and WAMs. Before that I was an AI Product Manager intern at **ByteDance**, working on AIME, ByteDance's largest internal multi-agent system, where the R&D pipeline features I built pushed internal developer MAU past 100K. Earlier, I was an ML / Product Manager intern at **CNeutral.io**, an NUS and A\*STAR incubated AI-for-finance startup, where I built an LLM-based ESG decision platform from 0 to 1. I was also a product manager intern at **LeetCode** (recommendation and feed ranking, 5x PV-CTR), and worked at **Roland Berger**, Ernst & Young Parthenon and Oliver Wyman on TMT, EV and energy projects.

<ul class="hp-jump">
<li><a href="#work-experience">Work experience</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#research-experience">Research experience</a></li>
<li><a href="#awards">Awards</a></li>
{% if site.visitor_map.id and site.visitor_map.id != "" %}<li><a href="#visitors">Visitors</a></li>{% endif %}
</ul>

## <i class="fas fa-briefcase"></i> Work experience
{: .hp-sec #work-experience}
* <img src="/images/logos/bai.png" alt="BAI Capital" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**BAI Capital**, Investment Analyst Intern (Jun 2026 - Present)
* <img src="/images/logos/bytedance.png" alt="ByteDance" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**ByteDance**, AI Product Manager -- Devs and Ops (Mar 2026 - Jul 2026)
* <span style="display:inline-block;width:22px;margin-right:6px;"></span>**CNeutral.io**, ML / Product Manager Intern (Mar 2024 - Apr 2025)
* <img src="/images/logos/leetcode.png" alt="LeetCode" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**LeetCode**, Product Manager Intern (Apr 2023 - Aug 2023)
* <img src="/images/logos/rolandberger.png" alt="Roland Berger" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**Roland Berger**, PTA (Dec 2022 - Feb 2024)
* <img src="/images/logos/ey.png" alt="EY" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**Ernst & Young Parthenon**, Consulting Intern (Apr 2022 - Aug 2022)

## <i class="fas fa-laptop-code"></i> Projects
{: .hp-sec #projects}
### [Video Generation Bench](https://2dn6bddf.qwenwork.host/)
<style>
.proj-win{border:1px solid #d9dce1;border-radius:12px;overflow:hidden;box-shadow:0 8px 28px rgba(0,0,0,.12);margin:12px 0 18px;background:#fff;transition:transform .2s,box-shadow .2s}
.proj-win:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,.18)}
.proj-bar{display:flex;align-items:center;gap:6px;padding:8px 12px;background:#f1f3f5;border-bottom:1px solid #e3e5e8}
.proj-bar i{width:11px;height:11px;border-radius:50%;display:inline-block}
.proj-url{flex:1;margin-left:10px;background:#fff;border-radius:6px;padding:3px 10px;font-size:12px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.proj-view{position:relative;aspect-ratio:16/10;overflow:hidden;background:#fff}
.proj-view img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;opacity:0;animation:projfade 12s infinite}
.proj-view img:nth-child(1){animation-delay:0s}
.proj-view img:nth-child(2){animation-delay:4s}
.proj-view img:nth-child(3){animation-delay:8s}
@keyframes projfade{0%{opacity:0}4%{opacity:1}33%{opacity:1}37%{opacity:0}100%{opacity:0}}
.proj-cta{position:absolute;right:12px;bottom:12px;background:rgba(0,0,0,.78);color:#fff;font-size:13px;padding:6px 12px;border-radius:999px}
.proj-win a,.proj-win a:hover{text-decoration:none;border:0}
</style>
<div class="proj-win"><a href="https://2dn6bddf.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">2dn6bddf.qwenwork.host · Video Generation Bench</span></div>
<div class="proj-view">
<img src="/images/projects/vgb-benchmark.jpg" alt="Video Generation Bench: benchmark prompt selection">
<img src="/images/projects/vgb-video.jpg" alt="Video Generation Bench: generated video samples">
<img src="/images/projects/vgb-elo.jpg" alt="Video Generation Bench: blind Elo comparison">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

An evaluation platform I designed and built for text-to-video (T2V) generation models. It pairs an 8-dimension scoring rubric with blind head-to-head Elo voting, so it shows both *where* a model is weak and *which* model people actually prefer.

### [Panel Intelligence](https://hmm5s69m.qwenwork.host/)
<div class="proj-win"><a href="https://hmm5s69m.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">hmm5s69m.qwenwork.host · Panel Intelligence</span></div>
<div class="proj-view">
<img src="/images/projects/pi-workbench.jpg" alt="Panel Intelligence: visual analysis workbench" style="animation:none;opacity:1;">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

A visual analysis workbench for equipment control panels. Upload a photo or take one with your camera, and a multimodal AI model reads the image directly, explaining each switch, indicator light and display, and flagging anything it can't read clearly. You can then ask follow-up questions about the panel and export the explanation as TXT or DOCX.

### [Same Reference, Different Geometry](https://gsssfeyu.qwenwork.host/)
<style>@keyframes projfade2{0%{opacity:0}5%{opacity:1}50%{opacity:1}55%{opacity:0}100%{opacity:0}}</style>
<div class="proj-win"><a href="https://gsssfeyu.qwenwork.host/" target="_blank" rel="noopener">
<div class="proj-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="proj-url">gsssfeyu.qwenwork.host · Same Reference, Different Geometry</span></div>
<div class="proj-view" style="background:#141517;">
<img src="/images/projects/srdg-hero.jpg" alt="Same Reference, Different Geometry: title" style="animation:projfade2 8s infinite;animation-delay:0s;">
<img src="/images/projects/srdg-compare.jpg" alt="Same Reference, Different Geometry: Meshy vs GPT-6 + Blender comparison" style="animation:projfade2 8s infinite;animation-delay:4s;">
<span class="proj-cta">Open live demo ↗</span>
</div></a></div>

An interactive comparison of two ways to turn a single reference image into a 3D model. For 9 objects, from the Mona Lisa and a wicker basket to soapy hands and a warship, it puts Meshy's one-shot model side by side with a model built by GPT-6 driving Blender and refined over several rounds of plain-language feedback. Every model can be rotated in the browser, and each round shows the prompt that produced it.

## <i class="fas fa-flask"></i> Research experience
{: .hp-sec #research-experience}

### 2026: *Zero-shot and Training-free Photovoltaic Electroluminescence Inspection*
{: .hp-item}
- Framework for defect localization and grouping; under review at **Solar Energy** (Elsevier), first author

### 2026: *Day-ahead PV Forecasting with a Physics-guided Transformer*
{: .hp-item}
- Accepted by **IEEE APPEEC 2026**, first author: [read the manuscript](/publication/2026-08-01-pv-physics-guided-transformer)

### 2026: *Visual Token Pruning in Vision-Language Navigation*
{: .hp-item}
- Semantic coverage and sparse transport; under review at **ICLR**, co-author

### Aug 2024 - Apr 2025: *Enhancing Grid Resilience through Spatial-Temporal Scheduling of Mobile Energy Storage Systems (MESS)*  
{: .hp-item}
- Completed Final Year Project (FYP) under the supervision of [Prof. Dipti Srinivasan](https://cde.nus.edu.sg/ece/staff/dipti-srinivasan/) and Dr. Can Berk Saner.  
- Developed optimization framework for spatial-temporal pre and post desaster scheduling model of Mobile Energy Storage Systems (MESS) to enhance off-grid power grid resilience. Improve the off-grid microgrid from the perspective of several power system indicators.
- Awarded **Gold Medal for Best FYP** by IEEE PES Singapore Chapter; paper under review at IEEE Transactions on Sustainable Energy (**IEEE I&CPS Best Oral**)
- Conference paper published at **IEEE/IAS I&CPS Asia 2026**: [Spatio-Temporal Dispatch of Mobile Energy Storage Systems for Resilient Off-Grid Microgrids](https://doi.org/10.1109/ICPSASIA70813.2026.11692244)

### Jan 2025 - Jul 2025: *Marine Hydrokinetic Hybrid Renewable Energy System Design for Indonesia*  
{: .hp-item}
- Modeled ocean energy potential in Indonesian straits, integrating tidal and wave energy for energy transition needs.  
- Proposed hybrid renewable energy system design combining marine hydrokinetic and conventional generation resources.  
- Published at **IEEE PSETC 2025 (Poster Presentation)**, co-first author: [View on IEEE Xplore](https://doi.org/10.1109/PSETC65535.2025.11239106)

### 2025: *Linearized Interval Power Flow in Distribution Grids Under DER Uncertainty*
{: .hp-item}
- Fast affine arithmetic approach; published at **IEEE PES International Meeting 2026 (Oral)**, co-author: [View on IEEE Xplore](https://doi.org/10.1109/PESIM67009.2026.11438567)

### 2025: *LLM-driven Wind Turbine Icing Scenario Generation*
{: .hp-item}
- Under review at IEEE Transactions on Instrumentation and Measurement, co-author
  
### Jun 2024 - Oct 2024: *Tsinghua University 3E Center*
{: .hp-item}
- Worked as a research assistant for a short term research on MESS opportunities in China

### Feb 2024 - Oct 2024: *Research of Energy Policies and OSW Energy Technologies Market Prediction in APAC*
{: .hp-item}

- Conducted research on offshore wind energy (OSW) policies and technology development trends in APAC, covering countries like ASEAN, China, Japan, and Korea.
- Utilized machine learning approaches to predict OSW energy market trends.
- Applied time-series forecasting techniques to analyze sustainable energy development in selected regions.
- Supervised by Prof. Elizabeth J. Wilson and Dr. Tyler A. Hansen at Dartmouth College.

### Oct 2023 - Jun 2024: *Integration of RNN to Predict Electricity Demand in EV Charging Grids*
{: .hp-item}

- Performed data manipulation on ACN-Data from Caltech and developed a deep-clustering algorithm for user segmentation based on behavioral patterns.
- Developed and implemented RNN models (LSTM, GRU), and proposed a CNN-Bi-LSTM architecture improving prediction accuracy by 20%.
- Supervised by IEEE Fellow Prof. Dr. Dipti Srinivasan, Conference paper submitted.
- IW presentations

### Aug 2022 - Aug 2023: *Clustering Algorithm Improvement for Smart Grids*
{: .hp-item}

- Developed and applied Bayesian clustering algorithms to EV charging session data to unveil distinct user behaviors.
- Improved Gaussian Mixture Model (GMM) performance, enhancing clustering accuracy and computational efficiency for TOU dynamic pricing.
- Supervised by A/P. Dr. Xiang Cheng at NUS.
- UROP presentations

## <i class="fas fa-award"></i> Awards
{: .hp-sec #awards}
* <i class="fas fa-trophy"></i> IEEE PES Singapore Undergraduate Gold Medal
* <i class="fas fa-trophy"></i> SP Group Engineering Award
* <i class="fas fa-trophy"></i> Highest Distinction and Dean's List (AY22/23 S2, Top 5%)
* <i class="fas fa-trophy"></i> Singapore MOE Full Scholarship
* <i class="fas fa-trophy"></i> IEEE I&CPS Best Oral
{: .hp-awards}
{% if site.visitor_map.id and site.visitor_map.id != "" %}

## <i class="fas fa-globe"></i> Visitors
{: .hp-sec #visitors}
{% include visitor-map.html %}
{% endif %}
<script>
(function(){
var toc=document.querySelector('.hp-toc');
if(!toc){return;}
var links=[].slice.call(toc.querySelectorAll('a[data-sec]'));
var secs=links.map(function(a){return document.getElementById(a.getAttribute('data-sec'));});
var marker=toc.querySelector('.hp-toc__marker');
var current=-1;
var ticking=false;
function update(){
ticking=false;
var line=window.innerHeight*0.3;
var idx=0;
for(var i=0;i<secs.length;i++){if(secs[i]&&secs[i].getBoundingClientRect().top<=line){idx=i;}}
if(window.innerHeight+window.pageYOffset>=document.documentElement.scrollHeight-4){idx=secs.length-1;}
if(idx===current&&marker.style.height){return;}
current=idx;
links.forEach(function(a,i){a.classList.toggle('is-active',i===idx);});
var li=links[idx].parentNode;
marker.style.height=li.offsetHeight+'px';
marker.style.transform='translateY('+li.offsetTop+'px)';
}
function onScroll(){if(!ticking){ticking=true;window.requestAnimationFrame(update);}}
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('resize',function(){marker.style.height='';onScroll();});
links.forEach(function(a,i){a.addEventListener('click',function(e){var s=secs[i];if(!s){return;}e.preventDefault();e.stopImmediatePropagation();window.scrollTo({top:s.getBoundingClientRect().top+window.pageYOffset-90,behavior:'smooth'});if(window.history&&history.replaceState){history.replaceState(null,'','#'+s.id);}});});
toc.querySelector('[data-top]').addEventListener('click',function(e){e.preventDefault();e.stopImmediatePropagation();window.scrollTo({top:0,behavior:'smooth'});});
update();
})();
</script>
