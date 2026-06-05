# Project Jnoah — How to Use
**Operating Manual for Coach Jap's Business System**
Version 1.0 — May 2026

---

## Current Platform Note

Project Jnoah now runs on two surfaces:

| Surface | Authority file | Skills folder |
|---|---|---|
| Codex | `AGENTS.md` | `/.agents/skills/` |
| Claude / Cowork | `CLAUDE.md` | `/.claude/skills/` |

Both control files are kept content-synced, but the file matching your current platform wins. `STATE.md` is the live "what's now" board. `PROGRESS.md` is build history.

URBN Athletics has replaced the old Urban Strong public identity. The URBN brand file is **LIVE** — `/BRANDS/URBN-athletics.md` (canonical brain: `/Raw-Files/URBN Athletics/Main-Brand-Brain.md`). Still pending: final visual identity + public domain. `/BRANDS/urban-strong.md` is legacy reference only. New OS commands since v1.0: `sync jnoah` (reconcile — see SYNC.md), and the Jnoah Cockpit dashboard (Artifacts/).

---

## 1. What This System Is

Project Jnoah is a modular AI operating system built inside a folder. It gives the assistant persistent context about Restart Fitness PH, URBN Athletics, client work, campaigns, goals, programming, nutrition, and operating state — so you never have to re-explain the system from scratch.

**Three layers:**

| Layer | Location | What it does |
|---|---|---|
| Context | AGENTS.md / CLAUDE.md, ROUTER.md, STATE.md, /BRANDS/, /ENGINES/ | Who you are, what the brands stand for, how the work gets done |
| Skills | /.agents/skills/ or /.claude/skills/ | Craft expertise that auto-fires when relevant |
| Memory | /MEMORY/ | Decisions, content history, client records — grows over time |

Every time you open a session in this folder, the assistant reads the context layer. You start with a task — not an introduction.

---

## 2. The Two Surfaces

### Codex

Codex uses `AGENTS.md` as the authority file and `/.agents/skills/` for skills. Use Codex for system cleanup, local artifacts, diagnostics, file restructuring, and implementation work.

### Claude Cowork (primary)

1. Open Claude Desktop → switch to Cowork mode
2. Work in a Folder → select the `Project Jnoah` folder
3. Grant read + write permission
4. Start with your task — no need to re-explain anything

Best for: daily content work, brand tasks, programming, nutrition plans, client management.

### Claude Code (secondary)

1. Open terminal
2. `cd` to the Project Jnoah folder
3. Run `claude`

Best for: parallel subagents, system builds, file restructuring, scripted batch workflows. Skills and engines work on both surfaces when the matching skill folders stay mirrored. Files edited in one surface are immediately available in the other.

---

## 3. How the System Loads

When a task comes in, the system loads in this order — automatically:

1. **AGENTS.md or CLAUDE.md** — platform authority, identity, universal rules, banned words
2. **STATE.md** — current active work and blocked items
3. **ROUTER.md** — maps the task to the correct engine and brand
4. **/BRANDS/** — locked brand identity for the relevant brand
5. **/ENGINES/** — workflow file for the task type
6. **/GLOBAL/** — anti-AI output rules
7. **/.agents/skills/** or **/.claude/skills/** — craft skills that auto-fire

You do not trigger this manually. Opening the folder and stating your task is enough.

---

## 4. Brand Work

**Always state the brand first.** Restart Fitness PH and URBN Athletics are separate tracks. If the brand is unclear, the assistant will ask — never assume.

### Signal reference

| You mention... | Brand loaded |
|---|---|
| Online coaching, The Restart Fitness System, 90-Day Coaching System, 6FIX, discovery call, DM "RESTART" | Restart Fitness PH |
| Olongapo, the gym, in-person, group class, coached by Jap | URBN Athletics — blocked until brand file lands |
| Internal planning, cross-brand strategy, programming format, client work | Brand-agnostic (no brand file loaded) |

### To update a brand rule

Edit the brand file directly. Restart Fitness PH lives at `/BRANDS/restart-fitness-ph.md`. URBN Athletics is pending; `/BRANDS/urban-strong.md` is old reference only.

Never edit `AGENTS.md` or `CLAUDE.md` for brand-specific rules. Those files are for universal rules only.

---

## 5. Content Work

### Social Posts (IG, Facebook, Threads, Reels, Stories)

**Say:** "Write a social post about [topic] for [brand]"

The system routes through: `post-routing.md` → `social-post.md` → brand file → `anti-ai-copywriter` skill.

Output includes: C/C/V classification, content pillar, caption, CTA, platform-specific length and format rules.

**Platform defaults:**

| Platform | Ideal caption length | Image text rule |
|---|---|---|
| Instagram | 138–150 chars (simple) / 800–1,500 (educational) | Under 10 words |
| Facebook | 40–80 chars | Short and simple |
| Threads / X | 71–100 chars | One idea only |
| Reels | 50–150 chars | Under 20 words on screen |

### Blog Posts

**Say:** "Write a blog post about [topic]"

No default brand while URBN is pending. Confirm Restart Fitness PH vs URBN before writing.

Format: Hook → science/evidence → action → close. Under 550 words.

### Carousels

**Say:** "Design a [X]-slide carousel about [topic] for [brand]"

Output: slide-by-slide copy + design direction notes + Canva/AI prompt template.

### Content Ideas

**Say:** "Give me [X] ideas for [topic] for [brand]"

Each idea is classified by C/C/V category and content pillar before you see it. You choose which to develop.

### C/C/V Classification (every post belongs to one)

| Type | Purpose | Default CTA |
|---|---|---|
| **Conversion** | Move warm audience toward booking or buying | DM "RESTART" / Book a Discovery Call / Free Assessment |
| **Connection** | Build trust in the human behind the brand | No hard sell — soft CTA or none |
| **Value** | Teach something useful before someone pays | Save this / DM "RESTART" |

---

## 6. Training Programs

**State the service type.** If unclear, Claude defaults to Personal Training.

### Service type → format

| Service type | Format | Key rules |
|---|---|---|
| Personal Training | **Format B** | ALL CAPS block labels, superset A1/A2, SESSION DEBRIEF, no markdown |
| Group Class | **Format A** | Curly-brace blocks, Foundations/Fitness/Advance scaling, whiteboard-ready |
| Program Only | **Format A** | Standalone — every instruction self-executable without a coach present |
| Olympic Weightlifting | **Format A** | Percentage-based prescriptions, Olympic Lifting block as main piece |
| Hybrid Training | **Format B** | Shorter strength block, longer conditioning piece (15–45 min) |

Never mix Format A and Format B in the same session.

### Four questions to answer upfront (saves back-and-forth)

1. What is the cycle goal?
2. What is the cycle length? (4 / 6 / 8 / 12 weeks)
3. What is the measurable outcome? (test day, body metric, performance marker)
4. What is the client context? (schedule, equipment, recovery, injury history)

If any of these is missing, Claude will ask before generating. It will not invent a baseline.

### Quick commands

| Say this | You get |
|---|---|
| "Session card for [client]" | Single session card |
| "Week block for [client]" | Full week parent card |
| "Group class week" | Mon–Sat WOD block (Format A) |
| "Group class day" | Single USF WOD |
| "Cycle for [client] [goal]" | Full multi-week cycle |
| "Weekly briefing for [client]" | Start-of-week briefing |
| "Weekly feedback for [client]" | End-of-week check-in + CONTINUE / ADJUST / SWAP / ESCALATE |
| "Recovery session for [client]" | Low-intensity recovery day |
| "Olympic cycle [lift] [weeks]" | Olympic lifting cycle |

### Notation rules (auto-applied, never changes)

**Strength:** `Exercise Name reps x sets`
Examples: Back Squat 5 x 5 sets · Push Press 10 x 6 sets

**Conditioning/Metcon:** reps first, then movement
Examples: 15 Cal Bike · 12 DB Hang Clean · 10 Burpees · 400m Run

**Olympic lifts:** line-by-line percentage prescriptions
Example: @70% – 3 x 3 sets / @80% – 2 x 4 sets

**Time cap:** always shown — 12 min cap · 10 min cap

**Scaling tracks (Group Class only):** Foundations · Fitness · Advance

### Hard refusals — Claude will not generate these

- Movement the client has not been taught, placed inside a scored piece
- More than 2 redline (RPE 9–10) sessions in any one training week
- A "recovery" session that is secretly conditioning
- Any session without a defined warm-up, main stimulus, and cool-down
- Any cycle without a stated goal
- Max-effort lifts on movements introduced that session

---

## 7. Nutrition Plans

**Say:** "Nutrition plan for [client]" or "Intake for [client]"

Claude walks through the 27-question intake form. For returning clients, it reads their existing file automatically and skips fields already on record.

### Calculation method

Mifflin-St Jeor BMR × activity multiplier → apply deficit → macro split

| Goal | Default deficit |
|---|---|
| Fat loss | 10% |
| Fat loss (stress, poor sleep, adherence concern) | 5% (conservative) |
| Recomposition | 5% or maintenance |
| Performance | Avoid aggressive deficits unless requested |

### Macro splits

| Split | Protein | Carbs | Fats | Use when |
|---|---|---|---|---|
| Default beginner fat loss | 30–40% | 35–45% | 20–30% | Standard starting point |
| Protein-forward | 40% | 35% | 25% | High body weight + fat loss + active training |
| Low-carb / keto | 50% | 10% | 40% | Only when specifically requested |

### Output structure (always in this order)

1. Client Summary
2. Daily Targets
3. Per-Meal Macro Targets
4. 7-Day Course Meals
5. Recipes with prep and cooking instructions
6. 7-Day Meal Prep Plan (batch-cook system)
7. Grocery List with total weights/pieces
8. Coaching Rules
9. QA Check

### Quick commands

| Say this | You get |
|---|---|
| "Nutrition plan for [client]" | Full plan — intake through grocery list |
| "Macros for [client]" | TDEE + deficit + macro split only |
| "Grocery list for [client]" | Generated from existing plan |
| "Meal prep plan for [client]" | Batch-cook system from existing plan |
| "QA nutrition plan for [client]" | QA checklist run against existing plan |

---

## 8. Client Management

### Folder structure (per client)

```
/MEMORY/clients/[client-name]/
├── [client-name].md       ← active record
├── references/            ← raw files: intake forms, photos, old PDFs, assessments
└── check-ins/             ← weekly check-in logs (one file per week)

/OUTPUTS/programs/[client-name]/
└── YYYY-MM-DD-session.md  ← all program output files
```

MEMORY = who they are and their history.
OUTPUTS = what has been produced for them.

### Adding a new client

**Say:** "Add new client [name] — [service type]"

Claude creates: the client folder, `[name].md`, `references/` and `check-ins/` placeholders, and updates `registry.md`.

### Adding references (previous history, photos, intake docs)

Drop any file — PDF, image, Word doc — into `/MEMORY/clients/[name]/references/`

Claude reads that folder automatically during any task for that client. You do not need to re-explain it.

### Weekly check-in

**Say:** "Weekly feedback for [client]"

Claude produces: end-of-week summary + decision tag (CONTINUE / ADJUST / SWAP / ESCALATE)

Save the output to: `/MEMORY/clients/[name]/check-ins/YYYY-MM-DD-week-X-checkin.md`

### Client registry

`/MEMORY/clients/registry.md` — one row per active client. Update whenever a new client is added or a cycle changes.

### Group class clients

Group class sessions file to `/OUTPUTS/programs/group-class/` (shared folder — not per-client).

Individual group class members still get their own `/MEMORY/clients/[name]/` folder for tracking attendance, scaling track used, and movement notes.

---

## 9. The Memory System

Three files that grow over time. These are the long-term record of everything built and produced.

### decisions-log.md

`/MEMORY/decisions-log.md`

One line per significant decision or output. Newest at the top.

Format: `YYYY-MM-DD — [TYPE] — short description`

Types: `BUILD` · `OUTPUT` · `BRAND` · `DECISION` · `FIX`

Update after any session where something was built or decided.

### content-log.md

`/MEMORY/content-log.md`

One entry per piece of content produced. Tracks: type, output file, channel, CTA, notes, performance.

Fill in the Performance field later when data comes in (saves, DMs, conversions, booked calls).

### registry.md

`/MEMORY/clients/registry.md`

One row per active client. Links to their individual file. Update when clients are added or cycles change.

### How to update memory after a session

**Say:** "Log this session to memory"

Claude writes new entries to `decisions-log.md` and `content-log.md` covering everything produced in the session.

---

## 10. The Skills Layer

Three skills auto-fire without being called manually. They load based on task type.

### anti-ai-copywriter

**Fires on:** any client-facing copy — captions, blogs, DMs, web copy, carousel slides, email subjects.

**What it does:** 5-step flow applied to every output.
1. Banned word sweep (50+ words and phrases)
2. Sentence pattern check (remove AI constructions)
3. Structural tell check (remove AI layout patterns)
4. 10-rule behavioral protocol (coach-voice enforcement)
5. Pre-publish QA (6-point final check)

### coach-jap-programming-format

**Fires on:** any training output — sessions, WODs, weekly blocks, cycles, warm-ups, conditioning pieces.

**What it does:** Enforces Format A/B selection, block order, notation locks, stimulus tags, scaling tracks, superset labeling, hard refusals, and red flags before any program ships.

### ui-ux-pro-max

**Fires on:** any design output — carousel design direction, web layouts, visual asset decisions.

**What it does:** 67 styles, 96 color palettes, 57 font pairings, 13 tech stacks — senior product-design judgment applied automatically.

**One rule for all skills:** Skills cannot override brand files. Brand files win on conflict.

---

## 11. What This System Is Not

| It is not | Use instead |
|---|---|
| A CRM or lead tracker | Google Sheets |
| A content scheduler | Meta Business Suite · Buffer |
| A project manager | ClickUp |
| A file storage system for large media | Google Drive · OneDrive |

Project Jnoah is the context layer that makes every assistant conversation faster and more consistent. The work still ships through your existing tools.

---

## 12. Quick Reference — What to Say

### Research

```
"Research [topic]"                              → fires research engine, asks depth
"Pull everything on [topic]"                    → full research run
"Cross-ref [topic]"                             → synthesize from existing files only
"Competitive intel on [topic]"                  → Layer 4 focus
"What's trending around [topic]"                → Layer 3 pattern scan
"Make the brief for [topic]"                    → generates clean production brief from raw
```

### Content

```
"Write a social post about [topic] for Restart / URBN"
"Give me [X] ideas for [topic] for [brand]"
"Write a blog post about [topic]"
"Design a [X]-slide carousel about [topic] for [brand]"
```

### Campaigns

```
"New campaign — [objective]"                    → Phase 1 brief
"Content calendar for [campaign name]"          → Phase 3 calendar
"Produce assets for [campaign name]"            → Phase 4 asset production
"Push [campaign name] to ClickUp"               → Phase 5 ClickUp push
"Morning briefing"                              → today's tasks across all active campaigns
"Close [campaign name]"                         → close protocol + log
"Campaign status"                               → list all active campaigns
```

### Design

```
"Design brief — [brand] — [asset type] — [objective]"
"Visual concept only — [brand] — [asset type]"
"AI image prompt — [brand] — [description]"
"Canva brief — [brand] — [asset type]"
"New brand design brief — [brand name]"
```

### Programming

```
"Session card for [client]"
"Week block for [client]"
"Group class week"
"Cycle for [client] — [goal]"
"Weekly briefing for [client]"
"Weekly feedback for [client]"
"Recovery session for [client]"
```

### Nutrition

```
"Nutrition plan for [client]"
"Intake for [client]"
"Macros for [client]"
"Grocery list for [client]"
```

### Client

```
"Add new client [name] — [service type]"
"Update client record for [client]"
"Discovery call for [name]"
"Check-in for [client]"
"Log this session to memory"
```

### System

```
"What's in the system?"         → reads README.md
"What's been decided?"          → reads decisions-log.md
"What's now?"                   → reads STATE.md
"What's next on the build?"     → reads PROGRESS.md
"What brand are we in?"         → Claude asks if unclear
```

---

## 13. Full File Map

```
Project Jnoah/
│
├── AGENTS.md                         Codex authority file
├── CLAUDE.md                         Claude/Cowork authority file
├── STATE.md                          Current-state board
├── CHATS.md                          Chat model and start/end rituals
├── ROUTER.md                         Task routing → engines, brands, skills
├── README.md                         System overview
├── PROGRESS.md                       Build phase tracker
├── HOW-TO-USE.md                     This file
│
├── BRANDS/
│   ├── restart-fitness-ph.md         Locked brand identity — Restart Fitness PH ✅
│   ├── restart-fitness-ph-design-brief.md  Visual shortcut — colors, type, layout rules ✅
│   └── urban-strong.md               Old Urban Strong reference — URBN pending
│
├── ENGINES/
│   ├── research/
│   │   └── research-engine.md        5-layer research, drop zone, INDEX, token-saving ✅
│   ├── coach-jap/
│   │   ├── training-program.md       Format A/B, block order, notation locks, refusals ✅
│   │   ├── nutrition-plan.md         Intake, macros, 9-section output, QA checklist ✅
│   │   └── wod-brain.md              Movement vocabulary, warm-ups, metcon formulas ✅
│   ├── content/
│   │   ├── post-routing.md           C/C/V classification, 8 pillars, weekly framework ✅
│   │   ├── social-post.md            Platform rules, caption templates, content-log ✅
│   │   └── blog-post.md              Hook→science→action→close, brand check, content-log ✅
│   ├── design/
│   │   ├── carousel.md               Slide structure, hook rules, Canva refs, content-log ✅
│   │   └── design-brief.md           4-part brief, wireframe, AI prompt, Canva/Figma ✅
│   ├── marketing/
│   │   └── campaign.md               5-phase campaign orchestrator, ClickUp integration ✅
│   ├── client/
│   │   ├── client-onboarding.md      9-stage pipeline from DM to first session ✅
│   │   ├── discovery-call.md         5-section call framework, qualification, close scripts ✅
│   │   ├── check-in.md               Weekly form, CONTINUE/ADJUST/SWAP/ESCALATE system ✅
│   │   ├── client-agreement.md       One-page agreement template ✅
│   │   ├── client-profile.md         Schema for all client records ✅
│   │   ├── program-only-flow.md      Program-only client rules and assessment protocol ✅
│   │   └── handoff-trainerize.md     Intake → profile, check-in → log, session → assessment ✅
│   └── sales/
│       └── offer-engine.md           Service ladder, pricing, positioning, discovery handoff ✅
│
├── RESEARCH/                         Upstream data layer — feeds all engines
│   ├── INDEX.md                      Master topic manifest — check before every research run
│   └── [topic-slug]/
│       ├── RAW/
│       │   ├── [topic]-research.md   Engine raw output — unfiltered
│       │   ├── links.txt             Drop URLs here before researching
│       │   └── [any dropped files]   PDFs, NotebookLM exports, notes
│       └── [topic]-BRIEF.md          Clean production copy — generated on demand
│
├── MEMORY/
│   ├── decisions-log.md              One line per decision — grows each session
│   ├── content-log.md                One entry per content piece published
│   ├── post-mortem-phase8.md         Full system audit — 15 issues, fix log
│   └── clients/
│       ├── registry.md               All active clients in one table
│       └── [client-name]/
│           ├── [client-name].md      Active client record
│           ├── references/           Raw files, photos, intake docs, old programs
│           └── check-ins/            Weekly check-in logs
│
├── GLOBAL/
│   └── anti-ai-output-rules.md       Banned words, sentence patterns, 10-rule protocol ✅
│
├── OUTPUTS/
│   ├── blog/                         YYYY-MM-DD-slug.md
│   ├── carousel/                     YYYY-MM-DD-brand-topic.md
│   ├── design/                       YYYY-MM-DD-brand-topic/
│   ├── campaigns/                    [campaign-slug]/brief.md + calendar.md + copy/ + archive/
│   ├── programs/
│   │   ├── [client-name]/            YYYY-MM-DD-session.md
│   │   └── group-class/              YYYY-MM-DD-week-X-day-X.md
│   ├── nutrition/                    [client-name]/YYYY-MM-DD-plan.md
│   └── web/                          page-name.md
│
├── Raw-Files/
│   ├── design-reference-raw/         Logos, carousels, posts, stories, templates, fonts
│   │   ├── logos/                    All Restart PH logo variants
│   │   ├── carousels/                Published carousel reference sets
│   │   ├── posts/                    Single post references
│   │   ├── stories/                  Story frame references and templates
│   │   ├── templates/                Base Canva templates (light + dark editorial)
│   │   ├── Core Purpose/             Brand philosophy visual reference slides
│   │   └── 06_Media/                 Photography + video assets
│   └── [source documents]            Pricing source of truth, nutrition handoff, etc.
│
├── .agents/
│   └── skills/                       Codex skill mirror
└── .claude/
    └── skills/                       Claude/Cowork skill mirror
```

**Legend:** ✅ Live and tested · ⚠️ Active flag / under review · 🔲 Planned (Phase 9)

**Current live additions:** Sales, offer, web/Wix, research, goals, campaign performance, and cockpit systems are now live. Use `STATE.md` for the active board.

---

*Project Jnoah — built May 2026. Current state lives in STATE.md. One folder. One source of truth.*
