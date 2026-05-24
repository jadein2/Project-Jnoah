# Project Jnoah — Cowork Setup Instructions

Follow this once, in order. Takes about 15–20 minutes.

---

## What you need before starting

- Claude Desktop app installed (Mac or Windows)
- Active Pro, Max, Team, or Enterprise plan
- Phase 2 zip downloaded and unzipped to `~/Documents/ProjectJnoah/`
- Canva, ClickUp, Google Drive, and Wix already connected to your Claude account

---

## Step 1 — Set Global Instructions

Global Instructions fire at the start of **every** Cowork session on your machine, across all folders and projects.

**Where:** Claude Desktop → Profile menu (top right) → Settings → Cowork → click **"Edit"** next to Global Instructions

**Paste this exactly:**

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

Click **Save**.

---

## Step 2 — Unzip the Project Jnoah folder

1. Take the `ProjectJnoah-Phase2.zip` you downloaded
2. Unzip it to `~/Documents/ProjectJnoah/`
3. Confirm the folder looks like this before continuing:

```
ProjectJnoah/
├── CLAUDE.md
├── ROUTER.md
├── README.md
├── PROGRESS.md
├── BRANDS/
│   └── restart-fitness-ph.md
├── ENGINES/
│   ├── coach-jap/
│   ├── design/
│   └── content/
├── GLOBAL/
│   └── anti-ai-output-rules.md
├── MEMORY/
│   ├── decisions-log.md
│   ├── content-log.md
│   └── clients/
├── OUTPUTS/
│   ├── blog/
│   ├── carousel/
│   ├── design/
│   ├── nutrition/
│   ├── programs/
│   └── web/
└── .claude/
    ├── skills/
    └── agents/
```

If `.claude/` is hidden on your machine (Mac hides dot-folders by default), press `Cmd + Shift + .` in Finder to show hidden files.

---

## Step 3 — Create the Cowork Project

1. Open Claude Desktop
2. Switch to **Cowork mode** (bottom of left sidebar or top toggle)
3. Click **"New Project"** in the left sidebar
4. Name it: `Project Jnoah`
5. When prompted to select a folder, point it at `~/Documents/ProjectJnoah/`
6. When prompted for permissions, grant **Read + Write**

> Read = Claude can load your OS context files
> Write = Claude can save outputs and log to memory files

---

## Step 4 — Set Project-level Instructions

Project instructions are separate from Global. These are specific to Project Jnoah only.

**Where:** Inside the Project Jnoah workspace → Settings or Instructions tab (look for a gear icon or "Instructions" in the Project panel)

**Paste this exactly:**

```
This is Project Jnoah — the modular business operating system for
Urban Strong Fitness and Restart Fitness PH.

Load order on every task:
1. CLAUDE.md — identity and universal rules
2. ROUTER.md — route task to correct engine, brand, and skill
3. /BRANDS/[relevant-brand].md — brand identity source of truth
4. /ENGINES/[relevant-engine]/ — workflow and format rules
5. /.claude/skills/ — auto-fire matching skills

Output destinations:
- Blogs → /OUTPUTS/blog/YYYY-MM-DD-slug.md
- Carousels → /OUTPUTS/carousel/YYYY-MM-DD-brand-topic.md
- Programs → /OUTPUTS/programs/[client-name]/
- Nutrition → /OUTPUTS/nutrition/[client-name]/
- Designs → /OUTPUTS/design/YYYY-MM-DD-brand-topic/

After every output: append one line to /MEMORY/decisions-log.md
Format: YYYY-MM-DD — [OUTPUT type] — short description

Current build phase: Phase 2 — see PROGRESS.md for what is pending.
Do not attempt engine-based tasks until the relevant engine file exists.
If an engine file is missing, say so and ask how to proceed.
```

Save.

---

## Step 5 — Activate connectors inside the Project

You already have these connected globally. You need to enable them specifically inside Project Jnoah.

**Where:** Inside the Project Jnoah workspace → Connectors or Integrations tab

Enable these four:

| Connector | Why it matters for this OS |
|---|---|
| **Canva** | Design engine tasks can create, export, and iterate on real Canva files |
| **ClickUp** | Project Jnoah build tasks and client tasks sync back to your ClickUp docs |
| **Google Drive** | Brand files and outputs can be saved to Drive automatically |
| **Wix** | Web copy tasks in the content and design engines can push directly to Wix Studio |

---

## Step 6 — Run the system verification test

Before doing any real work, confirm the system is wired correctly.

**Open Project Jnoah in Cowork and paste this prompt:**

```
Read CLAUDE.md, ROUTER.md, and PROGRESS.md.

Tell me:
1. What is the current build phase?
2. What files are missing before real production work can happen?
3. Route this test task — do not produce any output yet, just route it:
   "Design a 7-slide Restart Fitness PH carousel about why people quit
   their fitness routine after 4 weeks."
   - Which engine handles this?
   - Which brand file loads?
   - Which skills would fire?
```

**What a passing response looks like:**

- Names the current phase correctly (Phase 2 — pending urban-strong.md + Phase 3 engines)
- Mentions missing engine files for /ENGINES/design/carousel.md and /ENGINES/content/
- Routes the test task to: Design Engine + /BRANDS/restart-fitness-ph.md + ui-ux-design-pro skill + anti-ai-copywriter skill

If the response matches this — the system is reading files correctly and routing is working. Move to Step 7.

If the response does not match — see Troubleshooting below.

---

## Step 7 — Confirm write permissions work

Test that Claude can save output files to your folder.

**Paste this prompt:**

```
Create a test file at /MEMORY/system-test.md with this content:

# System Test
Date: [today's date]
Status: Write permissions confirmed.
Project Jnoah is live in Cowork.

Then confirm you created it.
```

Open Finder / File Explorer and check that `~/Documents/ProjectJnoah/MEMORY/system-test.md` exists.

If it does — write permissions are working. You can delete the test file after.

---

## Step 8 — Optional: Set up Dispatch (mobile remote)

If you want to assign tasks to Project Jnoah from your phone while your desktop runs them:

1. Open Claude mobile app
2. Go to Settings → Dispatch
3. Scan the QR code shown in Claude Desktop → Cowork → Dispatch
4. Your phone can now message the desktop session remotely

Note: Dispatch is in research preview as of May 2026 — about 50/50 reliability. Useful but not essential. Skip this for now if you want to keep setup simple.

---

## Step 9 — Optional: Set up Scheduled Tasks (after Phase 5 only)

Do not set these up yet. Wait until Phase 5 (first real-use validation) is complete.

When ready, useful recurring tasks for Project Jnoah:

- Every Monday: pull content-log.md and generate a weekly content performance summary
- Every Sunday: check /OUTPUTS/blog/ and suggest next week's topic based on content history
- Every Friday: generate a decisions-log summary of the week

**How to schedule when ready:** Type `/schedule` in any Cowork task inside Project Jnoah.

---

## Troubleshooting

**Claude is not reading the files**
→ Confirm the folder path is correct: `~/Documents/ProjectJnoah/`
→ Confirm read permission was granted when creating the Project
→ Confirm CLAUDE.md and ROUTER.md are in the root of the folder, not inside a subfolder

**Claude is not saving outputs**
→ Confirm write permission was granted
→ Check if the target folder exists (e.g. `/OUTPUTS/blog/` must exist before Claude can save to it)
→ All target folders were created in Phase 1 — if any are missing, re-unzip the Phase 2 zip

**Skills are not firing**
→ Skills live in `/.claude/skills/` — this is a hidden folder
→ Press `Cmd + Shift + .` (Mac) or enable hidden files (Windows) to confirm it exists
→ Each skill must be a folder with a `SKILL.md` file inside it
→ Skills are not built yet (Phase 4) — this is expected behavior in Phase 2

**Connectors not showing inside the Project**
→ Confirm the connector is enabled globally first: Claude Desktop → Settings → Connectors
→ Then enable it at the Project level inside Project Jnoah settings
→ If Canva or Wix don't appear, re-authenticate from the global Connectors settings

**Cowork is not remembering context between sessions**
→ Memory only persists inside Projects — confirm you are working inside the Project Jnoah workspace, not a standalone Cowork session
→ Standalone Cowork sessions (no Project) start fresh every time

---

## What is set up vs what is still being built

| Component | Status |
|---|---|
| Global Instructions | ✅ Set in Step 1 |
| ProjectJnoah folder | ✅ Unzipped in Step 2 |
| Cowork Project created | ✅ Step 3 |
| Project Instructions | ✅ Set in Step 4 |
| Connectors activated | ✅ Step 5 |
| System verified | ✅ Step 6–7 |
| BRANDS/restart-fitness-ph.md | ✅ Built — Phase 2 |
| BRANDS/urban-strong.md | ⏳ Pending — upload Urban Strong doc |
| ENGINES/coach-jap/ | ⏳ Phase 3 |
| ENGINES/design/ | ⏳ Phase 3 |
| ENGINES/content/ | ⏳ Phase 3 |
| .claude/skills/ | ⏳ Phase 4 |
| .claude/agents/ | ⏳ Phase 5+ (Claude Code only) |
| Scheduled Tasks | ⏳ After Phase 5 validation |

---

## After setup is complete

Return to the Claude chat where we are building Project Jnoah and:

1. Confirm the verification test passed
2. Upload the Urban Strong Fitness brand doc to close Phase 2
3. We proceed to Phase 3 — building the Coach Jap, Design, and Content engines

---

*Project Jnoah — Setup v1.0 — 2026-05-14*
