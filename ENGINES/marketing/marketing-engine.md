# Marketing Engine (Master)

Single entry point for all marketing work across the portfolio (Restart Fitness PH, URBN Athletics, Coach Jap). Classifies the task, runs it through the marketing lifecycle, and routes to the right layer engine at each stage. This engine orchestrates — it does not write copy, design assets, or build calendars itself.

Load order: CLAUDE.md → ROUTER.md → this file → layer engine → brand file → skills.

**The suite (Option B architecture):**

| File | Layer | Question it answers |
|---|---|---|
| marketing-engine.md (this file) | Master | What kind of task is this, and what stage is it at? |
| strategy.md | Portfolio + market | Which brand, which segment, which job, which CEP? |
| campaign.md | Execution | How does this become a brief, calendar, and assets? |
| experiments.md | Testing | What hypothesis is this work testing, and what's the decision rule? |
| performance.md | Assessment | Did it work, and what does the next campaign inherit? |

State lives in /MEMORY/marketing/ (strategy-state.md, experiments-log.md) and /MEMORY/campaigns/campaign-performance.md.

---

## Task classifier — run on every marketing request

| Request looks like | Route to | Lifecycle entry |
|---|---|---|
| "new campaign" / "launch [offer]" / "promote [X]" | Full lifecycle below, Stage 1 | Stage 1 |
| "who is this for" / "positioning" / "which brand should own [X]" / "audience for [offer]" | strategy.md | Stage 2 only |
| "quarterly review" / "strategy review" / "rebalance" | strategy.md review protocol (marketing-strategist agent) | Stage 2 |
| "test [X]" / "A/B" / "which hook works" | experiments.md | Stage 6 |
| "how did [campaign] do" / "campaign results" / "AARRR" / "OMTM check" | performance.md (campaign-performance-analyst agent) | Stage 9 |
| One-off post, caption, single carousel | NOT this engine — direct to content/design engine per ROUTER.md | — |
| 6FIX cohort marketing | 6fix-marketing-strategy.md, with this engine's Stage 2 strategy check first | Stage 2 → 6FIX file |
| "morning briefing" / "campaign status" / posting ops | campaign.md Phase 5 | Stage 8 |

Rule unchanged from campaign.md: a campaign is the orchestrator of asset engines, never the other way around. And this master is the orchestrator of campaigns.

---

## The lifecycle — nine stages, three gates

### Stage 1 — RESEARCH
Check /RESEARCH/INDEX.md first. If the topic/audience exists at sufficient depth → CROSS-REF mode, zero new web fetches. If not, *suggest* research — it only runs on Jap's explicit request (vault research rule). **Gate 1:** Jap approves which findings feed forward.
Fires: research-engine.md, research-analyst skill.

### Stage 2 — STRATEGY CHECK
Before any brief: read /MEMORY/marketing/strategy-state.md and confirm —
1. Which brand owns this (brand role card)
2. Which segment card it targets (no card = build the card first)
3. Which job story it speaks to
4. Which CEP it claims (one per campaign; mark ownership in the CEP map)
5. Brand/activation posture — does this tip the quarter too far toward Conversion?

If the answer to any of these requires a real decision (new segment, brand conflict, budget shift) → strategic-decision skill before proceeding.
Fires: strategy.md.

### Stage 3 — PLAN
campaign.md Phases 1–3 (brief → thread map → calendar). The brief's "Target pain" and "Audience segment" fields must come from the Stage 2 segment card, not be invented fresh.
**Gate 2 (pre-execution):** surface the plan — what will be built, the hook/angle, brand, platform — one short paragraph, no draft content. Wait for Jap's confirmation.
For major campaigns (new offer, >14 days, or paid spend): run a premortem (mortem skill, PRE mode) before Gate 2.

### Stage 4 — DRAFT / PRODUCE
campaign.md Phase 4 handoff table. Every handoff passes the campaign brief paragraph as context.
Fires: social-post.md, blog-post.md, carousel.md, design-brief.md, post-routing.md + anti-ai-copywriter (authority) then brand-review polish pass, ui-ux-pro-max on visuals.

### Stage 5 — CROSS-REF
Before anything ships, check for collisions:
- /MEMORY/content-log.md — has this angle/topic run recently?
- /GOALS/posting-log.md — calendar conflicts with another active campaign?
- /MEMORY/campaigns/campaign-performance.md — did this angle already fail once?
- /MEMORY/decisions-log.md — any decision that contradicts this plan?
- strategy-state.md CEP map — is another campaign already claiming this CEP?
Surface conflicts; don't silently resolve them.

### Stage 6 — TEST SETUP
Every campaign carries at least one hypothesis card (experiments.md) with the decision rule set **before** launch. Minor campaigns: one card minimum. Major campaigns: one per framework layer being tested (message / offer / budget / retention).
Fires: experiments.md.

### Stage 7 — HANDOFF
| Handoff | Package | Destination |
|---|---|---|
| Design / creative team | design-brief.md output + asset specs + due dates | ClickUp campaign list tasks (assignee: team member) |
| Sales follow-through | campaign CTA + objection notes from job-story forces | sales-engine.md + offer-engine.md |
| Converted lead | standard pipeline | client-onboarding.md (→ 6FIX or 90-Day flow) |
| Website | landing page / page update spec | wix.md |
| Email/automation | sequence spec | 6fix-wix-email-automation.md or wix.md |

Handoff is complete only when the receiving engine/team has everything to execute without coming back for context.

### Stage 8 — IMPLEMENT
campaign.md Phase 5: ClickUp push, daily morning briefing, posting-log entries (PUBLISHED/MISSED) on every asset.

### Stage 9 — ASSESS
At campaign close (or weekly for long campaigns): performance.md protocol — AARRR sheet, experiment verdicts, OMTM check. **Gate 3 (learning loop):** assessment is not done until its findings are written back to strategy-state.md (segment card scores, CEP linkage, angle bans/keeps) and campaign-performance.md. Post-mortem via mortem skill for major campaigns.
Fires: performance.md, campaign-performance-analyst agent, mortem skill.

---

## Skill qualification map

| Skill | Stage(s) | Role |
|---|---|---|
| research-analyst | 1 | T1/T2/T3 source credibility on all inputs |
| strategic-decision | 2 | Positioning, budget, offer-ladder, brand-ownership decisions |
| anti-ai-copywriter | 4 | AUTHORITY on all copy; runs first, always |
| ui-ux-pro-max | 4, 7 | Visual asset direction and design handoff QA |
| mortem | 3 (PRE), 9 (POST) | Premortem majors before Gate 2; postmortem at close |
| goals | 8, 9 | Posting-log feed + active-goals metric updates |

## Agents (.claude/agents/ — Claude Code only)

| Agent | When to fire | Scope |
|---|---|---|
| marketing-strategist | Quarterly review; segment/CEP refresh; portfolio conflicts | Reads RESEARCH + MEMORY + BRANDS + logs; writes strategy-state.md |
| campaign-performance-analyst | Campaign close; "how did X do"; OMTM review | Reads posting-log, campaign-performance, ClickUp, experiments-log; writes AARRR sheet + recommendations |

Asset production never goes to an agent — it stays in the engine + skill flow where brand QA layers apply.

---

## Dependency map

| Dependency | Direction | What flows |
|---|---|---|
| research-engine.md + /RESEARCH/INDEX.md | in | evidence, CEP data, competitive intel (Gate 1) |
| /BRANDS/ files | in | voice, CTAs, locked rules — win all conflicts |
| /MEMORY/marketing/strategy-state.md | in/out | read Stage 2, written Stage 9 |
| campaign.md | down | execution Phases 1–5 |
| experiments.md + experiments-log.md | down | hypothesis cards, verdicts |
| performance.md | down | AARRR, OMTM, close protocol |
| content engines (social-post, blog-post, post-routing) | out | Stage 4 drafting |
| design engines (design-brief, carousel, design-engine) | out | Stage 4 + 7 creative handoff |
| sales-engine.md + offer-engine.md | out | Stage 7 sales handoff |
| client-onboarding.md | out | Stage 7 converted-lead handoff |
| wix.md | out | Stage 7 web handoff |
| /ENGINES/6fix/6fix-marketing-strategy.md | bidirectional | product campaigns route through Stage 2; cohort calendar feeds master calendar |
| goals engine + posting-log | out | Stage 8/9 metric feeds |
| ClickUp MCP | out | task push, briefings, campaign lists |
| GLOBAL/anti-ai-output-rules.md | overlay | all client-facing output |

---

## Quick commands

| You say | What fires |
|---|---|
| "marketing: [anything]" | This classifier |
| "new campaign — [objective]" | Stage 1 → full lifecycle |
| "strategy check [offer/campaign]" | Stage 2 |
| "quarterly marketing review" | strategy.md review protocol via marketing-strategist agent |
| "set up test for [campaign]" | Stage 6 / experiments.md |
| "assess [campaign]" / "campaign results [name]" | Stage 9 / performance.md |
| "marketing status" | Active campaigns + open experiments + current OMTMs |

---

## What this engine is not

- Not a copy or design engine — it routes to them.
- Not a replacement for campaign.md — campaign.md is its execution arm.
- Not auto-firing research — research remains manual-trigger only.
- Not a CRM. The research report's CRM schema and event map are parked in /RESEARCH/marketing/ for when a CRM build is actually commissioned (post-website launch).

---

## Last updated
2026-06-12 — Built. Marketing engine unification (Option B): master + strategy.md + experiments.md + performance.md; campaign.md retained as execution arm. Source: /RESEARCH/marketing/deep-research-report-marketing.md.
