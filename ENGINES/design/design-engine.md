# Design Engine — Project Jnoah

Governs all visual asset production for Restart Fitness PH campaigns.
Brand: Restart Fitness PH
Last updated: 2026-05-28

---

## Core principle

Claude handles all text-based design execution autonomously. Jap handles all image decisions. No AI-generated imagery — ever. If a design requires a real photo, Claude writes the image brief and waits for Jap to source or shoot it.

---

## Template map

| Template ID | Type | Theme | Dimensions | Use case |
|---|---|---|---|---|
| EAHK51gPQYg | Single post | Dark | 1080×1350 | Feed posts — connection, conversion, authority |
| EAHCHl2SbSM | Story | Dark | 450×800 (approx) | Daily stories — dark theme |
| EAHK7TkmOjU | Story | Light | 450×800 (approx) | Daily stories — light theme |
| EAHK7aJ9e2A | Carousel | RESTART \| Random Effort | 1080×1350 per slide | Carousels — problem-led content |
| EAHCf9doGfY | Carousel | RESTART \| Wake-Up Call | 1080×1350 per slide | Carousels — value/educational |

Brand kit ID: `kAG_BgDwOgY`

---

## Canva folder structure

| Folder | ID | URL |
|---|---|---|
| Project Jnoah (root) | FAHK7vlvrro | https://www.canva.com/folder/FAHK7vlvrro |
| 2026-06 6FIX Launch — RFPH | FAHK7pcZGBQ | https://www.canva.com/folder/FAHK7pcZGBQ |

**Rule:** Every design produced goes into its campaign subfolder immediately after creation — before editing, not after. Use `move-item-to-folder` right after `create-design-from-brand-template`.

**Adding new campaigns:** Create a new subfolder inside `FAHK7vlvrro` (Project Jnoah root). Name format: `YYYY-MM [Campaign Name] — [Brand]`.

---

## Design execution method — Path B (current)

Autofill fields are not configured on templates. Until they are, use the editing transaction approach.

**Workflow per asset:**

1. `create-design-from-brand-template` → brand_template_id → returns design_id (D...)
2. `start-editing-transaction` → design_id → returns transaction_id + all element IDs and current text
3. `perform-editing-operations` → replace_text on all text elements + update_title → get thumbnail
4. Adjust formatting if needed (font_size, text_align) → perform-editing-operations again
5. Verify thumbnail looks correct
6. `commit-editing-transaction` → saves permanently to Canva
7. `export-design` → PNG, pro quality, lossless

**Do not commit without verifying the thumbnail first.**

---

## Dark post template — element map (EAHK51gPQYg)

Learned from Path B test — POST-01, 2026-05-28.

| Element ID | Position | Role | Original text | Font size rule |
|---|---|---|---|---|
| PBdCRCjT7z0Dp9y3-LB3LYldRksqvKfjt | Top (165px from top) | Intro / setup line | "Your coaching fee" | Default for ≤4 words · 36px for longer lines |
| PBdCRCjT7z0Dp9y3-LBgK8GSqc5vh7n3x | Middle (255px from top) | Hero italic display | "is too high for me" | Template default — do not resize |
| PBdCRCjT7z0Dp9y3-LBCNNqcQPvxyqNX4 | Below hero (450px) | Secondary line | "any discount?" | Template default — watch wrap at >6 words |
| PBdCRCjT7z0Dp9y3-LBk5VFdKg7JVzB6F | Bottom CTA (1144px) | CTA / save prompt | "DM "URBAN" to…" | Template default — keep under 10 words |

**Copy-to-layout rules for the dark post template:**

- Top line: stays short — intro or question framing. Max ~6 words. If longer, set font_size to 36.
- Hero line: the main statement. Short, punchy. Cormorant Garamond Italic at full size. Do not touch formatting (exception: color override for authority posts — use #C9A84C gold).
- Secondary line: expands the hero. 1–2 lines. Apply font_size 36 for any text over ~4 words to prevent wrap. Default size wraps at ~6 words.
- CTA line: one clean action. "DM me '6FIX'" or "Save this if it landed." Keep it under 10 words. Use a single space " " to blank the CTA on authority posts with no conversion goal.

---

## Asset naming convention

Format: `[Brand] | [Asset ID] | [Date]`

Examples:
- `RFPH | POST-01 | Jun 4`
- `RFPH | REEL-01 | Jun 8`
- `RFPH | CAR-01 Slide 3 | Jun 11`

Always update the design title via `update_title` operation in the same editing transaction as the copy replacement.

---

## Image handling rule

**Text-based assets → Claude executes fully.**
The template photo background stays unless Jap explicitly swaps it. If the existing photo works for the content angle, proceed. If it conflicts with the post concept (wrong context, wrong brand moment), flag it and write an image brief before executing.

**Image-dependent assets → Claude writes the brief, Jap decides.**

Image brief format:
```
Asset: [Asset ID]
Shot needed: [what the photo should show]
Angle: [tight / wide / medium]
Mood: [dark / warm / energetic / quiet]
Subject: [Coach Jap / group / equipment / no people]
Framing: [landscape / portrait / square]
Notes: [any specific requirements]
```

Jap uploads the photo → Claude proceeds with text layer on top.

**No AI-generated images. No stock photos. Real coaching moments only.**

---

## RFPH visual system (reference)

| Token | Value | Use |
|---|---|---|
| Charcoal | #1A1A18 | Primary background |
| Off-white | #F5F5F0 | Primary text on dark |
| Orange | #E06D22 | CTA emphasis, key word highlight |
| Gold | #C9A84C | Authority / proof / results posts |
| DM Sans 300 | Body / subtext | |
| DM Sans 400 | UI / captions | |
| DM Sans 500 | CTAs / emphasis labels | |
| Cormorant Garamond Italic | Display headlines | Hero text in post templates |

---

## Export settings

| Platform | Format | Quality | Notes |
|---|---|---|---|
| Instagram feed | PNG | Pro, lossless | 1080×1350 (portrait) or 1080×1080 (square) |
| Instagram Stories | PNG | Pro, lossless | 450×800 (story template dimensions) |
| Carousel slides | PNG | Pro, lossless | Export all pages in one batch |
| Blog header | PNG | Pro | 1200×630 or match existing blog format |

---

## Path A — future upgrade (autofill)

When ready: open each template in Canva → select each text element → Publish > Dataset > add field label (e.g., `headline`, `body`, `cta`, `intro_line`). Once defined, Claude can use `autofill-design` instead of the editing transaction flow. Faster, more precise, no font-size correction needed.

One-time setup per template. Estimated time: 20 minutes across all 5 templates.

Until then: Path B is the production method.

---

## Design phase workflow (per campaign)

1. Copy bank complete and approved
2. Load campaign calendar — identify all text-based assets in order
3. For each asset: read copy file → map copy to template layout → execute Path B → thumbnail check → commit → export
4. Image-dependent assets: write image brief → flag for Jap → hold in queue
5. Once Jap uploads image: proceed with text layer
6. All exports delivered to `/OUTPUTS/campaigns/[slug]/design/` folder

---

## Known template quirks

**EAHK51gPQYg (dark post):**
- Top text element expands downward when text exceeds ~4 words. Fix: font_size 36 keeps it to one line.
- Hero italic element (Cormorant Garamond) does not need formatting adjustment — it scales correctly.
- Three image fill elements exist in this template. Do not delete them — they form the layered visual effect.

**Carousels (EAHK7aJ9e2A, EAHCf9doGfY):**
- Element IDs not yet mapped — will be documented on first carousel execution.
- Multi-page export: specify pages array in export call to get all slides in one batch.

**Story templates (EAHCHl2SbSM, EAHK7TkmOjU):**
- Element IDs not yet mapped — will be documented on first story execution.
