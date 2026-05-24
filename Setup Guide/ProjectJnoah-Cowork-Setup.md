# Project Jnoah — Complete Build Guide

Master reference. All phases, all instructions, in order.

**Container:** Claude Cowork (Claude Desktop)
**Architecture:** Hybrid — OS v2 layer structure + Jnoah Engine naming
**Brands in scope:** Restart Fitness PH (locked) · Urban Strong (Phase 2b, deferred)
**Owner:** Japhet "Coach Jap" Felipe

---

> ## ⚠️ CANONICAL LOCATION — read first
>
> As of **2026-05-24**, the live system lives at **`C:\Jnoah\vault`**. This is the only source of truth.
>
> The old `~/Documents/ProjectJnoah/` (OneDrive) folder is **LEGACY — a frozen backup**. Do not edit it or point Cowork at it; it will drift out of sync.
>
> **Anywhere this guide says `~/Documents/ProjectJnoah/`, read it as `C:\Jnoah\vault`.** The Cowork project should point at `C:\Jnoah\vault` with Read + Write. The companion dashboard app ("Jnoah OS") lives separately at `C:\Jnoah\jnoah-os-app` and is run via terminal, not Cowork. See /MEMORY/projects/jnoah-os-interface.md for the full migration record.

---

## Build status at a glance

| Phase | Name | Status |
|---|---|---|
| 1 | Foundation | ✅ Complete |
| 2a | Brand — Restart Fitness PH | ✅ Complete |
| 2b | Brand — Urban Strong | ⏳ Deferred |
| 3 | Priority Engines | 🔲 Next |
| 4 | Skills Layer | 🔲 Pending |
| 5 | First Real-Use Validation | 🔲 Pending |
| 6 | Expansion | 🔲 Later |

---

---

# PHASE 1 — Foundation ✅

## What was built

```
ProjectJnoah/
├── CLAUDE.md                        Identity + universal rules
├── ROUTER.md                        Task routing switchboard
├── README.md                        System overview
├── PROGRESS.md                      Build tracker
├── GLOBAL/
│   └── anti-ai-output-rules.md      Global copy and design filter
├── MEMORY/
│   ├── decisions-log.md             Initialized
│   └── content-log.md              Initialized
└── OUTPUTS/ + ENGINES/ + BRANDS/ + .claude/   Folder skeleton (empty)
```

## Cowork setup (one-time, already done)

### Global Instructions
Settings → Cowork → Edit Global Instructions → paste:

```
You are working with Japhet Felipe — Coach Jap — CEO and head coach
of Urban Strong Fitness in Olongapo, Philippines, and founder of
Restart Fitness PH (online coaching). Two brands. One operator.

Before every session:
1. Read CLAUDE.md first
2. Read ROUTER.md to understand how to route the task
3. Load the relevant brand file from /BRANDS/ based on the task
4. Load the relevant engine file from /ENGINES/ based on the task
5. Apply any matching skill from /.claude/skills/

Then:
- Never use the word "tailored" anywhere
- Avoid AI-sounding language in all client-facing output
- Lead with outcomes, not program names, in cold-traffic copy
- Do not invent brand rules — read the brand file first
- Present multiple options before committing to a final direction
- Ask for brand clarification if it is not obvious from the task

Default brand when unclear: Restart Fitness PH
Default tone: casual-but-professional peer. Match response
length to the subject.

When finished with any output, log a one-line entry to
/MEMORY/decisions-log.md.
```

### Cowork Project setup
1. Cowork → New Project → name: `Project Jnoah`
2. Point at `C:\Jnoah\vault`  (NOT the legacy `~/Documents/ProjectJnoah/` — see banner above)
3. Grant Read + Write
4. Project-level instructions → paste:

```
This is Project Jnoah — modular business OS for Urban Strong Fitness
and Restart Fitness PH.

Load order on every task:
1. CLAUDE.md
2. ROUTER.md
3. /BRANDS/[relevant].md
4. /ENGINES/[relevant]/
5. /.claude/skills/

Output destinations:
- Blogs → /OUTPUTS/blog/YYYY-MM-DD-slug.md
- Carousels → /OUTPUTS/carousel/YYYY-MM-DD-brand-topic.md
- Programs → /OUTPUTS/programs/[client]/
- Nutrition → /OUTPUTS/nutrition/[client]/
- Designs → /OUTPUTS/design/YYYY-MM-DD-brand-topic/

After every output: append one line to /MEMORY/decisions-log.md
Format: YYYY-MM-DD — [TYPE] — short description

If an engine file is missing, say so. Do not improvise.
```

5. Activate connectors inside the Project: Canva · ClickUp · Google Drive · Wix

### Verification test
Paste this into Project Jnoah in Cowork:

```
Read CLAUDE.md, ROUTER.md, and PROGRESS.md. Tell me:
1. Current build phase
2. What files are missing before production work can happen
3. Route this — do not produce output yet:
   "Design a 7-slide Restart Fitness PH carousel about why people
   quit their fitness routine after 4 weeks."
   — Which engine? Which brand file? Which skills fire?
```

**Pass criteria:** Names Phase 2 correctly, names missing engine files, routes to Design Engine + restart-fitness-ph.md + ui-ux-design-pro + anti-ai-copywriter.

---

---

# PHASE 2 — Brand Identity ✅ / ⏳

## 2a — Restart Fitness PH ✅ Complete

**File:** `/BRANDS/restart-fitness-ph.md`
**Source:** `RESTART-FITNESS-PH-SOURCE-OF-TRUTH.md` v1.0 (locked)

### Key corrections applied in this phase

These override anything from older docs, old prompts, or prior memory:

| Was | Now (locked) |
|---|---|
| The Restart Method | **The Restart Fitness System** |
| The Restart Method 90 | **90-Day Coaching System** (public) |
| Bodoni Italic + Helvetica Bold | **Cormorant Garamond Italic + DM Sans** |
| Busy adults / busy people | **People** (audience word) |
| DM RESTART | **DM "RESTART"** (quotes always) |
| Primary CTA: DM RESTART | Website → Book a Discovery Call · Social → DM "RESTART" |
| 6-FIX | **6FIX** (no hyphen) |
| Urban Strong as standalone brand | Urban Strong is publicly the local in-person coaching facility under Restart Fitness PH |

### What the brand file contains

- Brand essence, positioning, names table
- Coaching philosophy + four pillars (Training · Nutrition · Habits · Accountability)
- Voice rules + tone by platform
- Full language rules: always-use list + hard ban list
- Approved brand lines + message angles
- CTA system (website vs social)
- Full color palette — 14 tokens with hex codes
- Typography stack — Cormorant Garamond Italic + DM Sans, full type scale
- Layout and spacing (8px grid, spacing scale, golden ratio)
- Platform specs — Canva, Wix Studio, Google Slides sizes
- Social post templates A / B / C
- Logo and wordmark rules
- Photography direction
- Full QA checklist (visual + copy + platform)
- Quick reference card

### Additional files updated in Phase 2a

- `CLAUDE.md` — Restart naming corrected, Restart-specific bans added
- `GLOBAL/anti-ai-output-rules.md` — expanded with fitness hype bans (grind, beast mode, shred fast, detox, summer body, etc.)

---

## 2b — Urban Strong ⏳ Deferred

**File to build:** `/BRANDS/urban-strong.md`
**Status:** Skipped. Resume when Urban Strong brand doc is ready to upload.

**What to do when ready:**
1. Upload the Urban Strong brand doc into the chat
2. Claude extracts identity, voice, design direction, offer structure, blog CTA, and builds the brand file
3. ROUTER.md gets updated with any Urban Strong-specific routing cues that differ from current file

---

---

# PHASE 3 — Priority Engines 🔲

Engine files are workflow templates. They tell Claude exactly how to structure and format each output type. This is where the two supporting docs uploaded in Phase 2 get converted into active engine files.

**Source files already uploaded (use these in Phase 3 builds):**
- `restart_fitness_ph_content_brain_architecture.md` → Content engines
- `social_media_content_design_ruleset.md` → Design + Content engines

---

## Engine 1 — Coach Jap: Training Program

**File:** `/ENGINES/coach-jap/training-program.md`

### What to include

**Programming format:**
```
Warm-Up → Strength → Core → Conditioning → Mobility / Cooldown
```

**Warm-up format:**
```
Dynamic Warm-Up
Sets x Movement
Sets x Movement
Sets x Movement
```

**Conditioning format:** left-to-right, reps first
```
12 Cal Row / 10 KB Swings / 8 Box Jumps
```

**Strength format:** RPE-based, not percentage-based
```
Back Squat
4 x 5 @ RPE 7–8
Rest 2:30 between sets
```

**Defaults:**
- Knee-safe bias on all lower body work
- RPE over percentage — always
- Conditioning written for time or AMRAP, stated explicitly
- Rest periods stated on strength work, not conditioning
- Movement standards noted when cuing matters (e.g. "below parallel," "full lock-out")

**Cooldown format:**
```
Static Cooldown
:45 Movement
:45 Movement
:45 Movement
```

**When building this engine file, include:**
- Full warm-up/cooldown format with example
- Strength block format with RPE table reference
- Conditioning block format — for time vs AMRAP vs EMOM grammar
- Knee-safe movement substitution list
- Client programming variables (goal, level, days/week, equipment)
- Program output structure (week-by-week, not session dump)
- QA checklist before handing off any program

---

## Engine 2 — Coach Jap: Nutrition Plan

**File:** `/ENGINES/coach-jap/nutrition-plan.md`

### What to include

**Output format — Aira 7-day plan standard:**
- 7 full days of meals (breakfast, lunch, dinner, snacks)
- Each meal: food items + portion in grams or pieces
- Recipes section — any non-obvious meal has a recipe card
- Batch-cook prep section — what to cook ahead, in what order
- Grocery list — organized by category, with weights and pieces
- QA check before finalizing (calories, protein target, practical feasibility)

**When building this engine file, include:**
- Client intake variables (weight, goal, activity level, food preferences, allergies)
- Macro framework — how to set targets per client profile
- 7-day format template with blank fields
- Recipe card template
- Batch-cook prep format
- Grocery list format (organized: protein · carbs · vegetables · fats · pantry)
- QA checklist

---

## Engine 3 — Design: Carousel

**File:** `/ENGINES/design/carousel.md`
**Source:** `social_media_content_design_ruleset.md` (uploaded Phase 2)

### What to include

**Carousel anatomy — 7 slides default:**

| Slide | Role | Rules |
|---|---|---|
| 1 — Hook | Stop the scroll | One dominant headline. No more than 7 words. Must pass the 2-second test. Brand mark present. |
| 2 — Problem | Name the pain | Short. Real. Specific. Not vague. |
| 3 — Reframe | Shift perspective | One idea. One contrast. |
| 4–5 — Body | Deliver value | One point per slide. No walls of text. |
| 6 — Proof / Bridge | Make it credible | Result, stat, client outcome, or system logic. |
| 7 — CTA | One clear ask | DM "RESTART" for Restart PH. Book a Free Assessment for Urban Strong. |

**The 2-second test:**
Cover slides 2–7. If slide 1 does not communicate the main idea and create a reason to swipe in under 2 seconds — rewrite slide 1.

**Platform specs:**
- IG Square: 1080 × 1080px
- IG Portrait: 1080 × 1350px (default for Restart PH)
- FB Post: 1200 × 630px

**Caption structure:**
- Line 1: Hook (pull from slide 1 or stronger version of it)
- Lines 2–4: Support (expand the carousel's main idea briefly)
- Line 5: CTA
- Hashtags: 3–5, below the CTA, not in the body

**Design rules (apply Restart brand file on top):**
- One dominant element per slide
- Hierarchy visible — headline, support, CTA in clear order
- No gradient
- Orange for CTA or one emphasis word only
- Gold for results/proof slides only
- Never orange and gold on the same element
- Cormorant Garamond Italic for headlines
- DM Sans for body and labels
- 64px margin from edge (Canva canvas)

**When building this engine file, include:**
- Slide-by-slide grammar (above table, expanded)
- 2-second test protocol
- Hook formula bank (pulled from content_brain_architecture.md)
- Caption template per platform
- Design spec checklist
- Common mistakes and fixes

---

## Engine 4 — Content: Blog Post

**File:** `/ENGINES/content/blog-post.md`

### What to include

**Structure — locked:**
```
Hook → Science / Reason → Action Steps → Motivational Close → CTA
```

**Format rules:**
- Under 550 words
- 5 persuasive bullets inside the action steps section
- One CTA at the end: Book a Free Assessment at urbanstrongfit.com/book-free-assessment
- Default brand: Urban Strong (blogs live on Urban Strong unless specified otherwise)
- Audience: cold traffic, busy adults 28–45 in Olongapo and surrounding area

**Hook types to use:**
- Contrarian statement ("You don't need motivation. You need a system.")
- Specific statistic or number ("Most people quit their program in week 3. Here's why.")
- Direct problem naming ("You've tried eating less and working out more. It didn't stick.")

**Science section:** One clear reason — physiological, behavioral, or psychological — that explains the problem or opportunity. No jargon. 2–3 sentences max.

**Action steps section:** 3–5 steps. Each step in a bullet. Each bullet 1–2 sentences. Specific, not vague ("Track your protein for 7 days" not "Pay attention to your nutrition").

**Motivational close:** 2–3 sentences. Calm authority. Not hype. Ends with a bridge to the CTA.

**CTA:** Always the same for Urban Strong blog:
```
Ready to stop guessing? Book your Free Assessment at urbanstrongfit.com/book-free-assessment
```

**When building this engine file, include:**
- Full format template with placeholder sections
- Hook formula bank (3 types with examples)
- Science section guidance
- Action steps grammar (verb-first bullets)
- Motivational close examples
- CTA rules (Urban Strong only, never Restart PH on blog)
- QA checklist (word count, bullet count, CTA present)

---

## Engine 5 — Content: Social Post

**File:** `/ENGINES/content/social-post.md`
**Source:** `restart_fitness_ph_content_brain_architecture.md` + `social_media_content_design_ruleset.md`

### What to include

**Post classification — use this to decide tone and structure before writing:**

| Type | Purpose | Ratio target |
|---|---|---|
| Conversion | Drive DMs, Discovery Calls, sign-ups | 30% of content |
| Connection | Build trust, share POV, coach voice | 40% of content |
| Value | Educate, useful standalone post | 30% of content |

**Caption length by platform:**

| Platform | Target length | Notes |
|---|---|---|
| Instagram | 150–300 words | Hook → body → CTA. Hashtags below. |
| Facebook | 100–200 words | Shorter. More direct. Can link out. |
| Threads | 3–5 sentences | Opinionated. Punchy. No hashtags needed. |

**Hook formula bank (for social posts):**
- Pattern interrupt: "Stop [common behavior]. Start [better behavior]."
- Specific number: "I've coached [X] people who all made the same mistake."
- Contrarian take: "The best workout isn't the hardest one."
- Direct problem: "You're not inconsistent. You just don't have a system."
- Result first: "One of my clients lost 8kg in 12 weeks. Here's the only thing we changed."

**Caption structure:**

```
Line 1: Hook — no more than one sentence. No period at end (stops the truncation).

Lines 2–4: Body — expand the hook. One idea. Specific. Real.

Line 5: CTA — one clear action. DM "RESTART" or Book a Discovery Call.

[blank line]
Hashtags: 3–5 only. Below the body. Not inside it.
```

**Banned caption structures:**
- Starting with "In today's world..."
- Starting with "Are you tired of..."
- Ending with "Drop a 🔥 if you agree"
- Three or more consecutive single-sentence lines formatted as fake bullets
- Asking a question in every single post (overused)

**DM reply protocol:**
- First DM response: acknowledge, ask one qualifying question, do not pitch immediately
- After qualifying: present the system (Restart Fitness System or 6-Week Reset) briefly
- Discovery Call CTA: "Let's get on a quick call — Book at restartfitnessph.com/start"
- Tone: warm coach, not eager salesperson

**When building this engine file, include:**
- Full classification system (Conversion / Connection / Value) with routing logic
- Caption template per platform with fill-in-the-blank structure
- Hook formula bank (10+ formulas with examples)
- DM reply protocol (first reply, qualifying, close)
- Hashtag sets (pre-approved for Restart PH and Urban Strong)
- QA checklist (type, platform, hook strength, CTA present, no banned phrases)

---

## How to build Phase 3 files

For each engine file above, use this prompt in Project Jnoah in Cowork:

```
Build /ENGINES/[folder]/[filename].md

Use the structure and rules from this guide (Phase 3 section).
Also read:
- CLAUDE.md for universal rules
- /BRANDS/restart-fitness-ph.md for Restart-specific rules
- [source doc name] if it applies to this engine

Produce a complete engine file with:
- Purpose statement
- Full format template
- All sub-rules and grammar notes
- Examples where useful
- QA checklist at the bottom

Save to /ENGINES/[folder]/[filename].md
Log to /MEMORY/decisions-log.md when done.
```

Build order recommendation: carousel.md → social-post.md → training-program.md → blog-post.md → nutrition-plan.md

**Trigger for Phase 3 complete:** All five engine files exist, each with a full template + QA checklist. Run one test output per engine (without publishing) to confirm structure is correct.

---

---

# PHASE 4 — Skills Layer 🔲

Skills are craft expertise files that auto-fire when a task type matches. They live in `/.claude/skills/` as folders, each containing a `SKILL.md` file.

Skills are brand-agnostic. They carry universal craft. Brand files carry brand-specific truth. They compose — skills fire on top of brand files, never instead of them.

---

## Skill 1 — UI/UX Design Pro

**File:** `/.claude/skills/ui-ux-design-pro/SKILL.md`

```yaml
---
name: ui-ux-design-pro
description: Use when designing any visual output — carousel, poster, social
  post graphic, web layout, slide deck, email header, or any marketing creative.
  Applies senior product design judgment including visual hierarchy, type scale,
  color theory, whitespace, accessibility, and platform constraints.
---

# UI/UX Design Standards

## Before designing anything
- Check the brand file for locked palette, typography, voice
- Confirm target platform and exact canvas size
- Identify if this is cold-traffic (lead with outcome) or warm audience (lead with system)
- One dominant visual element per composition — decide what it is before touching layout

## Hierarchy rules
- One dominant element per composition. One.
- Type scale minimum 1.25 ratio between heading levels
- Whitespace is structure, not absence. Use it deliberately.
- The eye should land on the headline within 0.5 seconds
- Every element should either be essential or removed

## Color discipline
- Apply brand color system exactly — no improvised palette additions
- Orange = action or single emphasis word only
- Gold = proof, results, authority only
- Never orange and gold on the same element (Restart PH rule)
- No gradients. Ever. Flat color only.
- Two dominant colors maximum per asset

## Typography discipline
- Cormorant Garamond Italic for Restart PH headlines (never upright)
- DM Sans for body, labels, UI — 300 / 400 / 500 only
- Never mix more than two font weights in a single layout
- Generous line height — editorial, not compressed

## The 2-second test
Cover the text. Ask: does the visual communicate what it is about?
Cover the visual. Ask: does the headline work alone?
If either fails — redesign before finishing.

## Anti-AI design tells — avoid these
- Everything centered with no clear hierarchy
- Generic gradient background
- Three-icon feature row ("Train · Eat · Recover")
- Stock-photo aesthetic
- Decorative divider lines everywhere
- Every section the same visual weight
- Round pill buttons
- Drop shadows on everything

## Platform constraints
- IG Portrait (1080 × 1350px): safe zone 64px from all edges
- IG Square (1080 × 1080px): same margins
- Wix Studio: 96px vertical / 40px horizontal section padding
- All text must be readable at 50% thumbnail size before going to full view
```

---

## Skill 2 — Anti-AI Copywriter

**File:** `/.claude/skills/anti-ai-copywriter/SKILL.md`

```yaml
---
name: anti-ai-copywriter
description: Use when writing any client-facing copy — captions, blog posts,
  web copy, DM replies, carousel slide text, email subject lines, ad copy,
  or any text Jap might publish. Kills AI tells and enforces direct coach voice.
---

# Anti-AI Copy Standards

## Before writing anything
- Read the relevant brand file for voice rules and banned phrases
- Identify the post type: Conversion / Connection / Value
- Identify the platform and adjust length and tone accordingly
- Confirm the one CTA for this piece

## Sentence discipline
- One idea per sentence
- Shorter sentences beat longer ones — default under 18 words
- Use contractions always ("you're" not "you are" in copy)
- Open with the point — no throat-clearing openers
- End on the CTA or a concrete next step — never a motivational sign-off

## Banned structures
- "In today's fast-paced world..." — delete
- "Whether you're a X or a Y..." — delete
- "It's important to note that..." — delete
- "Let's talk about..." — delete
- "Here's the thing —" — overused, delete
- Three-word triplet for effect ("Stronger. Faster. Healthier.") — only if you have one truly strong word
- Vague verb + "your goals" ("achieve your goals") — always replace with the specific result

## Voice checklist
- Reads like a coach talking to a smart adult?
- Specific numbers, specific timeframes, specific movements?
- Calm authority — confident without hype?
- Could a competitor put their logo on this and it still works? → too generic, rewrite
- Does the first sentence make someone want to read the second? → if not, rewrite

## Pre-publish filter
1. Any banned word from GLOBAL/anti-ai-output-rules.md? → kill it
2. Any sentence that could be deleted without losing meaning? → delete it
3. Any vague verb (achieve, optimize, maximize, leverage)? → replace with the specific action
4. Any sentence over 25 words? → break it
5. Does the last line drive one clear action? → if not, fix the CTA
```

---

## Skill 3 — Coach Jap Programming Format

**File:** `/.claude/skills/coach-jap-programming-format/SKILL.md`

```yaml
---
name: coach-jap-programming-format
description: Use when writing any training program, workout, WOD, warm-up,
  cooldown, or movement prescription. Applies Coach Jap's exact programming
  grammar, RPE bias, knee-safe defaults, and format rules.
---

# Programming Format Standards

## Session structure — always this order
Warm-Up → Strength → Core → Conditioning → Mobility / Cooldown

Never skip or reorder. If a section is not needed, note "N/A — not included this session."

## Warm-up format
```
Dynamic Warm-Up
2 x 10 Cat-Cow
2 x 10 World's Greatest Stretch (per side)
2 x 15 Banded Glute Bridge
2 x 10 Scap Push-Up
```
Sets × Reps format. No em-dash. No bullets. One movement per line.

## Strength format
```
Back Squat
4 × 5 @ RPE 7–8
Rest 2:30 between sets
```
RPE range, not percentage. Rest always stated. Rep scheme before sets (5 × 3, not 3 × 5 — reps are the variable, sets are the container).

## Conditioning format — left to right, reps first
```
For Time:
3 Rounds
15 Cal Row / 12 KB Swings (24/16kg) / 9 Box Jumps (24/20")
```
Reps-first always. Slash-separated, not comma-separated. Weights and heights in parentheses after movement.

## Core format
```
Core
3 × :30 Hollow Hold
3 × 10 Dead Bug (alternating)
3 × 15 Pallof Press per side
```

## Cooldown format
```
Static Cooldown
:60 Pigeon Pose (per side)
:60 Seated Forward Fold
:45 Doorway Chest Stretch (per side)
:30 Child's Pose
```
Time-based, not reps. Per side noted when relevant.

## Knee-safe defaults
- No deep knee flexion without explicit client clearance
- Substitute box squats for full squats when in doubt
- Step-ups over box jumps for conservative programming
- Romanian Deadlift over conventional when loading the posterior chain for knee-limited clients
- No running-based conditioning without checking knee history

## RPE reference
| RPE | Feel |
|---|---|
| 6 | Could do 4+ more reps |
| 7 | Could do 2–3 more reps |
| 8 | Could do 1–2 more reps |
| 9 | Could do 0–1 more rep |
| 10 | Max effort |

Strength work: RPE 7–8 as default. Deload weeks: RPE 6–7.
```

---

## How to install Skills in Cowork

1. Navigate to `~/Documents/ProjectJnoah/.claude/skills/`
2. Create a folder for each skill: `ui-ux-design-pro/`, `anti-ai-copywriter/`, `coach-jap-programming-format/`
3. Inside each folder, create a file named `SKILL.md`
4. Paste the corresponding content from above into each file
5. Save

If `.claude/` is hidden: press `Cmd + Shift + .` on Mac to show hidden folders.

Skills load automatically when a task matches the description. No command needed.

**Trigger for Phase 4 complete:** All three SKILL.md files created. Run one test task per skill type (design, copy, programming) and confirm output quality improves versus a session without skills.

---

---

# PHASE 5 — First Real-Use Validation 🔲

Run three real tasks end-to-end — one per priority engine — before calling the system production-ready.

---

## Test 1 — Design Engine (Carousel)

**Prompt:**
```
Design a 7-slide Restart Fitness PH carousel about why people quit
their fitness routine after 4 weeks.

Read /BRANDS/restart-fitness-ph.md and /ENGINES/design/carousel.md first.
Apply ui-ux-design-pro and anti-ai-copywriter skills.

Output:
- Slide-by-slide copy (headline + support text per slide)
- Caption for IG Portrait post
- Design spec notes (background, headline font, accent color per slide)

Save to /OUTPUTS/carousel/2026-[date]-restart-why-people-quit.md
Log to /MEMORY/decisions-log.md
Log to /MEMORY/content-log.md
```

**Pass criteria:**
- Slide 1 headline under 7 words, passes 2-second test
- No banned words or AI phrases
- Brand specs match restart-fitness-ph.md exactly (colors, fonts, CTA)
- Output saved to correct folder
- Logged to both memory files

---

## Test 2 — Coach Jap Engine (Training Program)

**Prompt:**
```
Build a 4-week training program for Aira.
Goal: improve kipping pull-up strength and shoulder stability.
Frequency: 4 days per week.
Equipment: barbell, pull-up bar, dumbbells, rings.
Notes: knee-safe bias. RPE-based loading.

Read /ENGINES/coach-jap/training-program.md first.
Apply coach-jap-programming-format skill.

Output: Week 1 full (4 sessions). Indicate Week 2–4 progression notes.
Save to /OUTPUTS/programs/aira/2026-[date]-kipping-pullup-program.md
Log to /MEMORY/decisions-log.md
```

**Pass criteria:**
- Session structure: Warm-Up → Strength → Core → Conditioning → Cooldown
- Conditioning written left-to-right, reps first
- All loading RPE-based, no percentages
- No high-impact knee movements without note
- Saved to correct client folder

---

## Test 3 — Content Engine (Blog Post)

**Prompt:**
```
Write a blog post for Urban Strong Fitness about why people lose weight
fast and then regain it all within 3 months.

Read /ENGINES/content/blog-post.md first.
Apply anti-ai-copywriter skill.

Format: Hook → Science → Action Steps → Close → CTA
Under 550 words. 5 action step bullets.
CTA: Book a Free Assessment at urbanstrongfit.com/book-free-assessment

Save to /OUTPUTS/blog/2026-[date]-why-weight-comes-back.md
Log to /MEMORY/decisions-log.md and /MEMORY/content-log.md
```

**Pass criteria:**
- Under 550 words
- Hook is specific and compelling — not generic
- Exactly 5 action step bullets, verb-first
- No banned words or AI phrases
- Correct CTA present at end
- Saved and logged

---

## After all three tests pass

Update PROGRESS.md — Phase 5 complete.
Set up Scheduled Tasks if needed (weekly content summary, Monday log review).
Begin Phase 6 expansion when a real recurring task requires a new engine.

---

---

# PHASE 6 — Expansion 🔲

Build these only when a real recurring task forces them. Not before.

## Engines to add (in order of likely need)

| Engine | File | Triggers to build |
|---|---|---|
| Marketing | /ENGINES/marketing/campaign.md | First time you run a paid campaign or structured launch |
| Marketing | /ENGINES/marketing/funnel.md | First time you build a lead magnet or opt-in sequence |
| Sales | /ENGINES/sales/dm-script.md | DM volume increases to where you need a repeatable script |
| Sales | /ENGINES/sales/pricing.md | Offer restructure or new pricing tier |
| Client | /ENGINES/client/onboarding.md | First time onboarding takes longer than it should |
| Client | /ENGINES/client/check-in.md | Check-in format becomes inconsistent |

## Subagents to add (Claude Code only, later)

| Agent | File | Purpose |
|---|---|---|
| Design Reviewer | /.claude/agents/ui-ux-reviewer.md | Second-pass design audit in isolated context |
| Copy Reviewer | /.claude/agents/copy-reviewer.md | Anti-AI audit on finished copy before publishing |
| Content Planner | /.claude/agents/content-planner.md | Weekly content calendar generation |

## Brand 2b to add

| File | When |
|---|---|
| /BRANDS/urban-strong.md | When Urban Strong brand doc is uploaded |

---

---

# Quick reference — prompts to use daily

## Start any session
```
Read CLAUDE.md and ROUTER.md. I want to [task]. Brand: [Restart / Urban Strong].
```

## Design task
```
Design [asset] for [brand] about [topic].
Read /BRANDS/[brand].md and /ENGINES/design/carousel.md first.
Apply ui-ux-design-pro and anti-ai-copywriter skills.
Save to /OUTPUTS/design/[date]-[brand]-[topic]/
```

## Blog post
```
Write a blog post for Urban Strong about [topic].
Read /ENGINES/content/blog-post.md first.
Apply anti-ai-copywriter skill.
Under 550 words. 5 bullets. CTA at end.
Save to /OUTPUTS/blog/[date]-[slug].md
```

## Social post (Restart PH)
```
Write a [Conversion / Connection / Value] post for Restart Fitness PH.
Platform: [IG / FB / Threads].
Topic: [topic].
Read /BRANDS/restart-fitness-ph.md and /ENGINES/content/social-post.md.
Apply anti-ai-copywriter skill.
```

## Training program
```
Build a [X]-week training program for [client].
Goal: [goal]. Frequency: [X] days/week. Equipment: [list].
Read /ENGINES/coach-jap/training-program.md.
Apply coach-jap-programming-format skill.
Save to /OUTPUTS/programs/[client]/[date]-[program-name].md
```

## Nutrition plan
```
Build a 7-day nutrition plan for [client].
Goal: [goal]. Weight: [X]kg. Activity: [level]. Restrictions: [list].
Read /ENGINES/coach-jap/nutrition-plan.md.
Save to /OUTPUTS/nutrition/[client]/[date]-7day-plan.md
```

## Check system status
```
Read PROGRESS.md and MEMORY/decisions-log.md.
Tell me where we are in the build and what was last worked on.
```

---

---

# File index — full system

```
ProjectJnoah/
│
├── CLAUDE.md                              Master identity + universal rules
├── ROUTER.md                              Task routing switchboard
├── README.md                              System overview
├── PROGRESS.md                            Phase build tracker
│
├── BRANDS/
│   ├── restart-fitness-ph.md              ✅ Locked — Phase 2a
│   └── urban-strong.md                   ⏳ Deferred — Phase 2b
│
├── ENGINES/
│   ├── coach-jap/
│   │   ├── training-program.md           🔲 Phase 3
│   │   └── nutrition-plan.md             🔲 Phase 3
│   ├── design/
│   │   └── carousel.md                   🔲 Phase 3
│   └── content/
│       ├── blog-post.md                  🔲 Phase 3
│       └── social-post.md               🔲 Phase 3
│
├── GLOBAL/
│   └── anti-ai-output-rules.md           ✅ Phase 1 + updated Phase 2a
│
├── MEMORY/
│   ├── decisions-log.md                  ✅ Active — append after every output
│   ├── content-log.md                   ✅ Active — log published content
│   └── clients/
│       └── [client-name].md             🔲 Create as clients come in
│
├── OUTPUTS/
│   ├── blog/
│   ├── carousel/
│   ├── design/
│   ├── nutrition/
│   ├── programs/
│   └── web/
│
└── .claude/
    ├── skills/
    │   ├── ui-ux-design-pro/
    │   │   └── SKILL.md                  🔲 Phase 4
    │   ├── anti-ai-copywriter/
    │   │   └── SKILL.md                  🔲 Phase 4
    │   └── coach-jap-programming-format/
    │       └── SKILL.md                  🔲 Phase 4
    └── agents/
        └── [subagents — Phase 6, Claude Code only]
```

---

*Project Jnoah — Complete Build Guide v1.0 — 2026-05-14*
*Owner: Japhet Felipe · Urban Strong Fitness · Restart Fitness PH*
