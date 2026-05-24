# Trainerize → Claude Handoff

Standard operating procedure for moving client data from Trainerize into Project Jnoah.

Source: Coach Jap system design session — 2026-05-19

---

## Why this file exists

Trainerize has no external API. Data does not move automatically. Every handoff is a manual copy-paste — but with the right trigger phrase and a clear mapping, Claude handles everything from there. Your job is one copy, one paste, one phrase. Claude does the rest.

---

## The three handoff types

| Type | When | Trigger phrase |
|---|---|---|
| Intake form | New client submits Trainerize intake after registering | `"New intake for [name]"` |
| Weekly check-in | Client submits their weekly check-in response | `"Log check-in for [name]"` |
| Session log | Reviewing Program Only client Trainerize logs | `"Log session data for [name]"` |

---

## Handoff 1 — Intake form

### When it happens
After payment is confirmed (Stage 4), you send the Trainerize registration link. Once the client registers, they complete the intake form inside the app. You receive a notification or see it in the client's profile.

### What to do
1. Open the client's intake form response in Trainerize
2. Copy the full response — fields and answers together
3. Open Claude (Cowork or Code)
4. Paste with the trigger:

> `"New intake for [name]" — [paste full Trainerize response here]`

### What Claude does
Maps every Trainerize field to the correct client profile section:

| Trainerize field | → | Client profile section | Field |
|---|---|---|---|
| Fitness goals (selected) | → | GOAL PROFILE | Primary Goal / Secondary Goal |
| Other fitness goals | → | GOAL PROFILE | Primary Goal (if more specific) |
| Exercise regularity | → | BASELINE ASSESSMENT | Movement Quality Notes |
| Cardio ability rating | → | BASELINE ASSESSMENT | Conditioning Baseline → Notes |
| Exercise experience | → | BASELINE ASSESSMENT | Movement Quality Notes |
| Equipment access | → | SERVICE PROFILE | Equipment Access |
| Available workout days | → | SERVICE PROFILE | Session Days |
| Exercise frequency | → | SERVICE PROFILE | Session Frequency |
| Injuries / conditions | → | HEALTH PROFILE | Previous Injuries + Movement Limitations |
| Tobacco use | → | HEALTH PROFILE | Medical Conditions (lifestyle note) |
| Other comments | → | COACH NOTES | Dated entry |

Claude also:
- Sets Pipeline Status to ACTIVE (if not already)
- Logs the intake date to the Active Record
- Flags any health items that need follow-up before program design
- Notes the fields still missing (personal profile data not in Trainerize form)

### What stays blank after intake
These fields are NOT in the Trainerize form. They get filled at the onboarding call:

- Full name / contact / age / DOB / location
- Starting body metrics (weight, measurements)
- Specific strength baselines (1RM or movement test results)
- Goal specificity (from "weight loss" → "lose 8kg before [event]")
- Motivation / root cause (from discovery call notes)
- Nutrition profile

After the onboarding call, say:
> `"Update onboarding data for [name]"` — then give the details

---

## Handoff 2 — Weekly check-in

### When it happens
Every week on the agreed check-in day. You send the 5-field prompt via Trainerize. Client responds inside the app. You see the response in Trainerize.

### The 5-field check-in prompt (send this in Trainerize)
> Weekly check-in — answer all 5:
>
> 1. Sessions completed vs programmed (e.g., 3/3):
> 2. Missed sessions or substitutions — what happened (or "Full compliance"):
> 3. Nutrition and sleep — anything to flag:
> 4. Average RPE and how sessions felt overall:
> 5. Anything to flag or ask:

### What to do when they respond
1. Open the check-in response in Trainerize
2. Copy their reply
3. Paste to Claude:

> `"Log check-in for [name]"` — [paste check-in response]

### What Claude does
- Reads the 5 fields
- Applies the decision tag: CONTINUE / ADJUST / SWAP / ESCALATE
- Saves the log to `/MEMORY/clients/[name]/check-ins/YYYY-MM-DD-week-X-checkin.md`
- Updates Active Record: last check-in date, last decision tag
- If ADJUST or SWAP: states what changes for the next session
- If ESCALATE: flags it clearly and states why

### If the client didn't use the exact 5-field format
Claude reads intent, not format. A conversational reply still gets parsed. Paste it as-is.

### Missed check-in
If no response by the check-in day, say:
> `"[Name] missed check-in — week [X]"`

Claude logs it and proceeds on last week's decision tag.

---

## Handoff 3 — Session log (Program Only clients)

### When it happens
Program Only clients log their own sessions in Trainerize. You review these logs bi-weekly as part of the assessment protocol (see check-in.md).

### What to copy from Trainerize
In the client's Trainerize profile, open their session history. For the bi-weekly review, copy the last two weeks of session logs — movements, sets, reps, weights used, any RPE or notes they added.

### What to do
Paste to Claude:

> `"Log session data for [name] — weeks [X] and [X]"` — [paste session log data]

### What Claude does
- Reads sessions logged vs. programmed (compliance)
- Notes weights used vs. target ranges
- Flags any movement with consistent RPE 9–10
- Compares to previous assessment baseline
- Applies decision tag: CONTINUE / ADJUST / SWAP / ESCALATE
- Saves assessment to `/MEMORY/clients/[name]/check-ins/YYYY-MM-DD-week-X-assessment.md`
- Updates Active Record

### If a PR was hit
If Trainerize shows a new personal record on any movement, include it in the paste or call it out:

> `"Log PR for [name] — Back Squat 102.5kg — 2026-05-19"`

Claude adds a row to the PR Tracker in the client profile.

---

## Quick reference — all trigger phrases

| What happened | What you say |
|---|---|
| New client submits intake form | `"New intake for [name]"` + paste |
| Weekly check-in received | `"Log check-in for [name]"` + paste |
| Check-in missed | `"[Name] missed check-in — week [X]"` |
| Session log review (Program Only) | `"Log session data for [name] — weeks X and X"` + paste |
| PR confirmed | `"Log PR for [name] — [movement] [weight/result] — [date]"` |
| Onboarding call done | `"Update onboarding data for [name]"` + give details |
| Body metrics taken | `"Update metrics for [name]"` + give numbers |
| Cycle ending | `"Close cycle for [name] — [outcome]"` |
| Client going quiet | `"What's the status on [name]?"` |

---

## What Claude never does automatically

These require a trigger from you:

- Creates or updates a client file without being told
- Assumes a check-in was missed — you confirm it
- Makes a program change without showing you the decision tag first (ESCALATE always stops for a conversation)
- Logs a PR from guesswork — confirmed data only

---

## Trainerize form field gaps — handle at onboarding call

After every intake, these fields will still be empty in the client profile. Cover them during the onboarding call and log them immediately after with `"Update onboarding data for [name]"`:

- Full name, contact, age, location
- Starting weight and any measurements the client consents to tracking
- Strength baseline (if assessable on Day 1)
- Goal specificity — convert their Trainerize goal category into a real target
- Nutrition starting point — on a plan or not, any dietary restrictions

---

## Last updated
2026-05-19 — built from Coach Jap system design session.
