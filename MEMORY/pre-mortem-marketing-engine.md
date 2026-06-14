# Pre-Mortem — Marketing Engine Unification (Option B)

Date: 2026-06-12. Scope: marketing-engine.md + strategy.md + experiments.md + performance.md + campaign.md integration + 2 agents + /MEMORY/marketing/ state files.

Premise: it is 2026-09-12 and the marketing engine suite failed. Why?

---

## Failure scenarios, likelihood, and mitigations

**1. The lifecycle is too heavy, so Jap routes around it.** (HIGH)
Nine stages for every campaign feels like bureaucracy; one-off posts start being called "campaigns" or campaigns start skipping straight to drafting.
- Mitigation (built in): classifier sends one-off assets directly to content engines — the lifecycle only fires for true campaigns. Stages 1, 6 are lightweight checks for minor campaigns (premortem + multi-layer tests are majors-only).
- Residual risk: if a real campaign still feels heavy, the fix is trimming stages 5–6 to a single combined checklist — log a lesson, don't abandon the engine.

**2. strategy-state.md goes stale and Stage 2 becomes theater.** (HIGH)
Cards stay DRAFT forever; campaigns "confirm" against guesses. The engine then launders guesswork as strategy.
- Mitigation: cards are explicitly marked DRAFT with a validation requirement; quarterly review protocol exists with a named owner (marketing-strategist agent); Gate 3 forces every campaign close to write back card scores, which keeps the file alive between reviews.
- Watch item: if two campaigns close without strategy-state.md updating, that's the signal — run `lint jnoah`.

**3. No tracked numbers, so performance.md produces empty sheets.** (MEDIUM-HIGH)
Organic-only, no CRM, platform insights live in Jap's phone. AARRR cells all read NOT TRACKED and assessment dies.
- Mitigation (built in): NOT TRACKED is defined as a finding, not a failure; data source hierarchy starts with what the vault already tracks (ClickUp, posting-log). Activation events chosen to be countable by hand (DMs, trial bookings).
- Residual: Jap must report DM/call counts at close — that's a ~2-minute human step. If skipped twice, make it part of the Saturday business review.

**4. Experiment cards get created but never decided.** (MEDIUM)
Decision dates pass silently; the log fills with RUNNING zombies.
- Mitigation: "decide EXP-[id]" is mechanical; campaign close protocol forces verdicts on attached experiments (a campaign cannot CLOSE with undecided cards). Standalone experiments are the risk — surface them in "marketing status" and the morning brief if overdue.

**5. Agents drift from vault law.** (MEDIUM)
marketing-strategist absorbs the research report's endorsed-architecture idea and starts co-branding recommendations; analyst redefines activation to flatter results.
- Mitigation: both agent files hard-code the vault-law override, locked activation definitions, and "brand files win." Both write to state files with change logs — drift is visible and reversible.

**6. Coach Jap brand gets marketed without a brand file.** (MEDIUM)
The portfolio now names Coach Jap as a brand entry; someone ships founder content with improvised voice.
- Mitigation: blocked status is hard-coded in strategy.md, strategy-state.md, and performance.md ("flag before any Coach Jap asset ships"). Open item: build /BRANDS/coach-jap.md — added to follow-ups below.

**7. Dual-platform parity breaks.** (LOW-MEDIUM)
CLAUDE.md updated but AGENTS.md not; Codex sessions won't know the marketing suite exists. Agents live only in .claude/ (correct — Claude Code only), but the engine list must mirror.
- Mitigation: flagged here as a required follow-up. AGENTS.md engine-list parity pass needed.

**8. Old ROUTER muscle memory bypasses the master.** (LOW)
"New campaign" historically went straight to campaign.md; stale references exist in older outputs/notes.
- Mitigation: ROUTER row repointed; campaign.md header itself now redirects to the master, so even a direct load self-corrects.

---

## Verdict

GO, with three follow-ups owned outside this build:
1. **AGENTS.md parity pass** — mirror the CLAUDE.md engine-list change (next session or `sync jnoah`).
2. **/BRANDS/coach-jap.md** — required before any Coach Jap asset ships; until then the brand is portfolio-listed but execution-blocked.
3. **First validation pass on strategy-state.md DRAFT cards** — Jap + marketing-strategist agent against real lead/DM/call data; cards stay DRAFT until then.

Highest-probability failure is #2 (stale strategy state). The countermeasure that matters most: Gate 3 is non-negotiable — a campaign is not closed until the learning is written back.
