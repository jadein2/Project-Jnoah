# Project Jnoah

Modular AI operating system for Urban Strong Fitness and Restart Fitness PH.

Built to run in Claude Cowork (and Claude Code when needed). One folder, one source of truth.

---

## What this is

A structured set of markdown files that gives Claude persistent context about your two businesses — brand voice, design rules, programming format, content patterns, client history — so you stop re-explaining every chat.

Three layers:

1. **Context** (this folder) — who you are, what your brands stand for, how you do the work
2. **Skills** (`.claude/skills/`) — craft expertise that auto-fires when relevant
3. **Memory** (`/MEMORY/`) — decisions, client files, content log; grows over time

---

## Folder map

```
ProjectJnoah/
├── CLAUDE.md                  Identity + universal rules (read first, every session)
├── ROUTER.md                  Maps tasks → engines, brands, skills
├── README.md                  This file
├── PROGRESS.md                Build status — what's done, what's next
│
├── BRANDS/                    Locked brand identity per brand
│   ├── restart-fitness-ph.md
│   └── urban-strong.md
│
├── ENGINES/                   Workflow files — how to produce each output type
│   ├── coach-jap/             Training programs, nutrition plans, WODs
│   ├── design/                Carousels, posters, web layouts
│   └── content/               Blog posts, social posts, DMs
│
├── MEMORY/                    Persistent history
│   ├── decisions-log.md       One line per decision/output
│   ├── content-log.md         Content shipped + how it performed
│   └── clients/               One file per active client
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
└── .claude/
    ├── skills/                Craft expertise (auto-loaded by Claude)
    │   ├── ui-ux-design-pro/
    │   ├── anti-ai-copywriter/
    │   └── coach-jap-programming-format/
    └── agents/                Subagents (Claude Code only)
```

---

## How to use it in Cowork

1. Open Claude Desktop → switch to Cowork mode
2. Point Cowork at this folder (Work in a Folder → select `ProjectJnoah/`)
3. Grant read + write permission
4. Start the conversation with your task — no need to re-explain context

Example prompts:

> "Write a blog post about why crash diets fail. Audience: Urban Strong cold traffic."

> "Design a 7-slide Restart Fitness PH carousel about starting over after a setback."

> "Build a 4-week program for Aira. Goal: kipping pull-ups, RPE-based, knee-safe."

Claude reads CLAUDE.md → ROUTER.md → relevant brand + engine → applies skills → produces the work → saves to /OUTPUTS/ → logs to /MEMORY/.

---

## How to use it in Claude Code

Same folder. `cd ~/Documents/ProjectJnoah/` and run `claude`. Skills and subagents in `.claude/` work automatically. Use when you want:

- Parallel subagents (e.g. design reviewer running in isolated context)
- Scripted/batched workflows
- Terminal-level control

Files are interchangeable. Edit anywhere; the other surface sees it next session.

---

## Editing the system

- Add a new client → create `/MEMORY/clients/[name].md`
- Add a new brand → create `/BRANDS/[brand-name].md`, update ROUTER.md
- Add a new skill → create folder under `.claude/skills/` with `SKILL.md`
- Change a universal rule → edit CLAUDE.md
- Change a brand rule → edit the brand file (not CLAUDE.md, not the engine)

Keep CLAUDE.md under 200 lines. Keep each brand file under 300. Extract heavy sections to dedicated files when they outgrow their home.

---

## What this is not

- Not a CRM (use Google Sheets for lead tracking)
- Not a content scheduler (use Meta Business Suite, Buffer, etc.)
- Not a replacement for client management software (use ClickUp)
- Not a project management tool (use ClickUp)

It's the context layer that makes every Claude chat smarter, faster, and more on-brand. The work still ships through your existing tools.

---

## Status

See PROGRESS.md for current build phase and what's pending.
