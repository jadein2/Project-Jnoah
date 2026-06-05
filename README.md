# Project Jnoah

Modular AI operating system for Restart Fitness PH and URBN Athletics.

Built to run on two surfaces:
- **Codex** → `AGENTS.md` is authority, skills live in `.agents/`
- **Claude / Cowork** → `CLAUDE.md` is authority, skills live in `.claude/`

One folder, one source of truth. `STATE.md` is the live "what's now" board.

---

> **Canonical location:** `C:\Jnoah\vault` (as of 2026-05-24). The old `~/Documents/ProjectJnoah/` (OneDrive) folder is **legacy — a frozen backup**. Point Cowork and Claude Code at `C:\Jnoah\vault`. A companion dashboard app, **Jnoah OS**, lives separately at `C:\Jnoah\jnoah-os-app` and runs in the browser (`npm run dev` → localhost:3000) as a read-only window over this vault.

---

## What this is

A structured set of markdown files that gives the assistant persistent context about your business system — brand voice, design rules, programming format, content patterns, client history, campaigns, goals, and operating state — so you stop re-explaining every chat.

Three layers:

1. **Context** (this folder) — who you are, what your brands stand for, how you do the work
2. **Skills** (`.agents/skills/` for Codex, `.claude/skills/` for Claude/Cowork) — craft expertise that auto-fires when relevant
3. **Memory** (`/MEMORY/`) — decisions, client files, content log; grows over time

---

## Folder map

```
C:\Jnoah\vault\               (canonical — formerly ~/Documents/ProjectJnoah, now legacy)
├── AGENTS.md                  Codex authority file
├── CLAUDE.md                  Claude/Cowork authority file
├── STATE.md                   Current-state board — read first for what's active now
├── CHATS.md                   Chat model and start/end rituals
├── SYNC.md                    Vault reconcile routine (`sync jnoah`)
├── ROUTER.md                  Maps tasks → engines, brands, skills
├── README.md                  This file
├── PROGRESS.md                Build status — what's done, what's next
│
├── BRANDS/                    Locked brand identity per brand
│   ├── restart-fitness-ph.md
│   ├── URBN-athletics.md       URBN Athletics (LIVE) — canonical brain in /Raw-Files/URBN Athletics/
│   └── urban-strong.md         Legacy reference only (pre-rebrand)
│
├── ENGINES/                   Workflow files — how to produce each output type
│   ├── coach-jap/             Training programs, nutrition plans, WODs
│   ├── client/                Client onboarding, profiles, check-ins, Trainerize handoff
│   ├── design/                Carousels, posters, web layouts
│   ├── content/               Blog posts, social posts
│   ├── marketing/             Campaign planning and execution
│   ├── sales/                 Offers, DM flows, objection handling
│   ├── research/              Research engine and topic repository
│   ├── web/                   Wix workflow
│   └── goals/                 Goal setting and daily work order
│
├── MEMORY/                    Persistent history
│   ├── decisions-log.md       One line per decision/output
│   ├── content-log.md         Content shipped + how it performed
│   ├── campaigns/             Campaign performance log
│   └── clients/               One folder per client
│
├── GLOBAL/                    Cross-cutting rules
│   └── anti-ai-output-rules.md
│
├── OUTPUTS/                   Finished work — organized by type
│   ├── blog/
│   ├── carousel/
│   ├── design/
│   ├── programs/
│   ├── nutrition/
│   └── web/
│
├── Artifacts/                  Jnoah Cockpit dashboard (HTML)
├── .agents/                   Codex skills and agents
└── .claude/                   Claude/Cowork skills and agents
```

---

## How to use it in Codex

Open this folder in Codex. Codex reads `AGENTS.md`, then `ROUTER.md`, then the needed brand, engine, memory, and skill files.

Use Codex for:

- System builds and cleanup
- File restructuring
- Local artifacts
- Multi-file diagnostics
- Implementation work

## How to use it in Cowork

1. Open Claude Desktop → switch to Cowork mode
2. Point Cowork at this folder (Work in a Folder → select `C:\Jnoah\vault`). Do **not** use the legacy `~/Documents/ProjectJnoah/` — it's a frozen backup.
3. Grant read + write permission
4. Start the conversation with your task — no need to re-explain context

Example prompts:

> "Write a blog post about why crash diets fail. Brand: Restart Fitness PH."

> "Design a 7-slide Restart Fitness PH carousel about starting over after a setback."

> "Build a 4-week program for Aira. Goal: kipping pull-ups, RPE-based, knee-safe."

Claude reads `CLAUDE.md` → `ROUTER.md` → relevant brand + engine → applies skills → produces the work → saves to `/OUTPUTS/` → logs to `/MEMORY/`.

---

## How to use it in Claude Code

Same folder. `cd C:\Jnoah\vault` and run `claude`. Skills and subagents in `.claude/` work automatically. Use when you want:

- Parallel subagents (e.g. design reviewer running in isolated context)
- Scripted/batched workflows
- Terminal-level control

Files are interchangeable. Edit anywhere; the other surface sees it next session.

---

## Editing the system

- Add a new client → create `/MEMORY/clients/[name]/[name].md` plus `references/` and `check-ins/` (or say "new client [name]" to run the client-profile engine)
- Add a new brand → create `/BRANDS/[brand-name].md`, update ROUTER.md
- Add a new skill → create matching folders under `.agents/skills/` and `.claude/skills/` with `SKILL.md`
- Change a universal rule → edit the active platform file first (`AGENTS.md` in Codex, `CLAUDE.md` in Claude), then mirror the change to the other
- Change a brand rule → edit the brand file (not AGENTS.md, not CLAUDE.md, not the engine)

Keep `AGENTS.md` and `CLAUDE.md` under 200 lines. Keep each brand file under 300. Extract heavy sections to dedicated files when they outgrow their home.

---

## What this is not

- Not a full CRM (use ClickUp, Wix CMS, or a dedicated CRM for lead tracking)
- Not a content scheduler (use Meta Business Suite, Buffer, etc.)
- Not a replacement for client management software (use ClickUp)
- Not a project management tool (use ClickUp)

It's the context layer that makes every Claude chat smarter, faster, and more on-brand. The work still ships through your existing tools.

---

## Status

Read `STATE.md` first for the current active state. Use `PROGRESS.md` for build history.
