# Post-Mortem Audit — Phase 8
**Date:** 2026-05-21
**Scope:** Full system audit after Research Engine addition
**Files read:** All engines, brands, skills, memory, outputs, HOW-TO-USE, ROUTER, PROGRESS, raw files index

---

## System health summary

The core architecture is solid. Engines are well-built, the anti-AI protocol is strong, the client system has real data, and the campaign engine is production-ready. The Research Engine adds a meaningful upstream layer. But after reading every file, there are 15 specific issues — 4 of them break production work right now.

---

## P1 — Breaks production. Fix immediately.

### 1. Design engine has a wrong path

**File:** `/ENGINES/design/design-brief.md`
**Problem:** The engine tells the system to check `/design-reference-raw/[brand]/` for design references. That path does not exist.
**Actual path:** `/Raw-Files/design-reference-raw/`
**Impact:** Every design task fails to find logos, templates, brand kits, carousel reference images, fonts. The design engine is running blind on every task.
**Fix:** Update design-brief.md to point to `/Raw-Files/design-reference-raw/`. Also note there's no brand subfolder structure — it's organized by asset type (logos/, carousels/, posts/, templates/, stories/).

### 2. Research Engine step ordering is wrong for new topics

**File:** `/ENGINES/research/research-engine.md`
**Problem:** Step 2 (Scan the drop zone) tries to scan `/RESEARCH/[topic-slug]/RAW/` before Step 3 (Create the topic folder) creates it. For new topics, the folder doesn't exist yet when Step 2 runs.
**Impact:** First research run on any new topic will hit a missing folder.
**Fix:** Swap Step 2 and Step 3. Create the folder first, then scan the drop zone.
**Corrected order:** Step 0 (check INDEX) → Step 1 (depth prompt) → Step 2 (create folder if new) → Step 3 (scan drop zone) → Step 4 (run layers) → Step 5 (write raw file) → Step 6 (update INDEX)

### 3. Research Engine not wired into any downstream engine

**Files:** campaign.md, blog-post.md, social-post.md, design-brief.md
**Problem:** The Research Engine defines a handoff format (RESEARCH HANDOFF block) but no downstream engine is told to receive it or check /RESEARCH/ before starting work.
**Impact:** The research engine exists in isolation. The system has no memory that research might already exist for a topic. Every production run starts cold, ignoring any research already done.
**Fix:** Add a "check research" step to campaign.md Phase 1, blog-post.md pre-work, and social-post.md pre-work. One line each: "Check /RESEARCH/INDEX.md — if a research file exists for this topic, read it before proceeding."

### 4. Jerome Foo missing from client registry

**File:** `/MEMORY/clients/registry.md`
**Problem:** Jerome Foo was added 2026-05-21 with a full client profile and habit log. Registry was last updated 2026-05-19. He is not in the table.
**Impact:** Any "list all clients" task returns an incomplete roster. Registry is the source of truth — it's currently wrong.
**Fix:** Add Jerome Foo to registry.md — Nutrition Coaching, fat loss, active.

---

## P2 — Meaningful gaps. Fix this session or next.

### 5. HOW-TO-USE.md file map is 4 phases out of date

**File:** `HOW-TO-USE.md`
**Problem:** Section 13 file map is missing: `/ENGINES/research/research-engine.md`, `/ENGINES/marketing/campaign.md`, `/ENGINES/design/design-brief.md`, all 6 `/ENGINES/client/` files, `/BRANDS/restart-fitness-ph-design-brief.md`, `/ENGINES/coach-jap/wod-brain.md`, the entire `/RESEARCH/` folder, the `/OUTPUTS/campaigns/` folder.
**Impact:** New users (or Jap returning after a break) get an outdated map of the system. HOW-TO-USE is the orientation document — if it's wrong, the whole onboarding breaks.
**Fix:** Full rewrite of Section 13 file map. Also update Section 12 quick commands to include research and campaign commands.

### 6. Urban Strong is the default brand for blogs — and it's under review for deletion

**Files:** `blog-post.md`, `HOW-TO-USE.md`
**Problem:** blog-post.md sets Urban Strong Fitness as the default blog brand. Urban Strong is flagged in CLAUDE.md and PROGRESS.md as "under review for rebrand or deletion — do not invest further until Jap confirms direction."
**Impact:** If Urban Strong is deleted, every blog default breaks. If Urban Strong is rebranded, the blog CTA (urbanstrongfit.com/book-free-assessment) is wrong. Every blog task is implicitly dependent on a brand decision that hasn't been made.
**Fix options:**
- Option A: Change blog default to Restart Fitness PH, add a note in blog-post.md that Urban Strong is under review
- Option B: Keep Urban Strong as default but add a mandatory confirmation step: "Urban Strong is the default blog brand — confirm this is correct before proceeding, as the brand is under rebrand review"
- Recommend Option B until the brand decision is made. Don't assume the default changes.

### 7. Pricing and services source of truth not in any live engine

**File:** `/Raw-Files/design-reference-raw/rfph_services_offers_pricing_source_of_truth_v1/`
**Problem:** There is a detailed pricing and services file (6 service tiers, pricing in PHP and USD, positioning lines, offer rules) sitting in Raw-Files. It is not referenced by any engine. Discovery-call.md, campaign.md, and the Restart PH brand file have no connection to it.
**Impact:** Discovery calls happen without the system knowing the service ladder. Campaign briefs reference programs without pricing context. The offer engine (ROUTER.md: "pricing / offer structure → TBD Phase 3") is still TBD at Phase 8 — four phases overdue.
**Fix:** Build a minimal `/ENGINES/sales/offer-engine.md` from the pricing source of truth. At minimum: the 5 service tiers, pricing, who each is for, positioning line, and best-next-step after each. Wire it into discovery-call.md and campaign.md.

### 8. content-log.md is orphaned

**File:** `/MEMORY/content-log.md`
**Problem:** The content log was initialized in Phase 5 and documented in HOW-TO-USE. But reading every engine file, not one of them references it. Decisions-log.md is consistently referenced ("log one line after every output") — content-log.md is never mentioned.
**Impact:** Content performance tracking is not happening. The log exists but never gets entries. Over time this makes it impossible to track what's been published, what performed, and what content gaps exist.
**Fix:** Add a content-log entry requirement to: social-post.md (Step 8 QA), blog-post.md (output destination section), carousel.md (output section). One line in each: "After publishing, log to /MEMORY/content-log.md: date · type · platform · CTA · performance TBD."

### 9. Sales Engine is still interim at Phase 8

**File:** `ROUTER.md`
**Problem:** "DM reply / sales script → /ENGINES/content/social-post.md (interim)" — this has been marked interim since Phase 3. Five phases later it's still interim. Now that the Research Engine exists, sales/DM scripts are one of the clearest research outputs (competitive DM analysis, objection patterns, what competitors are saying). The sales engine gap is more expensive now.
**Impact:** DM scripts and objection handling use the content engine, which is built for broadcast content, not conversion conversations. The format, tone, and flow rules are different. This is producing misrouted output.
**Fix:** Sales Engine is Phase 9, not optional anymore. Build `/ENGINES/sales/` with at minimum: DM flow templates, objection handling scripts, pricing conversation guide, and offer presentation format.

---

## P3 — Plan for Phase 9 and beyond.

### 10. Wix Engine is missing and campaign engine has multiple placeholders for it

**File:** `campaign.md`
**Problem:** campaign.md has 4 explicit "placeholder — wire in when Wix engine is built" notes. Website component of every campaign is currently manual. Blog goes up manually, hero updates are manual, no page-update automation.
**Impact:** Campaign execution is incomplete without Wix. Every campaign with a website component has orphaned tasks.
**Fix:** Wix Engine — Phase 9. The MCP connection already exists (Wix tools are in the available tools list). Wire campaign Phase 4 to include a Wix handoff step when the engine is built.

### 11. No structured campaign performance log

**File:** `MEMORY/` directory
**Problem:** When a campaign closes, the protocol says to log one line to decisions-log.md. There's no structured campaign performance record — no place to track: impressions, DMs received, discovery calls booked, conversions, what content format worked best, what didn't.
**Impact:** Campaign learnings are invisible. You can't improve the next campaign without knowing what the last one produced.
**Fix:** Create `/MEMORY/campaigns/campaign-performance.md` — one table row per closed campaign with: name, dates, objective, primary CTA result, best-performing asset, worst-performing asset, DMs received, calls booked, note for next time.

### 12. Three client profiles don't exist in the system

**File:** `registry.md` flags section
**Problem:** Arriana Ramos, Fame Florendo, Katrina Carandang are flagged as having Desktop folders but no profiles in the system.
**Impact:** Any task involving these clients will have no context. The system can't help with their programs.
**Fix:** Create profiles for each when their service type and current status are confirmed.

### 13. Check-in logs are empty across all clients

**File:** Every client's `check-ins/_index.md`
**Problem:** Every client folder has a check-ins/ subfolder initialized with an empty `_index.md`. No actual check-in data exists in the system yet.
**Impact:** The check-in engine can't do retrospective analysis or trend flagging without data. For clients like Em Tan and Aira Quito who are mid-cycle, there should be check-in entries already.
**Fix:** Workflow habit — log check-ins when they happen. Not a system build, a behavior change.

### 14. research-analyst skill not yet built

**File:** PROGRESS.md Phase 8
**Problem:** The skill was planned as part of Phase 8 but marked as a Phase 9 item. The engine works without it (the logic is described in research-engine.md) but signal weighting and source credibility scoring are manual, not enforced.
**Fix:** Phase 9 — build `/.claude/skills/research-analyst/SKILL.md`.

### 15. CLAUDE.md and HOW-TO-USE don't mention the Research Engine at all

**Files:** `CLAUDE.md`, `HOW-TO-USE.md`
**Problem:** CLAUDE.md load order doesn't mention /RESEARCH/ as a layer. HOW-TO-USE has no section on research commands.
**Fix:** Add a brief "Research Layer" note to CLAUDE.md under "How this system works." Add Section X to HOW-TO-USE covering research commands and the /RESEARCH/ repo structure.

---

## What's working well — don't change

These are solid. Audit confirmed no structural issues.

- **anti-ai-output-rules.md** — comprehensive, consistently referenced, well-enforced across engines
- **training-program.md + wod-brain.md** — the two-file pairing works. 5,500+ lines of real data extracted correctly
- **campaign.md** — well-built. Phase structure, ClickUp integration, naming convention, close protocol all correct
- **restart-fitness-ph.md** — locked and clean. No contradictions found
- **client folder structure** — [name]/[name].md + references/ + check-ins/ is correct. Used consistently
- **ROUTER.md** — clean routing table, good signal detection for all existing engines
- **social-post.md** — platform rules are specific and correct. 4-layer prompt stack is good
- **coach-jap-programming-format skill** — notation locks are working. Format A/B is correctly applied across all client programs on file
- **nutrition-plan.md** — Mifflin-St Jeor implementation and 9-section output structure are solid

---

## Recommended fix order

| Priority | Item | Effort | When |
|---|---|---|---|
| P1 | Fix design engine path | 5 min | Now |
| P1 | Fix research engine step order | 5 min | Now |
| P1 | Wire research engine into campaign, blog, social | 20 min | Now |
| P1 | Add Jerome Foo to registry | 5 min | Now |
| P2 | Rewrite HOW-TO-USE Section 13 file map | 30 min | This session |
| P2 | Add Urban Strong confirmation step to blog-post.md | 10 min | This session |
| P2 | Build offer-engine.md from pricing source of truth | 45 min | Next session |
| P2 | Add content-log.md reference to 3 engines | 15 min | This session |
| P2 | Sales Engine — /ENGINES/sales/ | 60 min | Phase 9 |
| P3 | Wix Engine | 90 min | Phase 9 |
| P3 | Campaign performance log | 20 min | Phase 9 |
| P3 | research-analyst skill | 45 min | Phase 9 |
| P3 | CLAUDE.md + HOW-TO-USE research section | 20 min | Phase 9 |

---

## What Phase 9 looks like

Based on this audit, Phase 9 should contain:

1. **Sales Engine** — /ENGINES/sales/ (DM flows, objection handling, offer presentation)
2. **Offer Engine** — /ENGINES/sales/offer-engine.md (from pricing source of truth)
3. **Wix Engine** — /ENGINES/web/wix.md (using Wix MCP connection)
4. **research-analyst skill** — /.claude/skills/research-analyst/
5. **HOW-TO-USE rewrite** — full update to reflect current system state
6. **Campaign performance log** — /MEMORY/campaigns/campaign-performance.md
7. **CLAUDE.md research note** — one paragraph, load order update

---

*Audit conducted 2026-05-21. 15 issues identified: 4 P1, 5 P2, 6 P3.*
