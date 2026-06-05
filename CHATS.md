# CHATS — How to run Project Jnoah across chats

The vault is the memory. **Chats are disposable workers.** Never rely on a chat thread to remember state — state lives in STATE.md, /MEMORY/, and /GOALS/. This file is the protocol that keeps chats from becoming islands.

---

## The model

One **Command** chat + a few **Project** chats + disposable **Worker** chats.

- **Command** — your daily driver. Pinned. Most one-off work happens here. Starts with `morning brief`.
- **Project** — only for work that runs for weeks and accumulates context (a campaign, an active multi-week client, an OS build phase).
- **Worker** — one big batch job (e.g., "generate 10 posts"), then delete.

Never open one chat per engine. Engines are loaded on demand by the router *inside any chat* — they are not separate workspaces.

---

## Naming convention

Title every chat so it's unmistakable:

- `JNOAH · Command`
- `JNOAH · Campaign · 6FIX Launch`
- `JNOAH · Client · Yury`
- `JNOAH · Build · OS Wave 2`
- `JNOAH · scratch · <thing>` (disposable — delete when done)

---

## Where does this go?

One test: **will I come back to this thread in 3+ days?**

- Yes → its own Project chat.
- No → the Command chat.
- One-time batch → a scratch Worker, then discard.

---

## Start + end rituals

This is what makes the model work. Two shorthands:

- **`load jnoah`** (start of any chat) → read the platform control file (CLAUDE.md / AGENTS.md) + ROUTER.md + **STATE.md**, so the chat instantly knows what's in flight and what's next. In the Command chat, use `morning brief` instead — it does this plus the daily work order.
- **`log + update state`** (end of any chat) → append one line to /MEMORY/decisions-log.md and update the relevant row(s) in STATE.md. Do this before closing, every time.

If you forget the end ritual, the next chat won't know what happened. The rituals are the glue.

---

## How it connects to the rest of the system

- **STATE.md** — the shared brain all chats read on start and write on end.
- **Cockpit artifact** — the visual layer over STATE.md + the vault; refresh re-reads STATE.md.
- **decisions-log.md** — the permanent history (STATE.md is the *now*, decisions-log is the *record*).

---

## Last updated
2026-05-30 — Created. Chat model implemented (Command + Project + Worker), naming convention, where-does-this-go rule, load-jnoah / log-update-state rituals.
