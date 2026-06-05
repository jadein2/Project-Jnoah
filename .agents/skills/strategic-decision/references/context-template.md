# Context Template

## Required Fields
These must be present before any analysis runs.
Pull from conversation first. Ask only if missing.

```
Task / Decision:
  What is the decision or problem to resolve?
  One sentence preferred. Be specific.

Goal:
  What outcome does this decision serve?
  Not what you want to do — what success looks like after.

Constraints:
  What cannot change? Time, money, team size, brand rules,
  existing commitments, non-negotiables.

Success Criteria:
  How will you know in 30–90 days that the right decision was made?
  Must be observable. "Feels right" is not a success criterion.
```

---

## Optional Fields
Pull from conversation context. Do not ask unless the decision type requires it.

```
Decision Type:
  Operational   — affects day-to-day execution (systems, processes, scheduling)
  Strategic     — affects direction, positioning, or resource allocation
  Creative      — affects content, brand, or audience experience

Audience Affected:
  Who bears the outcome? Clients, staff, followers, both brands?

Timeline:
  When does this need to be decided or executed?
  Short (this week), Medium (this month), Long (this quarter or beyond)

Resources Available:
  What tools, people, budget, or existing systems are confirmed available?

Things to Avoid:
  What approaches, tones, or directions are already ruled out?
```

---

## Decision Type Lens

Each type shifts how the framework weighs failure modes and validation.

**Operational**
- Premortem focuses on: execution gaps, delegation failure, capacity limits
- Validation model leans toward: capacity planning, break-even
- Tiers ranked by: speed to implement + reversibility

**Strategic**
- Premortem focuses on: assumption risk, market conditions, brand misalignment
- Validation model leans toward: weighted decision matrix, risk score
- Tiers ranked by: long-term leverage + compounding effect

**Creative**
- Premortem focuses on: audience misread, platform format risk, brand drift
- Validation model: skip math — use qualitative comparison only
- Tiers ranked by: audience signal strength + brand fit

---

## Minimum Viable Input

If a user gives a one-line decision question with no other context,
run Quick Mode with these defaults:

- Goal: assumed from decision framing
- Constraints: ask for the single most important one
- Success criteria: derived from goal
- Decision type: inferred from content
- State all assumptions clearly in Stage 1
