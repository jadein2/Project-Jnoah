# Jnoah OS Interface — Pipeline
**Slug:** jnoah-os-interface
**Started:** 2026-05-23
**Brand:** brand-agnostic (internal system build) — UI themed to Restart Fitness PH
**Type:** multi-engine project — local web interface over the markdown vault

---

## What this is

A localhost web application that turns Project Jnoah from a markdown vault operated in Claude Code into a visual operating cockpit. The vault stays the single source of truth. The interface is a read-lens + live-data overlay + (later) a launcher that runs engines via the Claude Agent SDK and writes outputs back to the vault. No migration to a database — the markdown vault remains canonical.

App lives beside the vault, never inside it: `C:\Jnoah\jnoah-os-app` reading from `C:\Jnoah\vault`.

---

## Locked decisions (2026-05-23)

| Decision | Choice | Rationale |
|---|---|---|
| Execution model | Read-layer dashboard first (Phases 0–2), Claude Agent SDK "Run engine" buttons in Phase 3 | Usable cockpit in week 1; defer the hard execution integration |
| Vault location | Move out of OneDrive to `C:\Jnoah\vault` + separate backup | Removes OneDrive sync-conflict risk before depending on file-watching |
| Runtime form | Browser at localhost | Simplest; nothing to install/package |

---

## Architecture (4 layers)

1. **Data sources** — local markdown vault (primary) + live APIs (Google Calendar, ClickUp, Wix, Gmail; social via posting-log first, Meta Graph API later)
2. **Local server (Next.js / Node)** — vault reader + schema parsers, chokidar file-watcher → SSE live refresh, SQLite FTS search index (disposable, rebuilt from vault), connector services, Claude Agent SDK runner (Phase 3)
3. **Frontend (Next.js + Tailwind + shadcn/ui)** — modules below; themed to Restart Fitness PH
4. **Claude orchestration (Phase 3)** — "Run engine" buttons build the ROUTER.md-routed prompt → Agent SDK runs scoped to vault → writes to /OUTPUTS/ + logs to decisions-log

## Stack
Next.js (App Router) + TypeScript · Tailwind + shadcn/ui · gray-matter + remark/react-markdown + custom table parsers · chokidar + Server-Sent Events · SQLite FTS5 · Google Calendar / ClickUp / Wix / Gmail APIs · Claude Agent SDK (headless).

## Interface modules → data source map
| Module | Reads from |
|---|---|
| Today / Daily Brief | goals skill over /GOALS/active-goals.md + goal files |
| To-do list | goal task tables + ClickUp + Google Calendar |
| Goals | /GOALS/*.md |
| Clients | /MEMORY/clients/[name]/[name].md |
| Programs | /OUTPUTS/programs/[client]/ |
| Engines | /ENGINES/** + ROUTER.md (+ launcher in Phase 3) |
| Research | /RESEARCH/INDEX.md + topic folders |
| Marketing | /OUTPUTS/campaigns/ + /MEMORY/campaigns/campaign-performance.md |
| Social outputs | /OUTPUTS/carousel/, social posts, /GOALS/posting-log.md |
| Calendar | Google Calendar + posting-log + campaign calendar.md |
| Website + status | Wix API + restartfitness.ph link |
| Outputs library | all of /OUTPUTS/** |
| Global search | full vault index (SQLite FTS) |

---

## Pipeline Stages

| Stage | Engine | Status | Output | Approved |
|---|---|---|---|---|
| Phase 0 — Vault move + scaffold + Today/Goals/Clients (read-only) + live refresh + theming | — | IN PROGRESS | — | — |
| Phase 1 — Full read-layer: Programs, Research, Marketing, Social, Outputs library, search | — | PENDING | — | — |
| Phase 2 — Live connectors: Google Calendar, ClickUp, Wix status | — | PENDING | — | — |
| Phase 3 — Claude orchestration: Run-engine buttons (Agent SDK), write-back + logging, chat panel | — | PENDING | — | — |
| Phase 4 (optional) — Polish, lock/password, social Meta Graph API | — | PENDING | — | — |

Status options: PENDING / IN PROGRESS / COMPLETE / SKIPPED

---

## Gate Log

2026-05-23 — Gate 1 — Architecture + 3 locked decisions approved (execution model phased, vault moves out of OneDrive, browser runtime). Go-ahead given to begin Phase 0 starting with the vault move (copy + verify, no deletion of OneDrive copy until app confirmed working).

---

## Current Stage

Phase 0, Step 1: vault move. Copy `Project Jnoah` → `C:\Jnoah\vault`, verify file count + key files, set up backup. OneDrive copy retained as backup until the app is confirmed working. Internal vault-relative references survive the move. Awaiting confirmation after copy+verify before proceeding to scaffold.

---

## Notes

- Vault is currently in OneDrive — file-watching + sync can cause transient locks/conflict copies; the move resolves this.
- Recommend a private git repo as the backup target — gives version history of every Claude edit, which fits this system.
- Social APIs (IG/Threads/FB Graph) need a Meta Business account + app review — deferred to Phase 4; posting-log.md drives the Social module until then.
- Windows + Node native; no WSL required.
- Estimated calendar time at a steady pace: usable dashboard ~week 1; full live OS with engine execution ~4–5 weeks.
