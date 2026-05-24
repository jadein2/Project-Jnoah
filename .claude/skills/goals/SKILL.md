# goals

**Auto-fires when:** "morning brief" / "goal check" / "north star" / "daily brief" / "what do I do today" / session-start request for orientation.

**Works alongside:** `/ENGINES/goals/goals-engine.md` (setup and tracking) — this skill provides the daily output layer.

---

## What this skill does

Reads /GOALS/active-goals.md and all active goal files. Calculates current status for each goal.
Surfaces exactly what Jap should do today — not a status report, a work order.

The engine handles goal creation and maintenance. This skill handles daily operation.

---

## Morning brief format

Output exactly this structure. No preamble. No sign-off.
Hard limits are enforced — never exceed them.

```
MORNING BRIEF — [YYYY-MM-DD]

TODAY'S FOCUS
→ [One line. The single highest-leverage task available right now.]

─────────────────────────────────
DECISIONS NEEDED  [max 3 items]
[ ] [task] — [goal name] — ~[effort: quick / 30 min / 60 min+]

YOUR ACTIONS  [max 3 items]
[ ] [task] — [goal name] — ~[effort]

ROUTE TO CLAUDE  [max 2 items]
[ ] "[trigger phrase]" → [engine shortname]

─────────────────────────────────
THIS WEEK  [max 4 items]
[item — due date or "due soon"]

QUICK WINS  [max 3 items]
[ ] [task under 10 min] — [goal name]

─────────────────────────────────
GOAL STATUS
[Goal name]  [ON TRACK / AT RISK / BEHIND]  [key stat or next milestone]
[Goal name]  [ON TRACK / AT RISK / BEHIND]  [key stat or next milestone]
```

---

## Section rules

**TODAY'S FOCUS**
Apply the priority calculation from goals-engine.md. One line, specific action, not a vague direction.
- Good: "Approve homepage wireframe before sending to design engine"
- Bad: "Work on the website"

**DECISIONS NEEDED**
Tasks labeled `decision` in goal files that are due today or overdue. Show first — decisions unblock everything else.

**YOUR ACTIONS**
Tasks labeled `action` in goal files that are due today or overdue. Jap executes these himself.

**ROUTE TO CLAUDE**
Tasks labeled `route-to-claude` that are next in sequence. Show the exact trigger phrase from the Engine Routing table — not a description, the actual phrase to say. Max 2 items. If more exist, suppress and show next after these are done.

**THIS WEEK**
Milestones with due dates in the next 7 days. Tasks with due dates in the next 3 days that aren't already in the top sections. Max 4 items — if more exist, show the nearest 4 by date.

**QUICK WINS**
Tasks with effort tagged "quick" (~10 min) that are PENDING. Show only when they don't appear in other sections. Good for end-of-day momentum or short sessions.

**GOAL STATUS**
One line per active goal. Show all goals — do not suppress any.
- ON TRACK = green signal, show next milestone
- AT RISK = show what's at risk and when
- BEHIND = show what's behind and what it takes to catch up

---

## Status calculation by goal type

**Project goals**
Read milestones table. Count how many should be COMPLETE by today based on due dates vs. how many actually are.
- All on schedule → ON TRACK
- 1 behind → AT RISK
- 2+ behind, or deadline within 14 days with major milestones still PENDING → BEHIND

**Metric goals**
Read the Progress Log for the most recent metric entry.
Calculate: (current value - baseline) / (target - baseline) = % progress.
Calculate: days elapsed / total days = % time used.
- Progress % ≥ time % → ON TRACK
- Progress % is 70–99% of time % → AT RISK
- Progress % < 70% of time % → BEHIND
Surface: "At [X], need [Y] by [deadline]. Projected: [date at current pace]."

**Calendar goals**
Read /GOALS/posting-log.md. Count published vs. missed in the current week (Mon–Sun).
- 0–1 missed → ON TRACK
- 2 missed → AT RISK
- 3+ missed, or no post in 4 days → BEHIND
Surface: "[X] posts this week, [Y] missed."

---

## When active-goals.md is empty

If no goals are set, output:

```
MORNING BRIEF — [date]

No active goals set.

Say "set a goal [name]" to create your first one.
The goals engine will break it into milestones, daily tasks, and get it into ClickUp.
```

---

## When a goal has no tasks due today

Still show it in Goal Status. Do not invent tasks. If the next task is more than 3 days out,
show it in THIS WEEK only.

---

## What this skill does NOT do

- Does not create, update, or close goals — that is the engine's job
- Does not run ClickUp calls — the brief is read from local /GOALS/ files only
- Does not generate copy, programs, or designs
- Does not editorialize on goal choices or add encouragement

---

## Last updated
2026-05-21 — Phase 12. Built. Morning brief format, status calculations for all three goal types, hard section limits, Today's Focus priority logic.
