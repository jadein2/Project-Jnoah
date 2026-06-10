# mortem

**Auto-fires when:**
- **PRE mode** — "premortem [scope]" / "pre-mortem [scope]" / "pre-mortem audit" / "what could go wrong with [X]" / "stress-test [X] before we ship" / "find the cracks in [X]"
- **POST mode** — "postmortem [scope]" / "post-mortem [scope]" / "post-mortem audit" / "what worked and what didn't on [X]" / "retro on [X]" / "campaign post-mortem [X]"

**Works alongside:** any engine — this skill writes the audit, then routes any fix tasks to the relevant engine.

---

## What this skill does

Runs a structured retrospective on a defined scope and writes the output to `/MEMORY/`. Two modes, same skill, picked from the trigger phrase.

- **PRE mode** = imagine the project has already failed. Surface the cracks before they break.
- **POST mode** = the work has shipped or closed. Surface what worked, what didn't, what to change next.

Both modes produce a locked-format markdown file in `/MEMORY/`, append a one-line entry to `/MEMORY/decisions-log.md`, and update `STATE.md` if the audit changes priority.

---

## Mode selection

Read the trigger phrase. If unclear, ask:
> "PRE (before ship) or POST (after close)?"

Never run both modes in one pass. Pick one.

---

## Scope handling

Before running either mode, confirm scope. The scope can be:
- a phase (`Phase 12`, `Phase 1 dashboard build`)
- a campaign (`URBN June Rebrand Launch`, `Campaign 001`)
- a goal (`Website Launch`, `Social Media Pipeline`)
- a system area (`Sales engine`, `Client onboarding flow`)
- a one-off project (`6FIX Launch`, `Trainerize migration`)

If scope is ambiguous, ask one question. Don't guess.

---

## PRE mode — Pre-Mortem Audit format

Output file: `/MEMORY/pre-mortem-[slug].md`

```
# Pre-Mortem Audit — [Scope]
**Date:** [YYYY-MM-DD]
**Scope:** [what was audited]
**Auditor:** Claude
**Issues found:** [N]
**Triage:** [N] P1 · [N] P2 · [N] P3

---

## Summary

[2–4 sentences. Honest read. What's structurally sound vs. what will break. No motivational framing.]

---

## P1 — Critical. Fix before any production work proceeds.

### P1-1 — [Short title]

**Where:** [file path or system area]

**What's happening:**
[Concrete description of the failure mode.]

**Why it matters:**
[The downstream consequence in production terms — broken CTA, missed deadline, wrong data, etc.]

**Fix:**
[Specific action. Engine to route to if applicable.]

[Repeat for each P1.]

---

## P2 — Important. Fix this week.

[Same structure as P1.]

---

## P3 — Backlog. Fix when convenient.

[Same structure as P1.]

---

## Resolved during audit

[Anything fixed inline during the read — domain mismatch, stale reference, etc. One line each with the file changed.]
```

### PRE mode triage rules

- **P1** = breaks production now or on next ship. Broken CTAs, missing canonical files, data integrity gaps in active client work.
- **P2** = will break within 1–2 weeks if untouched. Stale references, naming drift, partial implementations.
- **P3** = cleanup. Cosmetic, eventual, doesn't block work.

Don't pad. If the system is sound, the audit should say so and list 2 P3 items. If it's broken, say that bluntly.

---

## POST mode — Post-Mortem Audit format

Output file: `/MEMORY/post-mortem-[slug].md`

```
# Post-Mortem Audit — [Scope]
**Date:** [YYYY-MM-DD]
**Scope:** [what was audited]
**Period:** [start date → end date]
**Auditor:** Claude

---

## What happened

[2–4 sentences. Plain summary of the work that ran. What was the goal, what was the actual result, what was the gap.]

---

## Wins

[Bulleted. Specific. Each item names the win + why it worked.]
- [Win] — [why it worked / what made it click]

---

## Misses

[Bulleted. Specific. Each item names the miss + the root cause, not the symptom.]
- [Miss] — [root cause]

---

## What to change next time

[Bulleted. Each item is an action, not a wish. Routes to an engine if applicable.]
- [Action] — [engine to route to / file to update]

---

## Metric snapshot

[If the scope had numeric targets, show baseline → result → gap. Otherwise skip this section.]

| Metric | Baseline | Target | Result | Gap |
|---|---|---|---|---|

---

## Carry-forward

[Anything that survives this scope and lands in the next one — assets, learnings, half-built work to finish.]
```

### POST mode rules

- "Wins" must be specific actions or decisions, not vibes. Bad: "Good energy." Good: "Pricing locked Jun 3 unlocked Canva production same day."
- "Misses" must name the root cause, not the symptom. Bad: "Posts were late." Good: "No Monday cover template existed — Canva failed weekly."
- "What to change" must be an action. Bad: "Be more consistent." Good: "Build Monday cover template in Canva — route to design engine."
- No motivational framing. No "great effort despite..." softeners.

---

## Output protocol

After writing the audit file:

1. Append one line to `/MEMORY/decisions-log.md`:
   - PRE: `YYYY-MM-DD — Pre-mortem audit run on [scope]. [N] issues found ([N]P1/[N]P2/[N]P3). File: /MEMORY/pre-mortem-[slug].md`
   - POST: `YYYY-MM-DD — Post-mortem audit run on [scope]. [N] wins, [N] misses. File: /MEMORY/post-mortem-[slug].md`

2. If any P1 (pre) or carry-forward (post) item affects an active goal or campaign in `STATE.md`, surface it in the response and offer to update STATE.md.

3. If any item routes to an engine, list the engine trigger phrase at the bottom of the response — do not auto-fire it. Jap fires the routing himself.

---

## What this skill does NOT do

- Does not fix the issues it surfaces — it routes them.
- Does not run two modes in one pass.
- Does not skip the triage in PRE mode or the root-cause in POST mode.
- Does not soften findings with motivational language.
- Does not invent metrics for the snapshot table — skip the section if no numeric targets exist.

---

## Last updated
2026-06-05 — Built. Two-mode skill (pre/post), auto-fires on audit triggers, writes to /MEMORY/, locked format, no auto-fix.
