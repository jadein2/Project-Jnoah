---
name: strategic-decision
description: >
  Use this skill for any decision, tradeoff, or strategic question that has more than one
  viable path. Trigger when the user says "help me decide", "what's the better move",
  "should I", "best approach for", "I'm choosing between", "what's the right direction",
  or when they describe a problem with competing options, resource constraints, or
  uncertain outcomes. Also trigger when someone presents a business, operational, or
  creative dilemma without a clear next step — even if they don't frame it as a decision.
  This skill runs a layered analysis (baseline answer, failure scan, validation, tier
  ranking, final recommendation) to produce a specific, executable recommendation —
  not a list of considerations. Use Quick Mode for single-path or short-horizon decisions.
  Use Full Mode for multi-option, multi-month, capital, or cross-brand decisions.
  Do NOT trigger for content drafting, caption writing, formatting tasks, or
  single-step execution requests.
---

# Strategic Decision Framework

A layered decision analysis skill built for real operator decisions.
Produces a specific recommendation with implementation steps — not a framework dump.

---

## Before Running — Read These First

- `references/context-template.md` — input fields to collect before analysis
- `references/phase-modes.md` — Quick vs Full mode logic + Validation Gate
- `references/examples.md` — 3 worked cases from real brand decisions

---

## Trigger Conditions

**Fire this skill when:**
- User says: "help me decide", "what's the better move", "should I", "best approach for",
  "I'm choosing between", "what's the right direction", "which option", "what do I do"
- User describes a problem with two or more paths forward
- User presents a business, ops, or creative dilemma without a clear next step
- Decision involves resources, time, money, team, or brand impact

**Do NOT fire when:**
- Request is for content drafting, caption writing, or post formatting
- Task is single-step with no real alternatives (just do it)
- User is asking for information, not a decision
- Request is scheduling a specific item (not deciding a scheduling system)

---

## Input Collection

Before running analysis, check if the conversation already contains:
- The decision or task
- The goal it serves
- Known constraints

If any required field is missing, ask for it before proceeding.
Pull optional fields from conversation context — do not ask for what is already known.

→ See `references/context-template.md` for full field list

---

## Mode Selection

Select mode before running any stage.

**Quick Mode** — 3 stages: Baseline → Premortem → Recommendation
Use when: single decision, one primary variable, short horizon, low reversal cost

**Full Mode** — 5 stages: Baseline → Premortem → Validation → Tiers → Recommendation
Use when: multi-option, 3+ month horizon, capital or team involved,
two brands affected, or high reversal cost

→ See `references/phase-modes.md` for full mode logic and Validation Gate

---

## Output Rules

Apply before Stage 1 runs. These are hard ceilings, not preferences.

```
STAGE 1 — Baseline Answer
Ceiling:  150 words max
Format:   prose only — no bullets, no headers
Rule:     if it needs a table to explain, the answer is wrong

STAGE 2 — Premortem
Ceiling:  250 words max
Format:   bullet groups under 3–5 named failure categories
Rule:     each bullet is a distinct risk — not an elaboration of the one above it

STAGE 3 — Validation Model
Ceiling:  1 table OR 5 bullet comparisons — never both
Format:   table if 3+ variables, bullets if 2, skip entirely if 1
Rule:     if the model doesn't change the decision, cut it

STAGE 4 — Tiers
Ceiling:  4 tiers, 2–3 lines per tier max
Format:   bold tier label + one-line description + why it ranks there
Rule:     ranking only — not explanation, not justification

STAGE 5 — Final Recommendation
Ceiling:  400 words max
Format:   direction (1 sentence) → implementation (numbered, max 6 steps)
          → metrics (3 max) → risks (2 max) → next action (1 sentence)
Rule:     every line must move someone to do something
```

**Global rules:**
- No nested headers inside any stage
- Tables only in Stage 3
- Next action: one sentence, present tense, actionable this week
- Tone: direct, operator-level — not academic, not motivational

---

## Stage 1 — Baseline Answer

Give the most direct solution to the decision.

- State the answer in the first sentence
- No hedging, no "it depends" without immediately resolving it
- Do not reference the framework or methodology
- 150 words max, prose only

---

## Stage 2 — Critique and Premortem

Assume the solution failed in 6 months. Explain why.

Scan for:
- **Weak assumptions** — what the solution relies on being true
- **Bottlenecks** — where execution slows or stalls
- **Risks** — what external factors could break it
- **Edge cases** — scenarios the baseline answer doesn't cover
- **Missing resources** — what's needed that isn't confirmed available

Rules:
- 3–5 named failure categories minimum
- Each category gets 2–4 bullets max
- No solutions in this stage — only failure modes
- 250 words max

---

## Stage 3 — Validation Model (Full Mode Only)

Run the Validation Gate first.
→ See `references/phase-modes.md` — Validation Gate section

If gate passes: select the right-fit model from the approved list.
If gate fails: skip this stage. State the real deciding factor in one sentence.

Approved models:
- Weighted decision matrix — multi-option with clear variables
- Capacity planning / break-even — resource or time constrained
- Funnel math — revenue or lead-gen dependent
- Risk score — unknown or uneven risk across options
- Cost-benefit — cost vs. outcome is the primary unknown

Do not force a model. One sentence beats a six-column table.

---

## Stage 4 — Solution Hierarchy (Full Mode Only)

Rank options into four tiers.

- **Tier 1 — Safe and immediate:** low risk, executable now, proven logic
- **Tier 2 — Strategic and scalable:** higher complexity, longer payoff, right direction
- **Tier 3 — High-risk / high-upside:** unproven, resource-heavy, contingent on Tier 1 working
- **Avoid — Low-value distractions:** looks useful, isn't, explain why in one line

Rules:
- Every tier must have at least one entry
- 2–3 lines per tier max
- No justification paragraphs — ranking is the output

---

## Stage 5 — Final Recommendation

Give the strongest executable answer.

Structure (in this order):
1. **Direction** — one sentence stating the best path and why it wins
2. **Implementation** — numbered steps, max 6, specific and sequenced
3. **Metrics** — 3 max, each with a target or threshold
4. **Risks to monitor** — 2 max, named and specific
5. **Next action** — one sentence, this week, present tense

Rules:
- Every implementation step names what to do and what it produces
- Metrics must be measurable — not "improve retention" but "retention at Day 30 ≥ 80%"
- Next action must be executable without any dependencies
- 400 words max

---

## Quality Check Before Output

Before delivering, verify:
- [ ] Mode was selected and declared
- [ ] Stage ceilings were respected
- [ ] Validation Gate was run (Full Mode) or skipped with reason (Quick Mode)
- [ ] No generic language — every claim is specific to this decision
- [ ] Next action is executable this week with no dependencies
- [ ] Tone matches operator context — not motivational, not academic
