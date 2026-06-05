# Check-In Engine

The weekly and bi-weekly feedback system for active clients.

Source: Coach Jap system design session — 2026-05-19
Updated: 2026-05-28 — ADHERE Tool 3 check-in script added for 90-Day Coaching System clients.

Load this for any check-in task. Read alongside client-onboarding.md.

**For 90-Day Coaching System clients:** use the ADHERE check-in script (Tool 3) below instead of the standard 5-field form. The structure is different and the reasoning matters — consistency of format builds trust over 90 days. Full framework context in adhere-compliance.md.

---

## What the check-in is

The check-in is how coaching happens between sessions. It is not a courtesy message — it is structured data collection that drives program decisions for the next week. Every active client submits one. Missing a check-in is flagged, not ignored.

---

## Check-in formats by service tier

| Service Tier | Format | Cadence | Channel |
|---|---|---|---|
| 90-Day Coaching System | ADHERE Tool 3 — 4-step check-in script (Wins → Challenges → Adjustments → Next Steps) | Weekly from Week 2 onward | Call or Trainerize message |
| Personal Training | Weekly 5-field form | Every Sunday (or agreed day) | Trainerize |
| Online Program Only | Weekly 5-field form + bi-weekly assessment | Weekly form on Sunday; assessment call/message on alternating weeks | Trainerize |
| Group Class | No individual check-in — session log only | N/A | Trainerize |

---

## The weekly 5-field check-in

These are the five fields. Every client answers all five. No skipping.

**Field 1 — Training compliance**
> "How many sessions did you complete this week vs. what was programmed?"

This is a number: 3/3, 2/3, 1/3. Not a paragraph. If they completed fewer than programmed, the next field explains why.

**Field 2 — Adherence notes**
> "If you missed sessions or made substitutions, what happened?"

This is brief and factual. Not a defense — just context for programming decisions. If they completed everything, they write "Full compliance."

**Field 3 — Nutrition and recovery**
> "How was nutrition and sleep this week — anything to flag?"

Not a macro report unless they're on a nutrition plan. This is a gut-check. "Off track Thursday–Friday" or "Sleep was poor all week" is enough. This field affects RPE interpretation and load decisions.

**Field 4 — RPE and feel**
> "What was your average RPE this week? How did the sessions feel overall?"

RPE 1–10. Then one sentence: "Felt strong," "Harder than expected," "Joints were stiff the first two days." This is not a review — it is data.

**Field 5 — Flag or question**
> "Anything to flag — physically, schedule-wise, or anything you want to ask?"

Open field. Pain, schedule changes, life disruptions, questions about the program. If nothing, they write "None."

---

## Check-in prompt template (send to client in Trainerize)

> Weekly check-in — answer all 5:
>
> 1. Sessions completed vs programmed (e.g., 3/3):
> 2. Missed sessions or substitutions — what happened (or "Full compliance"):
> 3. Nutrition and sleep — anything to flag:
> 4. Average RPE and how sessions felt overall:
> 5. Anything to flag or ask:

Send this prompt at the start of the week (Monday) or the day after their last session of the week. They return it by the agreed check-in day.

---

## Reading the check-in (coach decision protocol)

After receiving the check-in, apply one of four decision tags:

| Tag | Meaning | When to use |
|---|---|---|
| **CONTINUE** | Program stays as-is | Compliance 3/3 or 4/4, RPE in range (6–8), no flags |
| **ADJUST** | Minor load or volume change | Compliance ok but RPE too high/low, one flag worth noting |
| **SWAP** | Movement or block substituted | Physical flag, equipment issue, travel week, recurring soreness on a specific pattern |
| **ESCALATE** | Needs a direct conversation before next session | Pain signal, emotional distress, compliance collapse (two weeks in a row), schedule overhaul |

One tag only. Write the tag at the top of your check-in log entry. Then write a one-sentence note on what changes (if any) you are making and why.

---

## Check-in log format (coach's record)

Save to: `/MEMORY/clients/[name]/check-ins/YYYY-MM-DD-week-X-checkin.md`

```
Week: [X]
Date received: [YYYY-MM-DD]
Decision tag: [CONTINUE / ADJUST / SWAP / ESCALATE]

Compliance: [X/X sessions completed]
RPE reported: [X]
Flags: [brief note or "None"]
Nutrition/sleep: [brief note or "None"]

Coach note: [one sentence — what changes and why, or "No changes."]
```

Keep it brief. This is a record, not a report.

---

## Missed check-in protocol

If a client does not submit by the agreed check-in day:

1. Send one prompt in Trainerize: "Check-in due — submit when you can."
2. Wait 24 hours.
3. If still no response — proceed with last week's program. Log "Check-in missed — proceeding on last record."
4. If missed two weeks in a row — escalate. Flag as ESCALATE and initiate a direct message or call.

Do not chase. One prompt. Then move forward.

---

## 90-Day Coaching System check-ins (ADHERE Tool 3)

Use this script for all 90-Day Coaching System clients from Week 2 onward. Do not use the 5-field form for these clients — the four-step structure is the check-in. Run every week. 10–15 minutes total. Same four steps every time. Consistency of structure builds trust over 90 days.

Full framework context in adhere-compliance.md Tool 3.

**Step 1 — Wins (3 minutes)**

Ask: "What went well this week? What did you do that you're proud of?"

Reinforce the behavior, not the outcome. "You showed up Tuesday when you didn't feel like it" — not "you're crushing it." Do not rush to challenges. Give this step its full three minutes.

**Step 2 — Challenges (4 minutes)**

Ask: "What felt hard? Where did you fall short of what you wanted?"

Listen without judgment. Do not problem-solve in this step. Reflect back what you heard before moving on.

**Step 3 — Adjustments (5 minutes)**

Ask: "What's one thing we could change to make next week easier?"

Co-create the solution. The client speaks first. Pick one adjustment, not three. If they cannot identify one, you propose one and ask if it fits.

**Step 4 — Next steps (2 minutes)**

State: "So next week, your focus is ___. Yes?"

Confirm verbally. Send the same line in writing within 1 hour. Schedule the next check-in before ending the call.

**After the check-in:**

Log to `/MEMORY/clients/[name]/check-ins/YYYY-MM-DD-week-X-checkin.md` using the standard log format. Apply one of the four decision tags (CONTINUE / ADJUST / SWAP / ESCALATE). The decision tag and coach note are the same regardless of whether it's a 5-field or ADHERE check-in — the log format does not change.

**End of Week 2 decision point (from adhere-compliance.md Tool 2):**

After the first full two weeks, run this check-in and assess:
- Hit 5–6 of 6 sessions → escalate. Move into Build prep. Add second nutrition habit.
- Hit 3–4 of 6 sessions → hold steady. Repeat Week 2 protocol for one more week.
- Hit 0–2 of 6 sessions → return to onboarding. Re-run the intake. Identify what broke.

---

## Program Only — bi-weekly assessment add-on

Program Only clients do not have live coached sessions, so they need a more structured feedback loop every two weeks.

**What the bi-weekly assessment covers:**

In addition to the standard 5-field weekly check-in, on alternating weeks, run a brief assessment:

1. **Trainerize data review** — Pull their session logs from the past two weeks. Check: sessions logged vs. programmed, weights used vs. target ranges, any movements logged with RPE 9–10 consistently. Note patterns.

2. **Progress markers** — Compare to starting point or last assessment: performance on key movements, body weight or measurements (if tracked), subjective energy and motivation trend.

3. **Program adjustment decision** — Based on data: continue the current progression, adjust load or volume, or rebuild a block. Apply the same four-tag system (CONTINUE / ADJUST / SWAP / ESCALATE).

4. **Assessment delivery format** — Call or message. Coach's call based on what the client needs. Simple programs with no flags can be reviewed and confirmed via Trainerize message. Complex situations (missed weeks, sudden RPE spike, progress stall) get a call.

**Bi-weekly assessment log:**

Save to the same `/MEMORY/clients/[name]/check-ins/` folder.

Filename: `YYYY-MM-DD-week-X-assessment.md`

```
Assessment: Week [X]
Date: [YYYY-MM-DD]
Format: [Call / Message]
Decision tag: [CONTINUE / ADJUST / SWAP / ESCALATE]

Trainerize data summary: [2–3 sentences on what the logs show]
Progress markers: [vs. last assessment or baseline]
Coach note: [what changes and why]
Next check-in: [date]
```

---

## Last updated
2026-05-28 — ADHERE Tool 3 check-in script added for 90-Day Coaching System clients. Format table updated to include 90-Day row. ADHERE check-in section added with four-step script, log instructions, and Week 2 decision point.
2026-05-19 — built from Coach Jap system design session.
