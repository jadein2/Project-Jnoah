# 6FIX Phase 2 — Questionnaire + Scoring System
**Program:** 6FIX — Restart Fitness PH
**Applies to:** Phase 2 clients (Day 43 onward)
**Platform:** Trainerize
**Built:** 2026-06-08

---

## Overview

Two forms. One workflow.

**Form 1 — Phase 2 Intake** (one-time, at Week 0 / Day 43 onboarding)
Sets the objective baseline for each client. Every number tracked in Phase 2 is measured against what this form captures.

**Form 2 — Weekly Check-In** (recurring, every Friday)
8 questions. Feeds the habit scoring system. Coach reviews same-day, responds within 24 hours.

**Scoring Workflow** (coach-side, every Friday)
Calculate habit score % → assign benchmark tier → flag escalation if needed → log one line per client.

---

## FORM 1 — Phase 2 Intake Questionnaire

**When to send:** 24–48 hours before the in-person onboarding session (Week 0).
**Deadline:** Must be completed before onboarding session.
**Trainerize field types used:** Number, Scale (1–10), Short text, Long text, Multiple choice.

---

### SECTION 1 — Phase 1 Results Review

*These are your baseline anchors. Be honest — this is data, not a report card.*

| # | Question | Trainerize field type |
|---|---|---|
| 1 | Phase 1 starting weight (lbs or kg) | Number |
| 2 | Phase 1 final weight (lbs or kg) | Number |
| 3 | Phase 1 starting waist (cm) | Number |
| 4 | Phase 1 final waist (cm) | Number |
| 5 | Average weekly habit score in Phase 1 (out of 7 days) | Number |
| 6 | How many of the 6 weekly check-ins did you complete? | Number |
| 7 | List your Top 3 habits built in Phase 1 | Long text |
| 8 | What was the hardest part of Phase 1? | Long text |
| 9 | What surprised you most about yourself in Phase 1? | Long text |

---

### SECTION 2 — Physical Capacity Baseline

*This sets your training schedule for Phase 2. Answer based on your real life, not your ideal life.*

| # | Question | Trainerize field type |
|---|---|---|
| 10 | How many training sessions per week can you realistically commit to? (2 minimum, 3 target) | Number |
| 11 | What are your preferred training days? (e.g., Mon/Wed/Fri) | Short text |
| 12 | What is your average daily step count right now? (from Phase 1 tracking) | Number |
| 13 | Where will you train? | Multiple choice: Gym / Home / Both |
| 14 | Do you have any injuries or physical limitations Coach Jap should know about? | Long text |

---

### SECTION 3 — Nutrition Baseline

*Phase 2 nutrition is personal. This tells Coach Jap where to start.*

| # | Question | Trainerize field type |
|---|---|---|
| 15 | What is your goal body weight? (lbs) | Number |
| 16 | How consistently did you track protein in Phase 1? (1 = never, 10 = every day) | Scale 1–10 |
| 17 | How many days per week were you actually hitting your protein target in Phase 1? | Number (0–7) |
| 18 | What is your biggest nutrition challenge right now? | Long text |
| 19 | How often do you eat out per week? | Number |
| 20 | Do you meal prep? | Multiple choice: Yes, regularly / Sometimes / Rarely / Never |

---

### SECTION 4 — Habit Audit

*Rate each Phase 2 habit: is it already running automatically, or does it still need work?*

**Answer for each habit: Automatic / Still needs work / Not started yet**

| # | Habit | Trainerize field type |
|---|---|---|
| 21 | Hit daily protein target | Multiple choice |
| 22 | Log all meals | Multiple choice |
| 23 | Hit daily step target | Multiple choice |
| 24 | Morning routine (consistent wake time + water + protein breakfast) | Multiple choice |
| 25 | Evening routine (last meal 2–3hrs before bed + prep tomorrow) | Multiple choice |
| 26 | Water target (2.5–3L/day) | Multiple choice |
| 27 | Sleep 7+ hours consistently | Multiple choice |

---

### SECTION 5 — Lifestyle Baseline

*Sleep, stress, and energy drive everything in Phase 2. Capture honest numbers.*

| # | Question | Trainerize field type |
|---|---|---|
| 28 | What time do you usually wake up? | Short text |
| 29 | What time do you usually go to bed? | Short text |
| 30 | Average hours of sleep per night right now | Number |
| 31 | Sleep quality right now (1 = terrible, 10 = excellent) | Scale 1–10 |
| 32 | Stress level right now (1 = very low, 10 = very high) | Scale 1–10 |
| 33 | Energy level on most days (1 = exhausted, 10 = great) | Scale 1–10 |
| 34 | Describe your weekday schedule (work, family, commitments) | Long text |
| 35 | What's different on weekends? | Short text |

---

### SECTION 6 — Phase 2 Goals and Commitment Floor

*This is the contract you make with yourself before we start.*

| # | Question | Trainerize field type |
|---|---|---|
| 36 | What is your specific goal for Phase 2? (a number, a feeling, or a behavior — be exact) | Long text |
| 37 | What is your minimum commitment floor — the number of training sessions per week you will hit no matter what? | Number |
| 38 | What would make Phase 2 feel like a real success for you? | Long text |
| 39 | What is the one thing most likely to get in the way of you showing up in Phase 2? | Long text |

---

### SECTION 7 — Accountability Design

| # | Question | Trainerize field type |
|---|---|---|
| 40 | Preferred check-in format | Multiple choice: Trainerize message / Voice message / Call |
| 41 | Best time of day for check-ins and responses | Short text |
| 42 | What should Coach Jap do if you go quiet for 48 hours? | Multiple choice: Send a DM / Voice message / Call / Leave it — I'll come back |
| 43 | Anything else you want Coach to know before Phase 2 starts? | Long text |

---

## FORM 2 — Weekly Check-In Form

**When:** Every Friday. Client submits by 6pm. Coach responds by Saturday evening.
**Trainerize setup:** Recurring — set to repeat weekly, starting Week 1 of Phase 2.

| # | Question | Trainerize field type | What it feeds |
|---|---|---|---|
| 1 | Weight — Monday morning weigh-in (kg or lbs) | Number | Body comp trend |
| 2 | Waist measurement (cm) | Number | Body comp trend |
| 3 | Habit score this week — how many of the 8 daily habits did you complete on average? (0–8) | Number | Habit scoring system |
| 4 | Energy level this week (1 = drained, 10 = strong) | Scale 1–10 | Training load decisions |
| 5 | Sleep quality this week (1 = terrible, 10 = excellent) | Scale 1–10 | Recovery flags |
| 6 | What I nailed this week | Long text | Coach feedback + motivation |
| 7 | What got in the way | Long text | Friction audit |
| 8 | What I need from you this week | Long text | Coaching direction |

---

**Coach responds with (every Friday review):**
- What I noticed in your logs
- One adjustment for next week
- One thing to double down on

---

## SCORING SYSTEM — Phase 2 Habit Score

### Daily Habits (Tracked in Trainerize — 1 point each)

| Habit | Points |
|---|---|
| Hit daily protein target | 1 |
| Logged all meals | 1 |
| Completed training session (if scheduled that day) | 1 |
| Hit daily step target | 1 |
| Completed morning routine | 1 |
| Completed evening routine | 1 |
| Hit water target (2.5–3L) | 1 |
| Slept 7+ hours | 1 |

**Weekly max:** 56 points (8 habits × 7 days)
**Weekly score %:** Points earned ÷ Points possible × 100

*(If a training session is not scheduled on a given day, that slot = automatic 1 point. Scoring only penalizes missed scheduled sessions.)*

### Score Benchmarks

| Score % | Tier | Coach Action |
|---|---|---|
| 85–100% | System is running | Acknowledge specifically. No changes needed. |
| 70–84% | Strong | Minor friction point. Ask: "What's the one thing that pulled the score down?" |
| 55–69% | Needs attention | Full friction audit this week. Reduce complexity if needed — don't add. |
| Below 55% | Intervention | Coach-initiated call this week. Do not wait for check-in. |

---

## ESCALATION TRIGGERS (Coach-Side)

Flag any client who hits any of the following:

| Signal | Response |
|---|---|
| Missed weekly check-in | DM within 24 hours: "Hey — missed your check-in. How's the week going?" |
| Habit score < 55% for 2 consecutive weeks | Call. Re-run lifestyle audit. One change maximum — do not pile on. |
| Protein hit rate below 3/7 days for 2 weeks | Nutrition review. Simplify — fewer meals, more repeatable options. |
| Energy score ≤ 4 for 2 consecutive weeks | Reduce training load. Check sleep + stress scores first. |
| Weight not moving after 3 weeks + protein low | Portion review. Audit weekend behavior specifically. |
| Client says "I fell off" or "I want to pause" | "Let's talk before you decide. 15 minutes." Don't accept a pause by message. |

---

## COACH WEEKLY REVIEW PROTOCOL

**Run every Friday after all check-ins are in. Takes 15–20 minutes.**

**Step 1 — Calculate each client's habit score %**
(Points submitted in Q3 of check-in ÷ 56) × 100 = score %

*(Note: Q3 asks for average daily habit score out of 8, not total points. Multiply their answer × 7 to get estimated weekly points, then divide by 56.)*

**Step 2 — Log one line per client**

Format: `[Name] — W[X] — Score: [%]% — Check-in: [submitted/missed] — Weight: [X]kg — [one note]`

Example:
```
Katrina — W1 — Score: 82% — Check-in: submitted — Weight: 68.9kg — Strong first week, protein still low Fri/Sat
Arianna — W1 — Score: 71% — Check-in: submitted — Weight: 74.5kg — Sleep score 5, reduce evening load
Jen — W1 — Score: 55% — Check-in: submitted — Weight: 69.8kg — Friction audit needed, work schedule shifted
Fame — W1 — Score: 91% — Check-in: submitted — Weight: 80.2kg — Standout week, ready to escalate step target
```

**Step 3 — Flag escalations**
Any client below 55% or with 2 consecutive missed check-ins → schedule contact before next check-in day.

**Step 4 — Set Week N+1 focus per client**
One specific direction per client, written in Trainerize response:
- What I noticed
- One adjustment
- One thing to double down on

---

## COHORT TRACKER — 6FIX PHASE 2 (Katrina · Arianna · Jen · Fame)

Copy this table and update weekly. Keep in a cohort log file or Trainerize notes.

### Phase 2 Baseline (Week 0 — from Intake Form)

| Client | P1 Final Weight | P1 Final Waist | P2 Goal Weight | Protein Target | Training Days | Step Target | Starting Habit Score % |
|---|---|---|---|---|---|---|---|
| Katrina Carandang | 151.6 lbs | — | TBD | TBD | TBD | TBD | TBD |
| Arianna Ramos | 164 lbs | — | TBD | TBD | TBD | TBD | TBD |
| Jen Linzaga | 153.4 lbs | — | TBD | TBD | TBD | TBD | TBD |
| Fame Florendo | 177.4 lbs | — | TBD | TBD | TBD | TBD | TBD |

*Fill in after intake forms are submitted. TBD fields populated from Form 1 answers.*

---

### Weekly Cohort Scorecard

| Client | W1 Score % | W2 Score % | W3 Score % | W4 Score % | W5 Score % | W6 Score % | Avg |
|---|---|---|---|---|---|---|---|
| Katrina | — | — | — | — | — | — | — |
| Arianna | — | — | — | — | — | — | — |
| Jen | — | — | — | — | — | — | — |
| Fame | — | — | — | — | — | — | — |

**Cohort avg target:** ≥ 75%

---

### Weekly Weight Trend

| Client | P2 Start | W1 | W2 | W3 | W4 | W5 | W6 Final | Total change |
|---|---|---|---|---|---|---|---|---|
| Katrina | — | — | — | — | — | — | — | — |
| Arianna | — | — | — | — | — | — | — | — |
| Jen | — | — | — | — | — | — | — | — |
| Fame | — | — | — | — | — | — | — | — |

---

### Check-In Compliance Log

Format: ✓ = submitted on time · ✗ = missed · L = late

| Client | W1 | W2 | W3 | W4 | W5 | W6 | Rate |
|---|---|---|---|---|---|---|---|
| Katrina | — | — | — | — | — | — | — |
| Arianna | — | — | — | — | — | — | — |
| Jen | — | — | — | — | — | — | — |
| Fame | — | — | — | — | — | — | — |

**Target:** ≥ 90% on-time submission across cohort

---

## Trainerize Setup Checklist

Before Phase 2 Day 1:

- [ ] Phase 2 Intake Form created in Trainerize (43 questions, one-time)
- [ ] Intake form sent to all 4 clients with 48-hour deadline
- [ ] Weekly Check-In form created in Trainerize (8 questions, recurring Friday)
- [ ] Weekly Check-In scheduled to start Week 1 Friday and repeat weekly
- [ ] Each client assigned to Phase 2 program in Trainerize
- [ ] Habit tracking module active (8 daily habits loaded per client)
- [ ] Baseline data from intake forms entered into Cohort Tracker above
- [ ] Individual protein targets calculated and confirmed (goal weight lbs × 0.8 = daily grams)
- [ ] Individual step targets assigned (from intake Q12 — adjusted from Phase 1 average)
- [ ] Week 1 focus message sent to each client after onboarding session

---

## Quick Reference — Protein Target Calculator

Formula: Goal body weight (lbs) × 0.8 = daily protein target (grams)

| Goal weight | Protein target |
|---|---|
| 120 lbs | 96g/day |
| 130 lbs | 104g/day |
| 140 lbs | 112g/day |
| 150 lbs | 120g/day |
| 160 lbs | 128g/day |
| 170 lbs | 136g/day |

---

*6FIX Phase 2 — Restart Fitness PH | Built 2026-06-08*
