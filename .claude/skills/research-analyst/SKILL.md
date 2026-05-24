# research-analyst

**Auto-fires when:** research tasks, topic dumps, evidence evaluation, source triage, signal weighting, cross-referencing drops, writing raw research output.

**Works alongside:** `/ENGINES/research/research-engine.md` (workflow) — this skill provides the judgment layer the engine cannot.

---

## What this skill does

The research engine tells you *what steps to run*. This skill tells you *how to evaluate what you find*. Source credibility scoring, signal weighting, gap detection, and pattern recognition — applied before anything gets written into a raw research file.

---

## T1 / T2 / T3 — Credibility scoring rules

Every claim, stat, or pattern in a raw research file gets a triage tag. These are not vibes — apply the criteria below.

### T1 — Solid. Use with confidence.

Requirements (needs at least 2 of 3):
- Published in a peer-reviewed journal, government dataset, or major institution (NIH, WHO, ACSM, NSCA, etc.)
- Replicated across multiple independent studies or sources
- Sample size ≥ 30 (for human studies); large-scale dataset for market/trend claims

Examples:
- "ACSM position stand: resistance training 2–4x/week is sufficient for untrained adults" → T1
- "Meta-analysis of 12 RCTs showing progressive overload drives hypertrophy" → T1
- "Philippine Statistics Authority: urban household income distribution" → T1

Tag format: `[T1 — ACSM 2022]`

---

### T2 — Single or emerging source. Use with a qualifier.

Requirements (meets 1 of 3 T1 criteria, or is a strong industry signal):
- Single credible source (one journal study, one major industry report)
- Industry consensus without peer-reviewed backing (widely accepted, not formally studied)
- Recent trend data from a reputable analytics platform (Sprout Social, Statista, SEMrush, Meta Ads Library)
- Expert opinion from a named, credentialed professional

Examples:
- "One 2023 study (n=24) showing fasted cardio marginally increases fat oxidation" → T2
- "Hootsuite 2024 report: Instagram Reels reach up 22% YoY" → T2
- "Competitor X posts 5x/week and averages 3–8% engagement on carousels" → T2

Tag format: `[T2 — Hootsuite 2024]`

When using T2 in production copy: do not state as fact. Frame as "Research suggests..." or "Based on current data..." Never present T2 as T1.

---

### T3 — Plausible but unverified. Flag, do not use in production.

Applies when:
- Anecdotal, forum-sourced, or social media observation
- No source identified or sourceable
- Pattern spotted in 1–2 examples — could be coincidence
- AI-generated claim (including from this system) with no external backing
- "Everyone knows..." type assertion

Examples:
- "People on Reddit say they stop programs after month 1" → T3 (anecdotal pattern)
- "Competitor seems to be shifting toward lifestyle content" → T3 (observation, not data)
- "Fat loss content performs better in January and June" → T3 unless sourced

Tag format: `[T3 — anecdotal/observation/unverified]`

T3 claims live in the raw file only. They do not enter production copy unless upgraded to T2 or T1 through research. They can inform hypotheses (Layer 5) — that is their correct use.

---

## Signal weighting — how to weight across layers

When multiple layers of a research run produce conflicting signals, apply this hierarchy:

```
T1 science (Layer 2) > T1 market data (Layer 2) > T2 trend data (Layer 3) > T2 competitive intel (Layer 4) > T3 community observation (Layer 3/4) > T3 hypothesis (Layer 5)
```

**Conflict resolution rule:** If T1 and T2 conflict, note both with their tags. Do not resolve — surface it. Jap decides what to act on.

**Consistency rule:** If T2 trend data and T2 competitive intel point the same direction, treat the combined signal as approaching T1 weight for content decisions (not science claims). Document this reasoning in the hypothesis note.

---

## Source credibility — quick reference

| Source type | Default tier | Notes |
|---|---|---|
| Peer-reviewed journal | T1 | Check sample size and replication |
| Government/institution dataset | T1 | PSA, DOH, NIH, WHO, ACSM, NSCA |
| Meta-analysis | T1 | Strongest individual evidence type |
| Major industry report (Sprout, Statista, etc.) | T2 | Good for trend signals, not science |
| Single journal study | T2 | Stronger if large n; weaker if small |
| Competitor analysis (observed behavior) | T2 | Pattern, not causation |
| Named expert opinion | T2 | Weight by credential relevance |
| Blog / article (no primary source cited) | T3 | May point to T1/T2 — trace the source |
| Reddit / Facebook community | T3 | Strong for pain points; weak for claims |
| Social media observation | T3 | Directional only |
| NotebookLM / AI summary | T3 | Must trace to original source before upgrading |
| Jap's coaching experience | T2 | Real-world practitioner signal — document it |

**Tracing rule:** If a T3 source references or implies a primary source, find the primary source. If you can, upgrade. If you can't find it, the claim stays T3.

---

## Pattern recognition — how to identify real signal vs. noise

A signal is real when:
- It appears in at least 2 independent sources (different platforms, different researchers)
- It is consistent with a known mechanism (e.g., habit formation literature supports the 6-week observation)
- It has a concrete example or case (not just a claim)

Noise looks like:
- One viral post claiming something with no evidence
- A "common knowledge" statement with no source
- A correlation framed as causation

**Convergence test:** Before writing a pattern into Layer 3 or Layer 5, ask: "Does this appear from at least two directions?" If yes → T2 minimum. If only one → T3.

---

## Drop zone evaluation — scanning RAW/ folder

When scanning the RAW/ folder (Step 3 of research-engine.md), apply these rules:

**PDF / document drops:**
- Read for primary claims, data points, and named sources
- Tag each claim on extraction (T1/T2/T3)
- Do not summarize — extract specific claims with page references where possible

**Link drops (links.txt):**
- Fetch the URL, evaluate the source type, apply tier
- If the URL is a journal → T1 candidate
- If the URL is a blog → read for primary sources it cites; trace those
- If the URL is a competitor page → T2 competitive intel

**NotebookLM / AI-generated exports:**
- Always T3 on arrival — they summarize, they do not source
- Use to identify what topics to research, not as evidence
- Trace every key claim back to a primary source before upgrading

**Jap's notes / voice memos / coaching observations:**
- Treat as T2 practitioner data — real signal, not academic proof
- Document as: `[T2 — Coach Jap observation, [context]]`

---

## Gap detection — what to flag when research is incomplete

After completing available layers, check for these gaps before writing the raw file:

| Gap type | Flag format |
|---|---|
| No T1 or T2 evidence for a key claim | `[GAP — no evidence for: claim]` |
| Conflicting T1 sources | `[CONFLICT — T1 vs T1: describe both]` |
| Layer not completed | `[PENDING — Layer N not run]` |
| Drop zone file not yet processed | `[UNPROCESSED — filename.pdf]` |
| Key question unanswerable from current research | `[OPEN — question]` |

Gaps are not failures. They are honest markers that tell Jap where the evidence base ends and judgment begins.

---

## What NOT to do

- Do not upgrade a claim's tier to make the research look stronger than it is
- Do not smooth over conflicting evidence — surface it
- Do not write T3 claims into production copy, briefs, or client-facing materials
- Do not omit a source because it contradicts the direction Jap wants to go
- Do not present AI-generated summaries as evidence — they are always T3 until traced
- Do not run research without checking INDEX.md first — never duplicate completed work

---

## Output quality check — before writing the raw file

Run this before finalizing any Layer in the raw research file:

- [ ] Every claim has a T1/T2/T3 tag?
- [ ] Every tag has a source identifier (publication, platform, date)?
- [ ] Conflicts are surfaced, not resolved arbitrarily?
- [ ] NotebookLM/AI drops traced to primary sources where possible?
- [ ] Gaps flagged with `[GAP]` markers?
- [ ] T3 claims not presented as facts?
- [ ] Pattern signals pass the convergence test (2+ sources)?
- [ ] Jap's observations tagged as `[T2 — Coach Jap observation]`?

---

## Last updated
2026-05-21 — Phase 10. Built as P3-1. Provides judgment layer for research-engine.md. Covers T1/T2/T3 scoring criteria, source credibility table, signal weighting hierarchy, drop zone evaluation rules, gap detection format, and output QA checklist.
