# Post-Mortem Audit — Full System (vault + OS app + connectors + self-learning loop)
**Date:** 2026-06-10
**Scope:** Everything built to date — vault architecture, operating model, OS dashboard app, connectors, self-learning loop
**Period:** 2026-05-17 → 2026-06-10
**Auditor:** Claude

---

## What happened

In ~3.5 weeks the system went from empty folder to a working two-brand business OS in three tiers: (1) the vault — control files, 11 engine folders, 2 locked brand files, memory layer, 6+ skills; (2) the operating model — chat protocol (Command/Project/Worker), START/END rituals, STATE.md now-board, sync + lint routines; (3) the OS dashboard app — Next.js reading the vault directly, 14 modules, 4 connectors (GCal/Wix/Drive/Notion), embedded Claude chat, self-learning loop (lessons + drift warnings). Mid-build, the vault migrated from OneDrive to C:\Jnoah\vault under git. Real production ran concurrently the whole time: 12 active clients, URBN Soft Opening shipped on schedule (Jun 8), 6FIX product system built. The gap: the index layer (STATE/registry) repeatedly trailed the artifacts, and the migration left a live legacy twin that kept eating outputs.

---

## Wins

- **Vault-as-database pattern** — the app has no database; every module parses markdown straight off disk with chokidar live-refresh. 14 modules shipped in ~6 days because each one is just "parse vault, render." Zero sync bugs between app and vault by construction.
- **Locked brand files + banned-words enforcement** — voice rules survive across dozens of disposable chats. anti-ai-copywriter as the authority layer means copy QA is deterministic, not vibes.
- **Rituals + STATE.md held parallel work together** — 5+ concurrent chats (URBN campaign, client programs, OS build, 6FIX) shipped the Soft Opening on time while the OS was being rebuilt under them. The model works when the rituals run.
- **Vault-sync connector pattern** — Claude pulls MCP data, writes JSON snapshots to /MEMORY/connectors/, app reads them like any vault file. 4 connectors in one phase with zero auth plumbing inside the app.
- **Self-learning loop validated same-day** — first lint run caught 11 real strays, including the auditor's own falsely-reported "synced" copy. The system caught its builder lying to it. Loop closed: lesson logged, rule routed to LINT.md.
- **Audit discipline predates this audit** — Phase 8 post-mortem and Phase 12 pre-mortem (15 issues each) already ran and routed fixes. Audits are routine here, not events.
- **Taxonomy self-corrected under load** — 6FIX moved out of client outputs into /ENGINES/6fix/ the moment the mismatch was felt (product system ≠ client sessions). The structure bends instead of breaking.

---

## Misses

- **Migration moved files, not writers** — the OneDrive vault stayed alive as a write target; chats moved between projects kept their old paths. Em Tan's training week and 4 URBN campaign files landed in the dead vault. Root cause: the migration plan had no decommission step for the source.
- **Index layer trailed the artifacts, three times** — registry 13 days stale (May), URBN brief vs STATE.md status contradiction (June), registry recording Em Tan D5–D8 while the canonical vault lacked the files. Root cause: rituals are manual, parallel chats skip the END ritual, and no automated drift check existed until Jun 10.
- **False verification** — 7 Pin carousel PNGs reported "synced," never copied. PowerShell expanded `[RFPH Pinned]` as a wildcard, matched nothing, errored nothing. Root cause: success inferred from absence of error instead of listing the destination.
- **Control-file mirror unenforced** — CLAUDE.md engine list updated Jun 9; AGENTS.md still carries the old flat list with no 6fix engines. Root cause: the mirror rule is a convention with no check (lint check 7 now exists — has not yet run as a routine).
- **Version control unused as a safety net** — the app sits on its initial May 24 commit with the entire 3-phase build uncommitted; the vault has 97 uncommitted changes since Jun 5. Root cause: commits tied to milestones instead of sessions.
- **API key handling improvised** — two keys minted in confusion, one pasted into chat. Root cause: no documented key-setup procedure (.env.local is gitignored — verified — so exposure is chat-transcript only).

---

## What to change next time

- **Decommission legacy writers this week** — move or retire every chat still in the old OneDrive project; archive legacy OUTPUTS read-only. Until then, lint check 5 is the only guard. — ops, no engine
- **END ritual gains step 4: commit** — `git add -A && git commit` on vault (and app when touched) closes every session. — CHATS.md
- **`lint jnoah` becomes a standing Monday ritual** plus after any session in a moved chat. — LINT.md cadence note
- **Rotate the Anthropic keys and write the key procedure down** — revoke both existing keys, mint one, paste only into .env.local, never into chat. — Jap only (credentials)
- **Production build gate** — `npm run build` must pass before an app phase is declared done; dev-server green is not done. — OS build lane
- **Connector staleness made visible** — syncedAt badges in the app + a refresh cadence per connector. — OS Phase C

---

## Carry-forward

- URBN final visual identity + public domain (pending since May 30)
- restartfitnessph.com build (8 pages, planned, not started)
- 6FIX launch campaign (DRAFT, not pushed to ClickUp)
- OS Phase C: QA badge automation, connector staleness badges, lint-on-demand from the dashboard
- Legacy vault decommission (new — from this audit)
- AGENTS.md parity pass (new — from this audit)
