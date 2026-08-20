---
title: "ExPerT: Personalizing LLM Responses to Users' Domain Expertise via Query-Wise Semantic and Keystroke Behavioral Cues"
kind: "Research Project"
category: "Academic Project"
axis: "User-Context-Attuned"
theme: "LLM Personalization"
badge: "ACL 2026"
year: "2026"
order: 0
featured: true
image: "/image/EXPERT_TN.png"
venue: "ACL’26: Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Main, Long)"
authors: "Yeji Park, Jiwon Tark, and Taesik Gong"
tags: ["LLM_Personalization", "User_Expertise", "User_Behavior_Analysis"]
links:
  - { label: "DOI", href: "https://aclanthology.org/2026.acl-long.959/" }
summary: "ExPerT is a query-level LLM personalization framework that infers users' domain expertise from semantic and keystroke behavioral signals, and subsequently adapts the LLM to generate expertise-aligned responses."
---

Large language models (LLMs) are increasingly used by end users, yet existing personalization methods relying on static profiles or text-only signals fail to capture query-specific expertise variation. We present ExPerT, a query-wise personalization framework that adapts LLM responses to users' query domain expertise by combining semantic and behavioral cues. ExPerT consists of two key components: (i) a semantic–behavioral expertise inference module that jointly interprets query text and keystroke dynamics via in-context LLM prompting, and (ii) an expertise-conditioned response generation that adapts the level of detail, terminology, and conceptual complexity. Our user study with 40 participants and 1270 queries demonstrated that ExPerT reduced expertise inference error by 65.7% compared to the strongest baseline (MAE = 0.398 vs. 1.162) and improved response satisfaction by 17.52% (from 3.71 to 4.36) on a 5‑point Likert scale.
 