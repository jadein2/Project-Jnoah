# Sales Engine

Workflow and scripts for all DM conversations, offer presentations, and objection handling.

**Brand:** Restart Fitness PH (primary) · Urban Strong Fitness (in-person inquiries)
**Phase:** 9
**Built:** 2026-05-21
**Feeds:** offer-engine.md (offer details + selection logic) · discovery-call.md (when call is booked)
**Fed by:** social-post.md (CTAs that trigger DMs) · campaign.md (campaign-driven lead flow)

---

## Core rule — read before anything else

This engine handles conversations, not broadcasts. Every message is a real person. Every response is a coaching interaction, not a sales pitch.

The job of the DM conversation is not to close. It is to qualify, connect, and route the right person to the right offer or to a discovery call. Closing happens on the call — not in the DM.

**Rule: Always load offer-engine.md before this file.** Offer details, pricing, and selection logic live there — do not guess or improvise.

**Rule: Present one offer at a time.** Never present the full service ladder in a DM conversation. Read the person, ask questions, then recommend one specific path.

**Rule: The goal of every DM thread is one of three outcomes:**
1. Book a discovery call
2. Start enrollment (for low-friction entry offers like 6Fix)
3. Graceful hold — keep the relationship warm until they're ready

---

## DM flow overview

Four stages. Not every DM goes through all four — read the temperature and skip or compress.

```
TRIGGER → QUALIFY → POSITION → ROUTE
```

- **Trigger** — someone responds to a CTA (DM "RESTART", comment GUIDE, story reply, cold inquiry)
- **Qualify** — understand where they are, what they need, what their situation is
- **Position** — frame the right offer in terms of their outcome
- **Route** — book a call, or move directly to enrollment for low-friction offers

---

## Stage 1 — Trigger response (first reply to DM "RESTART" or similar)

**Goal:** Open the conversation. Confirm they're real, confirm interest, get the first qualifying detail.

**Template — Response to "RESTART" DM:**
```
Hey [name] — glad you reached out.

Quick question before I share anything — what's going on right now with your training? Just want to make sure I point you in the right direction.
```

**What you're looking for:**
- Are they a beginner or returning to fitness?
- Have they tried programs before?
- Is there a specific goal or just general interest?
- Do they seem ready or just browsing?

**Rules:**
- Do not paste the service ladder into the first reply
- Do not ask multiple questions at once
- One question only — make it easy to answer
- Casual, direct, warm — coach talking to a person, not a brand talking to a prospect

---

## Stage 2 — Qualify

**Goal:** Understand the person's situation in 2–4 exchanges. Get enough to recommend the right offer.

**Qualifying questions (ask one at a time — choose based on what they shared):**

| What you need to know | Question to ask |
|---|---|
| Current training status | "Are you training at all right now, or has it been a while?" |
| Past experience | "Have you done a structured program before, or is this more of a fresh start?" |
| Main goal | "What's the main thing you want to fix or change? Training, nutrition, or both?" |
| Timeline/urgency | "Is there a specific goal or date you're working toward, or more of a long-term thing?" |
| Program vs. full coaching preference | "Are you looking for something you can run yourself with guidance, or do you want closer coaching support?" |
| Budget signals | Don't ask directly — read from their situation. Full-time professional with a time problem → Restart-P or Restart-90. "I've tried everything" → Restart-90. Athlete language → Restart-Perform. |

**Qualify for 2–4 exchanges maximum.** If you have enough after 2, move to Stage 3. Do not keep asking questions once you can make a recommendation.

---

## Stage 3 — Position the right offer

**Goal:** Make one specific recommendation, framed around their outcome. Do not present options — make a call.

**Positioning rules:**
- Lead with their outcome, not the program name
- Name the offer once — don't repeat it
- Explain what they get in terms of what they need, not feature lists
- Keep it to 3–5 sentences max
- End with a soft close (question that moves to Stage 4)

**Positioning templates by offer:**

### 6Fix
```
Sounds like a good fit for our 6-week foundation program — that's exactly what it's built for. Six weeks of structured training, nutrition guidance, and weekly check-ins to build the foundation before you add intensity. A lot of people start here because it removes the guesswork from day one.

Want me to run you through how it works?
```

### Restart-P
```
Based on what you're describing, the program that fits best is our monthly coaching program — you get a personalized training program, weekly check-ins, video feedback on your sessions, and nutrition guidance. You're training independently, but with coaching support the whole time.

Want to hop on a quick call so I can ask a few more questions and confirm it's the right fit?
```

### Restart-90
```
What you're describing — training, nutrition, accountability, and actually sticking with it this time — that's what the 90-day system is built for. It's the most supported option we offer. Full program, weekly check-ins, nutrition coaching, group calls, habit work, and a 90-day review at the end.

Want to book a quick discovery call? I want to make sure it's the right fit before we start.
```

### Restart-Base
```
If strength and long-term health is the focus — not a 12-week transformation challenge — the strength program fits that well. Monthly, 12 weeks recommended minimum, built around building real capacity over time.

Want me to walk you through it on a short call?
```

### Restart-Perform
```
For performance and event prep, we have a specific program for that — monthly or event-based, with required video feedback every session and structured performance periodization.

Worth a call to map out the timeline and make sure the structure fits your schedule?
```

---

## Stage 4 — Route

**Goal:** Move the conversation to the next step. Two paths.

### Path A — Book a discovery call
Use for: Restart-P, Restart-90, Restart-Base, Restart-Perform, or any situation where you need more information before recommending.

```
Let's get you on a quick discovery call — 20–30 minutes. I'll ask a few more questions, walk you through what the program looks like, and we'll see if it's the right fit.

Here's the link: [insert booking link]
```

**If they hesitate on the call:**
```
No pressure — it's just a conversation. If it's not the right fit after talking, I'll tell you. I'd rather spend 20 minutes making sure than have you start something that doesn't work for you.
```

### Path B — Direct enrollment (6Fix only)
Use when: the person is clearly a beginner or returning client, the conversation has been warm, and they're ready to move.

```
If you want to get started, here's what the next step looks like:

6-week program — ₱4,500 / $80 USD.
I'll send you the onboarding form as soon as payment is confirmed.

Payment goes through [insert payment method]. Let me know when you're ready and I'll send the link.
```

### Path C — Warm hold
Use when: the person is interested but not ready. Don't push. Keep the relationship.

```
No rush — when you're ready, come back and we'll figure out the right starting point. In the meantime, I'll keep posting.
```

---

## Objection handling

### "How much does it cost?"

Read the timing. If they're early in the conversation, qualify first before giving price — unsupported price numbers almost always kill conversations.

**If they ask early:**
```
Depends on which program fits your situation — there are a few options. Tell me a bit about where you're at and I can point you to the right one, including what it costs.
```

**If they've already been qualified:**
Give the specific price for the recommended offer. Do not add qualifiers like "it's not that expensive" or comparisons to Starbucks. State the price plainly.

---

### "I'll try it on my own first"

```
That's fair — most people do. What usually ends up happening is the plan works for a while, then life gets in the way and consistency drops. If that happens and you want structure and someone to answer to, come back. The program will still be here.
```

---

### "I've tried coaching before and it didn't work"

```
What happened? I'm not asking to sell you — I want to know what broke down so I don't set you up for the same thing. Was it the program itself, the accountability, or something else?
```

Let them answer. Then address the specific breakdown — do not give a generic "we're different" response.

---

### "I don't have time right now"

```
What does your schedule look like? Most people in the program train 3 days a week. If that's workable, the time piece usually isn't the problem — it's the planning piece. That's exactly what the program handles.
```

---

### "I need to think about it"

```
Makes sense. What specifically are you thinking through — is it the commitment, the price, or something about the program structure? Happy to answer anything that would help you decide.
```

Get specifics. "I need to think about it" almost always has a specific concern underneath it.

---

### "Can I get a discount?"

```
I don't discount the programs — the price reflects the coaching, not a markup I'm trying to move. What I can do is make sure you're in the right program for your situation so it's money well spent. Want to get on a call first?
```

---

### "I'm not sure if I'm ready"

```
What would "ready" look like for you? Because in most cases, the program exists exactly for the moment before you feel ready. That's the point — structure kicks in when motivation isn't enough.
```

---

### "Do you have a trial or free week?"

```
No free trial — but the discovery call is free. That's 20–30 minutes where I ask you questions, walk you through the program, and we both figure out if it's the right fit. If it's not, I'll tell you. Want to book that?
```

---

## Urban Strong Fitness — inquiry-specific notes

For in-person inquiries (gym tours, Free Assessment, walk-ins converted to DM):

**Primary CTA:** Book a Free Assessment (not a discovery call)
**Booking link:** urbanstrongfit.com/book-free-assessment

**Adjust the DM flow:**
- Qualifying questions stay the same
- Stage 3 positioning → 6-Week Reset, group classes, semi-private
- Stage 4 route → Book Free Assessment (replaces discovery call booking)

For in-person close, assessment replaces the discovery call. Everything else in this engine applies.

---

## DM tone rules

- Short paragraphs — one idea per paragraph
- No bullet points inside DM messages
- No corporate language ("leverage," "optimize," "journey")
- Never "tailored" — banned
- Write like a coach sending a text — not a brand sending an email
- Contractions are fine ("you're," "I'll," "it's")
- End questions with a question mark — not an exclamation
- Do not mirror overly casual spelling errors to seem relatable
- Match energy — if they're brief, be brief. If they're detailed, give detail.

---

## Anti-AI writing protocol

Apply all rules from `/GLOBAL/anti-ai-output-rules.md` before finalizing any DM copy.

In the DM context specifically:
- Do not open with "Great question!" or "I totally understand"
- Do not use em dashes for drama — use them sparingly if at all
- No three-option "packages" presented at once
- No "I'd love to help you on your journey"
- No motivational sign-offs ("You've got this!")
- Write like a real person who coaches real people — not a chatbot trying to sound warm

---

## Handoff to discovery-call.md

Once a discovery call is booked, this engine's job is done. Load `/ENGINES/client/discovery-call.md` for the call structure and offer-engine.md for offer selection logic during the call.

Do not use this engine to run the call itself.

---

## What this engine does NOT do

- Does not write captions or social posts — that's social-post.md
- Does not run the discovery call — that's discovery-call.md
- Does not set pricing or define offers — that's offer-engine.md
- Does not onboard a client who has signed — that's client-onboarding.md

---

## Last updated
2026-05-21 — Phase 9. Built as P2-5 fix. DM flows, objection handling, offer presentation, Urban Strong inquiry notes, tone rules, and discovery-call handoff included. Depends on offer-engine.md for all pricing and selection logic.
