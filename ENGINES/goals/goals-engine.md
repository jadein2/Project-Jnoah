# Goals Engine
**Path:** /ENGINES/goals/goals-engine.md
**Phase:** 12
**Built:** 2026-05-21
**Feeds:** Morning brief (Goals skill) · ClickUp · All production engines

---

## What this engine does

Creates, tracks, and closes goals. Breaks each goal into milestones and daily-sized tasks.
Pushes tasks to ClickUp with due dates. Updates /GOALS/ files so the morning brief always has
accurate data. Routes to production engines when work needs to happen.

This engine does not produce content, programs, or designs. It produces structure and tasks.
The craft happens in the downstream engines.

---

## Trigger signals

| You say | What runs |
|---|---|
| "set a goal [name]" / "new goal [name]" / "I want to [goal]" | Steps 1–6 — full goal setup |
| "update goal [name]" / "change [goal] deadline" / "reprioritize goals" | Update protocol |
| "review goal tasks [name]" | Task review step — prune, add, resequence |
| "mark [task] done" / "log [task] complete" / "done with [task]" | Mark done protocol |
| "log metric [value]" / "I have [N] clients now" / "[metric] is now [value]" | Metric log protocol |
| "close goal [name]" / "goal complete [name]" / "archive [name]" | Close protocol |

---

## Goal types

**Project** — completion-based. Success = all milestones done by deadline.
Status calculated from: milestones completed vs. planned by this date.
Examples: website launch, program build, offer redesign.

**Metric** — number-based. Success = target number reached by deadline.
Status calculated from: current value vs. target, projected against time remaining.
Examples: client base +40%, 1000 IG followers, 5 new sign-ups per month.

**Calendar** — adherence-based. Success = posting schedule maintained consistently.
Status calculated from: posts published vs. scheduled per week (from /GOALS/posting-log.md).
Examples: posting calendar, weekly email, daily stories.

---

## Status definitions

| Status | Project | Metric | Calendar |
|---|---|---|---|
| ON TRACK | ≥80% of planned milestones done to date | Current rate reaches target by deadline | ≤1 missed post per week |
| AT RISK | 1 milestone behind schedule | Rate is 70–99% of what's needed | 2 missed posts per week |
| BEHIND | 2+ milestones behind, or <2 weeks to deadline with major milestones open | Rate is <70% of what's needed | 3+ missed posts per week, or no posts in 4 days |
| COMPLETE | All milestones done | Target reached | — |

---

## Step 1 — Define the goal

Ask Jap for any missing fields before proceeding:

- Goal name (clear, outcome-oriented — not "work on website," but "Website Launch")
- Type: project / metric / calendar
- Baseline: where things stand today
- Target: what success looks like, specific and measurable
- Deadline: hard date
- Priority: 1 (highest), 2, or 3 — how does this rank against other active goals?

If any field is ambiguous, ask. Do not assume a deadline or target.

---

## Step 2 — Break into milestones

Propose 3–6 milestones that represent meaningful stages toward the goal.
Each milestone should be completable in 3–14 days.

Rules:
- Milestones must be sequential where dependencies exist
- Each milestone needs a proposed due date (work backward from the goal deadline)
- Present to Jap before proceeding — milestones are Jap's call, not Claude's

Example for "Website Launch" goal:
1. Content + copy finalized — [date]
2. Design structure approved — [date]
3. Pages built in Wix — [date]
4. Review and QA pass — [date]
5. Launch — [deadline]

---

## Step 3 — Break milestones into tasks

For each milestone, propose the specific tasks needed to complete it.
Each task must be:
- Completable in one session or less
- Labeled by type: decision / action / route-to-claude
- Estimated for effort: quick (~10 min) / medium (~30 min) / deep (~60+ min)

Present the full task list to Jap before Step 4. This is Gate 2 — Jap reviews and approves,
prunes, or adds tasks before they go live.

---

## Step 4 — Label engine routing

For every route-to-claude task, identify:
- The exact trigger phrase Jap should say to run it
- Which engine handles it
- Which brand file to load

Record this in the goal file's Engine Routing table. This becomes the "Route to Claude" section
in the morning brief.

---

## Step 5 — Push to ClickUp

After Jap approves the task list, push each task to ClickUp.

ClickUp structure: **GOALS folder** → one list per goal → each task = one ClickUp task.

Push sequence:
1. Check if GOALS folder exists: `clickup_get_workspace_hierarchy`
2. Create goal list if needed: `clickup_create_list`
3. For each task: `clickup_create_task` with name, due date, type tag (decision/action/route-to-claude), milestone reference
4. Push tasks in milestone order

If ClickUp push fails: log the failure in the goal file's Notes section and continue.
The goal file is the source of truth — ClickUp is the notification layer.

---

## Step 6 — Write the goal file and update active-goals.md

1. Copy `_template/[goal-slug].md` to `/GOALS/[goal-slug].md`
2. Fill all fields from Steps 1–4
3. Set all task statuses to PENDING
4. Add the first Progress Log entry: `YYYY-MM-DD — Goal created.`
5. Add the goal row to `/GOALS/active-goals.md`

Status in active-goals.md starts as PENDING until the first task is marked done,
then calculates to ON TRACK / AT RISK / BEHIND based on type definitions above.

---

## Mark done protocol

Triggered by: "mark [task] done" / "log [task] complete" / "done with [task]"

1. Open the goal file
2. Find the task — set status to DONE, fill the Done date
3. Check if this completes a milestone — if yes, mark the milestone COMPLETE and set Completed date
4. Recalculate goal status (ON TRACK / AT RISK / BEHIND)
5. Update active-goals.md status field
6. Update ClickUp task status to Done: `clickup_update_task`
7. Add a Progress Log entry: `YYYY-MM-DD — [task name] — DONE`
8. Ask: "Want to log anything else from this session?"

---

## Metric log protocol

Triggered by: "log metric [value]" / "I have [N] clients now" / "[metric] is now [value]"

1. Open the goal file
2. Add a Progress Log entry: `YYYY-MM-DD — Metric logged: [value] (baseline: [X], target: [Y])`
3. Recalculate trajectory: at this rate, will the target be reached by the deadline?
4. Recalculate goal status and update active-goals.md
5. Surface the trajectory in plain terms: "At current pace you'll reach [Y] by [projected date] — deadline is [deadline]."

---

## Review goal tasks protocol

Triggered by: "review goal tasks [name]"

1. Open the goal file
2. List all PENDING tasks with their due dates
3. Flag any that look stale (due date has passed with status still PENDING)
4. Offer options: mark stale tasks done, remove them, push their due dates, or add new tasks
5. Rewrite the task table if changes are made
6. Update ClickUp to match

Run this at least once per milestone completion. The morning brief will prompt this
when a milestone closes.

---

## Update protocol

Triggered by: "update goal [name]" / "change [goal] deadline" / "reprioritize goals"

For deadline changes: update the goal file, recalculate milestone due dates, update ClickUp.
For priority changes: update active-goals.md priority column, re-sort if needed.
For target changes: update goal file, recalculate trajectory if metric type.

Always add a Notes entry explaining what changed and why.

---

## Close protocol

Triggered by: "close goal [name]" / "goal complete [name]"

1. Confirm all milestones are COMPLETE (or deliberately skipped — note why)
2. Set goal status to COMPLETE in the goal file
3. Add final Progress Log entry: `YYYY-MM-DD — Goal closed. [Outcome vs. target.]`
4. Archive the ClickUp list: rename to `[CLOSED] [Goal name]`
5. Move the goal row from active table to Archive in active-goals.md
6. Log to /MEMORY/decisions-log.md: `YYYY-MM-DD — GOAL CLOSED — [name] — [result]`
7. Prompt: "What's next in this area?"

---

## Priority calculation — how Today's Focus is chosen

The Goals skill picks Today's Focus using this rule in order:

1. A task that is overdue AND on the Priority 1 goal
2. A task due today AND on the Priority 1 goal
3. A task that is blocking the next milestone on any goal
4. The next PENDING task on the Priority 1 goal
5. A quick win (effort: quick) on any goal — if nothing above applies

If two tasks tie at the same rule level, the one on the higher-priority goal wins.

---

## What this engine does NOT do

- Does not write copy, design assets, or training programs
- Does not decide goal targets or deadlines — Jap sets those
- Does not auto-reprioritize goals — Jap controls priority
- Does not run without Jap's explicit trigger

---

## Last updated
2026-05-21 — Phase 12. Built. Three goal types, six trigger protocols, ClickUp push, priority calculation, morning brief data structure.
