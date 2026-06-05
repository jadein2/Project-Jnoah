# Client Onboarding Engine

Full pipeline from first DM to first session. Every stage, every tool, every handoff.

Source: Coach Jap system design session — 2026-05-19
Updated: 2026-05-28 — ADHERE Compliance System wired in for 90-Day Coaching System clients.

Load this for any onboarding task. Read alongside discovery-call.md and client-agreement.md.

**For 90-Day Coaching System clients:** also load adhere-compliance.md. The ADHERE framework replaces the generic intake flow at Stage 5 and governs all of Week 1–2. It is not optional.

---

## The pipeline at a glance

```
DM / CTA → Pre-Qualify → Book Discovery Call
→ Discovery Call → Qualification Decision
→ INVOICE → Payment Confirmed
→ Send Agreement → Send Trainerize Link
→ Onboarding Call → Program Design → First Session Booked
→ Check-In System Starts
```

Never skip stages. Never move to the next stage without confirming the previous one is done.

---

## Stage 1 — Lead comes in (DM or CTA)

**Trigger:** Someone DMs "RESTART," responds to a CTA, or messages any channel.

**Action:**
Respond within the same day. Do not let a lead sit overnight.

Opening message template:
> "Hey [name], thanks for reaching out. Before we go further, mind if I ask — what's the main goal you're working toward right now?"

One question only. You are pre-qualifying before committing to a discovery call slot.

**Listen for:** Is the goal something the program can actually deliver? Is there enough urgency? If yes to both — move to Stage 2.

**If not a fit:** Be honest early. It saves both parties time.

**Tool:** Wherever they messaged first (IG, FB, Threads). Discovery call onwards moves to the agreed channel.

---

## Stage 2 — Book the discovery call

**Once pre-qualified:**

> "I'd like to set up a quick discovery call — no pressure, just want to understand where you're at and see if we're a good fit. Are you available [day] or [day] this week?"

Offer two options only. Not an open calendar invite — two specific slots.

Confirm: name, time zone (if international), video call platform (Google Meet or whatever is accessible to them).

Send a calendar confirmation or a simple WhatsApp/DM reminder the day before.

**Tool:** DM for booking, Google Meet or equivalent for the call.

---

## Stage 3 — Discovery call

Run the full discovery call framework from `discovery-call.md`.

Five sections: Trigger → Goal → Background → Root Cause → Commitment → Program Presentation → Qualification → Close.

**If qualified (go):** End the call with a clear next step.
> "Based on everything you shared, I think this is a strong fit. I'll send you the invoice today — once that's settled we book the onboarding call and get started."

**If not qualified (no-go):** Be direct and respectful.
> "I want to be honest with you — I don't think now is the right time for this program. Here's what I'd suggest instead..."

Do not send an invoice to an unqualified lead. Do not move forward out of courtesy.

---

## Stage 4 — Invoice and payment

**Immediately after the call (same day):**

Send invoice with:
- Program name and duration
- Total amount
- Payment options
- Payment deadline (48 hours — create urgency without pressure)

**Current payment channels:**

| Client type | Platform |
|---|---|
| International | PayPal |
| Local (Philippines) | MAYA or Security Bank |

Payment confirmation: once received, screenshot or confirm in writing with the client.

> "Payment confirmed — you're in. I'll send the onboarding details now."

**Future state:** Wix invoice system replaces manual process. Same flow, automated delivery.

**Tool:** Manual now. Wix future. Always confirm receipt before moving to Stage 5.

---

## Stage 5 — Pre-onboarding setup

Once payment is confirmed, send three things in one message:

1. **Client Agreement** — one-page document (from `client-agreement.md`). Ask them to read and confirm they understand before the onboarding call.

2. **Intake form** — see intake type below. Set a 48-hour completion deadline.

3. **Onboarding call booking** — offer two slots, same process as discovery call booking.

**Intake form by offer type:**

| Offer | Intake Form |
|---|---|
| 90-Day Coaching System | ADHERE Tool 1 (Google Form / Typeform) — full ADHERE intake. This is the required form. See adhere-compliance.md. |
| Restart-P / Restart-Base / Restart-Perform | Trainerize built-in intake form |
| 6FIX | Trainerize built-in intake form (simplified) |
| Restart 1-on-1 | ADHERE Tool 1 recommended — or Trainerize intake at minimum |

**90-Day Coaching System clients — additional pre-onboarding step (ADHERE Day -7 to 0):**

After sending the ADHERE intake form, send a Welcome Kit once it is completed:
- Training schedule for Days 1–14
- One nutrition habit (from their intake answers)
- One sleep habit (from their intake answers)
- Link to their tracker (whichever format they chose in the form)
- Confirm Day 1 in writing

This is the ADHERE Day -7 to 0 protocol. Do not skip it. Full detail in adhere-compliance.md Tool 2.

Message template (all offers):
> "Welcome. Before our onboarding call, please do three things:
> 1. Read the attached program overview and reply to confirm you've read it.
> 2. Complete the intake form here: [link]. Please do this within 48 hours.
> 3. Book your onboarding call: [two time options].
> Once those are done, we're ready to start."

**Do not proceed to the onboarding call until:**
- Agreement acknowledged
- Intake form completed
- Onboarding call time confirmed
- (90-Day clients) Welcome Kit sent and Day 1 confirmed

**Tool:** Google Form / Typeform for 90-Day clients. Trainerize for all others. DM for coordination.

---

## Stage 6 — Onboarding call

This is the session where everything gets locked in. Not a sales call — this is operational.

**Cover in order:**

1. **Welcome and tone-set** — this is a coaching relationship, not a transaction. Set the standard early.

2. **Confirm schedule** — how many sessions per week, which days, what time. Lock this in. Vague schedules produce inconsistent clients.

3. **Walk through Trainerize** — show them:
   - How to see their program
   - How to log a session
   - How to book a session with you
   - How to message you (this is now the one communication channel)
   - Where to find their check-in prompt

4. **Communication rules** — state clearly: Trainerize is the one channel. All coaching questions, scheduling, and check-ins go through Trainerize. Not IG, not FB, not WhatsApp.

5. **Expectations** — what they can expect from you, what you expect from them. Reference the agreement.

6. **First session** — book it before the call ends. Do not end the onboarding call without a first session on the calendar.

**Tool:** Video call (Google Meet or equivalent). Trainerize live walkthrough during the call.

---

## Stage 7 — Program design

**After the onboarding call:**

Build their program in Trainerize using the training-program.md engine.

Inputs: intake form data + onboarding call notes + any reference files in `/MEMORY/clients/[name]/references/`

**Equipment Access — mandatory step before building any session:**

Check the client profile's Equipment Access Flag.

- If **Full Access** — proceed. Full gym programming defaults apply.
- If **Limited Access and Equipment List is populated** — proceed. Filter all programming to the listed equipment. Do not reference tools not on the list.
- If **Limited Access and Equipment List is NOT populated** — stop. Run the Limited Equipment Questionnaire from `client-profile.md` before continuing. Do not build a session until the equipment list is confirmed and written into the profile.

When equipment is limited, apply these constraints to every session:
- Metcon rotation pool = client's listed equipment only (not wod-brain defaults)
- Frequency caps in wod-brain Section 5 scale proportionally to the available pool size — do not apply full-gym caps blindly to a 3-tool pool
- Fault 7 (Underusing the Gym) does not apply — client is already constrained by what they have
- All accessory rotation pools in wod-brain Section 11 filter to available equipment only

**Before building any session:** Create `/MEMORY/clients/[name]/program-state.md` from the template at `/ENGINES/coach-jap/program-state-template.md`. Populate cycle name, session type sequence, and any confirmed baselines from the onboarding call. If no baselines yet — mark all loads as ESTIMATED. This file must exist before the first session is built.

Before the first session is live in Trainerize, confirm:
- Program is loaded in Trainerize
- Week 1 is visible to the client
- First session is booked
- `program-state.md` is created and current

---

## Stage 8 — First session and check-in system starts

First session is the handoff from onboarding to ongoing coaching.

**After the first session:**
- Collect RPE and session notes
- Log to `/MEMORY/clients/[name]/check-ins/`
- Start the weekly check-in cycle (see `check-in.md`)

**For 90-Day Coaching System clients:**
The Week 1–2 ADHERE protocol (Tool 2) is now running. During Days 1–7, the only goal is 3 sessions. No nutrition tracking, no metrics, no weigh-ins. Daily 30-second check-in from client only. Coach responds with one line — presence, not advice. Full protocol in adhere-compliance.md Tool 2.

From this point forward, the client is in the active coaching loop.

---

## Stage 9 — Cycle close

When a cycle ends (program duration complete):

1. Review progress against the cycle goal
2. Decision: renew, upgrade, pause, or close
3. If renewing — repeat from Stage 4 (new invoice, new program design)
4. If closing — send a close-out note, archive the client folder, update registry

**Archiving:** Move client record to `/MEMORY/clients/[name]/archived/` and update registry status.

---

## Pipeline status tags

Use these when updating the client registry:

| Tag | Meaning |
|---|---|
| LEAD | DM received, pre-qualification in progress |
| DISCOVERY | Discovery call booked or completed |
| INVOICED | Invoice sent, payment pending |
| ACTIVE | Payment confirmed, onboarding done, in program |
| RENEWAL | Cycle ending, renewal conversation in progress |
| PAUSED | Temporarily inactive — confirm return date |
| CLOSED | Cycle complete, archived |

---

## Handoff checklist (before first session)

- [ ] Discovery call completed
- [ ] Qualified — go decision made
- [ ] Invoice sent and payment confirmed
- [ ] Agreement sent and acknowledged
- [ ] Trainerize registration completed
- [ ] Intake form completed
- [ ] Onboarding call completed
- [ ] Schedule confirmed
- [ ] Trainerize walkthrough done
- [ ] Communication channel confirmed (Trainerize)
- [ ] Program built and loaded in Trainerize
- [ ] First session booked

All twelve must be checked before the first session runs.

---

## Last updated
2026-05-28 — ADHERE Compliance System wired in. Stage 5 intake split by offer type. 90-Day Coaching System now uses ADHERE Tool 1 (full intake form) and ADHERE Tool 2 Day -7 to 0 protocol. Stage 8 updated with Week 1–2 ADHERE protocol note.
2026-05-19 — built from Coach Jap system design session.
