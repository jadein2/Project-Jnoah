# Pre-Mortem Audit — Full System, next 4–6 weeks
**Date:** 2026-06-10
**Scope:** The system going forward — live URBN campaign window (Founding closes Jun 22, move-out Jun 20–21, HYROX Jun 27–29, Grand Opening Jul 11), 6FIX launch, website build, daily OS dashboard usage
**Auditor:** Claude
**Issues found:** 12
**Triage:** 3 P1 · 5 P2 · 4 P3

---

## Summary

The architecture is sound and the self-learning loop now guards against the drift class of failure. What will actually break this system in the next six weeks is not structure — it is three operational exposures: a live legacy vault still swallowing outputs from old chats, the entire OS existing on one disk with weeks of uncommitted work, and exposed API credentials. All three are cheap to fix and expensive to ignore. Below them sit reliability gaps (no production build, stale connectors, manual server) that degrade trust in the dashboard rather than break the business.

---

## P1 — Critical. Fix before any production work proceeds.

### P1-1 — Legacy OneDrive vault is still a live write target

**Where:** `C:\Users\Japhet Felipe\OneDrive\Documents\Project Jnoah\` + every chat still attached to the old Cowork project

**What's happening:**
Chats created in the old project — including ones moved into Jnoah OS — keep writing outputs to the OneDrive path. It has already eaten Em Tan's training week and 4 URBN campaign files during a live campaign. Nothing prevents the next one.

**Why it matters:**
Client program integrity and campaign assets silently land in a dead vault. The dashboard, registry, and STATE all report a world missing the newest work. During the Founding window (closes Jun 22), a lost asset or program is a same-week business cost.

**Fix:**
This week: inventory every chat in the old project; move active ones into Jnoah OS and re-verify their first output lands in `C:\Jnoah\vault`; delete or archive the rest. Rename legacy `OUTPUTS` → `OUTPUTS-ARCHIVED` (breaks old writers loudly instead of silently). Lint check 5 remains the tripwire.

### P1-2 — Weeks of work exist on one disk, uncommitted

**Where:** vault (97 uncommitted changes since Jun 5) · `C:\Jnoah\jnoah-os-app` (entire 3-phase build sits on the initial May 24 scaffold commit)

**What's happening:**
The vault's last commit predates five days of client, campaign, and system work. The app — all 14 modules, connectors, chat, self-learning surfaces — has never been committed at all.

**Why it matters:**
One disk failure, OneDrive sync accident, or bad `rm` erases the OS itself plus a week of client history. Git exists in both folders and is doing nothing.

**Fix:**
Commit both now. Add step 4 to the END ritual in CHATS.md: every session closes with a commit. (Vault has a GitHub remote — push too.)

### P1-3 — Anthropic API key exposed in chat transcript

**Where:** `.env.local` (gitignored — safe) · this chat session (not safe) · possibly two active keys at console.anthropic.com

**What's happening:**
A key was pasted into chat, which persists in transcript history. An earlier key may also still be active.

**Why it matters:**
Anyone with transcript access can bill against the account. Cheap to exploit, silent until the invoice.

**Fix:**
Jap only (credentials): revoke both keys at console.anthropic.com/settings/keys, mint one new key, type it directly into `.env.local`, restart the server. Never paste keys into chat — the procedure is now in the post-mortem's change list.

---

## P2 — Important. Fix this week.

### P2-1 — AGENTS.md has drifted from CLAUDE.md

**Where:** `/AGENTS.md` (engine list is the old flat format; /ENGINES/6fix/ absent; categorized list missing)

**What's happening:**
The Jun 9 engine-list update landed in CLAUDE.md only. Any Codex session routes from an outdated map.

**Why it matters:**
Codex work would route 6FIX tasks to a path that no longer exists and miss three engines added Jun 1.

**Fix:**
Parity pass on the shared sections (engine list, load order). Lint check 7 exists for exactly this — run it after the fix to confirm clean.

### P2-2 — The app has never produced a production build

**Where:** `C:\Jnoah\jnoah-os-app` — dev server (Turbopack) only

**What's happening:**
`npm run build` has never run. Turbopack dev tolerates type errors that a production build rejects; the app's only mode of existence is a manually-started dev process.

**Why it matters:**
"Works in dev" is unverified software. The day the dashboard needs to run reliably (or on another machine), build failures surface all at once.

**Fix:**
Run `npm run build`, fix what it flags, gate future phases on a passing build. — OS build lane

### P2-3 — Connector snapshots rot silently

**Where:** `/MEMORY/connectors/*.json` (GCal, Wix, Drive, Notion — all one-shot snapshots from Jun 9–10)

**What's happening:**
The dashboard renders these as if current. There is no staleness indicator and no refresh cadence.

**Why it matters:**
A calendar pane showing last week's events as "today" is worse than no calendar pane — it earns false trust.

**Fix:**
Each connector page shows its syncedAt age prominently (badge turns orange past 7 days). Define cadence: refresh on demand via Brain chat or weekly. — OS Phase C

### P2-4 — STATE.md is behind again

**Where:** `/STATE.md` (header 2026-06-07; sessions ran through 2026-06-10)

**What's happening:**
Three days of work — 6FIX relocation, Aira C3W2, self-learning loop, this audit — absent from the now-board.

**Why it matters:**
Every chat START ritual reads STATE first. A stale now-board misroutes the next session's priorities.

**Fix:**
Run `sync jnoah` (registry/STATE/cockpit reconcile), then `log + update state` at this session's close.

### P2-5 — The dashboard dies silently and stays dead

**Where:** dev server process (died twice this session unnoticed)

**What's happening:**
The OS is one manually-started process with no restart-on-crash and no startup script. When it dies, the dashboard is just gone until someone notices and restarts it.

**Why it matters:**
A dashboard that is intermittently down trains its user to stop checking it.

**Fix:**
A start script or scheduled task that launches `npm run dev` at login; document "how to start/restart the OS" in the app README. — ops

---

## P3 — Backlog. Fix when convenient.

### P3-1 — Today page walks the entire legacy OneDrive tree on every load

**Where:** `src/lib/vault/lint.ts` → `checkLegacyStrays()`

**What's happening:** Full recursive walk of a OneDrive folder per page load. Cloud-only placeholder files or a large legacy tree could stall the Daily Brief.

**Fix:** Cache lint findings ~5 minutes, or run the legacy check on demand only. Becomes moot once P1-1 archives the legacy vault.

### P3-2 — /api/chat is unauthenticated and unmetered

**Where:** `src/app/api/chat/route.ts`

**What's happening:** Anyone who can reach the port can spend API credits. Localhost-only today, so exposure is theoretical.

**Fix:** Rate-limit and add a shared-secret header before the app is ever exposed beyond localhost (LAN, tunnel, deploy).

### P3-3 — Encoding mojibake in older vault files

**Where:** PROGRESS.md, decisions-log.md headers (em-dashes render as `�?"` in some console reads)

**What's happening:** Display-level artifacts from mixed encodings in early files. Markdown content is intact; consoles disagree.

**Fix:** One UTF-8 normalization pass over the control files during a quiet week.

### P3-4 — Brain chat history grows unbounded in memory

**Where:** `src/components/ChatPanel.tsx`

**What's happening:** Full message history is held in component state and resent per request — token cost grows with conversation length.

**Fix:** Cap history at the last ~20 messages when sending; add a visible context-reset.

---

## Resolved during audit

None — this skill routes, it doesn't fix. All P1 fixes are one command away and listed below the audit in the session response.
