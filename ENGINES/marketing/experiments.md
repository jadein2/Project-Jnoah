# Marketing Experiments Engine

Testing layer of the marketing system. Every campaign carries at least one hypothesis with a decision rule set before launch — so results produce decisions, not vibes.

Load order: marketing-engine.md → this file → /MEMORY/marketing/experiments-log.md.

Research base: Lean Analytics (OMTM, decision rules) + the framework-layer test mapping from /RESEARCH/marketing/deep-research-report-marketing.md.

---

## Core rules

1. **Decision rule before launch.** A test without a pre-committed "if X then Y" is content, not an experiment. Write the rule before the first asset ships.
2. **One test belongs to one framework layer.** A message test is not also an offer test. If you change the hook AND the offer, you learn nothing.
3. **Few, strong tests.** One hypothesis card minimum per campaign; rarely more than two running per brand at once. Ten weak tests teach less than one clean one.
4. **Organic reality check.** With current follower counts, most tests are directional, not statistically significant. The decision rule should reflect that — compare against the brand's own baseline (posting-log history), not against an imaginary control group.

---

## Test types by framework layer

| Layer | What you're testing | Example | Verdict metric |
|---|---|---|---|
| **Message** (STP / JTBD / CEP) | Which angle, hook, or job-story phrasing lands | Same offer, two hooks: "stop starting over" vs "event deadline" | saves, DM keyword triggers, profile taps per reach |
| **Offer** (7Ps) | Entry point, price frame, format | 6FIX presented as "6 weeks" vs "42 days of coaching" | DM→call rate, enrollment rate |
| **Channel/format** (RACE) | Where and how the same message performs | Same content: Reel vs carousel vs Story sequence | reach per effort-hour, DM volume |
| **Budget posture** (Binet & Field) | Brand vs activation mix over time | Month at 70/30 vs month at 50/50 C+V/Conversion | branded DM volume lag, follower velocity |
| **Retention/habit** (Flywheel / Hook) | Check-in formats, streaks, client engagement | New check-in prompt vs standard | check-in completion, week-4 adherence |

---

## Hypothesis card (template)

```
Experiment ID: EXP-[YYYY-MM]-[n]
Brand: [Restart / URBN / Coach Jap]
Campaign: [campaign name or "standalone"]
Layer: [message / offer / channel / budget / retention]
Hypothesis: We believe [change] will cause [effect] for [segment]
  because [reasoning from job story / CEP / past data].
Metric: [one primary metric]
Baseline: [current number from posting-log / campaign-performance]
Decision rule: If metric ≥ [X] by [date] → [adopt / scale].
               If < [X] → [revert / kill / iterate once].
Duration: [start → end; minimum 2 weeks for organic posts]
Status: PLANNED / RUNNING / DECIDED
```

Cards live in /MEMORY/marketing/experiments-log.md — append on creation, update on verdict.

---

## Workflow

1. **Create** — at campaign Stage 6 (or standalone). Fill the card completely. No blank decision rules.
2. **Run** — assets tagged with the experiment ID in their ClickUp task description so published assets map to the test.
3. **Decide** — on the end date, pull the metric, apply the rule mechanically. The rule decides, not the mood that day. Record verdict on the card.
4. **Route the learning** — a verdict isn't done until it's written somewhere permanent:
   - Winning angle → strategy-state.md (segment card "message" field or CEP creative angle)
   - Losing angle → campaign-performance.md "what didn't work"
   - Format/posture findings → strategy.md budget-balance notes
   - Universal copy lesson → lessons-learned.md via `log lesson`

This mirrors the self-learning loop: an experiment verdict is a correction from reality instead of from Jap.

---

## Quick commands

| You say | What happens |
|---|---|
| "set up test for [campaign]" | New hypothesis card, appended to experiments-log.md |
| "experiment status" | All RUNNING cards + days remaining |
| "decide EXP-[id]" | Pull metric, apply decision rule, record verdict, route learning |
| "what have we learned" | Read DECIDED cards, summarize adopted/killed by brand |

---

## Last updated
2026-06-12 — Built. Marketing engine unification (Option B), testing layer.
