# Lessons Learned — Correction → Rule Log

Append-only. One entry per correction that produced a general rule. This is the record;
the rule itself must also be written into its canonical home (brand file, engine file,
/GLOBAL/, or the control file for universal rules). **A lesson isn't done until it's routed.**

Domains: `copy` · `design` · `programming` · `client` · `ops` · `system`

Entry format (greppable):

```
## [YYYY-MM-DD] domain | short title
- Correction: what was wrong / what Jap corrected
- Rule: the general rule extracted from it
- Routed to: file the rule now lives in (or PENDING)
```

---

## [2026-06-10] system | Campaign status has one canonical source
- Correction: URBN June campaign showed DRAFT in brief.md while STATE.md said PRODUCTION — two files disagreed about the same fact.
- Rule: `brief.md` Status is canonical for campaign status. STATE.md mirrors it, never leads it. When they disagree, fix STATE.md (or the brief if it's genuinely stale) the moment the drift is seen.
- Routed to: LINT.md (check 1)

## [2026-06-10] ops | PowerShell silently fails on bracketed paths
- Correction: a "successful" file copy reported all 7 Pin carousel PNGs synced — none arrived. The folder name contained `[RFPH Pinned]`; PowerShell expanded the brackets as wildcards, matched nothing, copied nothing, and reported no error. The first lint run caught it.
- Rule: file ops on paths with brackets, em-dashes, or special chars use Node fs, never PowerShell Copy-Item. Verify copies by listing the destination, never by exit status.
- Routed to: LINT.md (Rules)

## [2026-06-10] ops | Moved chats keep writing to their old vault path
- Correction: a Cowork chat moved from the old "Project Jnoah" (OneDrive) into Jnoah OS kept saving program outputs to the OneDrive vault — Em Tan's new training week never appeared in the dashboard.
- Rule: outputs created in a chat that was moved between projects may land in the old project's path. After working in a moved chat, verify the file landed in `C:\Jnoah\vault` — and run `lint jnoah` to catch strays.
- Routed to: LINT.md (check 5)
