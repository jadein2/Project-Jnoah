# SYNC — Vault Reconcile Routine

Trigger: **`sync jnoah`** (or "reconcile" / "pre-check sync").
Purpose: rebuild the index layer from what's actually in the vault, so STATE / registry / cockpit don't rot when work happens in parallel chats. Run it after heavy side-chat work, or weekly.

---

## Pre-check first (read-only — show before changing anything)

1. Read freshness: `registry.md` date, `STATE.md` date, cockpit snapshot date, last `content-log.md` entry.
2. `find OUTPUTS -name '*.md' -newermt <last-sync-date>` → new content.
3. `find OUTPUTS -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.pdf' \) -newermt <date>` → new assets.
4. Per client: newest file in `/OUTPUTS/programs/[client]/` → infer current cycle/week; compare to `registry.md`.
5. Present the diff (what's out of sync). Wait for go before writing.

## Sync actions (after go)

1. **registry.md** — update each client's Current Cycle / Phase-Week from newest program file; bump "Last updated".
2. **STATE.md** — refresh Active clients cycles, In-flight rows (last-touched dates), Active campaigns, Recent decisions, header date.
3. **Cockpit** (`Artifacts/jnoah-cockpit.html` + scratch copy) — update `clients`, `campaigns`, `deliverables` arrays + synced date → `update_artifact` (id `jnoah-cockpit`) → copy back to vault.
4. **content-log.md** — add entries for shipped content not yet logged (forward-only; don't backfill ancient history — that lives in decisions-log).
5. **decisions-log.md** — append one `[SYSTEM] — sync` line.

## Rules

- **Don't overwrite rows a side chat actively maintains** (e.g., the URBN campaign in-flight row owned by URBN Main). Sync OS-level rows; leave campaign-owned rows.
- **Cockpit edits:** the data lines use em-dash `—`, en-dash `–`, middot `·`. Match exact chars or the edit fails — read the line first if unsure.
- Flag (don't auto-resolve) anything ambiguous: `_PENDING-EDITS.md` files, status-unknown clients, unlogged assets.
- This is reconcile, not creation — never invent cycle numbers; read them from the actual program files.

---

## Last updated
2026-06-04 — Created during first full sync (registry was 13 days stale; 5 client cycles + URBN campaign caught up).
