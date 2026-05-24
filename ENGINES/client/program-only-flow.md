# Program Only Flow

How the Program Only coaching tier works — setup, delivery, assessment, and ongoing management.

Source: Coach Jap system design session — 2026-05-19

Load this for any Program Only client task. Read alongside check-in.md for the assessment protocol.

---

## What Program Only is

Program Only is a remote, self-executed coaching tier. The client receives a structured program in Trainerize, logs their own sessions, and submits weekly check-ins. There are no live coached sessions. The coach reviews their Trainerize data and runs a bi-weekly assessment to adjust the plan.

It is not a hands-off product. It is a coaching relationship with a different structure.

---

## Who it's for

- Clients who cannot train in person (distance, schedule)
- Trained individuals who know how to execute on their own and primarily need the plan + accountability
- Clients stepping down from Personal Training who still want structure

**Not a fit for:**
- Complete beginners with no training experience who need movement correction
- Clients who have flagged serious injuries and need live cue feedback
- Anyone who has shown they won't self-report accurately (chronic check-in misses, zero session logging)

---

## Program Only pipeline

```
Discovery Call → Invoice → Agreement → Trainerize Registration
→ Intake Form → Program Design → First Week Loaded
→ Weekly Check-In Cycle → Bi-Weekly Assessment → Cycle Close
```

The onboarding call still happens for Program Only clients. The agenda is adjusted — no in-person session booking, but the Trainerize walkthrough is thorough.

---

## Onboarding call adjustments (Program Only)

Cover everything in the standard onboarding call (see client-onboarding.md Stage 6), with these modifications:

**Trainerize walkthrough — go deeper:**
- How to find and read their program card
- How to log a session: sets, reps, weight, RPE
- Where the check-in prompt appears
- How to message their coach
- What happens if they miss a log

**Session booking — not applicable.** Replace this with:
- Confirm: when they will train each week (days, not times)
- Confirm: when they will submit their check-in (a specific day of the week)
- Confirm: their bi-weekly assessment format preference (call or message)

**First week:** Confirm Week 1 is visible in Trainerize and they can see it before the call ends.

---

## Program design for Program Only

Build the program in Trainerize using the training-program.md engine.

**Key differences from Personal Training programs:**

- Every instruction must be self-executable. No coaching cues that require live correction — the client needs to understand what to do and how to know they're doing it right from the card alone.
- Include movement standards in the session notes where needed (especially for Olympic lifts, compound movements, or anything with a technical demand).
- No "coaching eye" adjustments mid-session. The program must be built conservatively at the start — it is easier to increase load than to manage an injury from a program that was too aggressive on Day 1.
- Build in clear progression rules: "Add 2.5kg when you hit the top of the prescribed rep range across all sets."

**Format:** Format A only. Program Only programs are standalone documents — Format B (PT format) is for live coached sessions only.

---

## Bi-weekly assessment

The bi-weekly assessment is what replaces the feedback loop that live sessions would otherwise provide. Run it every two weeks, alternating with the standard weekly check-in.

**Step 1 — Pull Trainerize data**

Review the past two weeks of session logs:
- Sessions logged vs. programmed (compliance rate)
- Weights used vs. target ranges
- RPE reported on each session
- Any movements logged with consistent RPE 9–10 (overload signal)
- Any missed movements or consistent substitutions

**Step 2 — Progress markers**

Compare to the baseline or last assessment:
- Key movement loads (e.g., Back Squat 1RM estimate, max pull-up reps)
- Body weight or measurements if the client is tracking
- Subjective trend: is their RPE going down on the same loads? (adaptation signal)
- Check-in quality: are they logging accurately and consistently?

**Step 3 — Decision**

Apply the four-tag system:

| Tag | Action |
|---|---|
| **CONTINUE** | Progression is on track. Hold the plan. |
| **ADJUST** | One variable changes — load, volume, frequency. |
| **SWAP** | One block or movement swapped. Reason documented. |
| **ESCALATE** | Direct conversation needed. Do not push to next block without it. |

**Step 4 — Delivery**

- **Message (default):** Assessment summary sent via Trainerize. Client reads it, confirms, flags anything. Use this when the assessment is straightforward.
- **Call:** Use when ESCALATE tag is applied, when the client is stalling without a clear data reason, or when the program needs a structural rebuild.

**Message template:**

> "[Name] — two-week check.
>
> Compliance: [X sessions / Y programmed]
> Progress: [one sentence on the key marker]
> What I'm seeing: [one sentence on the pattern]
> What changes next week: [specific — or "no changes, hold the plan"]
>
> Any questions before we move to Week [X]?"

Keep it direct. Do not over-explain.

---

## Session logging standards (set expectations at onboarding)

The program is only as useful as the data coming back. At the onboarding call, set these expectations clearly:

1. Log every session — not just the ones that went well.
2. Log the weight you actually used, not the target.
3. Log RPE honestly — 7 means 7, not "I want to seem like I worked hard."
4. If you modified a session, log what you did and why in the notes.
5. If you skipped a session, log it as skipped. Do not delete or hide it.

These rules go in the agreement. Reference them at the onboarding call.

---

## Escalation triggers (when message assessment is not enough)

Call the client when:

- Two consecutive weeks of compliance below 50%
- RPE consistently 9–10 across all sessions (overtraining signal or poor load calibration)
- No session logs for more than 10 days
- Client messages indicate something is wrong (motivation collapse, injury, life disruption)
- Progress has stalled for three consecutive assessments with no data explanation

Log the escalation call as a session in the check-in folder: `YYYY-MM-DD-week-X-escalation-call.md`

---

## Program Only vs. Personal Training — reference table

| Factor | Program Only | Personal Training |
|---|---|---|
| Sessions | Self-executed | Coach-led |
| Program format | Format A (standalone) | Format B (Trainerize coached) |
| Check-in cadence | Weekly form + bi-weekly assessment | Weekly form only |
| Assessment method | Trainerize data review + call or message | Live session observation |
| Communication | Trainerize messages | Trainerize (during program) |
| Cancellation policy | N/A — no live sessions | 12-hour notice required |
| Movement correction | Written cues in program card | Live coaching |

---

## Last updated
2026-05-19 — built from Coach Jap system design session.
