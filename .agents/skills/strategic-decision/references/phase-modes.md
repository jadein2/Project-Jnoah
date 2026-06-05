# Phase Modes + Validation Gate

---

## Mode Selection Logic

Run this before any stage begins. Declare the selected mode at the top of the output.

```
QUICK MODE — 3 stages
Trigger when ALL of the following are true:
  - Decision has one primary variable
  - Horizon is short (this week to this month)
  - Reversal cost is low (easy to undo or adjust)
  - Only one brand or context is affected
  - No capital allocation or team structure involved

Stages: Baseline → Premortem → Recommendation
Skip:   Validation Model, Tier Hierarchy

FULL MODE — 5 stages
Trigger when ANY of the following are true:
  - Decision has 3 or more competing options
  - Horizon is 3+ months
  - Capital, budget, or team structure is involved
  - Both brands (Urban Strong + Restart) are affected
  - Reversal cost is high (hard to undo, affects clients or public)
  - Decision creates a system or process that others will follow

Stages: Baseline → Premortem → Validation → Tiers → Recommendation
```

**Default:** When uncertain, run Full Mode. The extra stages take 90 seconds.
The cost of under-analysis on a high-stakes decision is higher than the cost of
over-analysis on a low-stakes one.

---

## Validation Gate

Run before selecting any validation model in Stage 3.
This gate exists because most decisions do not benefit from quantification.
Forcing a model onto a non-quantifiable decision produces false confidence.

```
GATE QUESTION 1
Does this decision have 3 or more variables that trade off against each other?

  No  → Skip the model entirely.
        Go straight to Tier ranking.
        State the deciding factor in one plain sentence.

  Yes → Continue to Gate Question 2.

---

GATE QUESTION 2
Would a number make this decision clearer — or just more defensible?

  Clearer     → Use the model. The math changes the answer.
  Defensible  → Skip the model.
                State the real deciding factor plainly:
                "The primary variable is [X]. No model needed."

  Continue to Gate Question 3 if unclear.

---

GATE QUESTION 3
Is the primary variable emotional, brand-based, or relationship-based?

  Yes → Skip the model entirely.
        Flag it explicitly:
        "Math won't resolve this — the real deciding factor is [X]."

  No  → Use the model. Proceed to model selection.
```

---

## Model Selection

Only reached after passing the Validation Gate.
Select the single best-fit model. Never combine two models.

```
Decision has multiple options with scoreable variables
→ Weighted decision matrix

Decision is constrained by time, capacity, or budget
→ Capacity planning or break-even analysis

Decision is revenue or lead-gen dependent
→ Funnel math

Decision has uneven or unknown risk across options
→ Risk score

Primary unknown is cost vs. outcome
→ Cost-benefit analysis

None of the above apply clearly
→ Skip. State the deciding factor in prose.
```

---

## Mode Behavior Rules

**Quick Mode — what changes:**
- Stage 1 ceiling loosens slightly: up to 200 words if decision needs framing
- Stage 2 premortem: 3 failure categories minimum (not 5)
- Stage 5 recommendation: implementation steps drop to max 4
- No Validation Gate, no Tier Hierarchy
- Faster, tighter, still specific

**Full Mode — what stays constant regardless of complexity:**
- Validation Gate always runs before Stage 3
- Tier Hierarchy always has exactly 4 tiers, including Avoid
- Next action is always present tense, this week, no dependencies
- Output ceilings never expand even for complex decisions

---

## Anti-Patterns to Avoid

These are the failure modes observed in the test runs. Guard against them.

```
Running Full Mode on a one-variable decision
→ Adds noise, no value. Use Quick Mode.

Skipping the Validation Gate and defaulting to a matrix
→ Produces impressive-looking output that doesn't change the decision.

Writing the Premortem as a risk register
→ It's a failure story, not a list of concerns. Start from failure, work backward.

Letting Stage 4 Tiers become a pros/cons list
→ Tiers are ranked options. Each one is a path, not a feature.

Making the Next Action dependent on something else first
→ If it can't be done this week alone, it's not the next action.

Using a table in Stage 5
→ Tables belong in Stage 3 only. Stage 5 is prose and numbered steps.
```
