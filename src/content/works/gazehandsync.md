---
title: "GazeHandSync: Mitigating Late-Trigger Errors for Seamless Gaze-Hand Interactions"
kind: "Research Project"
category: "Academic Project"
axis: "Seamless & Fluid"
theme: "Seamless Gaze-Hand Interaction"
badge: "ETRA 2025"
year: "2025"
order: 1
featured: true
image: "/image/gazehandsync.png"
venue: "ETRA '25: Proceedings of the 2025 Symposium on Eye Tracking Research and Applications"
authors: "Yeji Park, Jiwan Kim, and Ian Oakley"
tags: ["Virtual_Reality", "Gaze_Hand_Coordination_Errors", "User_Studies"]
links:
  - { label: "acm dl", href: "https://doi.org/10.1145/3715669.3723126" }
  - { label: "presentation", href: "https://www.figma.com/deck/1oJ5YNRFZyLiomPsAtEEhj/GazeHandSync-ETRA-PT?node-id=25-1670&t=rr57w4bMOtTDrLsH-1" }
summary: "Detecting and correcting late-trigger errors in gaze + pinch interaction to make gaze-based selection on HMDs feel seamless."
---

Gaze + pinch interaction—where gaze serves to point, and a hand action triggers selection—is widely adopted in commercial devices. However, target selection failures caused by gaze-hand coordination errors limit its effectiveness. We examine how task complexity impacts gaze-hand coordination errors and propose an algorithm to mitigate misalignments in input between these modalities. Specifically, we studied tasks with varying visual (perceptually cued targets versus search) and manual (thumb-index pinch vs multi-finger pinch) complexity. We find that late finger touches account for 86.57% of the errors. Furthermore, increased manual complexity is associated with elevated error rates. Based on these insights, we developed a classifier capable of detecting late-triggered errors with a mean accuracy of 97.31% (SD 0.18). By defining the gaze point as the most temporally proximate target fixation before a finger tap, our algorithm corrects the majority (94.61%) of eye-hand input alignment errors, thereby improving gaze-based interactions on HMDs.
