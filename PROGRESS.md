# Project Jnoah — Build Progress

Tracking the build phase-by-phase. Update after each session.

**Current truth:** Read `STATE.md` first for what is active now. This file is the build history and may preserve older labels for context. Platform rule: Codex uses `AGENTS.md` + `/.agents/`; Claude/Cowork uses `CLAUDE.md` + `/.claude/`.

**Current brand status:** Urban Strong → **URBN Athletics**, brand file LIVE (`/BRANDS/URBN-athletics.md`, canonical `/Raw-Files/URBN Athletics/Main-Brand-Brain.md`). Standalone, decoupled from Restart. Still pending: final visual identity + public domain. `/BRANDS/urban-strong.md` is legacy reference only.

---

## Recent — June 2026 (post-phase build)

- **Operator UX:** `STATE.md` + `CHATS.md` + Jnoah Cockpit v1 (artifact) + `sync jnoah` reconcile routine (`SYNC.md`).
- **Governance:** platform-check (CLAUDE/AGENTS, `/.Codex/` path fix), domain lock, voice QA layering, scheduled-task merge (4 jobs → 2 recurring + 1 manual).
- **URBN:** brand LIVE + decoupled; June Rebrand Launch campaign created; URBN offers folded into `offer-engine.md`; `design-engine.md` de-orphaned.
- Read `STATE.md` for current active work; `decisions-log.md` for full history.

---

## Phase 1 — Foundation ✅

The skeleton. CLAUDE, ROUTER, README, PROGRESS, folder structure, plus the global anti-AI ruleset.

- [x] Folder structure scaffolded
- [x] CLAUDE.md / AGENTS.md control-file model (identity + universal rules)
- [x] ROUTER.md (task → engine/brand/skill routing)
- [x] README.md (system overview + how to use)
- [x] PROGRESS.md (this file)
- [x] /GLOBAL/anti-ai-output-rules.md
- [x] /MEMORY/decisions-log.md (initialized)
- [x] /MEMORY/content-log.md (initialized)

**Outcome:** You can open the folder in Cowork and Claude has identity, knows where to route work, and has the anti-AI baseline. No actual production work happens yet — engines and brand files are empty.

---

## Phase 2 — Brand identity ✅

Lock down both brand files as the source of truth. Once these exist, every design/copy task pulls from them automatically.

- [x] /BRANDS/restart-fitness-ph.md — translated from RESTART-FITNESS-PH-SOURCE-OF-TRUTH.md v1.0 (locked)
- [x] CLAUDE.md updated to reflect locked brand naming (Restart Fitness System, not Restart Method)
- [x] GLOBAL/anti-ai-output-rules.md expanded with fitness-industry hype bans + Restart-specific bans
- [x] /BRANDS/urban-strong.md — created 2026-05-17 from Business Audit Report + Business Plan v2. Positioning, voice, offers, CTA system, and audience locked. Visual identity (colors, fonts) flagged as open decision.

**Phase 2 complete.** Both brand files exist. All copy and design tasks can now pull from a locked source of truth.

**Current note:** Urban Strong has since become URBN Athletics. The old `/BRANDS/urban-strong.md` file is reference-only until a URBN brand file is built.

**Stashed for Phase 3 — content engine inputs needed:**
- `restart_fitness_ph_content_brain_architecture.md` → /ENGINES/content/ (C/C/V framework, post formulas, DM logic) — upload pending
- `social_media_content_design_ruleset.md` → /ENGINES/design/carousel.md + /ENGINES/content/social-post.md — upload pending

---

## Phase 3 — Priority engines

The three engines where 90% of your weekly work lives.

- [x] /ENGINES/coach-jap/training-program.md — built from COACH_JAP_SYSTEM_HANDOFF_v1.2.md. Format A/B, block order, notation locks, hard refusals, service types, client registry (2026-05-17)
- [x] /ENGINES/coach-jap/nutrition-plan.md — built from nutrition_programming_handoff_restart_fitness_ph.md. Mifflin-St Jeor, macro splits, 9-section output structure, QA checklist, PDF rules (2026-05-18)
- [x] /ENGINES/design/carousel.md — slide-by-slide structure, hook rules, 2-second test, platform sizes, brand-specific design direction, AI prompt template, QA checklist (2026-05-17)
- [x] /ENGINES/content/blog-post.md — hook → science → action → close, under 550 words, Free Assessment CTA, Urban Strong default, full QA checklist (2026-05-17)
- [x] /ENGINES/content/social-post.md — C/C/V routing, caption rules per platform, 4-layer prompt stack, DM flows, CTA logic, anti-AI protocol, QA checklists (2026-05-17)
- [x] /ENGINES/content/post-routing.md — C/C/V classification, 8 content pillars, routing logic, weekly framework, CTA guide, DM flows (2026-05-17)

**Also completed in Phase 3:**
- [x] /GLOBAL/anti-ai-output-rules.md — 10-rule Anti-AI Writing Protocol added from content_brain_architecture.md (2026-05-17)

**Phase 3: COMPLETE.** All engines built — content, design, and coach-jap.

**Outcome:** Every blog, carousel, social post, and design task now has a complete engine. Content routing, platform rules, anti-AI protocol, and DM flows are all codified.

---

## Phase 4 — Skills layer ✅

Skills are mirrored by platform: Codex uses `.agents/skills/`; Claude/Cowork uses `.claude/skills/`.

- [x] ui-ux-pro-max/ — senior product-design judgment for any visual output (built Phase 1)
- [x] anti-ai-copywriter/ — kills AI tells in any client-facing copy (built 2026-05-18)
- [x] coach-jap-programming-format/ — auto-applies programming grammar, notation locks, format selection, hard refusals (built 2026-05-18)

**Phase 4 complete.** All three skills are live and auto-firing.

---

## Phase 5 — Memory + first real use ✅

Test the whole stack with one real task end-to-end.

- [x] Real tasks run — content ideas (7 post concepts), 4 client programs across all service types
- [x] Output confirmed: Format A/B correct, notation locks held, anti-AI skill fired, brand rules followed
- [x] /MEMORY/decisions-log.md and /MEMORY/content-log.md — first entries written 2026-05-18
- [x] Client folder structure discovered as a gap mid-session and fixed — restructured to [name]/[name].md with references/ and check-ins/

**Phase 5 complete.** System is proven end-to-end. Memory is live.

---

## Phase 6 — Client Engine ✅

Full pipeline from first DM to cycle close. Five files. All built.

- [x] /ENGINES/client/client-onboarding.md — 9-stage pipeline, payment options, Trainerize setup, 12-item handoff checklist, pipeline status tags (2026-05-19)
- [x] /ENGINES/client/discovery-call.md — 5-section call framework with sub-probes, program presentation, internal qualification checklist, go/no-go close scripts (2026-05-19)
- [x] /ENGINES/client/check-in.md — weekly 5-field form, 4-tag decision system (CONTINUE/ADJUST/SWAP/ESCALATE), bi-weekly Program Only assessment add-on, missed check-in protocol (2026-05-19)
- [x] /ENGINES/client/client-agreement.md — one-page agreement template covering communication channel, 12-hour cancellation policy, no-show rule, check-in expectations, Program Only session logging standards (2026-05-19)
- [x] /ENGINES/client/program-only-flow.md — who it's for, onboarding call adjustments, program design rules (Format A, self-executable), bi-weekly assessment protocol, escalation triggers (2026-05-19)
- [x] ROUTER.md — updated with 5 new client engine routing entries

**Phase 6 complete.** Client pipeline is fully codified. Every client type (PT, Program Only) has a defined workflow from lead to cycle close.

---

## Phase 7 — Design + Marketing expansion (in progress)

- [x] /ENGINES/design/design-brief.md — single modular design engine for all asset types and brands (2026-05-19)
- [x] /BRANDS/restart-fitness-ph-design-brief.md — visual design shortcut for Restart PH (2026-05-19)
- [ ] /BRANDS/[new-brand]-design-brief.md — URBN Athletics on hold pending Jap's brand details
- [x] /Raw-Files/design-reference-raw/ — populated with logos, carousels, posts, story frames, Season 2 references, and 6FIX presentation assets
- [x] /ENGINES/marketing/campaign.md — campaign orchestrator built (brief → thread map → calendar → asset production → ClickUp push + close protocol). Post-mortem audit applied. (2026-05-20)
- [x] CAMPAIGNS folder created in ClickUp (ID: 90169722350) under RESTART FITNESS PH space. Asset-type lists reserved for evergreen content only.
- [ ] /ENGINES/design/poster.md — promo flyers, event posters (low priority — design-brief.md partially covers this)
- [ ] Additional subagents in `.agents/agents/` for Codex and `.claude/agents/` for Claude/Cowork, only when repeatable batch work needs them

---

## Phase 9 — Sales Engine + System Audit (complete)

Post-mortem audit (Phases 1–8) run, all P1 and P2 items resolved.

- [x] /MEMORY/post-mortem-phase8.md — full 15-issue audit, P1/P2/P3 triage, fix order table (2026-05-21)
- [x] /ENGINES/design/design-brief.md — P1 fix: design-reference-raw path corrected in 4 locations, integration section rewritten (2026-05-21)
- [x] /ENGINES/research/research-engine.md — P1 fix: step order corrected (folder creation before drop zone scan) (2026-05-21)
- [x] /ENGINES/marketing/campaign.md — P1 fix: research check step added before Phase 1 (2026-05-21)
- [x] /ENGINES/content/blog-post.md — P2 fixes: Urban Strong brand confirmation warning + research check + content-log entry (2026-05-21)
- [x] /ENGINES/content/social-post.md — P2 fixes: research check + content-log entry (2026-05-21)
- [x] /ENGINES/design/carousel.md — P2 fix: content-log entry added to output destination (2026-05-21)
- [x] HOW-TO-USE.md — P2 fix: Sections 12–13 fully rewritten to reflect all 8 phases (2026-05-21)
- [x] /ENGINES/sales/offer-engine.md — P2 build: all 5 service tiers, pricing, add-ons, selection logic, upgrade paths, operating rules, revenue model (2026-05-21)
- [x] /ENGINES/sales/sales-engine.md — P2 build: DM flows (4 stages), positioning templates per offer, 8 objection scripts, tone rules, discovery-call handoff (2026-05-21)
- [x] ROUTER.md — P2 fix: DM row now points to sales-engine.md (interim tag removed), pricing row now points to offer-engine.md (was TBD) (2026-05-21)
- [x] /MEMORY/clients/registry.md — P1 fix: Jerome Foo added (2026-05-21)

**P3 items — all completed in Phase 10:**
- [x] research-analyst skill mirrored in both platform folders — T1/T2/T3 scoring rules, signal weighting hierarchy, source credibility table, gap detection format, drop zone evaluation (2026-05-21)
- [x] /ENGINES/web/wix.md — Wix site editing workflow for restartfitnessph.com. 5 task types: blog publish, page copy edit, CTA update, program page, campaign landing page (2026-05-21)
- [x] /MEMORY/campaigns/campaign-performance.md — initialized. Log format defined. (2026-05-21)
- [x] CLAUDE.md — research rule added to load order, engine list updated, skills list updated (2026-05-21)

---

## Phase 10 — Skills + Web + Logs (complete)

Final P3 items. System is now fully wired across all active engines, skills, and memory files.

- [x] research-analyst skill mirrored in both platform folders — T1/T2/T3 credibility scoring, signal weighting hierarchy, source credibility table, drop zone evaluation rules, gap detection format, output QA checklist (2026-05-21)
- [x] /ENGINES/web/wix.md — Wix site workflow for restartfitnessph.com. 5 task types: blog publish, page copy edit, CTA update, program page, campaign landing page. MCP tools documented. (2026-05-21)
- [x] /MEMORY/campaigns/campaign-performance.md — running log for campaign results. Log format with target vs. actual, what worked/didn't, and decision note. (2026-05-21)
- [x] CLAUDE.md — research rule added to load order section, engine list updated (all 10 engines now listed), skills list updated (research-analyst added). (2026-05-21)
- [x] ROUTER.md — Wix engine row added, research-analyst added to Skills auto-fire section. (2026-05-21)

**System status after Phase 10:**

| Area | Engine / File | Status |
|---|---|---|
| Research | research-engine.md + research-analyst skill | ✅ Live |
| Content | blog-post.md, social-post.md, post-routing.md | ✅ Live |
| Design | carousel.md, design-brief.md | ✅ Live |
| Coaching | training-program.md, nutrition-plan.md | ✅ Live |
| Client | 7 client engines (onboarding → close) | ✅ Live |
| Marketing | campaign.md | ✅ Live |
| Sales | offer-engine.md, sales-engine.md | ✅ Live |
| Web | wix.md (restartfitnessph.com) | ✅ Live |
| Memory | decisions-log, content-log, campaign-performance, client registry | ✅ Live |
| Brands | restart-fitness-ph.md (locked) · urban-strong.md (⚠️ under review) | ✅/⚠️ |

**Remaining open items (no engine needed — awaiting external decisions):**
- URBN Athletics brand details — blocked on Jap's input
- poster.md — low priority, design-brief.md partially covers this use case

---

## Phase 8 — Research Engine (complete)

The upstream data layer. Feeds all other engines with evidence-based research before production begins.

- [x] /RESEARCH/ folder scaffolded — INDEX.md, _template/ with RAW/ drop zone structure (2026-05-21)
- [x] /ENGINES/research/research-engine.md — 5-layer engine, depth prompt, drop zone scan, INDEX read/write, triage tag system [T1/T2/T3], token-saving rules, engine handoff format (2026-05-21)
- [x] ROUTER.md — 6 new research routing rows added (2026-05-21)
- [x] research-analyst skill — signal weighting, source credibility scoring (completed in Phase 9/10)

**Folder structure per topic:**
```
/RESEARCH/[topic-slug]/
├── RAW/
│   ├── [topic-slug]-research.md   ← engine raw output
│   ├── links.txt                  ← drop URLs here
│   └── [any dropped files]        ← PDFs, NotebookLM exports, notes
└── [topic-slug]-BRIEF.md          ← clean copy, on demand only
```

**Token-saving system:** INDEX.md checked before every run. Existing layers skipped. Drop zone scanned before web research. CROSS-REF mode = zero web fetches.

---

## Decisions log

Append one line per session — what was built, what was decided.

- 2026-05-21 — Phase 10 complete. P3 batch: research-analyst skill, Wix engine (restartfitnessph.com), campaign performance log, CLAUDE.md research rule + engine list update.
- 2026-05-21 — Phase 9 complete. Full system audit (15 issues). All P1 and P2 fixes applied. Sales engine built (/ENGINES/sales/). Offer engine built. ROUTER.md fully wired.
- 2026-05-21 — Phase 8 complete. Research engine built. /RESEARCH/ folder scaffolded with per-topic repo structure. 6 routing rows added. Token-saving + drop zone system designed.
- 2026-05-18 — Phases 4 and 5 complete. Skills built (anti-ai-copywriter, coach-jap-programming-format), nutrition engine built, client folder structure redesigned to [name]/[name].md + references/ + check-ins/, memory system activated.
- 2026-05-14 — Phase 1 scaffolded. Hybrid architecture confirmed. Cowork as primary container, Claude Code as secondary. Project name: Jnoah.
