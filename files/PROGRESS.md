# Project Jnoah — Build Progress

Tracking the build phase-by-phase. Update after each session.

---

## Phase 1 — Foundation ✅ (Current)

The skeleton. CLAUDE, ROUTER, README, PROGRESS, folder structure, plus the global anti-AI ruleset.

- [x] Folder structure scaffolded
- [x] CLAUDE.md (identity + universal rules)
- [x] ROUTER.md (task → engine/brand/skill routing)
- [x] README.md (system overview + how to use)
- [x] PROGRESS.md (this file)
- [x] /GLOBAL/anti-ai-output-rules.md
- [x] /MEMORY/decisions-log.md (initialized)
- [x] /MEMORY/content-log.md (initialized)

**Outcome:** You can open the folder in Cowork and Claude has identity, knows where to route work, and has the anti-AI baseline. No actual production work happens yet — engines and brand files are empty.

---

## Phase 2 — Brand identity (in progress)

Lock down both brand files as the source of truth. Once these exist, every design/copy task pulls from them automatically.

- [x] /BRANDS/restart-fitness-ph.md — translated from RESTART-FITNESS-PH-SOURCE-OF-TRUTH.md v1.0 (locked)
- [x] CLAUDE.md updated to reflect locked brand naming (Restart Fitness System, not Restart Method)
- [x] GLOBAL/anti-ai-output-rules.md expanded with fitness-industry hype bans + Restart-specific bans
- [ ] /BRANDS/urban-strong.md — pending Jap's Urban Strong DNA doc upload

**Outcome so far:** Any Restart Fitness PH design or copy task can now pull a locked brand from the brand file — colors, fonts, voice, banned phrases, CTA system, photography direction, platform specs.

**Stashed for Phase 3 — content engine inputs already uploaded:**
- `restart_fitness_ph_content_brain_architecture.md` → becomes the basis of /ENGINES/content/ files (Conversion/Connection/Value framework, content pillars, post formulas, anti-AI writing protocol, DM logic)
- `social_media_content_design_ruleset.md` → becomes the basis of /ENGINES/design/carousel.md and /ENGINES/content/social-post.md (platform rules per post type, 2-second test, hook rules, caption length per platform)

**Input needed from Jap:** Urban Strong Fitness brand doc — confirm upload to proceed with the second brand file.

---

## Phase 3 — Priority engines

The three engines where 90% of your weekly work lives. Most of the raw material for these already lives in the two uploaded supporting docs from Phase 2.

- [ ] /ENGINES/coach-jap/training-program.md — programming format, RPE bias, knee-safe defaults, warm-up/cooldown structure, conditioning left-to-right reps-first
- [ ] /ENGINES/coach-jap/nutrition-plan.md — Aira 7-day plan format, batch-cook prep, grocery list with weights/pieces, QA checklist
- [ ] /ENGINES/design/carousel.md — slide-by-slide structure, hook slide rules, 2-second test, platform sizes (sourced from social_media_content_design_ruleset.md)
- [ ] /ENGINES/content/blog-post.md — hook → science → action → close, under 550 words, 5 persuasive bullets, Free Assessment CTA (Urban Strong default)
- [ ] /ENGINES/content/social-post.md — Conversion/Connection/Value classification + caption rules per platform (sourced from content_brain_architecture.md + social_media_ruleset.md)
- [ ] /ENGINES/content/post-routing.md — the Conversion/Connection/Value classification system as a dedicated routing file

**Outcome:** The three highest-volume workflows are codified. Every blog, carousel, program comes out structurally consistent.

---

## Phase 4 — Skills layer

Three Skills, each one a folder with SKILL.md inside `.claude/skills/`.

- [ ] ui-ux-design-pro/ — senior product-design judgment for any visual output
- [ ] anti-ai-copywriter/ — kill AI tells in any client-facing copy
- [ ] coach-jap-programming-format/ — auto-apply your programming grammar

**Outcome:** Cross-cutting craft fires on every relevant task without you specifying it.

---

## Phase 5 — Memory + first real use

Test the whole stack with one real task end-to-end.

- [ ] Run one real task in Cowork (suggested: Restart Fitness PH carousel)
- [ ] Confirm output respects brand + engine + skill
- [ ] Append entry to /MEMORY/decisions-log.md and /MEMORY/content-log.md
- [ ] Refine whatever didn't fire correctly

**Outcome:** Proof the system works. Anything that didn't fire gets fixed before expansion.

---

## Phase 6 — Expansion (later, only when needed)

Don't build these until a real task forces them.

- [ ] /ENGINES/marketing/ — campaigns, funnels, lead magnets
- [ ] /ENGINES/sales/ — DM scripts, pricing decks, objection handling
- [ ] /ENGINES/client/ — onboarding flow, check-in template, off-boarding
- [ ] /ENGINES/design/poster.md, web-layout.md
- [ ] Additional subagents in `.claude/agents/` (Claude Code)

---

## Decisions log

Append one line per session — what was built, what was decided.

- 2026-05-14 — Phase 1 scaffolded. Hybrid architecture confirmed. Cowork as primary container, Claude Code as secondary. Project name: Jnoah.
