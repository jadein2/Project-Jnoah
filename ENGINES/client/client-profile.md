# Client Profile Engine

The schema for every client record in /MEMORY/clients/[name]/[name].md.

Source: Coach Jap system design session — 2026-05-19

---

## What this file is

This is the schema spec and usage guide for client profile records. Every client file follows this structure exactly — same field names, same section order, same table formats. Consistency is what makes Claude readable and Wix CMS exportable later.

---

## Design principle

Every field in this schema serves two masters:
1. **Claude today** — reads this file to understand who the client is, what they can do, and what's happened so far before generating any output
2. **Wix CMS later** — each section maps to a CMS collection field, making export a copy-paste, not a rebuild

Fields that cannot be filled yet use `—` (a single dash). Never leave a field blank — always mark it explicitly. This keeps the structure consistent for future parsing.

---

## Schema (copy this for every new client)

---

```
# [FULL NAME]

## PIPELINE STATUS
Status: [LEAD / DISCOVERY / INVOICED / ACTIVE / RENEWAL / PAUSED / CLOSED]
Start Date: [YYYY-MM-DD or —]
Current Cycle End: [YYYY-MM-DD or —]
Last Invoice Date: [YYYY-MM-DD or —]
Client Since: [YYYY-MM-DD or —]

---

## PERSONAL PROFILE
Full Name: [Legal name]
Preferred Name / Nickname: [What they go by]
Age: [Number]
Date of Birth: [YYYY-MM-DD or —]
Sex: [M / F / —]
Height: [cm or ft/in]
Nationality: [—]
Location: [City, Country]
Email: [—]
Contact Number: [—]
Emergency Contact: [Name + number or —]
Communication Channel: [Trainerize / WhatsApp / DM — pre-onboarding only]

---

## SERVICE PROFILE
Service Tier: [Personal Training / Online Program Only / Group Class / Hybrid]
Program Name: [90-Day Coaching System / 6FIX / Custom / —]
Session Frequency: [X sessions/week or —]
Session Days: [Mon/Wed/Fri or —]
Training Environment: [Urban Strong / Home / Commercial Gym / CrossFit / —]
Equipment Access Flag: [Full Access / Limited Access]
Equipment List: [Full gym — or itemized list from questionnaire if Limited Access]
Brand: [Restart Fitness PH / Urban Strong]

---

## HEALTH PROFILE
Medical Conditions: [List or None]
Medications: [List or None]
Previous Injuries: [List with body part and status — healed / ongoing / —]
Movement Limitations: [List or None]
Pain Points (current): [List or None]
Cleared for Training: [Yes / Pending assessment / No — reason]

---

## BASELINE ASSESSMENT
Assessment Date: [YYYY-MM-DD or —]
Assessment Method: [In-person / Call / Trainerize intake / —]

### Strength Baseline
| Movement | Load / Result | Notes |
|---|---|---|
| Back Squat | — | — |
| Deadlift / RDL | — | — |
| Bench Press / DB Press | — | — |
| Overhead Press | — | — |
| Pull-up / Row | — | — |
| Other | — | — |

### Conditioning Baseline
| Test | Result | Notes |
|---|---|---|
| 400m Run | — | — |
| 500m Row | — | — |
| Air Bike (cal/min) | — | — |
| Other | — | — |

### Movement Quality Notes
[Brief coach notes on movement quality, posture, compensations, or anything flagged at assessment. Or "—"]

---

## BODY METRICS (tracked over time)
| Date | Weight (kg) | Body Fat % | Waist (cm) | Hips (cm) | Notes |
|---|---|---|---|---|---|
| — | — | — | — | — | Starting point |

*Add one row per measurement date. Measurements are optional — only track what the client consents to and what serves the goal.*

---

## PR TRACKER
| Movement | PR | Date | Notes |
|---|---|---|---|
| — | — | — | — |

*Update after test-out sessions or any confirmed personal record.*

---

## NUTRITION PROFILE
On a Nutrition Plan: [Yes / No]
Plan File: [/OUTPUTS/nutrition/[name]/YYYY-MM-DD-plan.md or —]
TDEE: [kcal or —]
Daily Target: [kcal or —]
Macro Split: [P/C/F grams or —]
Goal: [Fat loss / Recomp / Performance / —]
Diet Notes: [Allergies, preferences, restrictions or —]

---

## CYCLE HISTORY
| Cycle | Goal | Duration | Outcome | Decision |
|---|---|---|---|---|
| 1 | — | — | — | — |

*Decision options: RENEWED / UPGRADED / PAUSED / CLOSED*

---

## GOAL PROFILE
Primary Goal: [One sentence]
Secondary Goal: [One sentence or —]
Motivation (root): [What's driving this — from discovery call or intake]
Success Marker: [What does "done" look like for them — specific and measurable]
Deadline / Event: [Date or event or —]

---

## ACTIVE RECORD
Current Cycle Goal: [Outcome + process + timeframe]
Current Phase / Week: [Phase X / Week X of Y]
Current Program File: [/OUTPUTS/programs/[name]/YYYY-MM-DD-program.md or —]
Last Session Date: [YYYY-MM-DD or —]
Last Check-In Date: [YYYY-MM-DD or —]
Last Decision Tag: [CONTINUE / ADJUST / SWAP / ESCALATE or —]
Last Monthly Review: [YYYY-MM-DD or —]

---

## COACH NOTES
[Running notes from Coach Jap — observations, coaching flags, anything not captured in the structured fields. Newest at top. Date each note.]
```

---

## Wix CMS field mapping

When you build the Wix `Clients` collection, each schema section maps directly:

| Schema section | Wix field type |
|---|---|
| Pipeline Status | Reference (dropdown) |
| Personal Profile | Text fields |
| Service Profile | Reference + Text |
| Health Profile | Long text (private — no client access) |
| Baseline Assessment | Rich text or nested collection |
| Body Metrics | Repeating dataset (date-keyed rows) |
| PR Tracker | Repeating dataset |
| Nutrition Profile | Reference to Nutrition Plans collection |
| Cycle History | Repeating dataset |
| Goal Profile | Long text |
| Active Record | Text + date fields |
| Coach Notes | Long text (private) |

**Privacy rules for Wix:**
- Health Profile and Coach Notes: coach-only (never expose to client-facing page)
- Body Metrics: client-visible only if client has opted in
- PR Tracker, Cycle History, Active Record: client-visible (their own dashboard)
- Pipeline Status: coach-only

---

## Equipment Access Flag — rules

**Full Access** — client trains at a fully equipped commercial gym, CrossFit facility, or Urban Strong. Has access to: barbell, rack, cables, machines, rower, bike, ski erg, sled/tank, dumbbells, kettlebells, pull-up bar, plyo boxes. Use Full Access unless the client or Jap specifies otherwise.

**Limited Access** — client has a restricted equipment set (home gym, building gym, specific facility with known gaps). Must have an itemized Equipment List populated in the profile before any program is built.

**Default rule:** If the client's training environment is not specified at intake, default to Full Access. Do not run the questionnaire unless Jap confirms the client is in a limited setup.

---

## Limited Equipment Questionnaire

Trigger this questionnaire when Equipment Access Flag = Limited Access and Equipment List is not yet populated. Ask all questions before creating the profile or building any session.

```
EQUIPMENT ACCESS — [CLIENT NAME]

1. Barbell + rack available? (Yes / No)
2. Dumbbells available? (Yes / No — if yes, what weight range? e.g. 5–50lbs)
3. Kettlebells available? (Yes / No — if yes, what sizes? e.g. 8kg, 16kg, 24kg)
4. Pull-up bar available? (Yes / No)
5. Bench available? (Yes / Adjustable / Flat only / No)
6. Resistance bands available? (Yes / No)
7. Plyo box or step available? (Yes / No — if yes, what height?)
8. Cardio equipment? (None / Bike / Rower / Ski Erg / Treadmill / Air Runner — circle all that apply)
9. Machines available? (None / Leg Press / Cable Station / Smith Machine / Other — list)
10. Any other equipment worth noting? (Jump rope, sled, battle ropes, TRX, etc.)
```

Log answers directly into the Equipment List field. Use plain text, comma-separated. Example:
`Barbell + rack, Dumbbells 5–50lbs, KB 8/16/24kg, Pull-up bar, Flat bench, Bands, 20in plyo box, No cardio equipment, No machines`

---

## How to create a new client profile

**Say:** "Add new client [name] — [service tier]"

Claude will:
1. Check training environment — if limited setup is indicated, run the Limited Equipment Questionnaire before proceeding
2. Create `/MEMORY/clients/[name]/` folder
3. Create `[name].md` using this schema — filled where intake data is available, `—` elsewhere
4. Set Equipment Access Flag: Full Access (default) or Limited Access + Equipment List if questionnaire was run
5. Create `references/_index.md` and `check-ins/_index.md` placeholders
6. Add one row to `/MEMORY/clients/registry.md`

**Say:** "Update client profile for [name]" to add new data to any section.

---

## How to update after a session or check-in

After each session or check-in, Claude updates:
- `Active Record` — current phase/week, last session date, last check-in, decision tag
- `Body Metrics` — if measurements were taken
- `PR Tracker` — if a PR was hit
- `Coach Notes` — any observation worth keeping

After each cycle close:
- `Cycle History` — add one row with outcome and decision
- `Pipeline Status` — update to RENEWAL, PAUSED, or CLOSED

---

## Last updated
2026-05-23 — Equipment Access Flag + Limited Equipment Questionnaire added to schema and creation flow.
2026-05-19 — built from Coach Jap system design session.
