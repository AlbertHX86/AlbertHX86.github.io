---
permalink: /
title: "Welcome"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Master student at Stanford University. I graduated from the National University of Singapore (NUS) with Highest Distinction (First Class Honours).

My research focuses on **agents and multi-agent systems (MAS) for energy systems**. I also work on LLMs, vision-language models for photovoltaic inspection, renewable energy forecasting, energy storage and grid resilience.

I am currently an Investment Analyst intern at **BAI Capital**, focusing on AI and WAMs. Before that I was an AI Product Manager intern at **ByteDance**, working on AIME, ByteDance's largest internal multi-agent system, where the R&D pipeline features I built pushed internal developer MAU past 100K. Earlier, I was an ML / Product Manager intern at **CNeutral.io**, an NUS and A\*STAR incubated AI-for-finance startup, where I built an LLM-based ESG decision platform from 0 to 1. I was also a product manager intern at **LeetCode** (recommendation and feed ranking, 5x PV-CTR), and worked at **Roland Berger**, Ernst & Young Parthenon and Oliver Wyman on TMT, EV and energy projects.

Work experience
------
* <img src="/images/logos/bai.png" alt="BAI Capital" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**BAI Capital**, Investment Analyst Intern (Jun 2026 - Present)
* <img src="/images/logos/bytedance.png" alt="ByteDance" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**ByteDance**, AI Product Manager -- Devs and Ops (Mar 2026 - Jul 2026)
* <span style="display:inline-block;width:22px;margin-right:6px;"></span>**CNeutral.io**, ML / Product Manager Intern (Mar 2024 - Apr 2025)
* <img src="/images/logos/leetcode.png" alt="LeetCode" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**LeetCode**, Product Manager Intern (Apr 2023 - Aug 2023)
* <img src="/images/logos/rolandberger.png" alt="Roland Berger" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**Roland Berger**, PTA (Dec 2022 - Feb 2024)
* <img src="/images/logos/ey.png" alt="EY" style="height:22px;width:22px;vertical-align:middle;margin-right:6px;border-radius:4px;">**Ernst & Young Parthenon**, Consulting Intern (Apr 2022 - Aug 2022)

Projects
------
### [Video Generation Bench](https://2dn6bddf.qwenwork.host/)
An evaluation platform I designed and built for text-to-video (T2V) generation models. It pairs an 8-dimension scoring rubric with blind head-to-head Elo voting, so it shows both *where* a model is weak and *which* model people actually prefer.

- **Workflow:** choose a built-in prompt or upload a custom CSV / JSON benchmark, upload videos or generate them through an OpenAI-compatible API, then let an LLM judge agent score each video on a 1.0-5.0 scale. The judge cites evidence for each score and returns N/A instead of guessing when a dimension can't be judged.
- **Scoring:** human scores are normalized per rater and per dimension, then fused with AI-judge scores (0.4 human + 0.6 AI). Preferences are aggregated with Elo / Bradley-Terry.
- **Current study:** compares Seedance 2.0 Pro, Seedance 2.5, Kling 3.0, MiniMax-H3 and HappyHorse 1.1, with 10 human raters and 6 AI judges (Qwen and GLM-5V models).
- **Grounding:** builds on VBench, VBench-2.0, T2V-CompBench and Video Arena, and addresses gaps they leave in diagnosing failures and covering Chinese-language use cases.

[Try it live](https://2dn6bddf.qwenwork.host/)

Awards
------
IEEE PES Singapore Undergraduate Gold Medal

SP Group Engineering Award

Highest Distinction and Dean's List (AY22/23 S2, Top 5%)

Singapore MOE Full Scholarship

IEEE I&CPS Best Oral

Previous research experiences
------

### 2026: *Zero-shot and Training-free Photovoltaic Electroluminescence Inspection*
- Framework for defect localization and grouping; under review at **Solar Energy** (Elsevier), first author

### 2026: *Day-ahead PV Forecasting with a Physics-guided Transformer*
- Accepted by **IEEE APPEEC 2026**, first author: [read the manuscript](/publication/2026-08-01-pv-physics-guided-transformer)

### 2026: *Visual Token Pruning in Vision-Language Navigation*
- Semantic coverage and sparse transport; under review at **ICLR**, co-author

### Aug 2024 - Apr 2025: *Enhancing Grid Resilience through Spatial-Temporal Scheduling of Mobile Energy Storage Systems (MESS)*  
- Completed Final Year Project (FYP) under the supervision of [Prof. Dipti Srinivasan](https://cde.nus.edu.sg/ece/staff/dipti-srinivasan/) and Dr. Can Berk Saner.  
- Developed optimization framework for spatial-temporal pre and post desaster scheduling model of Mobile Energy Storage Systems (MESS) to enhance off-grid power grid resilience. Improve the off-grid microgrid from the perspective of several power system indicators.
- Awarded **Gold Medal for Best FYP** by IEEE PES Singapore Chapter; paper under review at IEEE Transactions on Sustainable Energy (**IEEE I&CPS Best Oral**)
- Conference paper published at **IEEE/IAS I&CPS Asia 2026**: [Spatio-Temporal Dispatch of Mobile Energy Storage Systems for Resilient Off-Grid Microgrids](https://doi.org/10.1109/ICPSASIA70813.2026.11692244)

### Jan 2025 - Jul 2025: *Marine Hydrokinetic Hybrid Renewable Energy System Design for Indonesia*  
- Modeled ocean energy potential in Indonesian straits, integrating tidal and wave energy for energy transition needs.  
- Proposed hybrid renewable energy system design combining marine hydrokinetic and conventional generation resources.  
- Published at **IEEE PSETC 2025 (Poster Presentation)**, co-first author: [View on IEEE Xplore](https://doi.org/10.1109/PSETC65535.2025.11239106)

### 2025: *Linearized Interval Power Flow in Distribution Grids Under DER Uncertainty*
- Fast affine arithmetic approach; published at **IEEE PES International Meeting 2026 (Oral)**, co-author: [View on IEEE Xplore](https://doi.org/10.1109/PESIM67009.2026.11438567)

### 2025: *LLM-driven Wind Turbine Icing Scenario Generation*
- Under review at IEEE Transactions on Instrumentation and Measurement, co-author
  
### Jun 2024 - Oct 2024: *Tsinghua University 3E Center*
- Worked as a research assistant for a short term research on MESS opportunities in China

### Feb 2024 - Oct 2024: *Research of Energy Policies and OSW Energy Technologies Market Prediction in APAC*

- Conducted research on offshore wind energy (OSW) policies and technology development trends in APAC, covering countries like ASEAN, China, Japan, and Korea.
- Utilized machine learning approaches to predict OSW energy market trends.
- Applied time-series forecasting techniques to analyze sustainable energy development in selected regions.
- Supervised by Prof. Elizabeth J. Wilson and Dr. Tyler A. Hansen at Dartmouth College.

### Oct 2023 - Jun 2024: *Integration of RNN to Predict Electricity Demand in EV Charging Grids*

- Performed data manipulation on ACN-Data from Caltech and developed a deep-clustering algorithm for user segmentation based on behavioral patterns.
- Developed and implemented RNN models (LSTM, GRU), and proposed a CNN-Bi-LSTM architecture improving prediction accuracy by 20%.
- Supervised by IEEE Fellow Prof. Dr. Dipti Srinivasan, Conference paper submitted.
- IW presentations

### Aug 2022 - Aug 2023: *Clustering Algorithm Improvement for Smart Grids*

- Developed and applied Bayesian clustering algorithms to EV charging session data to unveil distinct user behaviors.
- Improved Gaussian Mixture Model (GMM) performance, enhancing clustering accuracy and computational efficiency for TOU dynamic pricing.
- Supervised by A/P. Dr. Xiang Cheng at NUS.
- UROP presentations
