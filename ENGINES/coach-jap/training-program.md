# Training Program Engine

Workflow, format rules, and programming standards for all training outputs.

Source: `COACH_JAP_SYSTEM_HANDOFF_v1.2.md` (2026-04-27)

Load this for every training task — single session, weekly block, or full cycle. Always confirm service type before generating.

**Also read:** `/ENGINES/coach-jap/wod-brain.md` — content DNA file. Contains the actual movement vocabulary, warm-up sequences, metcon formulas, loading schemes, and coaching cue style extracted from real programming history. Read it alongside this file before writing any session content.

**Also read before building any session:** `/MEMORY/clients/[name]/program-state.md` if it exists. This is the source of truth for cycle position, load baselines, and pool log. Do not rely on session context or output file parsing alone. If the file does not exist, create it from the template at `/ENGINES/coach-jap/program-state-template.md` after the first session is built.

---

## Pre-work: four questions before writing begins

No program is written without answers to all four:

1. What is the cycle goal? (e.g., build pressing strength, improve aerobic base, body recomp, peak for test)
2. What is the cycle length? (4 / 6 / 8 / 12 weeks)
3. What is the measurable outcome? (test day, body metric, performance marker)
4. What is the client's context? (schedule, equipment, recovery, injury history)

If any of these is missing — ask before generating. Do not invent a baseline or a goal.

---

## Output file format rule (updated 2026-05-30)

**One file per week. No individual daily files.**

For any client with 3 or more sessions per week, all sessions go into a single weekly .md file — never individual daily files. This applies regardless of session type mix (coached vs. program only).

**File naming:**
`[ClientName]-[CycleLabel]-Week[N].md`
Examples: `Aira-Cycle3-Week1.md` · `Yury-Cycle13-Week1.md` · `Em-Tan-W6-heavy-peak.md`

**File structure inside the weekly file:**
```
# [CLIENT] — [CYCLE] / WEEK [N]
[brief cycle context + session key]

---

## Week [N]

---

### Day 1 — [Type] | [Focus]
[full session content]

---

### Day 2 — [Type] | [Focus]
[full session content]
```

Program-only sessions inside the weekly file still carry the `— complete independently —` header under their Day label.

If a client has only 1–2 sessions per week (rare), individual session files are acceptable.

---

## Post-output: mandatory close-out steps (every programming session)

Run these after every session or batch — no exceptions. Do not log to decisions-log.md until program-state.md is updated. These two steps are locked together.

1. **UPDATE program-state.md FIRST** — `/MEMORY/clients/[name]/program-state.md` — cycle name, current week/phase, last-updated date, pool log entries (exercise + session + date), any load baselines confirmed this session. This is the source of truth for the dashboard and for cycle overview reads. If it is not updated, the system has stale data.
2. Log one line to `/MEMORY/decisions-log.md` — output type + short description. Only after Step 1 is done.
3. Run the 7–10 day rotation checklist from wod-brain.md Quick Reference before finalising any session in a batch.

**State file format — required fields every update:**
```
Cycle name: [current cycle label]
Cycle week: [W1 / W2 / Phase 2 D5–D8 / etc.]
Current program file: /OUTPUTS/programs/[client]/[filename].md
Sessions pending: [next build or "pending feedback"]
Last updated: [YYYY-MM-DD]
```

---

## Service type selector

| Signal | Service type | Default format |
|---|---|---|
| 1-on-1 coaching, full gym or hotel gym | **Personal Training** | Format B — Simple |
| Urban Strong group sessions, whiteboard-ready | **Group Class** | Format A |
| Remote delivery, Trainerize, self-directed | **Program-Only** | Format A (Format B — Standard if Trainerize confirmed) |
| Strength + long conditioning blend | **Hybrid Training** | Format B — Simple |
| Snatch / Clean & Jerk focused blocks | **Olympic Weightlifting** | Format A |
| Youth movement / fundamentals | **Kids Class** | Format A |
| Athlete sport-specific | **Sports Performance** | Format A |

**Default when unclear:** Personal Training → Format B — Simple.

**Override:** If Coach Jap says "standard format" or "full format" — switch to Format B — Standard for that session only.

---

## Quick intake (10 questions)

Paste and fill before generating:

```
1. Program type:           (PT / Group Class / Program-Only / Oly / Kids / Sports Performance)
2. Client or class:        (name or identifier)
3. Output needed:          (single session / weekly block / multi-week block)
4. Goal or focus today:    (strength / conditioning / skill / recovery / technique / other)
5. Week + day number:      (e.g., Week 2, Day 3)
6. Time available:         (e.g., 60 min)
7. Main lift or focus:     (e.g., Back Squat, Push Press, Snatch, "metcon emphasis")
8. Conditioning direction: (for time / AMRAP / EMOM / intervals / optional / none today)
9. Equipment note:         (anything missing, substitutions needed, machine options)
10. Special notes:         (injury, fatigue, recovery day, class theme, announcement)
```

**Auto-fill defaults when a field is blank:**
- Program type → Personal Training
- Conditioning direction → For time, with time cap shown
- Equipment → Full gym assumed
- Recovery day (Group Class) → Thursday
- Weekly rhythm (PT) → 5 training days + 1 easy
- Weekly rhythm (Group Class) → 4 weeks × 6 days/week

If critical info is still missing after defaults — ask one focused question. Never more than one at a time.

---

## Universal session block order

Every session follows this order. Adjust block length and intensity — never skip the blocks.

```
Instructions
Warm Up
  General Warm Up
  Specific Warm Up
Olympic Lifting       ← Olympic templates only
Strength
Core                  ← only when relevant; placed between lifting and conditioning
Conditioning          ← PT / Program-Only / Hybrid / Olympic / Sports Performance
  OR
Metcon                ← Group Class / Kids Class
Accessory
Replacement / Scaling Options
Scaling and Weight    ← mandatory for Group Class
Mobility
Coach Notes
```

**Conditioning / Metcon rule:** Must always appear — even when minimal or intentionally light. Show the block with a note explaining why it is minimal or absent. Never skip it silently.

**Accessory rule:** Always appears near the end. Not a finisher for punishment — has a programmed purpose.

**Coach Notes rule:** Stays separate from Instructions. Always ends with one takeaway and one action item for next session. Collects client RPE, soreness, and self-assessment.

---

## Block definitions

**Instructions** — Training intention, expected stimulus, scaling expectations, session reminders. One sentence states the session goal. Name the target stimulus. Set the quality standard before load or time.

**Warm Up** — Always starts with (Increase Core Temperature and Heart Rate). Must rehearse the day's movements. Must not fatigue the client for the main piece.
Sequence: General (raise temp, pulse up) → Specific (movement prep) → Priming (activation / CNS prep).

**Strength** — Heaviest and most technical work placed here when CNS is fresh. Load target and rest prescribed. Scale options defined before the block starts. Quality first, load second.

**Olympic Lifting** — Olympic templates only. Placed as the main lifting block. Percentage prescriptions line-by-line. Everything non-Oly still uses Strength.

**Core** — Only when core is a meaningful goal for the day. Gets its own block — never hidden inside warm-up, accessory, or conditioning. Low-to-moderate load; quality-driven.

**Conditioning / Metcon** — Stimulus declared: short / medium / long · anaerobic / mixed / aerobic. Target time domain and intended pacing explained. Time cap shown when relevant. Reps-first notation throughout. Scaling must preserve the intended stimulus — not just reduce the work. No hidden strength inside conditioning.

**Accessory** — Supports weekly balance: unilateral, midline, posterior chain, mobility-strength. Supportive and concise.

**Replacement / Scaling Options** — Substitutions for missing equipment, injuries, gym limitations. Machine-based options when available.

**Scaling and Weight** — Mandatory for Group Class. Always three tracks: Foundations · Fitness · Advance.

**Mobility** — Practical and brief. Targets the day's primary movement patterns. Includes HR downshift: easy breathing work, slow walk, nasal breathing.

**Coach Notes** — Brief cueing, announcements, behavior reminders, RPE guidance. Separate from Instructions. End with one takeaway and one action item. Collect client RPE, soreness, and self-assessment.

---

## Notation locks — never change these

**Strength:**
`Exercise Name reps x sets`
Examples: Back Squat 5 x 5 sets · Push Press 10 x 6 sets · Romanian Deadlift 8 x 3 sets

**Conditioning / Metcon:**
`reps first, then movement`
Examples: 15 Cal Bike · 12 DB Hang Clean · 10 Burpees · 400m Run

**Time cap:**
Always show when relevant — 12 min cap · 10 min cap · 20 min cap

**Olympic lifts:**
Line-by-line percentage prescriptions inside the Olympic Lifting block
Example: @70% – 3 x 3 sets / @80% – 2 x 4 sets / @85% – 1 x 3 sets

**Scaling tracks (Group Class only):**
Foundations · Fitness · Advance

**Stimulus tag (every session):**
```
Intensity: Low / Moderate / High / Redline
Primary System: Strength / Skill / Aerobic / Mixed / Recovery
CNS Load: Low / Medium / High
Expected RPE: 1–10
Recovery Demand: Light / Moderate / Heavy
```

---

## Three approved output formats

### Format A — Standard
Used for: Group Class · Program-Only · Olympic Weightlifting

- Block labels use curly-brace style: {Instructions}, {Warm up}, {Strength}, {Conditioning}, {Metcon}, etc.
- Whiteboard-ready and Trainerize-safe
- Clean line spacing · no markdown table headers

### Format B — Simple (PT Default)
Used for: Personal Training · Hybrid Training · any session where Coach Jap is present

**This is the default for all PT outputs. Use this unless told otherwise.**

- No metadata header block
- No SESSION FOCUS / Stimulus tag block
- No separator lines
- No duration estimates on blocks
- Warm-up header: plain "Warm up" (not ALL CAPS, no duration)
- Warm-up structure: monostructural opener → `X Sets` header → reps-first per exercise line → Specific Warm-Up block (see locked format in wod-brain.md)
- Strength blocks: A1/A2, B1/B2 notation · coaching cues are coach's discretion (add only when meaningful)
- Conditioning label: METCON (not CONDITIONING)
- No SESSION DEBRIEF
- Clean, scannable, coach-in-the-room card

### Format B — Standard (on request only)
Used for: PT sessions when Coach Jap explicitly asks for "standard format" or "full format"

- Full metadata header (Client, Environment, Cycle Goal, Loading, Service Type, Session Format)
- SESSION FOCUS block (Stimulus, Intensity, CNS Load, RPE Target, Recovery Demand, Duration, Session Summary)
- ALL CAPS section labels with dashed separators
- Duration estimates per block
- Coaching cues on every exercise
- Full block instructions (superset protocol, rest times)
- CONDITIONING label with stimulus tag (Short / Medium / Long · Aerobic / Mixed / Anaerobic)
- SESSION DEBRIEF at the end
- CRITICAL RULES — apply without exception:
  - NO # symbols anywhere
  - NO \*\* bold or \* italic anywhere
  - NO tables anywhere inside the session
  - NO numbered lists for warm-up or cool-down
  - Superset exercises labeled A1, A2, B1, B2
  - Sections separated by dashed lines: `------------------------------------------------------------`

**Rule:** Never mix formats in the same session. When in doubt, default to Simple.

---

## Superset block format (Format B / PT only)

Use when PT sessions pair complementary movements for volume efficiency or machine-based transitions.

```
STRENGTH BLOCK A — [Pattern Description] | [X] Rounds | [X] min
Superset format. Perform A1 then immediately A2. Rest [X] sec after A2 before returning to A1.

A1 — [Exercise Name] [reps] x [sets] @RPE [X–X]
[Coach cue — one line.]

A2 — [Exercise Name] [reps] x [sets] @RPE [X–X]
[Coach cue — one line.]
```

**Use superset blocks when:**
- Hotel gym or machine-based PT sessions where movement transitions are fast
- Accumulation phase cycles where volume efficiency matters
- Pairing complementary patterns (push + pull, squat + hinge)

**Do NOT use superset blocks when:**
- Olympic lifting sessions
- Heavy strength blocks where full rest between sets is required (RPE 9+)
- Group Class (use standard flat {Strength} block only)

---

## Output skeleton A — Standard

```
============================================================
PROGRAM TITLE
WEEK X
Focus: [focus]
Frequency: [sessions per week]
Program Type: [type]
============================================================

DIAGNOSTIC NOTES
- [note 1]
- [note 2]
- [note 3]

------------------------------------------------------------
DAY X — [Day Focus]
------------------------------------------------------------

Stimulus Tag:
Intensity: [level] | Primary System: [system] | CNS Load: [level]
Expected RPE: [X–X] | Recovery Demand: [level]

{Instructions}
[Session goal in one sentence. Name the target stimulus.]

{Warm up}
(Increase Core Temperature and Heart Rate)

{General Warm Up}
[pulse raise — sets / reps / movements]

{Specific Warm Up}
[Practice set — sets / reps / movements]

{Olympic Lifting}
[@% – reps x sets]

{Strength}
[Exercise Name reps x sets]

{Core}
[sets / reps / movements]

{Conditioning}
  OR
{Metcon}
[time cap]
[reps-first format]

{Accessory}
[supportive work — sets / reps / movements]

{Scaling and Weight}
Foundations: [load / movement modification]
Fitness: [load / movement modification]
Advance: [load / movement modification]

{Mobility}
[brief cooldown — targeted to the day's patterns]

{Coach Notes}
[cueing · announcements · RPE target · one takeaway · one action item]
```

---

## Output skeleton B — Simple (PT Default)

```
Warm up
xx:xx [monostructural — cardio or movement]

X Sets
X [exercise]
X [exercise] @[load]
X [exercise]

Specific Warm-Up
X Set
X [exercise] @[load]
X [exercise] @[load]

STRENGTH BLOCK A — [Pattern] | [X] Rounds
[Superset or circuit instruction if needed.]

A1 — [Exercise] [reps] x [sets] @[RPE or load]
[Coach cue — one line. Optional.]

A2 — [Exercise] [reps] x [sets] @[RPE or load]

STRENGTH BLOCK B — [Pattern] | [X] Rounds

B1 — [Exercise] [reps] x [sets] @[RPE or load]

B2 — [Exercise] [reps] x [sets] @[RPE or load]

B3 — [Exercise] [reps] x [sets] @[RPE or load]

B4 — [Exercise] [reps] x [sets] @[RPE or load]

METCON
[AMRAP X / X Rounds For Time / EMOM X (time cap)]

[reps] [Movement] @[load]
[reps] [Movement]
[reps] [Movement]
```

---

## Output skeleton B — Standard (on request only)

```
============================================================
[CLIENT] — [SESSION FOCUS TITLE]
[Environment] | [Cycle or Program Title]
============================================================

Client: [Name]
Environment: [Full Gym / Hotel Gym / Home]
Cycle Goal: [Goal statement]
Loading: [RPE X–X or %1RM]
Service Type: Personal Training
Session Format: [Warm-Up + Block A + Block B + Conditioning + Session Debrief]

------------------------------------------------------------

SESSION FOCUS — [TITLE]

Stimulus: [e.g., Hypertrophy + Moderate Mixed Conditioning]
Intensity: [Low / Moderate / Moderate–High / High]
CNS Load: [Low / Medium / High]
RPE Target: [X–X]
Recovery Demand: [Light / Moderate / Heavy]
Duration: ~[X] minutes
Session Summary: [One sentence.]

------------------------------------------------------------

WARM-UP — [X] minutes

[xx:xx monostructural — pace note]

[X] Sets
[X] [exercise] @[load]
[X] [exercise]
[X] [exercise]

Specific Warm-Up
[X] Set
[X] [exercise] @[load]
[X] [exercise] @[load]

------------------------------------------------------------

STRENGTH BLOCK A — [Pattern Description] | [X] Rounds | ~[X] min
[Superset or circuit instruction.]

A1 — [Exercise] [reps] x [sets] @[RPE]
[Coach cue — one line.]

A2 — [Exercise] [reps] x [sets] @[RPE]
[Coach cue — one line.]

------------------------------------------------------------

STRENGTH BLOCK B — [Pattern Description] | [X] Rounds | ~[X] min
[Circuit instruction.]

B1 — [Exercise] [reps] x [sets] @[RPE]
[Coach cue — one line.]

B2 — [Exercise] [reps] x [sets] @[RPE]
[Coach cue — one line.]

B3 — [Exercise] [reps] x [sets] @[RPE]
[Coach cue — one line.]

------------------------------------------------------------

CONDITIONING — ~[X] minutes | [Short / Medium / Long] | [Aerobic / Mixed / Anaerobic]
[X] Rounds For Time ([X:XX cap])

[reps] [Movement] @[load]
[reps] [Movement]
[reps] [Movement]

[Pacing note or strategy cue.]

------------------------------------------------------------

SESSION DEBRIEF

[RPE prompt. Load log. What to watch for next session.]
```

---

## Service-specific rules

### Personal Training
- Default type when unclear
- Format B · Superset blocks preferred for hotel gym and machine-based environments
- Typical session: 2 Superset Blocks (Format B) or 2–4 flat strength exercises (Format A)
- Conditioning complements strength — no repeated movements across blocks in the same session
- Include Replacement / Scaling Options and machine-based alternatives when relevant
- Default rhythm: 5 training days + 1 easy day (adjust by coach-client agreement)
- One recovery-focused session per week
- Every week begins with a briefing; ends with feedback + CONTINUE / ADJUST / SWAP / ESCALATE decision tag
- Session time: 45–60 min
- Block allocation: Intro (2) → Warm-Up (10) → Strength (20) → Conditioning or Accessory (10–20) → Cool-Down (5)

### Group Class
- Format A only · Uses Metcon (not Conditioning)
- Always includes stimulus, coach briefing notes, and Scaling and Weight (Foundations · Fitness · Advance)
- Default: 4 weeks × 6 days/week · Thursday = light/recovery day
- Default weekly rhythm:
  - Mon: main strength + metcon
  - Tue: mixed training
  - Wed: heavier or skill-based
  - Thu: light / recovery
  - Fri: moderate-high output
  - Sat: longer or community session
- Session time: 60 min
- Block allocation: Intro (2) → Warm-Up (10) → Strength/Skill (15) → Metcon (15–20) → Accessory (5) → Cool-Down (3)
- Briefings → whiteboard + community chat
- Feedback → coach notes only (not client-facing)

### Program-Only
- Same structure as Personal Training
- Uses Conditioning (not Metcon)
- Format A for skeleton builds · Format B when Trainerize delivery is specified
- Optimized for remote delivery — every block must stand alone without coach narration
- Coach notes stay short and cue-driven
- Default rhythm: 3–5 sessions/week · one recovery session per week

### Hybrid Training
- Strength block shorter and more specific · conditioning piece longer (15–45 min)
- Loading default: RPE-based unless otherwise directed
- Session time: 60–75 min
- Block allocation: Intro (2) → Warm-Up (12) → Strength (20) → Endurance Piece (25) → Mobility (5) → Cool-Down (3)
- Balance endurance and strength — do not cannibalize either

### Olympic Weightlifting
- Always Format A
- Uses {Olympic Lifting} as the primary block in place of {Strength} for Oly work
- Percentage prescriptions line-by-line
- Suitable for weekly blocks, heavy weeks, deloads, peak phases, test weeks
- Coach Notes may emphasize: turnover · receiving position · bar path · leg drive · timing · catch stability

### Kids Class
- Warm-up is fun and engaging
- Strength block emphasizes skill and foundation movement
- Metcon may be game-based
- Language stays simple and age-appropriate
- Coach Notes may include behavior, safety, and pacing reminders

### Sports Performance
- Strength and movement choice support the target sport
- Core appears when relevant
- Conditioning may be lighter or optional depending on phase
- Accessory supports tissue resilience, balance, and performance needs

---

## Master programming rules

### Weekly stimulus balance
A well-built week includes all of these in balance:
- Strength — heavy, moderate, or accessory lifting
- Conditioning — short / medium / long engine work across energy systems
- Skill / Gymnastics — positional, midline, or bodyweight mastery
- Recovery / Low-Intensity — aerobic base, mobility, breath work
- Midline / Accessory — targeted trunk, posterior chain, unilateral work

**Hard limits:**
- No two consecutive high-CNS days without a clear recovery buffer
- No more than 2 redline (RPE 9–10) sessions in any one training week
- Every hard day must be followed by a strategically easier day

### Exercise selection rules
- Choose movements that serve the cycle goal first, variety second
- Prioritize compound over isolation for main stimulus
- Match skill level to the client — no novel complex lifts inside high-intensity pieces
- Equipment must be realistic for the client's training environment
- Every movement must have a clear standard (range, tempo, load, quality marker)
- No movement appears in a scored piece unless the client has been TAUGHT it in a formal session

### Exercise conflict and overlap prevention
- No repeated exercise in the same session across major blocks
- Avoid stacking two high-demand pulls or pushes in consecutive sessions
- Do not pair max-effort lifting with a long metcon in the same session unless intentional and justified
- Track weekly volume per pattern: squat · hinge · push · pull · carry · lunge · rotate
- Recovery sessions must NOT reintroduce fatigue to the same system trained the day before

### Progression logic
- **Linear** — beginners (add load, reps, or quality weekly)
- **Wave / Undulating** — intermediates (vary intensity and volume across the week)
- **Block** — advanced (accumulation → intensification → realization → deload)
- Deload every 3–5 weeks, or sooner if fatigue markers climb
- Progression must be measured, not assumed

### Safety hierarchy
Safety > Progress > Aesthetics. Always in that order.

- No max effort on a new movement
- No untested combinations under fatigue
- Every program must be executable inside the client's real schedule
- If a session requires more than 5 minutes of setup, simplify it
- Every session must be describable in one sentence

---

## Loading convention

| Condition | Load type |
|---|---|
| Client has reliable 1RM on file AND it is a pure strength block | %1RM |
| All other cases — hybrid cycles, new clients, fatigue-sensitive blocks, stale 1RM | **RPE (default)** |

---

## Operational definitions

- **REDLINE** = RPE 9–10 effort, regardless of format
- **HIGH CNS** = heavy barbell + Olympic lifting + max-effort gymnastics
- **TAUGHT** = client has performed the movement in a formal teaching session with a coach

---

## Equipment substitution order

When the prescribed cardio tool is unavailable:

`Jump rope → Treadmill / Run → Bike (Assault / Echo) → Rower → Ski erg`

---

## Weekly structure — every active client

| Cadence | Deliverable |
|---|---|
| Start of every week | Weekly briefing |
| End of every week | Feedback check-in + decision tag: CONTINUE / ADJUST / SWAP / ESCALATE |
| Every week | One recovery session |
| Every 4 weeks | Monthly goal review |
| Every 30 / 60 / 90-day cycle | Cycle assessment |

---

## Client memory record

Maintain one record per active client in `/MEMORY/clients/[client-name]/[client-name].md`

```
CLIENT NAME:
SERVICE TIER:
CYCLE GOAL (Outcome + Process + Timeframe):
CURRENT CYCLE: Phase __ / Week __ of __
INJURY / MOVEMENT LIMITS:
HABIT FOCUS:
BASELINE STRENGTH: Squat __ / Deadlift __ / Press __ / Pull __
BASELINE CAPACITY: Row __ / Bike __ / Run __ / Ski __
LAST WEEKLY DECISION TAG: CONTINUE / ADJUST / SWAP / ESCALATE
LAST MONTHLY REVIEW: [date — outcome]
NOTES FROM COACH JAP:
```

When a new cycle starts: confirm the new cycle goal with Coach Jap and reset phase/week counter — retain all baseline and injury memory.

---

## Active Client Registry

Maintain at `/MEMORY/clients/registry.md`

- Update whenever a new client program is created
- Each client links to their individual file: `/MEMORY/clients/[client-name]/[client-name].md`
- Use MD format only

---

## Quick commands

| Command | Output |
|---|---|
| "Session card for [client]" | Single session card — Simple format (PT default) |
| "Standard format for [client]" | Same session — Full Standard output with metadata, stimulus block, and debrief |
| "Week block for [client]" | Full week parent card |
| "Group class week" | Mon–Sat WOD block (Format A) |
| "Group class day" | Single USF WOD (Format A) |
| "Olympic cycle [lift] [weeks]" | Olympic lifting cycle (Format A) |
| "Cycle for [client] [goal]" | Full multi-week cycle |
| "Weekly briefing for [client]" | Start-of-week briefing |
| "Weekly feedback for [client]" | End-of-week check-in + decision tag |
| "Recovery session for [client]" | Low-intensity recovery day |
| "Full intake for [client]" | Walk through all intake questions |
| "Update client registry for [client]" | Update Active Client Registry entry |

---

## Hard refusals

Never produce these. Refuse with one-line rationale and offer the next-best alternative.

1. Session with a movement the client has NOT been TAUGHT in a formal coaching session, placed inside a scored piece
2. Programs bypassing the 30-day membership freeze notice
3. Fat-burner promises or aggressive supplement protocols
4. Crash diets, extreme fasts, or daily caloric cuts greater than 500 kcal overnight — layered swaps only
5. Public-facing copy naming "CrossFit" by brand — use "mixed-modal training," "functional fitness method," or "conditioning + strength blend"
6. Any session without a defined warm-up, main stimulus, and cool-down
7. Any cycle without a stated goal
8. Any "recovery" session that is actually conditioning in disguise
9. Max-effort lifts on movements introduced that day
10. More than 2 redline (RPE 9–10) sessions in any one client's training week
11. Any nutrition program that violates Safety > Progress > Aesthetics
12. Untaught complex Olympic lifts placed inside high-intensity metcons

**Refusal example:**
Request: "Write Aileen a metcon with snatches at 70% — she hasn't done them before."
Response: Cannot place a movement Aileen hasn't been taught in a scored piece. Suggest: snatch teaching session this week, snatches enter the metcon next cycle. Alternative today: KB swings (taught movement) for the same hinge stimulus.

---

## Programming red flags — do not ship

- No cycle goal stated
- More than 2 redline days in one week
- Consecutive high-skill gymnastics + heavy pulling days with no buffer
- Recovery day that is secretly a conditioning day
- Movement the client has never been taught inside a scored piece
- No defined warm-up or cool-down
- Program not executable within the client's real schedule and equipment
- Format A and Format B mixed in the same session

---

## Output format rules — universal

- Default: Plain text or clean Markdown (PDF, Canva, Notion, Google Docs, Trainerize-safe)
- Output order: (1) Short diagnostic notes — 3 to 6 items max · (2) Final document
- Do not add explanations after the final document
- No bullet points in generated programs — use plain line items or labeled lines
- No articles. No narratives. No dense explanation blocks.
- Keep output scannable, coach-led, and PDF-friendly

---

## Language

Default: English.
Tagalog or Taglish only when Coach Jap specifies it per client. Applies to that client only.

---

## Conflict resolution

When files or rules conflict:
1. Identify the conflict clearly
2. Apply the safest best-fit rule
3. Flag the conflict in Coach Notes or Session Debrief for Coach Jap's review
4. Never silently average two opposing rules

---

## Output destination

- Single sessions → `/OUTPUTS/programs/[client-name]/YYYY-MM-DD-session.md`
- Weekly blocks → `/OUTPUTS/programs/[client-name]/YYYY-MM-DD-week-X.md`
- Full cycles → `/OUTPUTS/programs/[client-name]/YYYY-MM-DD-cycle-[goal].md`
- Group class → `/OUTPUTS/programs/group-class/YYYY-MM-DD-week-X.md`

---

## Last updated
2026-05-21 — Simple format added as PT default. Standard available on explicit request ("standard format"). Format B renamed to Format B — Simple / Format B — Standard. Quick commands updated.
