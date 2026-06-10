# LINT — Vault Drift Check

Trigger: **`lint jnoah`** (or "drift check" / "lint the vault").
Purpose: hunt contradictions, staleness, and orphans across the vault — the failures
`sync jnoah` doesn't catch. SYNC rebuilds the index layer from the vault; LINT asks
whether any two parts of the vault disagree. Run weekly, after heavy parallel-chat work,
or whenever something "feels off."

Read-only first: run all checks, present the findings as a report, wait for go before fixing anything.

---

## Checks

**1. Campaign status drift** — for every `/OUTPUTS/campaigns/*/brief.md`, compare its Status
line against the campaign's row in STATE.md. `brief.md` is canonical; STATE.md mirrors it.
Flag every mismatch.

**2. Client cycle drift** — per client: newest file in `/OUTPUTS/programs/[client]/` vs
Current Cycle in `/MEMORY/clients/registry.md` vs the client's `program-state.md` (where it
exists). Three sources, one truth — flag any disagreement.

**3. Stale deadlines** — any deadline in `/GOALS/active-goals.md` (or a campaign calendar)
that is in the past while its status is still active/in-progress.

**4. Orphan outputs** — files in `/OUTPUTS/` newer than the last `content-log.md` entry that
were never logged. Forward-only; don't backfill ancient history.

**5. Legacy path strays** — compare `/OUTPUTS/` in the legacy vault
(`C:\Users\Japhet Felipe\OneDrive\Documents\Project Jnoah\OUTPUTS`) against the canonical
vault (`C:\Jnoah\vault\OUTPUTS`). Any file that exists only in legacy is a stray from a
moved chat — copy it across.

**6. Unrouted lessons** — entries in `/MEMORY/lessons-learned.md` whose `Routed to:` line
still says PENDING. A lesson isn't done until its rule lives in a canonical file.

**7. Control-file divergence** — CLAUDE.md vs AGENTS.md. The platform check says they are
content-synced (identity, universal rules, load order). Diff the shared sections; flag drift.

**8. Stale footers** — "Last updated" lines in control files (CLAUDE.md, ROUTER.md, STATE.md,
SYNC.md, CHATS.md, LINT.md) older than the most recent meaningful change in their domain.

## Report format

One line per finding, greppable:

```
[check#] file — what disagrees with what — proposed fix
```

Show the full report, wait for go. After fixes: append one `[SYSTEM] — lint` line to
/MEMORY/decisions-log.md listing what was found and fixed.

## Rules

- Lint never invents — every finding cites the two (or more) places that disagree.
- brief.md beats STATE.md on campaign status. Program files beat registry.md on cycles.
  The artifact closest to the work wins; the index mirrors it.
- Anything ambiguous gets flagged, not auto-resolved.
- **File ops on paths with `[brackets]`, em-dashes, or other special chars: use Node `fs`,
  never PowerShell `Copy-Item`** — PowerShell expands brackets as wildcards and silently
  copies nothing. Always verify a copy by listing the destination, never by exit status.
- Paths intentionally relocated inside the canonical vault (e.g. `OUTPUTS/programs/6FIX` →
  `/ENGINES/6fix/`) are not strays — keep the ignore list in the lint tooling current.

---

## Last updated
2026-06-10 — Created (self-learning loop Phase A). Eight checks defined.
