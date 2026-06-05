# Pre-Mortem Audit — Phase 12
**Date:** 2026-05-24
**Scope:** Full system — all engines, brands, skills, memory, goals, Jnoah OS interface
**Auditor:** Claude (Cowork session)
**Issues found:** 15
**Triage:** 3 P1 · 6 P2 · 6 P3

---

## Summary

The system is architecturally sound. All 23 engines exist, all 6 skills are live, and the routing table covers every task type. The issues found are not structural failures — they are data integrity gaps, one domain conflict that will break CTAs on the live website, and several stale references that will cause session confusion. Fix the P1 items before any new production work ships.

---

## P1 — Critical. Fix before any production work proceeds.

---

### P1-1 — Domain split: restartfitness.ph vs restartfitnessph.com ✅ RESOLVED 2026-05-25

**Where:** wix.md (engine) vs website-launch.md + active-goals.md (goals system)

**What's happening:**
- `wix.md` declares the site as `restartfitnessph.com` and hardcodes all CTAs to `restartfitnessph.com/start`
- `website-launch.md` and `active-goals.md` both reference the target domain as `restartfitness.ph`
- These are two different domain strings. They may resolve to the same site eventually, but right now the system treats them as the same without confirmation.

**Why it matters:**
Every page and blog post the wix engine publishes will embed `restartfitnessph.com/start` as the booking CTA. If the live domain is `restartfitness.ph`, those CTAs are broken the moment the site launches. This is not a formatting issue — it is a broken link in the primary conversion path.

**Fix:**
Confirm the actual live domain with Jap. Update wix.md Site header + all CTA references to match. Update website-launch.md and active-goals.md to match. One canonical domain, zero exceptions.

**Resolution:** Jap confirmed canonical domain is `restartfitnessph.com`. Updated `website-launch.md` and `active-goals.md` — all instances of `restartfitness.ph` replaced with `restartfitnessph.com`.

---

### P1-2 — 5 active clients missing program-state.md ✅ PARTIALLY RESOLVED 2026-05-25

**Where:** /MEMORY/clients/

**Clients affected (original):** Jaedie-Padua · Anthony · Mach · Lenny-Calamba · Lily
**Status update:** Jaedie, Anthony, Lenny, Lily confirmed INACTIVE — state files not required. Mach confirmed ACTIVE — state file created 2026-05-25. 3 new 6FIX clients (Arriana, Fame, Karen) also created. All current active clients with programming now have state files.

**What's happening:**
training-program.md mandates reading program-state.md before every session: "Do not rely on session context or output file parsing alone." The 7–10 day rotation checklist in wod-brain.md also depends on the pool log inside state files. All 5 of these clients have no state file.

**Why it matters:**
Any programming session for these clients runs without pool log history. The rotation check cannot fire. The system will silently violate its own fault pattern rules (Fault 1–8 in wod-brain.md) because it has no data to check against.

**Fix:**
Create state files for all 5 using the template at /ENGINES/coach-jap/program-state-template.md. For Lenny and Lily — confirm their status first (see P1-3). For Jaedie, Anthony, and Mach — state files can be initialized with whatever is in the client profiles + last output files, marked as "reconstructed baseline."

---

### P1-3 — 3 clients referenced but have no vault presence ✅ RESOLVED 2026-05-25

**Where:** /MEMORY/clients/registry.md (flags section)

**Clients:** Arriana Ramos · Fame Florendo · Karen Carandang (name corrected from "Katrina")

**What's happening:**
Registry flags note "folders exist on Desktop with no files." There are no folders for these clients in /MEMORY/clients/ at all. Their existence is only in a flag note.

**Why it matters:**
If any programming or nutrition work is requested for these clients, the system will load without context — no equipment flags, no injury history, no goal — and will either hallucinate a baseline or refuse. No output can be safely built for an unfiled client.

**Fix:**
Confirm status with Jap. If active: create folders and build profiles using client-profile.md schema. If inactive or never onboarded: remove from the registry flags or mark explicitly as "not onboarded."

**Resolution:** Jap confirmed all 3 are active 6FIX Phase 1 clients. Folders and profiles created for all 3. "Katrina" corrected to "Karen" — legal name flag retained. Registry restructured with Active / Inactive / Test/Dummy sections. Mach also moved to Nutrition + Program. program-state.md files created for all 3.

---

## P2 — Significant. Fix this session or before P1 goal execution begins.

---

### P2-1 — No web copy engine for the P1 goal (website launch)

**Where:** /ENGINES/ — missing engine

**What's happening:**
The website-launch.md goal routes copy tasks (Tasks 2–6) to `/ENGINES/content/ + anti-ai-copywriter skill`. But `/ENGINES/content/` has blog-post.md and social-post.md — neither is built for website page copy. Homepage hero copy, program page copy, and the About page follow completely different structural rules than a blog or a social caption.

There is no `web-copy.md` engine. The output destination `/OUTPUTS/web/page-name.md` exists, but there's no engine file governing how to produce homepage, program page, or conversion page copy that meets Restart Fitness PH brand standards.

**Why it matters:**
This is the P1 goal. Seven copy tasks execute starting 2026-05-29. Without an engine, each copy session will improvise structure. That means inconsistent page architecture, CTA placement, and voice — right before launch.

**Fix:**
Build `/ENGINES/content/web-copy.md` before Task 2 fires. Minimum viable version: page types (hero, about, program, results, booking), section order per page type, CTA placement rules, word count targets, anti-AI protocol pointer, output destination. Add routing row to ROUTER.md.

---

### P2-2 — Goals showing PENDING when milestones are already AT RISK

**Where:** /GOALS/active-goals.md + all 4 goal files

**What's happening:**
All 4 goals were created 2026-05-22 and all show Status: PENDING — their creation state. The goals skill calculates status at read time but does not write it back to the goal files. The source files are never updated. Today (2026-05-24):
- social-media-pipeline Task 1 is due TODAY (2026-05-24) — not started
- website-launch Task 1 (open decisions) is due 2026-05-27 — not started
- social-media-pipeline Milestone 1 is due 2026-05-28 — not started

Active-goals.md reads PENDING for all 4. Any read of the vault without running the morning brief shows false data.

**Why it matters:**
PENDING is a creation state, not a running state. The goals are now behind or at the edge of AT RISK. A system that shows PENDING when it should show AT RISK will not trigger urgency in the morning brief or in any downstream review.

**Fix (two steps):**
1. Today — manually update all 4 goal files Status fields to reflect current calculated status (social-pipeline: AT RISK; website-launch: AT RISK; marketing-sales and jnoah-os: ON TRACK — no milestones past due yet). Update active-goals.md to match.
2. Going forward — add a rule to the goals-engine.md Update protocol: "After every morning brief, Claude writes the calculated status back to each goal's Status field and to active-goals.md." The skill calculates it — the engine should persist it.

---

### P2-3 — Posting-log.md is empty; social-pipeline goal cannot calculate status

**Where:** /GOALS/posting-log.md

**What's happening:**
The goals skill reads posting-log.md to calculate calendar goal status for the social-media-pipeline goal. The file exists but appears to have no entries. The social pipeline goal's target includes 5x/week IG + Threads and 3x/week Facebook — but there is no log of any posts having been published.

**Why it matters:**
Without log entries, the goal skill will calculate 0 posts vs. target, which should show BEHIND — but it might also just error or silently skip the calculation. Either way, the social pipeline goal status is untrackable until the log is populated.

**Fix:**
Backfill posting-log.md with any posts that have been published since the goal was created (2026-05-22). Then establish the habit: any time a social post ships, it gets one line in posting-log.md. The campaign engine (campaign.md) should add a step to its "post execution" phase that writes a posting-log entry.

---

### P2-4 — content-log.md is nearly empty despite dozens of outputs

**Where:** /MEMORY/content-log.md

**What's happening:**
content-log.md has only one entry (2026-05-18 conversion post concepts, not even filed to an output folder). The decisions-log shows: carousels, social post batches, campaign asset sets, blogs, web schema — none of these appear in content-log.md. The content engines (blog-post.md, social-post.md, carousel.md) all have a step to write to content-log.md, but it's clearly not executing reliably.

**Why it matters:**
Content-log.md is supposed to be the performance tracking layer — what shipped, where, what it did. Campaign post-mortems, content audits, and the posting-log bridge all depend on it being populated. It is effectively dead. Any "what have we shipped" review returns incomplete data.

**Fix:**
Backfill with the major content outputs from decisions-log entries. Then add an explicit instruction to each content engine's close-out steps: "If this step is skipped, the content cannot be tracked for performance. Write the log entry before closing the session."

---

### P2-5 — README.md is stale on vault path and skills list

**Where:** /README.md

**What's happening:**
Two stale references:
1. README still references `~/Documents/ProjectJnoah/` as the Claude Code path. Actual path: `C:\Jnoah\vault`
2. Skills folder map shows only 3 skills (ui-ux-design-pro, anti-ai-copywriter, coach-jap-programming-format). Missing: goals, research-analyst, frontend-design

The engine folder map is also outdated — shows only coach-jap/, design/, content/ under ENGINES/. Missing: client/, goals/, marketing/, research/, sales/, web/.

**Why it matters:**
README is the entry-point documentation. A new session (or Jap reviewing the system) reading it gets an incomplete picture of what exists. The stale path would cause a "folder not found" on Claude Code setup.

**Fix:**
Update README.md with current vault path, full skills list, and full engine folder map. 15-minute job — do it this session.

---

### P2-6 — Jnoah OS app has no git remote; vault backup is local only

**Where:** C:\Jnoah\jnoah-os-app and C:\Jnoah\vault (git repo)

**What's happening:**
The jnoah-os-interface.md project file explicitly flags: "git private remote for vault (gh not installed); commit the app repo" as optional housekeeping not done. The vault has a local git backup (commit f0d3863) but no remote. The OS app has no git commit at all.

**Why it matters:**
Phase 0 of the Jnoah OS app is complete. 4 planned phases remain. If the local drive fails, all Phase 0 work is lost. As Phase 1 adds SQLite FTS and live connector wiring, the loss surface grows. This is not a system design flaw — it is an unmitigated backup risk.

**Fix:**
Install `gh` (GitHub CLI) and create two private repos: one for the vault, one for jnoah-os-app. Both push on every session close or on any significant build. Alternatively: use Backblaze or the cloud drive (but not OneDrive, which is explicitly excluded by the vault move decision).

---

## P3 — Cleanup. Low risk. Fix in background.

---

### P3-1 — PROGRESS.md ordering is non-linear and missing Phase 11 + 12

Phase 7 is marked in progress. Phases 8, 9, 10 follow. Phases 11 and 12 exist only as CLAUDE.md last-updated lines — there are no Phase 11 or Phase 12 sections in PROGRESS.md itself. The decisions log summary table at the bottom shows phases 8–10 but nothing newer.

**Fix:** Add Phase 11 (staged decision pipeline) and Phase 12 (Goals system) as complete sections. Close Phase 7 properly or move remaining open items to the backlog.

---

### P3-2 — Blog engine defaults to Urban Strong, which is under review

ROUTER.md row: "write a blog post" → blog-post.md → "Urban Strong (default for blogs)". Blog-post.md has the confirmation warning. But the ROUTER.md description still says "Urban Strong default" without the caveat — someone reading only the routing table gets no warning.

**Fix:** Update the ROUTER.md blog row to say "Urban Strong — ⚠️ confirm before proceeding" so the warning is visible at the routing layer, not only inside the engine.

---

### P3-3 — "6Fix" vs "6FIX" naming inconsistency

Brand file: `6FIX`. Offer-engine.md: `6Fix` in the table, `6Fix` in section headers. Sales-engine.md: `6Fix`. The correct form per the brand file is `6FIX` (all caps).

**Fix:** Find-replace `6Fix` → `6FIX` in offer-engine.md and sales-engine.md. Minor, but brand file wins.

---

### P3-4 — Goals skill does not persist calculated status

The goals skill calculates ON TRACK / AT RISK / BEHIND at read time but never writes it back to the goal file or active-goals.md. Described in P2-2 above. This P3 item covers the engine-level fix: add a status write-back step to goals-engine.md's Update protocol.

---

### P3-5 — HOW-TO-USE.md not updated since Phase 9

HOW-TO-USE.md was last updated 2026-05-21. Phases 10–12 added: research-analyst skill, wix engine, goals system, goals skill, morning brief protocol, Jnoah OS Interface. The operating manual does not describe any of these.

**Fix:** Add sections covering: morning brief as daily entry point, goals engine setup, Jnoah OS web app usage (localhost:3000, what modules are live), and research engine usage. These are now primary workflows.

---

### P3-6 — wix.md booking CTA hardcoded to an unverified live URL

wix.md hardcodes `restartfitnessph.com/start` on every page. The site is not live yet. Blog posts pushed now carry a broken booking link.

**Fix (interim):** Until the site is live and the domain is confirmed (P1-1), the wix engine should note that blog CTAs use a placeholder and the URL must be confirmed before publishing live. Add a conditional: "If site is not yet live at the target domain, set CTA link to TBD or the booking tool's direct URL (e.g., Calendly)."

---

## Fix order table

| # | Issue | Priority | Effort | Owner |
|---|---|---|---|---|
| P1-1 | Domain split: restartfitness.ph vs restartfitnessph.com | P1 | 10 min — confirm + edit 3 files | Jap confirms, Claude updates |
| P1-2 | 5 clients missing program-state.md | P1 | 30 min | Claude builds from profiles |
| P1-3 | 3 clients unregistered | P1 | 15 min decision + 30 min if onboarding | Jap confirms status |
| P2-1 | No web-copy engine for website launch | P2 | 60 min build | Claude builds web-copy.md |
| P2-2 | Goals all PENDING — status not persisted | P2 | 20 min update + engine rule change | Claude updates + adds rule |
| P2-3 | posting-log.md empty | P2 | 20 min backfill | Jap provides post list, Claude logs |
| P2-4 | content-log.md nearly empty | P2 | 30 min backfill from decisions-log | Claude backfills |
| P2-5 | README stale path + skills list | P2 | 15 min | Claude updates |
| P2-6 | No git remote for vault or OS app | P2 | 30 min | Jap installs gh, Claude guides |
| P3-1 | PROGRESS.md missing Phase 11 + 12 | P3 | 15 min | Claude adds |
| P3-2 | ROUTER.md blog row missing Urban Strong warning | P3 | 5 min | Claude updates |
| P3-3 | 6Fix vs 6FIX naming | P3 | 5 min | Claude find-replace |
| P3-4 | Goals skill doesn't persist status | P3 | 10 min rule add | Claude adds to goals-engine.md |
| P3-5 | HOW-TO-USE.md not updated since Phase 9 | P3 | 45 min | Claude rewrites relevant sections |
| P3-6 | wix.md CTA hardcoded to unverified URL | P3 | 10 min | Claude adds conditional |

---

## What this audit did NOT find

- No contradictions between training-program.md and wod-brain.md content rules
- No conflicts between sales-engine.md offer positioning and offer-engine.md pricing
- No broken routing rows in ROUTER.md
- No missing skills for any live task type
- No brand voice rule conflicts between CLAUDE.md and restart-fitness-ph.md
- No naming violations in engine files (no "tailored," no banned lines)
- Program-state system working correctly for 9 of 14 clients
- Campaign engine fully wired to research, content, and ClickUp

---

## Last updated
2026-05-24 — Pre-mortem Phase 12. 15 issues found. 3 P1 · 6 P2 · 6 P3.
2026-05-25 — P1-1 RESOLVED (domain confirmed + goals files updated). P1-2 PARTIALLY RESOLVED (Mach state file created; inactive clients removed from scope; 3 new 6FIX client state files created). P1-3 RESOLVED (all 3 clients profiled, registered, and state files initialized). All P1 items closed.
