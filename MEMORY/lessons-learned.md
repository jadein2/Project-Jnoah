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

## [2026-06-12] programming | No standard for program file naming/structure across clients — flagged, fix pending
- Correction: Jap flagged "Day 5" inconsistency — some clients get standalone "C[cycle]-Day[N]-[descriptor].md" files per session (Yury: C13-Day5-full-body-closer.md, Aira: C3-Day5-coached-strength-gymnastics.md), while others get one "[Client]-Cycle[N]-Week[N].md" file with embedded Session 1/2/3 (Jozen-Cycle4-Week1.md). No documented rule for which structure applies when.
- Rule: One file per week, `[ClientName]-[CycleLabel]-Week[N].md`, for any client with 3+ sessions/week (the default). 1–2 sessions/week (rare) gets individual `[ClientName]-[CycleLabel]-Week[N]-Day[N]-[descriptor].md` files. Existing files are not retroactively migrated.
- Routed to: DONE 2026-06-14 — training-program.md "Output file format rule" (already existed, 2026-05-30) + "Output destination" section (was self-contradictory, now aligned) + ROUTER.md Programs row (was a third conflicting version, now aligned).

## [2026-06-12] ops | A campaign brief without a scheduled activation date is a dead campaign
- Correction: the 2026-06 6FIX Launch campaign was fully built (brief, calendar, copy for 8 asset types) but sat in DRAFT until every date in it passed — DM deadline, onboarding call, cohort start all died unexecuted. Zero marketing happened.
- Rule: a campaign brief is not "done" at approval — it is done when an activation date is on the calendar and the first asset is scheduled. Any campaign still in DRAFT 7 days before its first hard date gets surfaced in STATE.md top-3 / morning brief as AT RISK.
- Routed to: /ENGINES/marketing/campaign.md (close/activation protocol) + this entry

## [2026-06-12] copy | Pioneer and Founding are two different offers — never conflate
- Correction: campaign plans and STATE treated "Pioneer rate" and "Founding Member Rate" as one renamed offer. Jap corrected: Pioneer = NEW members acquired from soft-opening marketing onward; Founding Member Rate = PREVIOUS Urban Strong Fitness clients only (comeback offer, closed Jun 22 firm).
- Rule: the two offers never appear interchangeably. Founding posts address old Urban Strong clients explicitly; Pioneer posts address new prospects. Founding is dead after Jun 22 — never resurrect.
- Routed to: /BRANDS/URBN-athletics.md (offer naming rule under CTAs)
