# Checkpoint - Full System Diagnostics
**Date:** 2026-05-28
**Scope:** Project Jnoah root files, routing, brand layer, engines, skills, memory, outputs, research, goals, raw references.
**Mode:** Diagnostic only. No architecture, brand, route, goal, or engine changes applied in this pass.

---

## Executive verdict

Project Jnoah is structurally sound and usable for production work. The core idea is clear: a markdown-based operating system that routes business tasks into the right brand file, engine, skill, output folder, and memory log.

The system is not failing from missing engines anymore. It is now failing in a more mature way: source-of-truth drift. The live system has outgrown the older orientation docs, and there are now parallel control surfaces that need one canonical rule.

No critical broken route paths were found in `ROUTER.md`. Every live engine path referenced by the routing table exists.

---

## Architecture map

1. Root control layer
   - `AGENTS.md` and `CLAUDE.md` define identity, universal rules, brand overview, load order, and logging expectations.
   - `ROUTER.md` maps requests to brands, engines, skills, and pre-execution gates.

2. Brand layer
   - `BRANDS/restart-fitness-ph.md` is the locked Restart Fitness PH identity.
   - `BRANDS/urban-strong.md` exists but is under rebrand/deletion review.
   - `BRANDS/restart-fitness-ph-design-brief.md` gives a design shortcut.

3. Engine layer
   - Live engine families: content, design, coach-jap, client, marketing, sales, web, research, goals.
   - Extra live coaching support files exist beyond the root summaries: `wod-brain.md` and `program-state-template.md`.
   - ADHERE client workflow exists and is routed.

4. Skills layer
   - Skills exist under both `.agents/skills/` and `.claude/skills/`.
   - The trees are almost mirrored. `.claude` has one extra metadata file: `strategic-decision.skill`.

5. Memory and output layer
   - `MEMORY/` is active and holds decisions, content logs, clients, projects, campaign performance, and checkpoints.
   - `OUTPUTS/` contains real work, especially campaigns, carousels, programs, 6FIX assets, and web schema.

6. Research and raw input layer
   - `RESEARCH/` is live with topic folders and raw research.
   - `Raw-Files/design-reference-raw/` is populated with logos, carousels, posts, templates, fonts, decks, and offer source files.

7. Goals layer
   - `GOALS/active-goals.md` is live.
   - `GOALS/jnoah-os-complete.md` already contains this audit as part of the final completion goal.

---

## What is working

- Routing is coherent. Every concrete engine file referenced in `ROUTER.md` exists.
- The brand hierarchy is strong. Restart Fitness PH has a clear locked source of truth, and Urban Strong has an explicit hold flag.
- The research handoff architecture is sound. Research is manual-only, indexed, and downstream engines check for existing research.
- Core production engines are mature: campaign, social post, blog, training program, nutrition, sales, offer, Wix, goals, and client workflows.
- Memory is active. There are real client files, project files, decisions, checkpoints, output logs, campaign outputs, and program outputs.
- The OS has a clear next product direction: a local visual cockpit over the markdown vault, documented in `MEMORY/projects/jnoah-os-interface.md`.

---

## Main risks

### P1 - Control-file split

`AGENTS.md` is now the active Codex-facing operating file, but `ROUTER.md`, `README.md`, `HOW-TO-USE.md`, and `CLAUDE.md` still describe the older Claude-first setup.

Specific drift:
- `ROUTER.md` says to always read `CLAUDE.md` first.
- `AGENTS.md` says the load order starts with `AGENTS.md`.
- `AGENTS.md` points to `/.Codex/skills/` and `/.Codex/agents/`, but the actual folders are `.agents/` and `.claude/`.
- `CLAUDE.md` and `AGENTS.md` are near-duplicates with platform-specific wording.

Impact: future agents may start from different root instructions depending on tool surface.

### P1 - Orientation docs are stale

`README.md`, `HOW-TO-USE.md`, and `PROGRESS.md` do not fully match the live system.

Examples:
- `README.md` still frames the system around early phases and `.claude/`.
- `HOW-TO-USE.md` says Phase 9 additions are planned even though sales, offer, Wix, and research skill files now exist.
- `PROGRESS.md` says Phase 12 is complete in control files, but the progress file itself still carries older phase ordering and open items.

Impact: the operating system is stronger than its instruction manuals. That creates avoidable confusion.

### P1 - Brand files violate their own size rule

The control file says brand files should stay under 300 lines.

Current line counts:
- `BRANDS/restart-fitness-ph.md`: 590 lines.
- `BRANDS/urban-strong.md`: 446 lines.
- `BRANDS/restart-fitness-ph-design-brief.md`: 328 lines.

Impact: brand files are becoming mixed reference libraries instead of quick source-of-truth files.

### P1 - Urban Strong decision still blocks downstream cleanup

Urban Strong is explicitly under rebrand/deletion review. That affects:
- Blog default routing.
- Poster engine priority.
- Urban Strong design system.
- Urban Strong domain choice.
- Whether Urban Strong should remain a public brand or become only a facility reference under Restart Fitness PH.

Impact: the rest of the system has to keep defensive warnings around Urban Strong until this decision is made.

### P2 - Domain mismatch

Restart appears as both:
- `restartfitnessph.com`
- `restartfitness.ph`

Urban Strong appears as both:
- `urbanstrongfit.com`
- `urbanstrongfitness.com`

Impact: web, CTA, and Wix tasks can route to the wrong site or use the wrong link unless the operator catches it.

### P2 - Offer naming mismatch

The brand file locks `6FIX`, but the offer and sales layer use `6Fix` in multiple places.

Impact: public-facing and internal naming can drift, especially in sales scripts, website copy, and campaign assets.

### P2 - Design reference path wording is inconsistent

The live design engine correctly points to `Raw-Files/design-reference-raw/`, and that folder is populated.

The goal file still says `/design-reference-raw/` without the `Raw-Files/` prefix.

Impact: the task could be misread as still needing a new root folder even though the real reference library already exists.

### P2 - Goals statuses need a refresh

All active goals are marked `PENDING`, but related work has moved forward in outputs, memory, and project notes.

Impact: morning briefs can understate actual progress or repeatedly surface stale setup work.

### P3 - Engine anatomy is uneven

Some engines include QA, output path, memory log, source, phase, and last updated sections. Others are lighter.

Impact: the system works, but engine maintenance is harder because each file has a slightly different shape.

---

## Purpose assessment

The purpose is no longer just "make Claude remember the business." The system has become an operator layer for the business.

Current purpose:
- Preserve brand rules.
- Route work to the right workflow.
- Produce durable outputs.
- Track decisions and client state.
- Turn research into production assets.
- Support daily goals and campaign execution.
- Prepare for a local visual cockpit that reads the vault.

This is the right direction. The next improvement is not more engine creation. The next improvement is governance: one source of truth for control files, one source of truth for domains, one source of truth for offer naming, and one current onboarding map.

---

## Recommended fix order

1. Decide canonical control model
   - Option A: Codex-native. `AGENTS.md` and `.agents/` become primary; `CLAUDE.md` and `.claude/` are compatibility mirrors.
   - Option B: Claude-native. `CLAUDE.md` and `.claude/` remain primary; `AGENTS.md` mirrors them for Codex.
   - Option C: Platform-neutral. Create one shared system file, then have `AGENTS.md` and `CLAUDE.md` point to it.

   Recommendation: Option A for this workspace, because current execution is happening through Codex and `.agents` skills are active.

2. Update orientation docs
   - Refresh `README.md`, `HOW-TO-USE.md`, and `PROGRESS.md`.
   - Remove stale "planned" labels for files that now exist.
   - Add `AGENTS.md`, `.agents/`, goals, ADHERE, web, sales, offer, and current research structure.

3. Make domain decisions
   - Lock Restart domain.
   - Lock Urban Strong domain.
   - Update web engine, goals, router notes, brand files, and output schemas after the decision.

4. Normalize offer naming
   - Decide if `6FIX` is the only allowed public/internal spelling.
   - If yes, update offer engine, sales engine, web engine, goals, and output files where needed.

5. Resolve Urban Strong
   - Keep, rebrand, or retire.
   - Then update blog routing, brand file, poster decision, and all public-facing defaults.

6. Split oversized brand files
   - Keep each brand file as a fast decision layer.
   - Move long design, sales, proof, examples, and QA sections into companion files.

7. Refresh active goals
   - Update statuses based on current reality.
   - Mark this audit task complete only after Jap accepts the diagnostic and picks the fix path.

---

## Bottom line

Project Jnoah has a solid architecture and a clear purpose. It is production-usable today.

The main issue is not missing capability. The main issue is that the operating docs have not caught up with the live system. Fix the source-of-truth split first, then clean the orientation docs, then handle domain and offer naming decisions.

