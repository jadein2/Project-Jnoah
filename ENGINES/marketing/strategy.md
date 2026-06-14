# Marketing Strategy Engine

Portfolio + market layer of the marketing system. Answers, in order: how the brands relate, who each offer is for, what job it is hired to do, and which buying situations (CEPs) each campaign must own.

Load order: CLAUDE.md → ROUTER.md → marketing-engine.md → this file → /MEMORY/marketing/strategy-state.md → relevant brand file.

Research base: /RESEARCH/marketing/deep-research-report-marketing.md (Brand Architecture, STP, JTBD, Ehrenberg-Bass CEPs, Binet & Field). Framework knowledge lives here; the *current state* (live segment cards, CEP maps, OMTM) lives in /MEMORY/marketing/strategy-state.md — this file is the method, that file is the data.

---

## Vault-law override (read first)

The research report recommends an "endorsed architecture" with Coach Jap as public endorser across brands. **That recommendation is overruled.** Locked vault law (CLAUDE.md):

- URBN Athletics and Restart Fitness PH are standalone tracks. Neither is publicly described as part of the other.
- Jap is the only bridge. URBN can feed credibility/proof into Restart — privately, through Jap's own story and results, never through public co-branding.
- No shared taglines, no cross-brand campaign assets, no "from the team behind…" copy.

Brand files always win over this engine on any voice, naming, or positioning conflict.

---

## The portfolio — two brands, two roles

| Brand | Role in the portfolio | Growth job | Brand file |
|---|---|---|---|
| **URBN Athletics** | Local membership and community brand (Olongapo, in-person). | Physical availability locally: trials, attendance, community belonging. | /BRANDS/URBN-athletics.md |
| **Restart Fitness PH** | Transformation and results brand (online). | Convert high-intent pain into assessments, 6FIX, and 90-Day Coaching System enrollments. | /BRANDS/restart-fitness-ph.md |

Jap is the founder of both but is not a third brand. His story, training, and results are proof assets that can be used within each brand's own context — never as public co-branding between the two.

Campaign offers sit *beneath* one parent brand. A campaign never becomes its own brand unless it targets a genuinely different audience, price tier, or promise — and that requires a strategic-decision review first.

---

## Layer 1 — Brand role card (one per brand, lives in strategy-state.md)

```
Brand: [name]
Role: [authority / local membership / transformation]
Audience: [one line]
Promise: [one line — must match brand file]
Price tier: [entry / core / premium offers]
Proof assets: [testimonials, results, story banks available]
Cross-brand rule: [what may NOT be borrowed from the other brands]
```

Review trigger: any new offer, any rebrand event, or quarterly — whichever comes first.

## Layer 2 — Segment cards (STP)

Two to three high-value segments per brand, no more. Built from the last 6–12 months of leads, DMs, discovery calls, and client intakes — not from guesses.

```
Segment: [name]
Brand: [which of the three]
Pain: [what hurts]
Buying context: [what's happening in their life when they look]
Message: [the angle that lands]
Offer: [which offer fits]
Objections: [top 2–3]
Channel: [where they actually are]
Expected LTV: [tier: low / mid / high]
```

Routing rule: every campaign brief (campaign.md Phase 1) must name one segment card. "Everyone" is not a segment. If no card fits, build the card first.

## Layer 3 — Job stories (JTBD)

One job story per offer. Format:

> When ___ [circumstance], help me ___ [progress], so I can ___ [outcome].
> Forces: push [what drives them], pull [what attracts], anxiety [what stalls], habit [what holds them back].

Jobs are interview-fed: discovery calls, check-in language, DM threads, churn conversations. When a client says why they really signed up, that phrasing goes into the job story — their words, not marketing words. Job stories rewrite copy angles, sales scripts, and offer presentation.

## Layer 4 — Category Entry Points (CEP map)

The buying situations that bring people into the category. Each campaign links to **one** CEP. Starting CEP list for the portfolio (refine from real DM/search/call data):

| CEP (buying situation) | Likely brand |
|---|---|
| "I need accountability — I can't stick to it alone" | Restart |
| "I want to lose fat for an event" (wedding, reunion, trip) | Restart |
| "I need to get back after a long layoff" | Restart / URBN |
| "I want structure after an injury" | URBN (coached) |
| "I want to train near home/work without figuring it out myself" | URBN |
| "I'm intimidated by gyms — I need somewhere beginner-safe" | URBN (On-Ramp) / 6FIX |
| "I've tried programs before and quit — I need something that finally sticks" | Restart (6FIX entry) |
| "I sit all day and my body feels broken" | URBN ("Built to Move Better") |

Per CEP, track: brand linkage strength, priority, creative angle, proof asset, channel, availability fix (what friction blocks the next step — booking, payment, reply speed).

## Layer 5 — Budget balance (Binet & Field)

Portfolio-level, not campaign-level. Default posture: **roughly 60% brand-building / 40% activation** across the portfolio per quarter — a heuristic, not a law; adjust by context.

- Brand-building: story-driven Restart content (Jap's journey, client results), URBN community proof (member moments, coached-session energy). Pays back in months, builds branded search and DM volume.
- Activation: launch pushes, retargeting, conversion posts, DM "RESTART" campaigns, 6FIX cohort enrollment windows.
- Red flag: if a full quarter's output is conversion-content-heavy across all brands at once, the portfolio is eating its future demand. Surface this in the quarterly review.

Track in strategy-state.md: current quarter's split (count organic posts by C/C/V as the proxy until paid spend exists).

---

## Quarterly strategy review protocol

Run via the marketing-strategist agent (or manually). Inputs: posting-log, campaign-performance.md, decisions-log, DM/call themes from Jap, client registry movement.

1. Score each brand role card — still accurate?
2. Re-rank segment cards by actual close rate and retention
3. Update CEP map — which linkages strengthened, which campaigns owned their CEP
4. Check the brand/activation balance for the quarter
5. Set or confirm each brand's OMTM (see performance.md)
6. Write changes to strategy-state.md + one-line decisions-log entry

---

## Connection to other engines

| This engine feeds | What it passes |
|---|---|
| marketing-engine.md (master) | Strategy check at Stage 2 — brand role, segment, job, CEP for any campaign |
| campaign.md Phase 1 | Segment card + CEP + job story → brief fields "Target pain," "Audience segment" |
| sales-engine.md | Job-story forces → objection scripts |
| offer-engine.md | Segment LTV tiers → offer-selection logic |
| performance.md | OMTM per brand, activation definitions |
| research-engine.md (upstream) | Gaps found here become research topics |

---

## Last updated
2026-06-12 — Built from /RESEARCH/marketing/ deep-research drop. Vault-law override on endorsed architecture documented. Part of marketing engine unification (Option B).
