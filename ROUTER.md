# Router

Switchboard. Maps incoming tasks to the right engine, brand, and skill.

Always read the platform control file first — `CLAUDE.md` in Claude/Cowork, `AGENTS.md` in Codex — before consulting this file.

---

## How routing works

When Jap sends a request:

1. **Identify the task type** — design, copy, program, nutrition, blog, carousel, web, planning, client work, etc.
2. **Identify the brand** — URBN Athletics, Restart Fitness PH, both, or brand-agnostic (internal/strategic work)
3. **Load the matching engine file** — see table below
4. **Load the matching brand file** if brand-specific
5. **Note which skills should auto-fire** — see Skills column

If brand is ambiguous, ask. Don't guess.

---

## Routing table

| Task signal | Engine | Brand file | Skills that fire |
|---|---|---|---|
| "research [topic]" / "find data on [X]" / "what does the science say about [X]" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "competitive intel on [X]" / "what are competitors doing with [X]" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "I have an idea, research it" / "topic dump" / "pull everything on [X]" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "what's trending around [X]" / "content research" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "check what we have on [X]" / "cross-ref [topic]" | /ENGINES/research/research-engine.md → CROSS-REF mode | brand-agnostic | — |
| "make the brief" / "clean copy for [topic]" / "ready to route [topic]" | /ENGINES/research/research-engine.md → Brief generation | brand-agnostic | anti-ai-copywriter |
| "use [topic] for [output]" / "use the [topic] research for [engine]" / "take [finding] and build a [type]" | Load /RESEARCH/[topic-slug]/SELECTION.md if it exists, else ask Jap which findings to use → identify target engine → surface pre-execution plan → wait for Gate 2 confirmation before executing | brand-specific | engine-dependent |
| "design brief — [brand] — [asset]" / "visual concept" / "AI image prompt" | /ENGINES/design/design-brief.md | brand-specific | ui-ux-pro-max, anti-ai-copywriter |
| "design a carousel" / "create a post graphic" | /ENGINES/design/carousel.md + /ENGINES/design/design-brief.md (+ /ENGINES/design/design-engine.md for Restart Canva template IDs) | brand-specific | ui-ux-pro-max, anti-ai-copywriter |
| "design a poster / flyer / promo" | /ENGINES/design/design-brief.md | brand-specific | ui-ux-pro-max |
| "write a blog post" / "blog about X" | /ENGINES/content/blog-post.md | URBN Athletics (blog default; was Urban Strong) | anti-ai-copywriter |
| "write a social post" / "Threads / IG caption" | /ENGINES/content/social-post.md | brand-specific | anti-ai-copywriter |
| "build a program" / "training plan for [client]" | /ENGINES/coach-jap/training-program.md | brand-agnostic (coaching format) | coach-jap-programming-format |
| "nutrition plan for [client]" / "7-day meal plan" | /ENGINES/coach-jap/nutrition-plan.md | brand-agnostic | — |
| "warm-up / cooldown" / "WOD" | /ENGINES/coach-jap/training-program.md | brand-agnostic | coach-jap-programming-format |
| "DM reply" / "sales script" / "handle objection" / "close this lead" | /ENGINES/sales/sales-engine.md + /ENGINES/sales/offer-engine.md | brand-specific | anti-ai-copywriter |
| "marketing: [anything]" / any portfolio-level or multi-stage marketing task | /ENGINES/marketing/marketing-engine.md (master — classifies and routes) | brand-specific | engine-dependent |
| "new campaign" / "campaign brief" / "campaign for [objective]" | /ENGINES/marketing/marketing-engine.md → Stage 1–2 → /ENGINES/marketing/campaign.md | brand-specific | anti-ai-copywriter |
| "strategy check [offer/campaign]" / "who is this for" / "positioning for [X]" / "which brand owns [X]" | /ENGINES/marketing/strategy.md + /MEMORY/marketing/strategy-state.md | brand-specific | strategic-decision |
| "quarterly marketing review" / "strategy review" / "refresh segments / CEP map" | /ENGINES/marketing/strategy.md review protocol → marketing-strategist agent | brand-agnostic | strategic-decision |
| "set up test for [campaign]" / "A/B [X]" / "experiment" / "decide EXP-[id]" | /ENGINES/marketing/experiments.md + /MEMORY/marketing/experiments-log.md | brand-specific | — |
| "assess [campaign]" / "campaign results" / "AARRR" / "OMTM check" / "what's the bottleneck" | /ENGINES/marketing/performance.md → campaign-performance-analyst agent | brand-specific | — |
| "content thread map" / "map campaign to platforms" | /ENGINES/marketing/campaign.md | brand-specific | anti-ai-copywriter |
| "content calendar for [campaign]" / "posting schedule" | /ENGINES/marketing/campaign.md | brand-specific | — |
| "push campaign to ClickUp" / "push assets to ClickUp" | /ENGINES/marketing/campaign.md | brand-agnostic | — |
| "morning brief" / "goal check" / "north star" / "daily brief" / "what do I do today" | Goals skill → reads /GOALS/active-goals.md + all active goal files | brand-agnostic | goals |
| "set a goal [name]" / "new goal [name]" / "I want to [goal]" | /ENGINES/goals/goals-engine.md → Steps 1–6 | brand-agnostic | — |
| "update goal [name]" / "change [goal] deadline" / "reprioritize goals" | /ENGINES/goals/goals-engine.md → Update protocol | brand-agnostic | — |
| "review goal tasks [name]" | /ENGINES/goals/goals-engine.md → Review protocol | brand-agnostic | — |
| "mark [task] done" / "log [task] complete" / "done with [task]" | /ENGINES/goals/goals-engine.md → Mark done protocol | brand-agnostic | — |
| "log metric [value]" / "I have [N] clients now" | /ENGINES/goals/goals-engine.md → Metric log protocol | brand-agnostic | — |
| "close goal [name]" / "goal complete [name]" | /ENGINES/goals/goals-engine.md → Close protocol | brand-agnostic | — |
| "campaign status" / "what's active today" / "what campaigns are active" | /ENGINES/marketing/campaign.md | brand-agnostic | — |
| "morning briefing" | /ENGINES/marketing/campaign.md — NOTE: use "morning brief" for the full daily brief including goals | brand-agnostic | — |
| "close campaign" / "archive [campaign name]" | /ENGINES/marketing/campaign.md | brand-agnostic | — |
| "pricing" / "offer structure" / "which offer" / "what program fits" | /ENGINES/sales/offer-engine.md | brand-specific | — |
| "update the site" / "edit the website" / "publish blog to site" / "fix the CTA on" / "landing page for" | /ENGINES/web/wix.md | Restart Fitness PH | anti-ai-copywriter |
| "client profile" / "update client" | /MEMORY/clients/[name]/[name].md | brand-agnostic | — |
| "onboard client" / "new client pipeline" / "send agreement" | /ENGINES/client/client-onboarding.md | brand-agnostic | — |
| "add new client" / "create client profile" / "new client [name]" | /ENGINES/client/client-profile.md | brand-agnostic | — |
| **PASSIVE TRIGGER** — A person's name + transformation story / results / coaching outcome / "client" appears in ANY context (content, campaign, design, social media) → STOP and ask: "Is [name] an existing client? Should I create a client file?" → If yes: /ENGINES/client/client-profile.md. Do not proceed with the original task until this is resolved or explicitly waived. | /ENGINES/client/client-profile.md | brand-agnostic | — |
| "update client profile" / "log assessment" / "update metrics" | /ENGINES/client/client-profile.md | brand-agnostic | — |
| "discovery call" / "run a call" / "qualify [name]" | /ENGINES/client/discovery-call.md | brand-agnostic | — |
| "check-in for [client]" / "weekly feedback" / "bi-weekly assessment" | /ENGINES/client/check-in.md | brand-agnostic | — |
| "90-day check-in" / "ADHERE check-in" / "week [N] check-in for [90-day client]" | /ENGINES/client/check-in.md + /ENGINES/client/adhere-compliance.md | brand-agnostic | — |
| "ADHERE intake" / "ADHERE onboarding" / "compliance system" / "week 1–2 protocol" / "friction audit" | /ENGINES/client/adhere-compliance.md + /ENGINES/client/client-onboarding.md | brand-agnostic | — |
| "6FIX" / "6fix" / "6-week program" / "beginner program" / "6fix onboarding" / "6fix delivery" | /ENGINES/6fix/6fix-master-index.md → route to specific file per task (see index) | Restart Fitness PH | anti-ai-copywriter |
| "6fix training session" / "6fix phase 2 program" / "build 6fix session" | /ENGINES/6fix/6fix-phase2-program.md | Restart Fitness PH | coach-jap-programming-format |
| "6fix upgrade" / "upgrade pitch 6fix" / "move client from 6fix to 90-day" | /ENGINES/6fix/6fix-upgrade-sequence.md + /ENGINES/sales/sales-engine.md | Restart Fitness PH | anti-ai-copywriter |
| "6fix campaign" / "6fix content" / "6fix marketing" / "6fix launch" | /ENGINES/6fix/6fix-marketing-strategy.md + /ENGINES/marketing/campaign.md | Restart Fitness PH | anti-ai-copywriter |
| "6fix compliance" / "6fix check-in" / "6fix cohort review" | /ENGINES/6fix/6fix-compliance-dashboard.md + /ENGINES/client/adhere-compliance.md | Restart Fitness PH | — |
| "6fix wix page" / "6fix enrollment page" / "6fix email sequence" | /ENGINES/6fix/6fix-wix-email-automation.md + /ENGINES/web/wix.md | Restart Fitness PH | anti-ai-copywriter |
| "6fix design" / "6fix assets" / "6fix canva" | /ENGINES/6fix/6fix-design-system.md + /ENGINES/design/design-brief.md | Restart Fitness PH | ui-ux-pro-max |
| "6fix onboarding for [client]" / "6fix intake [client]" | /ENGINES/6fix/6fix-onboarding-system.md + /ENGINES/client/client-onboarding.md | Restart Fitness PH | — |
| "6fix trainerize messages" / "6fix auto-messages" | /ENGINES/6fix/6fix-trainerize-auto-messages.md + /ENGINES/client/handoff-trainerize.md | Restart Fitness PH | — |
| "client agreement" / "send the agreement" | /ENGINES/client/client-agreement.md | brand-agnostic | anti-ai-copywriter |
| "program only" / "program only flow" / "trainerize review" | /ENGINES/client/program-only-flow.md | brand-agnostic | — |
| "new intake for [name]" / "log check-in for [name]" / "log session data for [name]" | /ENGINES/client/handoff-trainerize.md | brand-agnostic | — |
| "premortem [scope]" / "pre-mortem [scope]" / "pre-mortem audit" / "what could go wrong with [X]" / "stress-test [X] before we ship" | mortem skill (PRE mode) → writes /MEMORY/pre-mortem-[slug].md | brand-agnostic | mortem |
| "postmortem [scope]" / "post-mortem [scope]" / "post-mortem audit" / "retro on [X]" / "what worked and what didn't on [X]" | mortem skill (POST mode) → writes /MEMORY/post-mortem-[slug].md | brand-agnostic | mortem |

---

## Brand routing cues

**Restart Fitness PH** signals:
- Mentions of "The Restart Fitness System," "The Restart System," "6FIX," "90-Day Coaching System," "DM RESTART"
- Online coaching, 90-day program, metabolic, transformation language
- Threads, IG, FB content for the online brand
- Editorial/cinematic design direction
- Standalone business — independent of URBN, never described as part of it
- → Load /BRANDS/restart-fitness-ph.md

**URBN Athletics** signals (rebrand of Urban Strong — LIVE brand file):
- Mentions of "Olongapo," "the gym," in-person training, FIT45, On-Ramp, URBN FIT, URBN HYBRID/PFT, group/semi-private
- Busy adults (28–55), beginners, coached gym, "Built to Move Better"
- A standalone track — NOT under Restart, and Restart is NOT under it
- → Load /BRANDS/URBN-athletics.md (canonical source: /Raw-Files/URBN Athletics/Main-Brand-Brain.md). Visual identity + public domain still pending — flag before producing final visual assets. /BRANDS/urban-strong.md is legacy reference only.

**Brand-agnostic** (no brand file needed):
- Internal planning, decisions about either business
- Programming format / nutrition format (these are coaching craft, not brand)
- Cross-brand strategy
- Client-specific work where the client identity is the focus, not the brand

---

## Skills auto-fire conditions

Skills load when their `description` field matches the task.

Platform folders:
- Codex uses `/.agents/skills/`
- Claude / Cowork uses `/.claude/skills/`

Skill names should stay mirrored across both folders:

- **ui-ux-pro-max** — any design output (carousel, poster, web layout, slide deck)
- **anti-ai-copywriter** — any client-facing copy (captions, blogs, DMs, web copy). AUTHORITY on voice QA, runs first. Follow with `marketing:brand-review` / brand-voice as a second polish pass; on conflict, anti-ai-copywriter wins.
- **coach-jap-programming-format** — any training program, WOD, warm-up, or workout written out
- **research-analyst** — any research task; auto-applies T1/T2/T3 credibility scoring and signal weighting
- **goals** — any morning brief, goal check, or daily orientation request; produces the structured daily work order
- **mortem** — pre-mortem (before ship) or post-mortem (after close) audits; two-mode skill, picks PRE or POST from the trigger phrase; writes to /MEMORY/

Skills run on top of brand files. Brand files win on conflict.

---

## Output destinations

Everything Jap should be able to find later goes in /OUTPUTS/. Folder per type:

- Blogs → /OUTPUTS/blog/YYYY-MM-DD-slug.md
- Carousels → /OUTPUTS/carousel/YYYY-MM-DD-brand-topic.md (copy + slide notes)
- Designs (HTML/SVG/specs) → /OUTPUTS/design/YYYY-MM-DD-brand-topic/
- Programs → /OUTPUTS/programs/[client-name]/[ClientName]-[CycleLabel]-Week[N].md — per training-program.md Output file format rule (client session files only — product/system engines go in /ENGINES/, not here)
- Nutrition → /OUTPUTS/nutrition/[client-name]/YYYY-MM-DD-plan.md
- Web copy → /OUTPUTS/web/page-name.md

After producing output, append a one-line entry to /MEMORY/decisions-log.md.

---

## Pre-execution gate

Fires before any engine runs on research-backed input (i.e., when Jap has approved findings at Gate 1 and directed them to an engine).

Before drafting anything, Claude must present:
- What it's about to build (format and output type)
- The specific hook, angle, or structure it will use
- The brand and target platform

One short paragraph. No draft content. Wait for Jap's confirmation before executing.

This gate does NOT fire for tasks with no research dependency (e.g., "write a check-in for [client]", "warm-up for today's class").

---

## When routing is unclear

Default behavior:
- Ambiguous brand → ask, don't assume
- Ambiguous engine → present 2 options with rationale
- Task doesn't match any engine → say so, propose where it should live

Never invent a new engine on the fly. If a task type recurs and has no home, flag it for Phase 3 expansion.

---

## Last updated
2026-06-14 — Programs output-destination row fixed (was a third, conflicting `YYYY-MM-DD-program-name.md` naming) — now matches training-program.md's `[ClientName]-[CycleLabel]-Week[N].md` convention. Resolves 2026-06-12 lessons-learned PENDING item.
2026-06-12 — Marketing engine unification (Option B). marketing-engine.md master + strategy.md + experiments.md + performance.md built; campaign.md repointed as execution arm. 6 routing rows added/updated. Two agents created (/.claude/agents/): marketing-strategist, campaign-performance-analyst. State files at /MEMORY/marketing/.
2026-06-09 — 6FIX engine moved from OUTPUTS/programs/ to /ENGINES/6fix/. 10 routing rows added. Output destinations note updated (client sessions only in /OUTPUTS/programs/).
2026-06-05 — Added `mortem` skill (two-mode: PRE/POST). Two routing rows added. Mirrored to /.claude/skills/mortem/ and /.agents/skills/mortem/.
2026-05-30 — URBN Athletics brand file went LIVE (/BRANDS/URBN-athletics.md, canonical /Raw-Files/URBN Athletics/Main-Brand-Brain.md). Hold lifted. Blog default → URBN. Removed Restart's line "Stop guessing. Follow a system." from URBN (decoupling). Visual identity + domain still pending.
2026-05-30 — Platform wording cleanup. Skills section now states both platform folders: Codex uses /.agents/skills/ and Claude/Cowork uses /.claude/skills/. Names should stay mirrored.
2026-05-29 — Governance pass. Brand cues updated for URBN Athletics rebrand (decoupled from Restart; URBN brand file pending, urban-strong.md reference-only). Blog default suspended → ASK. Voice QA layered (anti-ai-copywriter authority + brand-review). Control-file read note updated for platform check.
2026-05-29 — Passive client trigger added. Any mention of a person's name + transformation/results/coaching outcome in any context now fires a stop-and-ask before proceeding.
2026-05-28 — ADHERE routing rows added (2 rows). Brand routing cues corrected — "Restart Method" and "Restart Method 90" replaced with canonical names.
2026-05-21 — Phase 12. Goals system wired in. Morning brief trigger routes to goals skill. Campaign status row narrowed. Goals engine trigger rows added (7 rows). Goals skill added to Skills section.
2026-05-21 — Phase 11. Research → production handoff row added. Pre-execution gate added. Research is now an independent engine; never auto-fires before content tasks.
2026-05-21 — Phase 10. Wix engine row added (restartfitnessph.com). research-analyst skill added to Skills section.
2026-05-21 — Phase 9. DM reply/sales script row now points to sales-engine.md + offer-engine.md (interim flag removed). Pricing/offer structure row now points to offer-engine.md (was TBD Phase 3). Both engines live at /ENGINES/sales/.
2026-05-21 — Phase 8. Research engine routing rows added (6 rows). research-engine.md now live at /ENGINES/research/.
2026-05-20 — Phase 7. Campaign routing rows added (6 rows). campaign.md now live at /ENGINES/marketing/.
2026-05-19 — Phase 6 client engine added to routing table
2026-05-19 — Fixed: skill name corrected to ui-ux-pro-max (was ui-ux-design-pro); nutrition row updated to live engine path
