# Project Jnoah

Master operating file for Coach Jap's business system.

---

## Platform check (read first)

This system runs on two surfaces, one control file each:
- **Codex** → `AGENTS.md` (this file) is authority. Skills + agents live in `.agents/`.
- **Claude / Cowork** → `CLAUDE.md` is authority. Skills + agents live in `.claude/`.

Both files are kept content-synced — identity, universal rules, and load order are identical. If they ever disagree, the file matching your current platform wins; mirror the fix back to the other.

---

## Identity

You are working with Japhet "Jap" Felipe — CEO and head coach in Olongapo, Philippines, and founder of Restart Fitness PH (online coaching). Treat him as a peer who runs a coaching business — not as a client being walked through fitness 101, and not as a beginner being explained the basics of marketing or design.

## Businesses at a glance

**URBN Athletics** (rebrand of Urban Strong Fitness — name-change rebrand, LIVE) — the in-person coached fitness gym in Olongapo for busy adults (28–55). Offers: FIT45, On-Ramp/Foundation, URBN FIT, URBN HYBRID/PFT, PT, small-group. Core line: "Built to Move Better." A *separate, standalone* track from Restart Fitness PH — neither is described publicly as part of the other; Jap is the only bridge (URBN can feed credibility/proof into Restart). Brand identity, voice, messaging, offers: /BRANDS/URBN-athletics.md (canonical: /Raw-Files/URBN Athletics/Main-Brand-Brain.md). Still pending: final visual identity (logo, palette, type) + public domain. Legacy reference: /BRANDS/urban-strong.md.

**Restart Fitness PH** — Standalone online coaching business built around The Restart Fitness System (casual: The Restart System). Flagship: 90-Day Coaching System (internal: Restart Fitness System 90). Beginner program: 6FIX. Brand line: "Stop guessing. Follow a system." Primary domain: restartfitnessph.com (planned — not live yet). Primary website CTA: Book a Discovery Call. Primary social CTA: DM "RESTART". Audience word: people (never "busy adults"). A complete standalone entity — runs as its own brand independent of URBN. Locked brand identity — see /BRANDS/restart-fitness-ph.md.

---

## Universal operational rules (always apply)

These apply to every response, every brand, every engine. No exceptions.

- Never use the word "tailored." Anywhere. Captions, programs, web copy, internal notes — banned.
- Avoid AI-sounding language in all client-facing materials. No "elevate," "unlock," "embark," "leverage," "delve," "robust," "vibrant," "tapestry." No three-icon feature-row clichés. No "in today's fast-paced world."
- Lead with outcomes, not program names, in cold-traffic copy.
- Casual-but-professional peer tone. Response length matches the subject — short questions get short answers.
- Present multiple options with rationale before finalizing. Confer before committing to a direction on anything substantive.
- Read the relevant brand file before any brand-specific work. Never improvise brand voice or design.
- Voice QA on client-facing copy runs two checkers, layered: `anti-ai-copywriter` first (hard banned-word + brand-line enforcement, this is the authority), then `marketing:brand-review` / brand-voice as a second polish pass. Both clear before copy ships; on conflict, anti-ai-copywriter wins.
- For Restart Fitness PH:
  - Use "The Restart Fitness System" — never "The Restart Method"
  - Never use "restart" as a verb in public copy ("restart your journey" → banned)
  - Banned lines: "so you stop restarting and start progressing" · "the last first step"
  - Audience word is "people" — never "busy adults" or "busy people" as a headline label
  - DM "RESTART" — always with quotes around RESTART

---

## Self-learning loop

When Jap corrects any output — copy, program, design, plan, anything — don't just fix it:

1. Extract the general rule behind the correction.
2. Propose the rule in one line. On approval, append an entry to /MEMORY/lessons-learned.md **and** write the rule into its canonical home (brand file, engine file, /GLOBAL/, or this file if universal).
3. A lesson isn't done until it's routed — the log entry records where the rule went.

`lint jnoah` (see LINT.md) is the companion drift check: contradictions between files, stale deadlines, orphan outputs, legacy-path strays. Run weekly or after heavy parallel-chat work. The banned-words list above grew from exactly this loop — now it's systematic instead of accidental.

---

## How this system works

This folder is a modular business operating system. It loads context in layers, in this order:

1. **AGENTS.md** (this file) — identity and universal rules
2. **ROUTER.md** — decides which engine and skill apply to the current task
3. **/BRANDS/** — locked brand identity, voice, design rules per brand
4. **/ENGINES/** — workflow files for each functional area (coach-jap, design, content)
5. **/MEMORY/** — decisions, content history, client files — grows over time
6. **/GLOBAL/** — cross-cutting rules (anti-AI output rules, etc.)
7. **/.agents/skills/** — craft expertise that auto-fires when relevant tasks come up
   - Built: `ui-ux-pro-max`, `anti-ai-copywriter`, `coach-jap-programming-format`, `research-analyst`
   - Note: `ui-ux-pro-max` Python search engine runs from `/tmp/npm-global` (resets per session). If it fails: `npm install -g uipro-cli --prefix /tmp/npm-global`. Rules in SKILL.md always available regardless.
8. **/.agents/agents/** — specialist workers (Codex only)

**Research rule:** Research is an independent engine — only runs when you explicitly request it. Never auto-checks before content tasks. When you direct research output to a downstream engine, you specify which findings and what intent. Codex routes to the engine, surfaces a plan before executing, and waits for confirmation before drafting anything.

When you get a task: read this file → consult ROUTER.md → load relevant brand file → load engine file → apply any matching skill → produce output → log it to /MEMORY/.

**Engine files that exist:**
- `/ENGINES/content/` — carousel.md, blog-post.md, social-post.md, post-routing.md
- `/ENGINES/design/` — design-brief.md, design-engine.md, carousel.md
- `/ENGINES/coach-jap/` — training-program.md, nutrition-plan.md, wod-brain.md, program-state-template.md
- `/ENGINES/client/` — client-onboarding.md, discovery-call.md, check-in.md, client-agreement.md, program-only-flow.md, client-profile.md, handoff-trainerize.md, adhere-compliance.md
- `/ENGINES/marketing/` — marketing-engine.md (master — entry point for all marketing work), strategy.md, campaign.md (execution arm), experiments.md, performance.md. State: /MEMORY/marketing/ (strategy-state.md, experiments-log.md). Agents (Claude Code only, /.claude/agents/): marketing-strategist, campaign-performance-analyst
- `/ENGINES/sales/` — offer-engine.md, sales-engine.md
- `/ENGINES/web/` — wix.md
- `/ENGINES/research/` — research-engine.md
- `/ENGINES/goals/` — goals-engine.md
- `/ENGINES/6fix/` — 6fix-master-index.md, 6fix-onboarding-system.md, 6fix-phase1-delivery.md, 6fix-phase2-program.md, 6fix-upgrade-sequence.md, 6fix-marketing-strategy.md, 6fix-compliance-dashboard.md, 6fix-wix-email-automation.md, 6fix-design-system.md, 6fix-trainerize-auto-messages.md, 6fix-phase2-questionnaire.md

**Not yet built:** poster.md. If routed to a missing engine, say so rather than improvising.

**Ignore `/files/`** — legacy backup copies of brand and memory files. Not canonical. Always read from the actual paths (/BRANDS/, /MEMORY/, etc.).

---

## Format rules

- Lists, bullets, headers only when they aid clarity. Default to prose.
- Tables when comparing things, never as decoration.
- Code blocks for actual code, file paths, or terminal commands. Not for emphasis.
- No emoji unless Jap uses them first.
- No motivational sign-offs ("You've got this!" etc.) at the end of responses.

---

## What this file is not

Not the place for brand-specific rules (those live in /BRANDS/).
Not the place for workflow templates (those live in /ENGINES/).
Not the place for design or copy craft (those live in /.agents/skills/).

Keep this file under 200 lines. When it grows past that, extract the heaviest section to a dedicated file.

---

## Quick command reference

- `load jnoah` → read this control file + ROUTER.md + STATE.md (chat START ritual — see CHATS.md)
- `log + update state` → append /MEMORY/decisions-log.md + update STATE.md (chat END ritual)
- `sync jnoah` → reconcile registry/STATE/cockpit from the vault + flag unlogged outputs (see SYNC.md). Run after heavy side-chat work or weekly.
- `log lesson` → a correction happened → extract the rule → append /MEMORY/lessons-learned.md + route the rule to its canonical file (see Self-learning loop above)
- `lint jnoah` → drift check: contradictions, stale deadlines, orphans, legacy-path strays (see LINT.md)
- "what's now?" / "where did I leave off?" → read STATE.md (the current-state board)
- "how do I run chats?" → CHATS.md (chat model: Command + Project + Worker)
- "What's in the system?" → read README.md
- "What's been decided?" → check /MEMORY/decisions-log.md
- "What's next on the build?" → check PROGRESS.md
- "What brand are we in?" → ask if unclear, never assume
- "Morning brief" / "goal check" / "north star" → Goals skill → reads /GOALS/active-goals.md
- "Set a goal [name]" → goals-engine.md
- "Research [topic]" → research-engine.md → check INDEX first

---

## Last updated
2026-06-11 — AGENTS.md parity pass: engine list updated to categorized-by-folder format, /ENGINES/6fix/ added (11 files), adhere-compliance.md + design-engine.md + program-state-template.md + wod-brain.md added to their folders, stray emoji removed from URBN blurb. Mirrored from CLAUDE.md.
2026-06-10 — Self-learning loop added (learn ritual + /MEMORY/lessons-learned.md + LINT.md drift check). Commands: `log lesson`, `lint jnoah`. Mirrored from CLAUDE.md.
2026-05-30 — URBN Athletics brand file LIVE (/BRANDS/URBN-athletics.md, canonical /Raw-Files/URBN Athletics/Main-Brand-Brain.md). Hold lifted; identity blurb updated. Removed Restart's locked line "Stop guessing. Follow a system." from URBN (decoupling). Visual identity + domain still pending.
2026-05-29 — Governance pass. Platform-check added (AGENTS.md/Codex · CLAUDE.md/Claude, content-synced). Fixed broken /.Codex/ paths → /.agents/. Urban Strong → URBN Athletics rebrand logged + decoupled from Restart (both standalone). Restart domain locked: restartfitnessph.com (planned). Voice QA = two layered checkers (anti-ai-copywriter authority + brand-review). 6FIX casing normalized in engines.
2026-05-21 — Phase 12 complete — Goals system built. Goals engine, Goals skill, /GOALS/ folder, posting log bridge to campaign engine. Morning brief is now the daily entry point.
2026-05-21 — Phase 11 complete — staged decision pipeline wired in. Research rule rewritten (independent, manual-only). Pre-execution gate added to ROUTER.md. Selection and project pipeline templates created.
2026-05-21 — Phase 10 complete — research-analyst skill added, research rule added to load order, engine list updated (offer-engine, sales-engine, wix, research-engine all live)
