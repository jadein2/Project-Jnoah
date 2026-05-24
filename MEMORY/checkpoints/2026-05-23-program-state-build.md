# Checkpoint — Program State Build
Created: 2026-05-23
Purpose: Rollback reference before program-state.md system is built and engine files are updated.

---

## What this checkpoint covers

Three engine files are being modified. All new client state files are being created from scratch.

---

## Files being MODIFIED (restore from snapshot below if rollback needed)

### 1. `/ENGINES/coach-jap/training-program.md`
**Change being made:** Adding mandatory pre-build read step and mandatory post-build write step to the Pre-work section.

**Pre-change state — Pre-work section (lines 13–22):**
```
## Pre-work: four questions before writing begins

No program is written without answers to all four:

1. What is the cycle goal?
2. What is the cycle length?
3. What is the measurable outcome?
4. What is the client's context?

If any of these is missing — ask before generating. Do not invent a baseline or a goal.
```

**Restore action:** Remove the two new lines added to Pre-work. No other content changed.

---

### 2. `/ENGINES/client/client-onboarding.md`
**Change being made:** Adding `program-state.md` scaffold to the folder creation step in Stage 6 (Program Design).

**Pre-change state:** Stage 6 references `/MEMORY/clients/[name]/check-ins/` for logging but does not mention creating `program-state.md` at registration.

**Restore action:** Remove the one line added to Stage 6 folder setup block.

---

## Files being CREATED (rollback = delete these files)

All `program-state.md` files being created are NEW. No existing files are overwritten.

Clients getting state files:
- `/MEMORY/clients/Yury/program-state.md`
- `/MEMORY/clients/Enosh/program-state.md`
- `/MEMORY/clients/Aira-Quito/program-state.md`
- `/MEMORY/clients/Em-Tan/program-state.md`
- `/MEMORY/clients/Jozen/program-state.md`
- `/MEMORY/clients/Jude-Saldua/program-state.md`
- `/MEMORY/clients/Jerome-Foo/program-state.md`
- `/MEMORY/clients/Joice-Maningo/program-state.md`
- `/MEMORY/clients/Jen-Linzaga/program-state.md`

**Rollback action for all:** Delete these files. System reverts to previous state (no state files, parse output files directly).

---

## Template file being CREATED

- `/ENGINES/coach-jap/program-state-template.md` — NEW file. Rollback = delete.

---

## Pre-change system state confirmed

| Item | Status |
|---|---|
| program-state.md files | None exist — confirmed via find command |
| check-ins/_index.md files | Exist but all empty |
| training-program.md pre-work | No read/write step — confirmed |
| client-onboarding.md | No program-state scaffold step — confirmed |
| MEMORY/checkpoints/ folder | Created as part of this checkpoint |
| wod-brain.md | Already updated 2026-05-23 (pool rotation rule) — not being modified further |

---

## Diagnostic plan post-build

After all state files and engine updates are complete:
- Build 4 additional sessions for Enosh using the new system
- Verify: state file is read before building, pool rotation is respected, state file is updated after
- Pass = no pool violations, no stacking, state file current after build
- Fail criteria: any pool exercise repeating within 7 days, any posterior chain stacking, state file not updated

---

## Rollback procedure (full)

1. Delete all `program-state.md` files listed above
2. Remove the two added lines from `training-program.md` Pre-work section
3. Remove the one added line from `client-onboarding.md` Stage 6
4. Delete `/ENGINES/coach-jap/program-state-template.md`
5. System is restored to pre-build state
6. This checkpoint file can remain as a record or be deleted

Estimated restore time: < 5 minutes
