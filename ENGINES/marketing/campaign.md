# Campaign Engine

Orchestration engine for all marketing campaigns across Restart Fitness PH (and Urban Strong Fitness when active).

Load order: CLAUDE.md → ROUTER.md → this file → relevant brand file → relevant content/design engines.

---

## What is a campaign

A campaign is a time-bound, objective-specific content operation. It takes one goal, maps it across all active platforms, produces every asset needed to execute, pushes those assets to ClickUp as tasks, and runs until the goal is met or the window closes.

**Key rules:**
- One campaign = one objective. Do not blend goals.
- 1 or more campaigns can be active simultaneously. Each runs independently.
- Every campaign has a brand. Default: Restart Fitness PH.
- The C/C/V priority of the campaign drives asset mix, not individual post decisions.
- All content across platforms must be connected — one campaign idea expressed consistently from social → website (when live).

---

## Campaign status system

Every campaign is always in one of four states:

| Status | Meaning |
|---|---|
| **DRAFT** | Being planned. No assets in production. |
| **ACTIVE** | Execution running. Assets in ClickUp, posting in progress. |
| **PAUSED** | Temporarily stopped. ClickUp tasks remain. |
| **CLOSED** | Complete. ClickUp list archived. Results logged. |

Track status in the campaign's ClickUp list name: `[Status] Campaign Name`.

---

## Campaign naming convention

Every campaign gets a unique ID used across all files, ClickUp lists, and log entries.

**Format:** `[YYYY-MM] [Objective-short] — [Brand-short]`

**Examples:**
- `2026-05 Lead Gen — Restart PH`
- `2026-06 Trust Build — Restart PH`
- `2026-07 6FIX Launch — Restart PH`

Use this name exactly in: the ClickUp list name, the OUTPUTS/ folder, the decisions-log.md entry.

---

## ClickUp structure rule

**CAMPAIGNS folder** → one list per campaign → each asset = one task.

**Asset-type lists** (Social Media Posts, Carousels, Stories & Reels, Content Calendar) → evergreen and standalone content only. These are not for campaign-specific assets.

**Do not put campaign assets in asset-type lists.** All campaign assets live exclusively in the campaign's own ClickUp list. This prevents duplication and keeps campaign performance trackable.

**ClickUp task schema (per asset):**

| Field | Value |
|---|---|
| Task name | `[Platform] [Asset type] — [Brief descriptor]` |
| Status | To Do → In Progress → In Review → Done |
| Due date | Assigned in Phase 3 |
| Tags | C/C/V category · Platform · Asset type |
| Description | Copy text + design brief reference + engine used |
| Assignee | Jap (or team member when relevant) |

---

## Research check — run before Phase 1

Before building the campaign brief, check `/RESEARCH/INDEX.md`.

If a research file exists for this campaign topic or the target audience pain:
- Read `/RESEARCH/[slug]/RAW/[slug]-research.md`
- Pull Layer 2 (hard evidence) for messaging credibility
- Pull Layer 4 (competitive intel) for positioning gaps
- Pull Layer 5 (hypothesis) for campaign angle if DEEP research was done
- Note the research file in the campaign brief under "Research source"

If no research file exists: proceed to Phase 1. Consider running research first for major campaigns.

---

## Phase 1 — Campaign Brief

Before anything is created, complete this brief. Do not skip fields.

**Required fields:**

| Field | Notes |
|---|---|
| Campaign name | Use naming convention above |
| Brand | Restart Fitness PH or Urban Strong |
| Objective | One sentence. What does success look like? |
| C/C/V priority | Conversion / Connection / Value — pick the primary driver |
| Target pain or belief | What does this campaign address in the audience? |
| Audience segment | Who specifically — beginners, returning clients, warm audience, cold traffic |
| Primary platform(s) | IG / Threads / FB / Website — ranked by priority |
| Duration | Start date → end date |
| Success metric | What number or action signals the campaign worked? |
| Primary CTA | One CTA only. Pick from brand CTA system. |
| Budget | Paid, organic, or both |
| Program or offer being pushed | If applicable — 90-Day, 6FIX, Free Assessment, Discovery Call |

**Brief output format:**

Write the brief as a short paragraph (3–5 sentences) summarizing the above, followed by the fields table. The paragraph is the campaign's "north star sentence" — every asset should be traceable back to it.

---

## Phase 2 — Content Thread Map

One campaign idea, mapped across every active platform. This is the connective layer — it keeps content consistent and stops platforms from feeling disconnected.

**Thread map template:**

```
Campaign: [name]
North star: [one-sentence campaign summary]

INSTAGRAM
  — Reel: [hook concept]
  — Carousel: [topic + slide count]
  — Single post: [image type + caption angle]
  — Story: [daily presence angle]

THREADS / FACEBOOK
  — Long-form post: [angle]
  — Short update: [context or redirect]

BLOG (urbanstrongfit.com or restartfitnessph.com)
  — Title: [draft]
  — Angle: [connects to campaign objective]
  — CTA: [in-article]

WEBSITE [PLACEHOLDER — wire in when Wix engine is built]
  — Banner / hero update: [concept if applicable]
  — Blog cross-link: [page to update]

EMAIL [if applicable]
  — Subject: [draft]
  — Angle: [how this ties to the campaign]
```

**Rules:**
- Each platform gets its own format, not a copy-paste of another
- All platforms point to the same objective and CTA
- Website integration is currently a placeholder — note it in the map but do not build until the Wix engine is live
- Reels are reach-first; carousels and long captions are save-first; stories are nurture-first

---

## Phase 3 — Content Calendar

Assign a posting date and sequence to every asset in the thread map.

**Calendar structure:**

| Day | Platform | Asset type | C/C/V | Status |
|---|---|---|---|---|
| Day 1 | Instagram | Reel | Connection | Draft |
| Day 2 | Threads | Long post | Value | Draft |
| Day 4 | Instagram | Carousel | Value | Draft |
| Day 6 | Instagram | Single post | Conversion | Draft |
| Day 7 | Story series | Story | Connection | Draft |
| Day 8 | Blog | Post | Value | Draft |
| Day 10 | Instagram | Single post | Conversion | Draft |

**Sequencing rules:**
- Open with Connection or Value — earn attention before selling
- Conversion content comes after at least 2 Value or Connection pieces
- One Conversion post per campaign week maximum for cold audiences
- Stories run throughout — daily is ideal, minimum 5 days per week
- Blog goes up mid-campaign — not day 1 (give social content time to prime the audience)

**Minimum campaign asset count:**
- Short campaign (7–10 days): 1 Reel + 1 Carousel + 2 Single posts + Story run + 1 Blog
- Full campaign (14–21 days): 2 Reels + 2 Carousels + 3–4 Single posts + Story run + 1–2 Blogs

---

## Phase 4 — Asset Production

For each asset in the calendar, fire the matching engine.

**Engine handoff table:**

| Asset type | Fire this engine | Pass this context |
|---|---|---|
| Instagram caption / Threads post / long-form copy | `/ENGINES/content/social-post.md` | Campaign name · C/C/V category · platform · CTA · brief paragraph |
| Post routing decision | `/ENGINES/content/post-routing.md` | C/C/V label + pillar assignment |
| Carousel copy (slide-by-slide) | `/ENGINES/design/carousel.md` | Campaign name · topic · hook · slide count · CTA |
| Design brief (visual for any asset) | `/ENGINES/design/design-brief.md` | Brand · asset type · objective · campaign brief paragraph |
| Blog post | `/ENGINES/content/blog-post.md` | Campaign name · angle · CTA · word count |
| Nutrition plan (if offer-specific) | `/ENGINES/coach-jap/nutrition-plan.md` | Client context |
| Training program (if offer-specific) | `/ENGINES/coach-jap/training-program.md` | Client context |

**Handoff rule:** When handing off to a sub-engine, always pass the campaign brief paragraph as context. This keeps the sub-engine's output aligned with the campaign objective — not just the asset format.

**Skills that fire during production:**
- `anti-ai-copywriter` — fires on all copy outputs
- `ui-ux-pro-max` — fires on all design outputs
- `coach-jap-programming-format` — fires on any training asset

---

## Phase 5 — ClickUp Push, Daily Execution, and Campaign Close

### Pushing assets to ClickUp

After production, each asset becomes a ClickUp task in the campaign's list.

**Push sequence:**
1. Confirm campaign list exists in CAMPAIGNS folder (or create it if not)
2. For each asset: create task using schema from ClickUp Structure Rule above
3. Set due dates per the content calendar
4. Tag each task with C/C/V, platform, and asset type
5. Add copy text + design brief to task description

**ClickUp MCP command flow:**
- Read workspace: `clickup_get_workspace_hierarchy`
- Get campaign list ID: `clickup_get_list`
- Create task: `clickup_create_task` with name, description, due date, tags
- Create comment on task (for copy text): `clickup_create_task_comment`

### Daily execution briefing

The morning briefing reads the CAMPAIGNS folder in ClickUp and surfaces:

1. **Today's tasks** — what is due today across all active campaigns
2. **Overdue items** — tasks past due date with status not Done
3. **Upcoming in 48 hours** — what needs to be created or posted next
4. **Decisions needed** — tasks in In Review status waiting on Jap's approval
5. **Active campaigns** — list of all ACTIVE campaigns with their status

**Briefing tone:** Direct, concise, operational. No preamble. First line is always the most urgent item.

The daily briefing runs as a scheduled task every morning. Set up via Cowork scheduled tasks.

### Posting log — write on every published asset

When any campaign asset is marked Done in ClickUp, append one line to `/GOALS/posting-log.md`:

```
YYYY-MM-DD — [platform] — [asset type] — [campaign name] — PUBLISHED
```

If a scheduled asset is not posted and the due date passes, log it as MISSED:

```
YYYY-MM-DD — [platform] — [asset type] — [campaign name] — MISSED
```

This feeds the Goals skill's posting calendar status calculation. Do not skip this step.

---

### Campaign close protocol

When a campaign ends:

1. Mark all remaining tasks Done or Cancelled in ClickUp
2. Rename the ClickUp list from `[ACTIVE] Campaign Name` to `[CLOSED] Campaign Name`
3. Log a campaign summary entry to `/MEMORY/decisions-log.md`:
   - Format: `YYYY-MM-DD — CAMPAIGN CLOSED — [Campaign name] — [What worked / What didn't / Result vs. goal]`
4. Move all final output files to `/OUTPUTS/[campaign-slug]/archive/`
5. Note any new content pillars, message angles, or formats that performed well — these become future content ideas

---

## Multiple simultaneous campaigns

When more than one campaign is ACTIVE at the same time:

- Each campaign has its own ClickUp list, its own output folder, its own brief
- Morning briefing surfaces all active campaigns together — tasks are interleaved by due date, not by campaign
- C/C/V balance rule still applies weekly: even across multiple campaigns, the overall weekly posting mix should not be all Conversion
- If two campaigns share an asset platform (e.g., both use Instagram), alternate by platform day — do not double-post for different campaigns on the same day without specific reason

---

## Quick commands

| You say | What fires |
|---|---|
| "New campaign — [objective]" | Phase 1 brief template, then Phase 2 thread map |
| "Content calendar for [campaign name]" | Phase 3 calendar build |
| "Produce assets for [campaign name]" | Phase 4 handoff to sub-engines |
| "Push [campaign name] to ClickUp" | Phase 5 ClickUp push sequence |
| "Morning briefing" | Read CAMPAIGNS folder, surface today's priorities |
| "Close [campaign name]" | Phase 5 close protocol |
| "Campaign status" | List all active campaigns + status |
| "What campaigns are active?" | Read ClickUp CAMPAIGNS folder |

---

## Output destination

All campaign files save to: `/OUTPUTS/campaigns/[campaign-slug]/`

Subfolders per campaign:
```
/OUTPUTS/campaigns/2026-05-lead-gen-restart-ph/
  brief.md
  thread-map.md
  calendar.md
  copy/
  design-briefs/
  archive/        ← populated on campaign close
```

After any campaign build step, log a one-line entry to `/MEMORY/decisions-log.md`.

---

## What is not a campaign

A campaign is not:
- A one-off post or caption
- A standalone carousel
- A blog post written for SEO
- A client program or nutrition plan

Those use their individual engines directly. A campaign is the orchestrator — it calls those engines, not the other way around.

---

## Website integration (placeholder)

Website content is currently a manual update — the Wix engine does not yet exist. When a campaign has a website component:

- Note the required page update or blog post in the thread map
- Produce the blog post via `/ENGINES/content/blog-post.md`
- Website banner or hero updates: flag as a design brief output + manual Wix Studio update
- When the Wix engine is built, wire Phase 4 to include Wix page updates automatically

---

## Last updated
2026-05-20 — Phase 7. Built from campaign architecture session + post-mortem audit. Post-mortem fixes applied: campaign status schema, naming convention, ClickUp dual-list rule, Phase 1 brief schema, Phase 4 handoff table, campaign close protocol, website placeholder.
