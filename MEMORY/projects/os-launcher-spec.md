# Jnoah OS — One-Click Launcher (STAGED — do not build yet)

**Status:** STAGED / GATED
**Gate:** Build only AFTER restartfitnessph.com is live (GOALS/website-launch.md = COMPLETE).
**Trigger phrase:** "create the OS launcher"
**Target folder:** C:\Jnoah\jnoah-os-app
**Created:** 2026-05-25

Purpose: remove the two friction points that took the dashboard down on 2026-05-25 —
(1) having to remember the `NODE_OPTIONS` heap flag, and (2) having to type terminal
commands at all. After this is built, starting the OS = double-click one file.

---

## Why this is needed (context)

On 2026-05-25 the dev server had crashed with repeated **JavaScript heap out-of-memory**
errors (Next.js 16 + Turbopack + Node 24). Recovery required: clear `.next`, set
`NODE_OPTIONS=--max-old-space-size=4096`, restart. The launcher bakes that heap setting
in permanently and gives a double-click entry point so this is never a manual dance again.

---

## Build steps (one-shot, in order)

### 1. Bake the heap flag into `npm run dev` (so it's automatic)

Install cross-env (lets an env var live inside a package.json script on Windows):

```
cd C:\Jnoah\jnoah-os-app
npm install -D cross-env
```

Then edit `package.json` → `scripts.dev`:

```json
"dev": "cross-env NODE_OPTIONS=--max-old-space-size=4096 next dev",
```

(Leave `build`, `start`, `lint` unchanged.)

### 2. Create the double-click launcher — `C:\Jnoah\jnoah-os-app\start-os.bat`

```bat
@echo off
title Jnoah OS
cd /d C:\Jnoah\jnoah-os-app
echo Starting Jnoah OS...  (leave this window open; close it to stop the dashboard)
start "" http://localhost:3000
call npm run dev
```

Double-clicking `start-os.bat` starts the server AND opens the browser to the dashboard.

### 3. (Optional) PowerShell equivalent — `C:\Jnoah\jnoah-os-app\start-os.ps1`

```powershell
Set-Location C:\Jnoah\jnoah-os-app
Start-Process "http://localhost:3000"
npm run dev
```

### 4. Verify

- Double-click `start-os.bat` → browser opens to http://localhost:3000 → all 4 modules load (Today / Goals / Clients / Website) with 200s.
- Confirm `devserver.err.log` stays at 0 bytes (no OOM).

---

## Fallback if OOM still returns after this

Turbopack is the suspected culprit. Add a stable-compiler script and switch to it:

```json
"dev:stable": "cross-env NODE_OPTIONS=--max-old-space-size=4096 next dev --webpack",
```

(Verify the exact opt-out flag for the installed Next version at build time — Next 16
defaults to Turbopack; confirm `--webpack` is still the documented opt-out before relying on it.)
Then point `start-os.bat` at `npm run dev:stable`.

---

## Post-build checklist (do these when the launcher is created)

- [ ] package.json `dev` script updated + cross-env installed
- [ ] start-os.bat created and tested (double-click works)
- [ ] devserver.err.log confirmed clean after a full boot
- [ ] Mark GOALS/jnoah-os-complete.md Milestone 5 + Task 10 = DONE
- [ ] Append decisions-log.md: launcher built
