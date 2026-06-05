# Router

Switchboard. Maps incoming tasks to the right engine, brand, and skill.

Always read CLAUDE.md before consulting this file.

---

## How routing works

When Jap sends a request:

1. **Identify the task type** — design, copy, program, nutrition, blog, carousel, web, planning, client work, etc.
2. **Identify the brand** — Urban Strong, Restart Fitness PH, both, or brand-agnostic (internal/strategic work)
3. **Load the matching engine file** — see table below
4. **Load the matching brand file** if brand-specific
5. **Note which skills should auto-fire** — see Skills column

If brand is ambiguous, ask. Don't guess.

---

## Routing table

| Task signal | Engine | Brand file | Skills that fire |
|---|---|---|---|
| "research [topic]" / "find data on [X]" / "what does the science say about [X]" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "competitive intel on [X]" / "what are competitors doing with [X]" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "I have an idea, research it" / "topic dump" / "pull everything on [X]" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "what's trending around [X]" / "content research" | /ENGINES/research/research-engine.md | brand-agnostic | — |
| "check what we have on [X]" / "cross-ref [topic]" | /ENGINES/research/research-engine.md → CROSS-REF mode | brand-agnostic | — |
| "make the brief" / "clean copy for [topic]" / "ready to route [topic]" | /ENGINES/research/research-engine.md → Brief generation | brand-agnostic | anti-ai-copywriter |
| "use [topic] for [output]" / "use the [topic] research for [engine]" / "take [finding] and build a [type]" | Load /RESEARCH/[topic-slug]/SELECTION.md if it exists, else ask Jap which findings to use → identify target engine → surface pre-execution plan → wait for Gate 2 confirmation before executing | brand-specific | engine-dependent |
| "design brief — [brand] — [asset]" / "visual concept" / "AI image prompt" | /ENGINES/design/design-brief.md | brand-specific | ui-ux-pro-max, anti-ai-copywriter |
| "design a carousel" / "create a post graphic" | /ENGINES/design/carousel.md + /ENGINES/design/design-brief.md | brand-specific | ui-ux-pro-max, anti-ai-copywriter |
| "design a poster / flyer / promo" | /ENGINES/design/design-brief.md | brand-specific | ui-ux-pro-max |
| "write a blog post" / "blog about X" | /ENGINES/content/blog-post.md | Urban Strong (default for blogs) | anti-ai-copywriter |
| "write a social post" / "Threads / IG caption" | /ENGINES/content/social-post.md | brand-specific | anti-ai-copywriter |
| "build a program" / "training plan for [client]" | /ENGINES/coach-jap/training-program.md | brand-agnostic (coaching format) | coach-jap-programming-format |
| "nutrition plan for [client]" / "7-day meal plan" | /ENGINES/coach-jap/nutrition-plan.md | brand-agnostic | — |
| "warm-up / cooldown" / "WOD" | /ENGINES/coach-jap/training-program.md | brand-agnostic | coach-jap-programming-format |
| "DM reply" / "sales script" / "handle objection" / "close this lead" | /ENGINES/sales/sales-engine.md + /ENGINES/sales/offer-engine.md | brand-specific | anti-ai-copywriter |
| "new campaign" / "campaign brief" / "campaign for [objective]" | /ENGINES/marketing/campaign.md | brand-specific | anti-ai-copywriter |
| "content thread map" / "map campaign to platforms" | /ENGINES/marketing/campaign.md | brand-specific | anti-ai-copywriter |
| "content calendar for [campaign]" / "posting schedule" | /ENGINES/marketing/campaign.md | brand-specific | — |
| "push campaign to ClickUp" / "push assets to ClickUp" | /ENGINES/marketing/campaign.md | brand-agnostic | — |
| "morning brief" / "goal check" / "north star" / "daily brief" / "what do I do today" | Goals skill → reads /GOALS/active-goals.md + all active goal files | brand-agnostic | goals |
| "set a goal [name]" / "new goal [name]" / "I want to [goal]" | /ENGINES/goals/goals-engine.md → Steps 1–6 | brand-agnostic | — |
| "update goal [name]" / "change [goal] deadline" / "reprioritize goals" | /ENGINES/goals/goals-engine.md → Update protocol | brand-agnostic | — |
| "review goal tasks [name]" | /ENGINES/goals/goals-engine.md → Review protocol | brand-agnostic | — |
| "mark [task] done" / "log [task] complete" / "done with [task]" | /ENGINES/goals/goals-engine.md → Mark done protocol | brand-agnostic | — |
| "log metric [value]" / "I have [N] clients now" | /ENGINES/goals/goals-engine.md → Metric log protocol | brand-agnostic | — |
| "close goal [name]" / "goal complete [name]" | /ENGINES/goals/goals-engine.md → Close protocol | brand-agnostic | — |
| "campaign status" / "what's active today" / "what campaigns are active" | /ENGINES/marketing/campaign.md | brand-agnostic | — |
| "morning briefing" | /ENGINES/marketing/campaign.md — NOTE: use "morning brief" for the full daily brief including goals | brand-agnostic | — |
| "close campaign" / "archive [campaign name]" | /ENGINES/marketing/campaign.md | brand-agnostic | — |
| "pricing" / "offer structure" / "which offer" / "what program fits" | /ENGINES/sales/offer-engine.md | brand-specific | — |
| "write website copy" / "homepage copy" / "write the [page] page" / "web copy for [page]" / "copy for the site" | /ENGINES/content/web-copy.md | Restart Fitness PH | anti-ai-copywriter |
| "update the site" / "edit the website" / "publish blog to site" / "fix the CTA on" / "landing page for" | /ENGINES/web/wix.md | Restart Fitness PH | anti-ai-copywriter |
| "client profile" / "update client" | /MEMORY/clients/[name]/[name].md | brand-agnostic | — |
| "onboard client" / "new client pipeline" / "send agreement" | /ENGINES/client/client-onboarding.md | brand-agnostic | — |
| "add new client" / "create client profile" / "new client [name]" | /ENGINES/client/client-profile.md | brand-agnostic | — |
| "update client profile" / "log assessment" / "update metrics" | /ENGINES/client/client-profile.md | brand-agnostic | — |
| "discovery call" / "run a call" / "qualify [name]" | /ENGINES/client/discovery-call.md | brand-agnostic | — |
| "check-in for [client]" / "weekly feedback" / "bi-weekly assessment" | /ENGINES/client/check-in.md | brand-agnostic | — |
| "client agreement" / "send the agreement" | /ENGINES/client/client-agreement.md | brand-agnostic | anti-ai-copywriter |
| "program only" / "program only flow" / "trainerize review" | /ENGINES/client/program-only-flow.md | brand-agnostic | — |
| "new intake for [name]" / "log check-in for [name]" / "log session data for [name]" | /ENGINES/client/handoff-trainerize.md | brand-agnostic | — |

---

## Brand routing cues

**Restart Fitness PH** signals:
- Mentions of "Restart Method," "6-FIX," "Restart Method 90," "DM RESTART"
- Online coaching, 90-day program, metabolic, transformation language
- Threads, IG, FB content for the online brand
- Editorial/cinematic design direction
- → Load /BRANDS/restart-fitness-ph.md

**Urban Strong** signals:
- Mentions of "Olongapo," "the gym," "6-Week Reset," "Free Assessment"
- In-person training, group classes, semi-private, ON-RAMP
- Blog posts (default home for blogs)
- urbanstrongfit.com references
- → Load /BRANDS/urban-strong.md

**Brand-agnostic** (no brand file needed):
- Internal planning, decisions about either business
- Programming format / nutrition format (these are coaching craft, not brand)
- Cross-brand strategy
- Client-specific work where the client identity is the focus, not the brand

---

## Skills auto-fire conditions

Skills load when their `description` field matches the task. The Skills in /.claude/skills/ are:

- **ui-ux-pro-max** — any design output (carousel, poster, web layout, slide deck)
- **anti-ai-copywriter** — any client-facing copy (captions, blogs, DMs, web copy)
- **coach-jap-programming-format** — any training program, WOD, warm-up, or workout written out
- **research-analyst** — any research task; auto-applies T1/T2/T3 credibility scoring and signal weighting
- **goals** — any morning brief, goal check, or daily orientation request; produces the structured daily work order

Skills run on top of brand files. Brand files win on conflict.

---

## Output destinations

Everything Jap should be able to find later goes in /OUTPUTS/. Folder per type:

- Blogs → /OUTPUTS/blog/YYYY-MM-DD-slug.md
- Carousels → /OUTPUTS/carousel/YYYY-MM-DD-brand-topic.md (copy + slide notes)
- Designs (HTML/SVG/specs) → /OUTPUTS/design/YYYY-MM-DD-brand-topic/
- Programs → /OUTPUTS/programs/[client-name]/YYYY-MM-DD-program-name.md
- Nutrition → /OUTPUTS/nutrition/[client-name]/YYYY-MM-DD-plan.md
- Web copy → /OUTPUTS/web/page-name.md

After producing output, append a one-line entry to /MEMORY/decisions-log.md.

---

## Pre-execution gate

Fires before any engine runs on research-backed input (i.e., when Jap has approved findings at Gate 1 and directed them to an engine).

Before drafting anything, Claude must present:
- What it's about to build (format and output type)
- The specific hook, angle, or structure it will use
- The brand and target platform

One short paragraph. No draft content. Wait for Jap's confirmation before executing.

This gate does NOT fire for tasks with no research dependency (e.g., "write a check-in for [client]", "warm-up for today's class").

---

## When routing is unclear

Default behavior:
- Ambiguous brand → ask, don't assume
- Ambiguous engine → present 2 options with rationale
- Task doesn't match any engine → say so, propose where it should live

Never invent a new engine on the fly. If a task type recurs and has no home, flag it for Phase 3 expansion.

---

## Last updated
2026-05-21 — Phase 12. Goals system wired in. Morning brief trigger routes to goals skill. Campaign status row narrowed. Goals engine trigger rows added (7 rows). Goals skill added to Skills section.
2026-05-21 — Phase 11. Research → production handoff row added. Pre-execution gate added. Research is now an independent engine; never auto-fires before content tasks.
2026-05-21 — Phase 10. Wix engine row added (restartfitnessph.com). research-analyst skill added to Skills section.
2026-05-21 — Phase 9. DM reply/sales script row now points to sales-engine.md + offer-engine.md (interim flag removed). Pricing/offer structure row now points to offer-engine.md (was TBD Phase 3). Both engines live at /ENGINES/sales/.
2026-05-21 — Phase 8. Research engine routing rows added (6 rows). research-engine.md now live at /ENGINES/research/.
2026-05-20 — Phase 7. Campaign routing rows added (6 rows). campaign.md now live at /ENGINES/marketing/.
2026-05-19 — Phase 6 client engine added to routing table
2026-05-19 — Fixed: skill name corrected to ui-ux-pro-max (was ui-ux-design-pro); nutrition row updated to live engine path
