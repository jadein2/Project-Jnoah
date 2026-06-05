# Project Jnoah

Master operating file for Coach Jap's business system.

---

## Platform check (read first)

This system runs on two surfaces, one control file each:
- **Claude / Cowork** → `CLAUDE.md` (this file) is authority. Skills + agents live in `.claude/`.
- **Codex** → `AGENTS.md` is authority. Skills + agents live in `.agents/`.

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

## How this system works

This folder is a modular business operating system. It loads context in layers, in this order:

1. **CLAUDE.md** (this file) — identity and universal rules
2. **ROUTER.md** — decides which engine and skill apply to the current task
3. **/BRANDS/** — locked brand identity, voice, design rules per brand
4. **/ENGINES/** — workflow files for each functional area (coach-jap, design, content)
5. **/MEMORY/** — decisions, content history, client files — grows over time
6. **/GLOBAL/** — cross-cutting rules (anti-AI output rules, etc.)
7. **/.claude/skills/** — craft expertise that auto-fires when relevant tasks come up
   - Built: `ui-ux-pro-max`, `anti-ai-copywriter`, `coach-jap-programming-format`, `research-analyst`
   - Note: `ui-ux-pro-max` Python search engine runs from `/tmp/npm-global` (resets per session). If it fails: `npm install -g uipro-cli --prefix /tmp/npm-global`. Rules in SKILL.md always available regardless.
8. **/.claude/agents/** — specialist workers (Claude Code only)

**Research rule:** Research is an independent engine — only runs when you explicitly request it. Never auto-checks before content tasks. When you direct research output to a downstream engine, you specify which findings and what intent. Claude routes to the engine, surfaces a plan before executing, and waits for confirmation before drafting anything.

When you get a task: read this file → consult ROUTER.md → load relevant brand file → load engine file → apply any matching skill → produce output → log it to /MEMORY/.

**Engine files that exist:**
- `/ENGINES/content/` — carousel.md, blog-post.md, social-post.md, post-routing.md
- `/ENGINES/design/` — design-brief.md, design-engine.md, carousel.md
- `/ENGINES/coach-jap/` — training-program.md, nutrition-plan.md, wod-brain.md, program-state-template.md
- `/ENGINES/client/` — client-onboarding.md, discovery-call.md, check-in.md, client-agreement.md, program-only-flow.md, client-profile.md, handoff-trainerize.md, adhere-compliance.md
- `/ENGINES/marketing/` — campaign.md
- `/ENGINES/sales/` — offer-engine.md, sales-engine.md
- `/ENGINES/web/` — wix.md
- `/ENGINES/research/` — research-engine.md
- `/ENGINES/goals/` — goals-engine.md

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
Not the place for design or copy craft (those live in /.claude/skills/).

Keep this file under 200 lines. When it grows past that, extract the heaviest section to a dedicated file.

---

## Quick command reference

- `load jnoah` → read this control file + ROUTER.md + STATE.md (chat START ritual — see CHATS.md)
- `log + update state` → append /MEMORY/decisions-log.md + update STATE.md (chat END ritual)
- `sync jnoah` → reconcile registry/STATE/cockpit from the vault + flag unlogged outputs (see SYNC.md). Run after heavy side-chat work or weekly.
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
2026-06-01 — Engine list corrected: categorized by folder, 3 missing engines added (adhere-compliance.md, design-engine.md, program-state-template.md). Emoji removed from URBN blurb.
2026-05-30 — URBN Athletics brand file LIVE. Visual identity + domain still pending. Restart domain locked: restartfitnessph.com (planned).

Full history: /MEMORY/decisions-log.md
