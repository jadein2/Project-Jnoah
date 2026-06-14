# Marketing Performance Engine

Assessment layer of the marketing system. Turns campaign results into the next campaign's starting advantage. Runs at campaign close (mandatory) and weekly for campaigns longer than 14 days.

Load order: marketing-engine.md → this file → /MEMORY/campaigns/campaign-performance.md + /MEMORY/marketing/strategy-state.md.

Research base: AARRR (Pirate Metrics) + Lean Analytics OMTM, adapted to an organic-first, pre-CRM coaching business.

---

## Activation definitions (locked per brand — do not change per campaign)

The single most important rule from AARRR: pick one activation event per brand and stop changing it.

| Brand | Acquisition | Activation | Retention | Referral | Revenue |
|---|---|---|---|---|---|
| **Restart Fitness PH** | new follower / profile visit | **DM "RESTART" sent or discovery call booked** | week-4 client adherence (ADHERE data) | client shares/refers | 6FIX or 90-Day enrollment |
| **URBN Athletics** | local page reach / inquiry | **trial session booked** | trial → member conversion; month-3 attendance | member brings a friend | membership / PT payment |
| **Coach Jap** | follower growth | TBD — blocked on brand file | — | — | — (no direct offers) |

---

## The AARRR sheet — produce at every campaign close

```
Campaign: [name]               Brand: [brand]
Duration: [dates]              CEP claimed: [from strategy-state]
Experiment(s): [EXP ids + verdicts]

ACQUISITION  — reach, new followers, profile visits     → [numbers + vs baseline]
ACTIVATION   — DMs "RESTART" / trials booked / calls    → [numbers + vs baseline]
RETENTION    — (if cohort/client campaign) week-4 data  → [or N/A]
REFERRAL     — shares, tags, client referrals           → [numbers]
REVENUE      — enrollments, payments traceable          → [numbers + vs goal]

Verdict vs success metric (from Phase 1 brief): HIT / PARTIAL / MISS
What worked: [1–3 lines]
What didn't: [1–3 lines]
Decision: [scale / repeat with change / retire angle]
```

Data sources, in order of reliability: ClickUp campaign list (what shipped) → posting-log (PUBLISHED/MISSED) → platform insights (Jap pastes or screenshots) → DM/call counts (Jap reports). Never invent numbers; mark unknowns as NOT TRACKED — a NOT TRACKED cell is itself a finding.

---

## OMTM protocol (Lean Analytics)

One Metric That Matters per brand. It is the *current bottleneck*, not the most flattering number.

1. **Set:** at quarterly review (strategy.md) or when the previous bottleneck is fixed. Record in strategy-state.md OMTM table with guardrail metrics and a target.
2. **Review:** monthly, or at every campaign close touching that brand. One question: did this move the OMTM?
3. **Change:** only when the bottleneck moves. Changing OMTM mid-quarter because a campaign flattered a different number is the failure mode this protocol exists to prevent.

Bottleneck diagnosis order (work down the funnel; fix the first broken stage):
reach → activation rate → show/close rate → onboarding completion → week-4 adherence → upgrade rate → referral rate.

---

## Gate 3 — the learning loop (assessment is not done until this is written)

At every close, route findings to their permanent homes:

| Finding | Goes to |
|---|---|
| AARRR sheet + verdict | /MEMORY/campaigns/campaign-performance.md |
| Segment card accuracy (did the audience respond as carded?) | strategy-state.md segment card score |
| CEP linkage result (did the campaign own its CEP?) | strategy-state.md CEP map |
| Winning/losing angles | strategy-state.md (win) / campaign-performance.md (loss) |
| Experiment verdicts | experiments-log.md |
| Universal lessons | lessons-learned.md via `log lesson` |
| One-line summary | decisions-log.md (campaign close protocol, campaign.md Phase 5) |

For major campaigns, finish with a postmortem (mortem skill, POST mode).

---

## Dashboard structure (manual now, Jnoah OS later)

Structured by management question, not by channel:

| Dashboard | Question | Lives where (today) |
|---|---|---|
| Portfolio | Are all three brands moving? | strategy-state.md OMTM table |
| Demand | Reach → Act → Convert per brand | AARRR sheets in campaign-performance.md |
| Sales | DMs → calls → closes | sales-engine data + registry movement |
| Retention | Adherence, cohort completion | ADHERE metrics (adhere-compliance.md) + 6fix-compliance-dashboard.md |
| Experiments | What's running, what did we decide? | experiments-log.md |

When the Jnoah OS web app gains write modules, these become live views — flag for the OS roadmap, do not build now.

---

## Quick commands

| You say | What happens |
|---|---|
| "assess [campaign]" | Full AARRR sheet + Gate 3 routing |
| "weekly performance check" | Mid-campaign pulse on active campaigns vs success metrics |
| "OMTM check" / "what's the bottleneck" | Read strategy-state OMTM table + funnel diagnosis |
| "performance history [brand]" | Read campaign-performance.md filtered to brand |

---

## Last updated
2026-06-12 — Built. Marketing engine unification (Option B), assessment layer. Activation definitions locked per brand.
