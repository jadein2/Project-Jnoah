# Wix Engine

Workflow for all Wix site tasks — pages, blog, CTAs, forms, and site structure.

**Site:** restartfitnessph.com (Restart Fitness PH)
**Connection:** Wix MCP — tools available in this session
**Phase:** 10
**Built:** 2026-05-21
**Feeds:** blog-post.md (publishing blog outputs) · campaign.md (landing page support) · offer-engine.md (pricing/CTA accuracy)

---

## Core rule — read before anything else

Before touching the Wix site, confirm:
- What page or section is being edited
- Whether this is a copy-only change, a structural change, or a new page
- Whether the change is tied to an active campaign (if yes, load campaign.md)
- Whether the CTA is the booking link — always verify it points to the correct destination

**Do not change pricing, program names, or offer structure without cross-checking offer-engine.md.** The site is a downstream output of the brand system — not a source of truth.

---

## Site overview — restartfitnessph.com

| Section | Purpose | Key CTA |
|---|---|---|
| Home / Hero | First impression. Lead with outcome, not program name. | Book a Discovery Call |
| About | Coach Jap story. Brand philosophy. | Book a Discovery Call |
| Programs / Services | Service ladder explained. One offer per section. | Book a Discovery Call |
| Blog | SEO content. Practical coaching pieces. Pulls from /OUTPUTS/blog/ | Book a Discovery Call |
| Contact / Book | Discovery call booking form or embedded scheduler | Book a Discovery Call |

**Primary booking CTA across all pages:** Book a Discovery Call → restartfitnessph.com/start

---

## Task types and workflows

### Task type 1 — Publish a blog post

**Source file:** `/OUTPUTS/blog/YYYY-MM-DD-slug.md`

**Steps:**
1. Read the output file — confirm headline, body, CTA, word count under 550
2. Check blog-post.md QA checklist is met (hook, 3–5 actions, one CTA, anti-AI applied)
3. Use `ManageWixSite` or `CallWixSiteAPI` to create the blog post
4. Set: title (from headline), body (full post), CTA link (restartfitnessph.com/start)
5. Set slug from filename (e.g., `YYYY-MM-DD-slug.md` → slug is `slug`)
6. Do not publish live without Jap confirming — submit as draft unless told otherwise
7. Log to `/MEMORY/content-log.md`: `YYYY-MM-DD | Blog | Restart PH | Web | [slug] | Discovery Call CTA | Performance: TBD`

---

### Task type 2 — Edit page copy

**Use when:** Headline, body text, CTA text, or section copy needs updating.

**Steps:**
1. Use `ListWixSites` to confirm the correct site is connected
2. Use `ManageWixSite` or `CallWixSiteAPI` to read the current page content
3. Note what exists before editing — do not overwrite without knowing what you're replacing
4. Apply brand rules: no banned words, no "tailored," no hype language, lead with outcome
5. Match voice to `/BRANDS/restart-fitness-ph.md`
6. Confirm changes with Jap before committing — especially for hero/CTA changes

**Hero copy rules:**
- Lead with outcome or problem — not the program name
- CTA must say "Book a Discovery Call" — not "Learn More," not "Get Started"
- No "busy adults," no "restart your journey," no "unlock"

---

### Task type 3 — Update a CTA or link

**Use when:** Booking link changes, CTA label changes, or a campaign needs a temporary redirect.

**Steps:**
1. Identify every page where the CTA appears (home, about, programs, blog, contact)
2. Confirm the new link destination with Jap before editing
3. Update all instances — do not leave partial updates
4. Test the link after updating (fetch the URL and confirm it resolves)
5. If campaign-specific: note the end date and revert plan before making the change

**Rule:** Never change a live CTA without a confirmed revert plan for campaign CTAs.

---

### Task type 4 — Add or update a service/program page

**Source:** `/ENGINES/sales/offer-engine.md` — read this first. All program details, pricing, and positioning lines live there.

**Steps:**
1. Load offer-engine.md — read the full service card for the relevant program
2. Draft page copy using: positioning line → what they get → who it's for → CTA
3. Do not invent features, pricing, or program names — copy from the engine file exactly
4. Lead with the outcome the program delivers — not the program name
5. One CTA per page — Book a Discovery Call
6. Submit as draft for Jap review before publishing

**Program names on site (use these exactly):**
- 6FIX (entry), Restart-P (flagship), Restart-90 (90-Day Coaching System in public copy), Restart-Base, Restart-Perform

---

### Task type 5 — Campaign landing page

**Load alongside:** `/ENGINES/marketing/campaign.md`

**Steps:**
1. Read campaign brief — confirm offer, audience, primary message, CTA
2. Check if a dedicated landing page is needed or if an existing page can be updated
3. If new page: create as draft first — never live until campaign is ready to launch
4. Landing page must match the campaign's primary message exactly — no off-brief copy
5. CTA on landing pages may differ from site default (e.g., "DM RESTART" for social campaigns)
6. After campaign closes: revert or archive the landing page — do not leave stale campaign pages live

---

## Wix MCP — available tools

The Wix MCP connector provides these tools (load schema via ToolSearch before calling):

| Tool | Use for |
|---|---|
| `ListWixSites` | Confirm which site is connected |
| `ManageWixSite` | Read and edit site content |
| `CallWixSiteAPI` | Direct API calls for content, blog, collections |
| `ExecuteWixAPI` | Broader API execution |
| `WixSiteBuilder` | Structural page building |
| `UploadImageToWixSite` | Upload image assets |
| `CreateWixBusinessGuide` | Business-level guidance |

**Before any write operation:** Use `ListWixSites` to confirm the correct site. Never assume — confirm.

**Before any content edit:** Use `ManageWixSite` or `CallWixSiteAPI` to read current state. Know what you're replacing.

---

## Brand rules — always enforced on site copy

Pull from `/BRANDS/restart-fitness-ph.md` for full rules. Key checks for web copy:

- No "tailored" anywhere on the site
- No "busy adults" or "busy people" as headline label
- No "restart your journey" — "restart" as a verb is banned in public copy
- No "unlock," "elevate," "embark," "leverage," "delve"
- Program names used exactly as defined in offer-engine.md
- Discovery Call CTA — not "Free Consult," not "Book Now" alone
- Lead with outcomes in hero and program sections — not program names

---

## Copy → site workflow (full path)

```
Jap request → load relevant engine → draft copy → QA against brand file →
confirm with Jap → push to Wix as draft → Jap reviews live preview →
commit publish → log to content-log.md
```

Never skip the draft step. Never publish live without Jap's confirmation.

---

## What this engine does NOT do

- Does not write blog content — that's blog-post.md
- Does not define offers or pricing — that's offer-engine.md
- Does not design pages visually — that's design-brief.md + Jap in Wix editor
- Does not run campaigns — that's campaign.md
- Does not manage Urban Strong Fitness website (urbanstrongfit.com — brand under review)

---

## Last updated
2026-05-21 — Phase 10. Built as P3-2. Restart Fitness PH only (restartfitnessph.com). Wix MCP connected. Covers blog publishing, page copy edits, CTA updates, program pages, and campaign landing pages.
