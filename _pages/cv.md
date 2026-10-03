---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* MS in Engineering, Stanford University, 2025-2027
  * Transformers and Large Language Models, Agentic Data Science for Engineering Systems
  
* B.Eng. in Electrical Engineering, National University of Singapore, 2021-2025
  * Power electronics, smart grids, grid technologies, machine learning, ODE/PDE, Engineering calculus, linear algebra, statistics/probability theory
  * Student Member of IEEE PES

* B.Eng. in General Engineering, University of Edinburgh, 2020-2021
  * Engineering design, Engineering Mathematics, Haskell, Computing logics and algorithms

Interests
======
**Agents and Multi-Agent Systems (MAS) for Energy Systems, Large Language Models, Power Systems, Renewable Energy Forecasting**

Work experience
======
* Apr 2026 - Jun 2026: AI Product Manager Intern, **ByteDance** (Beijing)
  * Joined **AIME**, ByteDance's largest internal multi-agent system; owned R&D MAS features across CI/CD, testing, preview and natural-language code changes
  * Agent architecture: surveyed agent structures, harnesses and container orchestration; re-architected an in-house Claw-style IM multi-agent product for faster, more stable operation
  * R&D pipeline integration: integrated internal cloud R&D pipelines (CI/CD, testing, preview) into the product, driving internal developer **MAU past 100K**
  * Platform innovation: led requirements and solution design for hooks, plugins, dynamic front-end UI and a model-queuing algorithm; iterated via user interviews and usage data
  * Evaluation framework: built in-house benchmarks and eval datasets with human-AI co-evaluation for per-scenario model selection and agent-architecture tuning
  * Launch & integration: drove launch with engineering through integration debugging, testing and gray release
* Mar 2024 - Apr 2025: ML / Product Manager Intern, **CNeutral.io** (Singapore)
  * AI-for-finance startup incubated by **NUS** and **A\*STAR**; built from 0 to 1 a decision platform on in-house fine-tuned LLMs that quantifies unstructured ESG indicators for portfolio construction
  * Built a RAG system on llama-parse and GPT-4o/GPT-4 for semantic parsing of market reports; applied system dynamics to turn qualitative indicators into quantitative data
  * Wrote PRDs and Figma prototypes; shipped a Django + React platform; iterated SFT and preference alignment to reach launch standards
  * Led product BD with universities, investors and sovereign funds; took part in **Pre-seed and Seed rounds** and entry into the **NUS tech incubator**
* Apr 2023 - Aug 2023: Product Manager Intern, **LeetCode** (Shanghai / Palo Alto)
  * Improved the homepage recommender with systems-engineering and ML methods, raising homepage and problem-page **PV-CTR 5x**
  * Rebuilt gravity feed ranking via system dynamics; ran parameter trials and A/B tests
  * Tuned new-user cold start and re-ranking strategies with engineering
  * Designed new consumer features from user research to Figma prototypes, PRDs, tracking and A/B-tested metrics
* Dec 2022 - Feb 2024: PTA (2023H2 / 2024H1), **Roland Berger** (Shanghai)
  * Three project teams in Beijing and Shanghai on TMT overseas expansion, strategic planning and operations consulting
  * NEV market desk research and overseas competitor teardowns (smart cockpit, battery, HMI); brand-marketing plays; expert interviews and cold calls
* Apr 2022 - Aug 2022: Consulting Intern, **Ernst & Young Parthenon**
  * Client company: A Chinese Top EV OEM
  * Successfully facilitated the company go abroad and profit at the target market

Publications
======
<ul>{% for post in site.publications reversed %}
  <li><b>{{ post.title }}</b>, <i>{{ post.venue }}</i>, {{ post.date | date: "%Y" }}. {{ post.excerpt | strip_html | strip_newlines }} {{ post.status }}.</li>
{% endfor %}</ul>

Skills
======
* Programming: C++, Python, Go, MATLAB, SQL
* Algorithms & Frameworks: Machine Learning, Reinforcement Learning, LangGraph, LangSmith, LangChain (top 5% on LinkedIn)

Startup experience
======
* 2023 ongoing: Product Manager, UI/UX designer, Progammer, AI Engineer, **CNeutral.io**
* 2022-2023: CTO, Cofounder, **YEAH: Young Elite Alliances in Hospitality**
 
Service and leadership
======
* 2024 - : Peer Tutor, **IEEE-HKN**
* 2024 - : Volunteer, **IEEE PES**
* 2024 - 2025: Community Activities for Seniors @ SG Cares
