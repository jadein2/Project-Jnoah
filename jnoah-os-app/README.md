# Jnoah OS — Gym System Dashboard

Next.js dashboard for **Project Jnoah** (Restart Fitness PH / Urban Strong Fitness).

## Run locally

```bash
cd jnoah-os-app
npm install
cp .env.example .env.local   # or set JNOAH_VAULT_PATH
npm run dev
```

Open http://localhost:3000

## Vault path

When this folder lives **inside** the Project-Jnoah repo, the default vault is the parent directory. When it is a **sibling** folder (e.g. `URBAN STRONG/jnoah-os-app`), the default is `../Project-Jnoah`. Override anytime with `JNOAH_VAULT_PATH` in `.env.local`.

## Phase 0 modules

- Command Center (`/`)
- Training Roster (`/clients`)
- Business Targets (`/goals`)
- Live vault sync via SSE
