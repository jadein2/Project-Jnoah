---
name: coach-jap-programming-format
description: "Auto-applies Coach Jap's programming grammar to every training output. Fires when generating training sessions, WODs, weekly blocks, cycles, warm-ups, cool-downs, conditioning pieces, or any workout written out. Enforces notation locks, block order, format selection (A vs B), stimulus tags, scaling tracks, superset labeling, and hard refusals. Brands: Urban Strong Fitness (Group Class), Restart Fitness PH (PT / Program-Only / Hybrid)."
---
# Coach Jap Programming Format

Fires on every training output. The job: make sure notation, block order, format, and refusals are applied correctly before anything ships. The full engine lives at `/ENGINES/coach-jap/training-program.md` — this skill enforces the grammar.

---

## Step 1 — Resolve before generating

Four questions. If any is missing, ask before writing. Never invent a baseline or a goal.

1. Cycle goal — what is the training outcome? (strength, conditioning, recomp, peak, skill)
2. Cycle length — 4 / 6 / 8 / 12 weeks?
3. Measurable outcome — test day, body metric, performance marker?
4. Client context — schedule, equipment, recovery, injury history?

Single session or WOD request: confirm service type and confirm the client has been TAUGHT every movement placed in a scored piece.

---

## Step 2 — Select the format

**Format A — Standard**
Group Class · Program-Only · Olympic Weightlifting · Kids Class · Sports Performance
- Block labels: {Curly brace style}
- Whiteboard-ready and Trainerize-safe
- Always includes Scaling and Weight: Foundations · Fitness · Advance for Group Class

**Format B — PT / Trainerize**
Personal Training · Hotel Gym · Remote multi-session delivery · Hybrid
- Block labels: PLAIN TEXT ALL CAPS only
- NO # symbols · NO \*\* bold · NO \* italic · NO tables inside the session · NO numbered lists for warm-up or cool-down
- Warm-up: plain dash list → `- Movement — reps/duration`
- Superset labels: A1, A2, B1, B2 with coach cue on the line below
- Section dividers: `------------------------------------------------------------`
- Ends with SESSION DEBRIEF (not Coach Notes)

**Never mix Format A and Format B in the same session.**
Default when unclear: Format B (Personal Training).

---

## Step 3 — Block order

Every session follows this sequence. Adjust length and intensity — never skip blocks.

```
Instructions
Warm Up
  General Warm Up
  Specific Warm Up
Olympic Lifting       ← Olympic templates only
Strength
Core                  ← only when core is a session goal; never hidden in warm-up or accessory
Conditioning          ← PT / Program-Only / Hybrid / Olympic / Sports Performance
  OR
Metcon                ← Group Class / Kids Class
Accessory
Replacement / Scaling Options
Scaling and Weight    ← mandatory for Group Class
Mobility
Coach Notes           ← Format A | SESSION DEBRIEF in Format B
```

**Conditioning / Metcon rule:** Must always appear — even when minimal. Show the block with a note if it is light or intentionally skipped. Never omit it silently.

**Coach Notes / SESSION DEBRIEF rule:** Always ends with one takeaway and one action item for next session. Collects RPE, soreness, and self-assessment.

---

## Step 4 — Apply notation locks

These never change. Apply exactly.

**Strength:**
`Exercise Name reps x sets`
- Back Squat 5 x 5 sets
- Push Press 10 x 6 sets
- Romanian Deadlift 8 x 3 sets

**Conditioning / Metcon — reps first, then movement:**
- 15 Cal Bike
- 12 DB Hang Clean
- 10 Burpees
- 400m Run

**Time cap:** Always show when relevant → `12 min cap · 10 min cap · 20 min cap`

**Olympic lifts:** Line-by-line percentage prescriptions inside the Olympic Lifting block.
- @70% – 3 x 3 sets
- @80% – 2 x 4 sets
- @85% – 1 x 3 sets

**Scaling tracks (Group Class only):** Foundations · Fitness · Advance

**Stimulus tag (every session):**
```
Intensity: Low / Moderate / High / Redline
Primary System: Strength / Skill / Aerobic / Mixed / Recovery
CNS Load: Low / Medium / High
Expected RPE: 1–10
Recovery Demand: Light / Moderate / Heavy
```

**Superset block (Format B / PT only):**
```
STRENGTH BLOCK A — [Pattern Description] | [X] Rounds | [X] min
Superset format. Perform A1 then immediately A2. Rest [X] sec after A2 before returning to A1.

A1 — [Exercise Name] [reps] x [sets] @RPE [X–X]
[Coach cue — one line.]

A2 — [Exercise Name] [reps] x [sets] @RPE [X–X]
[Coach cue — one line.]
```

**Loading default:** RPE unless client has a reliable 1RM on file AND it is a pure strength block.

---

## Step 5 — Hard refusals

Refuse immediately with one-line rationale + offer the next-best alternative.

1. Movement the client has NOT been TAUGHT placed inside a scored piece
2. Programs bypassing the 30-day membership freeze notice
3. Fat-burner promises or aggressive supplement protocols
4. Crash diets or daily caloric cuts greater than 500 kcal overnight
5. Public-facing copy naming "CrossFit" by brand — use "mixed-modal training," "functional fitness method," or "conditioning + strength blend"
6. Session without a defined warm-up, main stimulus, and cool-down
7. Cycle without a stated goal
8. "Recovery" session that is actually conditioning in disguise
9. Max-effort lifts on movements introduced that day
10. More than 2 redline (RPE 9–10) sessions in any one client's training week
11. Any nutrition program that violates Safety > Progress > Aesthetics
12. Untaught complex Olympic lifts inside high-intensity metcons

**Refusal format:**
Request: [what was asked]
Response: Cannot [reason]. Suggest: [next-best alternative].

---

## Step 6 — Red flag check before shipping

Do not ship if any of these are present:

- No cycle goal stated
- More than 2 redline days in one week
- Consecutive high-skill gymnastics + heavy pulling days with no buffer
- Recovery day that is secretly a conditioning day
- Movement the client has never been taught inside a scored piece
- No warm-up or cool-down defined
- Program not executable within the client's real schedule and equipment
- Format A and Format B mixed in the same session

---

## Quick commands reference

| Command | Output |
|---|---|
| "Session card for [client]" | Single session (Format B) |
| "Week block for [client]" | Full week parent card |
| "Group class week" | Mon–Sat WOD block (Format A) |
| "Group class day" | Single USF WOD (Format A) |
| "Olympic cycle [lift] [weeks]" | Olympic lifting cycle (Format A) |
| "Cycle for [client] [goal]" | Full multi-week cycle |
| "Weekly briefing for [client]" | Start-of-week briefing |
| "Weekly feedback for [client]" | End-of-week check-in + decision tag |
| "Recovery session for [client]" | Low-intensity recovery day |
| "Full intake for [client]" | Walk through all intake questions |

---

## Output rules

- Plain text or clean Markdown only — PDF, Canva, Notion, Google Docs, Trainerize-safe
- Output order: (1) short diagnostic notes 3–6 items max → (2) final document
- No explanations after the final document
- No bullet points inside generated programs — plain line items or labeled lines only
- No articles. No narratives. No dense explanation blocks.
- Keep output scannable, coach-led, and PDF-friendly
- Language default: English. Tagalog or Taglish only when Coach Jap specifies per client.
