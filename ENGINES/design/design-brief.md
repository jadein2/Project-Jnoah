# Design Brief Engine

Single modular design engine for all asset types across all brands.

Brand-agnostic until a brand is specified. Routes by asset type, not by brand. Always load the relevant brand file alongside this engine.

---

## Pre-work: confirm before any output

Do not produce any brief until all four items are confirmed. If any are missing, ask — never guess.

- **Brand specified** → load `/BRANDS/[brand].md` + `/BRANDS/[brand]-design-brief.md`. For Restart Fitness PH Canva execution, also load `/ENGINES/design/design-engine.md` (template-ID map). URBN Athletics → `/BRANDS/URBN-athletics.md`.
- **Asset type confirmed** → route to correct tool using the table below
- **Objective confirmed** → Awareness / Conversion / Education / Proof
- **Design references** → check `/Raw-Files/design-reference-raw/` — read relevant subfolders before producing the visual concept. Folders: `logos/` · `carousels/` · `posts/` · `stories/` · `templates/` · `Core Purpose/`. No brand subfolders — organized by asset type.

If Urban Strong is referenced: it is now **URBN Athletics** (rebrand LIVE — `/BRANDS/URBN-athletics.md`). URBN visual identity (logo/palette/type) is still pending, so keep URBN designs on the temporary direction — clean black & white, wordmark placeholder, real gym photography — and flag before producing any final-identity visuals.

---

## Asset type routing table

| Asset type | Tool | Canvas size | Notes |
|---|---|---|---|
| Instagram post — square | Canva | 1080 × 1080 px | |
| Instagram post — portrait | Canva | 1080 × 1350 px | |
| Instagram Story / Reel cover | Canva | 1080 × 1920 px | |
| Facebook post | Canva | 1200 × 630 px | |
| Carousel (all slides) | Canva + carousel.md | 1080 × 1350 px | Route to carousel.md for slide copy structure — this engine handles visual spec |
| Banner / promo graphic | Canva | Size per context — confirm before starting | |
| Poster / event flyer | Canva | Portrait or landscape — confirm before starting | |
| Email header | Canva | 600 × 200 px | |
| Website section / landing page | Figma | Full component spec | Hand off to Figma after brief is approved |
| Website hero | Figma | Full spec | Full layout + component breakdown required |
| Presentation / pitch deck | Canva or Google Slides | 1920 × 1080 px | Confirm tool with Jap |

---

## Skills that fire on design tasks

- `ui-ux-pro-max` — layout judgment, hierarchy, negative space, component decisions
- `anti-ai-copywriter` — any copy that appears inside the brief (overlines, headlines, CTAs, body text)

Both apply automatically. Do not skip either.

---

## Four-part output

Produce all four parts for every asset brief. No partial briefs.

---

### Part 1 — Visual Concept

What the asset should look like and feel like.

- **Style direction** — pulled directly from `/BRANDS/[brand]-design-brief.md`. Never improvised.
- **Mood** — 2–3 sentences, specific. Not "bold and energetic." Describe the actual feeling: what the viewer sees in the first second, what emotion it creates, what it reminds them of.
- **Color hierarchy** — which color leads, which color accents, which color is absent from this specific asset. State the hex values.
- **Background choice and why** — dark vs light, and the reason for this specific asset.
- **What this asset should NOT look like** — at least 2 specific things to avoid. Brand-specific and asset-specific, not generic.

---

### Part 2 — Layout Wireframe

Text-based block diagram showing element hierarchy and structure. Use the format below. Do not use SVG.

```
┌─────────────────────────────────────┐
│  BRAND MARK               [top left] │
│                                      │
│  OVERLINE                 [small]    │
│  HEADLINE                 [large]    │
│  Body copy line                      │
│  Body copy line                      │
│                                      │
│  [PHOTO / SUBJECT]        [center]   │
│                                      │
│  [CTA BUTTON or LINE]     [bottom]   │
└─────────────────────────────────────┘
```

Include: element positions (top/center/bottom/left/right), text hierarchy labels (large/medium/small), negative space notes, where the photo or subject sits in the frame.

Wireframe must reflect the actual asset dimensions — a portrait post has a taller wireframe than a square.

---

### Part 3 — AI Image Generation Prompt

A ready-to-paste prompt for Midjourney, Leonardo AI, or DALL-E. No intro line. No "here is the prompt." Write the prompt directly.

The prompt must include all of the following:
- Subject description: who is in the frame, what they are doing, the environment
- Lighting direction: direction, quality, hardness (e.g., "hard rim light from behind left," "diffused natural light through window")
- Camera angle and framing: eye level, low angle, overhead, tight portrait, environmental wide — be specific
- Color mood: dominant tones, temperature (warm/cool), any specific brand colors to push
- Style reference: cinematic, editorial, documentary, high contrast, moody — pick one and commit
- Aspect ratio: match the asset type (e.g., `--ar 4:5` for Instagram portrait, `--ar 9:16` for Story, `--ar 1:1` for square)
- Negative prompt: at minimum — stock photo gym aesthetic, over-saturated colors, fake smiles, cluttered background, lens flare

If `/Raw-Files/design-reference-raw/` has relevant references (check `logos/`, `carousels/`, `posts/`, `stories/`, `templates/`): pull specific style and lighting cues from those images and reference them in the prompt.

---

### Part 4 — Execution Brief

Tells Jap exactly what to do next in Canva or Figma.

**For Canva assets:**
- Which template to start from — use template IDs from this engine or from carousel.md
- Which brand kit to apply — use kit IDs from carousel.md's Canva references section
- What text goes in which element (overline, headline, body, CTA)
- Which photo slot to fill and what kind of photo to use
- What to delete or adjust from the base template
- What I can edit via Canva MCP vs what Jap handles manually (see Canva capability limits below)

**For Figma assets:**
- Component breakdown: list every section and element in the layout
- Layout specs: widths, padding, spacing, alignment rules
- Typography spec: font, weight, size, line height per element
- Color spec per zone: background, text, accent, border
- Handoff note: what to finalize in Figma before moving to production

**Canva capability limits (applies to all Canva assets):**

| I can do via Canva MCP | Jap handles manually |
|---|---|
| Replace all text across slides or elements | Place or swap photos |
| Edit text formatting (color, size, weight, style) | Change font families |
| Update design title | Add or delete slides/elements |
| | Reposition layout elements |

---

## design-reference-raw integration

**Actual folder path:** `/Raw-Files/design-reference-raw/`

**Subfolder structure (organized by asset type, not by brand):**

| Subfolder | Contents |
|---|---|
| `logos/` | All brand logo variants — charcoal, gold, orange, light, dark, transparent |
| `carousels/` | Reference carousel sets from real published content |
| `posts/` | Single post references — Monday posts, mindset, habits, CTA posts |
| `stories/` | Story frame references and templates |
| `templates/` | Base Canva templates — light and dark editorial |
| `Core Purpose/` | Brand philosophy visual reference slides |
| `06_Media/images/` | Photography — coaching sessions, couples, product shots |
| `06_Media/templates/` | Story background templates — dark and light variants |

When reading references before Part 1:
- Pull from `logos/` for brand mark placement and variants
- Pull from `carousels/` or `posts/` for layout patterns, color usage, and typography in practice
- Pull from `06_Media/images/` for photography mood and subject framing
- Note consistent patterns across references: lighting style, spacing, contrast, how text sits on image

When no relevant reference exists in the folder:
> No reference match found — visual concept based on brand file only.

Proceed without blocking.

### Naming convention for new files added to design-reference-raw

`[brand-short]-[type]-[descriptor].[ext]`

| Example | What it is |
|---|---|
| `restart-ph-competitor-carousel-dark.jpg` | Competitor carousel reference, dark style |
| `restart-ph-moodboard-editorial.png` | Internal moodboard, editorial direction |
| `general-fitness-coaching-cinematic.jpg` | General fitness photography reference |
| `urban-strong-poster-bold.jpg` | Urban Strong poster reference |

---

## Brand design brief auto-generation rule

When a new brand is created, run this workflow in order before any design work begins:

> **New brand setup — design assets required**
> 1. Create `/BRANDS/[brand].md` — full brand identity file (voice, colors, typography, audience, brand rules)
> 2. Generate `/BRANDS/[brand]-design-brief.md` — visual shortcut file extracted from the brand file. Use the command "New brand design brief — [brand name]" (see Quick Commands below)
> 3. Add any references to `/Raw-Files/design-reference-raw/` in the correct asset-type subfolder (logos/, carousels/, posts/, templates/, stories/)
> 4. Register Canva brand kit ID in carousel.md once the kit exists in Canva

Do not skip step 2. Every brand needs a design brief file before any design engine output is produced.

---

## Canva references

Stored in carousel.md — do not duplicate here. When this engine needs template IDs or brand kit IDs, read them from carousel.md.

Current template IDs as of last update:

| Brand | Template name | Template ID |
|---|---|---|
| Restart Fitness PH | RESTART \| Wake-Up Call - Carousel | `EAHCf9doGfY` |

Current brand kit IDs:

| Brand | Kit name | Kit ID |
|---|---|---|
| Restart Fitness PH | restartfitnessph | `kAHBdXD16KU` |
| Urban Strong Fitness | Urban Strong Fitness | `kAE8byjs-co` |
| 6FIX | 6FIX | `kAG_BgDwOgY` |

Non-carousel templates (banners, posters, social posts) — register here as they are created.

| Brand | Template name | Template ID | Asset type |
|---|---|---|---|
| — | — | — | None registered yet |

---

## QA checklist — run before any design brief is delivered

- [ ] Brand specified and both brand files loaded (`/BRANDS/[brand].md` + `/BRANDS/[brand]-design-brief.md`)?
- [ ] Asset type confirmed and tool destination correct per routing table?
- [ ] Visual concept is specific — not generic? Mood is described in concrete terms?
- [ ] Layout wireframe shows clear hierarchy with element positions labeled?
- [ ] AI image prompt is paste-ready with no editing needed?
- [ ] Execution brief gives Jap exact next steps (template ID, text placement, photo slot)?
- [ ] No gradients anywhere in the concept?
- [ ] No more than 2 dominant colors on any single asset?
- [ ] Orange (`#E06D22`) and gold (`#C9A84C`) never on the same element (Restart PH)?
- [ ] No-Line Rule respected — spacing-based separation only, no decorative dividers (Restart PH)?
- [ ] Brand mark placement correct per brand design brief?
- [ ] All banned visual elements from the brand file avoided?
- [ ] `anti-ai-copywriter` applied to any copy inside the brief?
- [ ] `ui-ux-pro-max` layout judgment applied to the wireframe?

---

## Quick commands

| Command | Output |
|---|---|
| "Design brief — [brand] — [asset type] — [objective]" | Full 4-part brief |
| "Visual concept only — [brand] — [asset type]" | Part 1 only |
| "AI image prompt — [brand] — [description]" | Part 3 only |
| "Canva brief — [brand] — [asset type]" | Part 4 Canva execution only |
| "Figma brief — [brand] — [page/section]" | Part 4 Figma execution only |
| "New brand design brief — [brand name]" | Auto-generate `/BRANDS/[brand]-design-brief.md` from the brand file |

---

## Output destination

Save completed design briefs to:
`/OUTPUTS/design/YYYY-MM-DD-[brand]-[asset-type]/`

Contents of each output folder:
- `design-brief.md` — the full 4-part brief
- `wireframe.txt` — the layout wireframe as a standalone file if the brief is long
- `ai-prompt.txt` — the AI image generation prompt as a standalone paste file

---

## Last updated
2026-05-21 — P1 fix: corrected design-reference-raw path from /design-reference-raw/[brand]/ to /Raw-Files/design-reference-raw/ (asset-type subfolders, not brand subfolders). Updated 4 references across the file.
2026-05-19 — Built as single modular design engine for all asset types and brands
