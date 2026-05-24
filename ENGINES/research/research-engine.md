# Research Engine
**Path:** /ENGINES/research/research-engine.md
**Phase:** 8
**Built:** 2026-05-21
**Feeds:** All engines — content, campaign, coach-jap, design, client

---

## What this engine does

Takes a raw topic, idea, question, or competitor signal from Jap and returns structured,
tiered research data. Output lives in /RESEARCH/[topic-slug]/ — raw first, clean brief on demand.

Every other engine in the system can pull from a research file as its starting point.
This engine never produces client-facing output directly. It produces base data only.

---

## Trigger signals (ROUTER picks these up)

- "research [topic]"
- "find data on [X]" / "what does the science say about [X]"
- "competitive intel on [X]" / "what are competitors doing with [X]"
- "I have an idea, research it"
- "content research" / "topic dump"
- "what's trending around [X]"
- "pull everything on [X]"
- "check what we have on [X]" → CROSS-REF mode

---

## Step 0 — Before anything else: check the INDEX

Read /RESEARCH/INDEX.md.

- If the topic slug exists and the requested depth is already COMPLETE → go to CROSS-REF mode.
  Open the existing raw file. Synthesize from what's there. Do not re-run research.
- If the topic exists at lower depth than requested → open the existing raw file,
  skip completed layers, run only what's missing.
- If the topic does not exist → proceed to Step 1.

This is the primary token-saving mechanism. Never redo work that's already in the INDEX.

---

## Step 1 — Depth prompt

Ask Jap before starting. One question, four options:

> **Research depth for "[topic]"?**
> **QUICK** — Pattern + social scan only. Fast. Good for content angles and trend checks.
> **STANDARD** — Layers 1–4. Full evidence + competitive. Best for most requests.
> **DEEP** — All 5 layers including hypothesis. Full treatment. Use for campaigns, new programs, major decisions.
> **CROSS-REF** — Existing files + drops only. No fresh web research. Synthesize what we already have.

Default if no answer in 2 minutes: STANDARD.

---

## Step 2 — Create the topic folder (if new)

If the topic folder doesn't exist yet:

1. Copy _template/ structure to /RESEARCH/[topic-slug]/
2. Rename files to match the slug
3. Add the topic to INDEX.md as a new row with status STUB

Slug format: lowercase, hyphens, no spaces. Example: "protein-synthesis-hypertrophy"

**Note:** This step must run before Step 3. The drop zone scan requires the folder to exist first.

---

## Step 3 — Scan the drop zone

With the folder confirmed to exist, scan the topic's RAW/ folder:

`/RESEARCH/[topic-slug]/RAW/`

Look for:
- `links.txt` → fetch each URL, extract relevant content
- Any `.pdf` files → read and extract
- Any `.md` or `.txt` files → read and extract
- Any other files → attempt read, flag if unreadable

For each file found:
- Extract what's relevant to the topic
- Tag the source as [DROP - filename]
- Log to INDEX.md: `YYYY-MM-DD — [slug] — [filename] — INGESTED`

If the drop zone already covers a layer completely → mark that layer COMPLETE before running fresh research.
This is the second token-saving mechanism. Drops always come before web research.

---

## Step 4 — Run the 5 layers

Work through each layer in sequence. Mark each [COMPLETE] in the raw file as you finish it.
Save after each layer — do not batch everything to the end. If the session cuts off, the next run
reads the status tags and picks up from the first [PENDING] layer.

**Layer 1 — SCOPE** (always run first, even on QUICK)
Define the research goal, business angle, target engines, and success criteria before pulling any data.
If Jap's topic is ambiguous — ask one clarifying question before proceeding.

**Layer 2 — HARD EVIDENCE** (skip on QUICK)
Sources in priority order:
1. PubMed / Google Scholar / ResearchGate — for exercise science and nutrition claims
2. Government / institutional data — for market or population data
3. Industry reports — for business/fitness industry data
4. High-authority publications — peer-reviewed only

Tag every claim:
- `[T1]` — solid source, replicated, high confidence
- `[T2]` — single source, emerging, or methodologically limited
- `[T3]` — plausible, logical, not yet verified

Never present T3 as fact in downstream engines. Always label it.

**Layer 3 — PATTERN DATA** (always run, even on QUICK)
Sources:
- Instagram / TikTok / YouTube — what content formats and topics are gaining traction
- Reddit — r/fitness, r/xxfitness, r/loseit, r/Philippines, fitness coaching subreddits
- Facebook groups — public fitness and coaching groups, PH-specific
- Threads / X — what's being discussed in the coaching/wellness space
- Podcast episode titles / descriptions — what topics are being covered right now

Extract: what's resonating, what's dying, what angles people are engaging with vs. scrolling past.
Note platform differences — an angle that works on TikTok may not land on Threads.

**Layer 4 — COMPETITIVE INTEL** (skip on QUICK)
Sources:
- Other online fitness coaches (PH and global)
- Gym brands targeting the same audience
- Adjacent wellness / nutrition brands

Extract:
- What messaging they're leading with
- What offers they're running
- What angles they're NOT covering (gap = opportunity)
- PH-specific competitive landscape vs. global

**Layer 5 — HYPOTHESIS** (DEEP only)
This is Jap's layer. Based on all evidence above:
- What logical extensions follow from the data?
- What angle is available that no competitor has claimed?
- What content seeds are ready to hand off to the content engine?
- What program rationale is ready to hand off to the coach engine?

Pre-route content seeds before closing this layer.

---

## Step 5 — Write the raw file

Output goes to: `/RESEARCH/[topic-slug]/RAW/[topic-slug]-research.md`

Use the template structure from _template/. Fill every section that was run.
Leave [PENDING] status on any layer not run at current depth — they can be added later.

Do not clean or polish the raw file. Contradictions, weak signals, unresolved questions stay in.
That's the point of raw.

**After all layers are written, add a Highlights for Review section at the top of the raw file** (above Layer 1). This is the Gate 1 surface — Jap reads this to assess before directing findings to any engine. Keep it scannable: five points max, no elaboration.

```
## Highlights for Review

Top T1 finding:
Top social signal:
Biggest competitive gap:
Content seed worth acting on:
Weak signals (set aside):
```

Do not generate this section mid-run. Only after all requested layers are complete.

---

## Step 6 — Update INDEX.md

Append or update the row for this topic:

```
| [Topic name] | [slug] | [STUB/PARTIAL/COMPLETE] | [depth] | [layers done] | YYYY-MM-DD | /RESEARCH/[slug]/ |
```

Log any ingested drops in the Ingested Drops Log section.

---

## Step 7 — Brief (on demand only)

Do NOT generate the brief automatically. Only generate when Jap says:
- "make the brief" / "clean copy" / "I'm ready to route this"
- Or when a downstream engine explicitly requests it

Brief output: `/RESEARCH/[topic-slug]/[topic-slug]-BRIEF.md`
Use the _template brief format. Pull only T1 and high-signal T2 data.
Label anything that came from T3 as "angle to explore" not established fact.

---

## Depth reference

| Depth | Layers | When to use |
|---|---|---|
| QUICK | 1, 3 | Content angles, trend check, fast social research |
| STANDARD | 1, 2, 3, 4 | Campaign briefs, competitive moves, most production tasks |
| DEEP | 1, 2, 3, 4, 5 | New program rationale, major campaigns, new market entry |
| CROSS-REF | None (existing files only) | Topic already researched, just need synthesis |

---

## Token-saving rules

1. Check INDEX first (Step 0) — never redo complete work
2. Create folder before scanning drops (Step 2 before Step 3) — folder must exist first
3. Scan drops before web research (Step 3) — drops replace fresh fetches where they overlap
4. Mark layers complete after each one — protect against session loss
5. CROSS-REF mode runs on zero web requests — pure synthesis from existing files
6. QUICK mode skips layers 2 and 4 — cuts fetch volume by ~40%

---

## Engine handoff format

When handing research to a downstream engine, state explicitly:

```
RESEARCH HANDOFF → [engine name]
Topic: [topic-slug]
Raw file: /RESEARCH/[slug]/RAW/[slug]-research.md
Pull: [which layers / which specific sections]
Brief available: YES / NO
Confidence floor: T1 only / T1+T2 / all tiers
```

---

## What this engine does NOT do

- Does not produce client-facing copy
- Does not make design decisions
- Does not write training programs
- Does not generate final captions or blog posts

It feeds those engines. The craft happens downstream.

---

## Last updated
2026-05-21 — P1 fix: corrected step order. Step 2 (create folder) now runs before Step 3 (scan drop zone). Previous order caused drop zone scan to fail on new topics because the folder didn't exist yet.
2026-05-21 — Built. Phase 8.
