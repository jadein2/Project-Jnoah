# Project Jnoah System Diagnostic

Date: 2026-06-05
Workspace confirmed: C:\Jnoah
Canonical vault: C:\Jnoah\vault
Dashboard app: C:\Jnoah\jnoah-os-app

## Executive Status

Project Jnoah is present and structurally intact. The vault is the canonical OS brain. `STATE.md` is the current operating board, `AGENTS.md` is the Codex authority file, `CLAUDE.md` is the Claude/Cowork authority file, and `ROUTER.md` is the engine switchboard.

The vault git repo is clean on `main` at commit `88bbdce` (`Merge OneDrive Project Jnoah into canonical vault (May 26 - Jun 5)`). The dashboard app repo is not clean; it has modified and untracked app files.

## Core Control Files

Present:
- AGENTS.md
- CLAUDE.md
- STATE.md
- ROUTER.md
- README.md
- HOW-TO-USE.md
- PROGRESS.md
- CHATS.md
- SYNC.md

Status:
- `STATE.md` is current operating truth and was last updated 2026-06-04.
- `PROGRESS.md` is build history, not the active board.
- `README.md` correctly states `C:\Jnoah\vault` as canonical and the OneDrive copy as legacy/frozen.
- `AGENTS.md` is stale compared with `CLAUDE.md`: its engine list is still a one-line older list and misses newer engines such as `adhere-compliance.md`, `design-engine.md`, `web-copy.md`, `wod-brain.md`, and `program-state-template.md`.

## Vault Inventory

Top-level file counts:
- .agents: 42
- .claude: 44
- Artifacts: 2
- BRANDS: 4
- DECKS-PRESENTATIONS: 9
- ENGINES: 25
- GLOBAL: 1
- GOALS: 7
- MEMORY: 97
- OUTPUTS: 130
- Raw-Files: 230
- RESEARCH: 12
- Setup Guide: 2

## Engine Diagnostic

Engine files found: 25.

Routed/live:
- ENGINES/client/adhere-compliance.md
- ENGINES/client/check-in.md
- ENGINES/client/client-agreement.md
- ENGINES/client/client-onboarding.md
- ENGINES/client/client-profile.md
- ENGINES/client/discovery-call.md
- ENGINES/client/handoff-trainerize.md
- ENGINES/client/program-only-flow.md
- ENGINES/coach-jap/nutrition-plan.md
- ENGINES/coach-jap/training-program.md
- ENGINES/content/blog-post.md
- ENGINES/content/social-post.md
- ENGINES/design/carousel.md
- ENGINES/design/design-brief.md
- ENGINES/design/design-engine.md
- ENGINES/goals/goals-engine.md
- ENGINES/marketing/campaign.md
- ENGINES/research/research-engine.md
- ENGINES/sales/offer-engine.md
- ENGINES/sales/sales-engine.md
- ENGINES/web/wix.md

Not directly routed:
- ENGINES/content/web-copy.md - likely real routing gap; website goal tasks reference generic `/ENGINES/content/`, but router no longer has the website-copy trigger row.
- ENGINES/coach-jap/wod-brain.md - likely real routing gap; should be loaded alongside training-program.md for WOD/session generation if intended.
- ENGINES/content/post-routing.md - likely internal dependency; acceptable if loaded by social/carousel workflows.
- ENGINES/coach-jap/program-state-template.md - template; acceptable.

Known missing engine:
- ENGINES/design/poster.md - still not built. design-brief.md partially covers posters.

## Brand Diagnostic

Brand files found:
- BRANDS/restart-fitness-ph.md
- BRANDS/restart-fitness-ph-design-brief.md
- BRANDS/URBN-athletics.md
- BRANDS/urban-strong.md

Status:
- Restart Fitness PH is locked.
- URBN Athletics is live and decoupled from Restart Fitness PH.
- `urban-strong.md` is legacy reference only.
- URBN visual identity and public domain remain unresolved blockers.

## Skills And Agents

Mirrored SKILL.md files exist in both `.agents/skills/` and `.claude/skills/`:
- anti-ai-copywriter
- coach-jap-programming-format
- frontend-design
- goals
- research-analyst
- strategic-decision
- ui-ux-pro-max

Issue:
- `AGENTS.md` and `CLAUDE.md` built-skill lists mention only four skills and are stale. They do not list `frontend-design` or `strategic-decision`.
- `.agents/agents` and `.claude/agents` have no active agent files.

## Goals And Tasks

Active goals found in GOALS/active-goals.md:
- website-launch - Priority 1 - PENDING - deadline 2026-06-25
- social-media-pipeline - Priority 2 - PENDING - deadline 2026-06-25
- marketing-sales-active - Priority 2 - PENDING - deadline 2026-06-25
- jnoah-os-complete - Priority 3 - PENDING - deadline 2026-06-25

Important drift:
- `website-launch.md` has milestone 1 marked COMPLETE, but its task table still has "Resolve open decisions" as PENDING.
- `jnoah-os-complete.md` still references "Urban Strong brand direction" as PENDING even though URBN Athletics is now live.
- Several goal task due dates are in the past as of 2026-06-05 but still marked PENDING.

## Current Operating State

STATE.md top priorities:
- URBN June Rebrand Launch - time-critical
- Finish Week 1 Restart social pipeline
- Lock content pillars and develop first 10 posts

Blocked/waiting:
- URBN visual identity and public domain
- restartfitnessph.com not live
- Story-Driven and 6FIX Launch campaigns still draft
- Week 1 Monday cover failed in Canva and remains manual

Issue:
- STATE.md active-client section is stale compared with MEMORY/clients/registry.md.

## Client Diagnostic

Registry status:
- Real clients listed: 14
- Inactive clients listed: 4
- Test/dummy clients listed: 4
- Client folders found: 22

Mismatch:
- STATE.md says "12 active" and still lists Jaedie Padua and Anthony in active-client quick status.
- MEMORY/clients/registry.md marks Jaedie Padua and Anthony inactive and includes newer real clients: Aileen, Arianna Ramos, Fame Florendo, Katrina Mae Carandang.

Registry flags:
- Katrina Mae Carandang full legal name needs verification.
- Mach legal name and Olympic 1RM values unconfirmed.
- Em Tan brand assignment needs confirmation.
- Jude shoulder restriction status needs confirmation.
- Jozen DOCX source could not be extracted automatically.
- Arianna, Fame, Katrina Mae have minimal profiles; full intake pending.
- Lenny, Lily, Anthony statuses need confirmation.

## Campaign Diagnostic

Campaign folders found:
- OUTPUTS/campaigns/2026-05-story-driven-lead-gen-restart-ph
- OUTPUTS/campaigns/2026-06-6fix-launch-restart-ph
- OUTPUTS/campaigns/2026-06-social-growth-pipeline-restart-ph
- OUTPUTS/campaigns/2026-06-urbn-rebrand-launch

STATE.md campaign status:
- URBN June Rebrand Launch - PRODUCTION / time-critical
- Social Growth Pipeline - ACTIVE
- Story-Driven Lead Gen - DRAFT
- 6FIX Launch - DRAFT

Campaign performance issue:
- MEMORY/campaigns/campaign-performance.md still says active campaigns "None yet" in the original section, then has a URBN June entry below. The file needs cleanup so the active campaign section reflects current reality.

URBN task-board blockers:
- Week 1 assets due/overdue.
- Jun 20-21 and Jun 27-29 pre-builds not started.
- FIT45 times, PFT dates, and Pioneer forfeiture rules need confirmation.
- ClickUp task push pending.
- Final visual identity and domain blocked externally.

## Research Diagnostic

Research folders found:
- 6fix-system-integration
- ig-profile-audit
- social-pipeline-system
- story-content-dm-strategy
- website-funnel-conversion

Research INDEX rows found:
- 6fix-system-integration
- social-pipeline-system
- story-content-dm-strategy

Index drift:
- `website-funnel-conversion` exists with raw DEEP research but is missing from RESEARCH/INDEX.md.
- `ig-profile-audit` exists with raw STANDARD research but is missing from RESEARCH/INDEX.md.
- No topic currently has a generated BRIEF.md.

## Outputs Diagnostic

Output file counts:
- campaigns: 45
- carousel: 9
- client-stories: 2
- programs: 67
- social: 5
- web: 2
- blog: 0
- design: 0
- nutrition: 0

Program output counts by folder:
- 6FIX: 10
- Aira-Quito: 16
- Yury: 12
- Enosh: 9
- Jozen: 5
- Em-Tan: 3
- Others: 1 each across Anthony, Dummy-1, Dummy-2, group-class, Jaedie-Padua, Jen-Linzaga, Joice-Maningo, Jude-Saldua, Lenny-Calamba, Lily, Mach, Mark-1

## Dashboard App Diagnostic

App location: C:\Jnoah\jnoah-os-app
Vault config: `JNOAH_VAULT_PATH` fallback is `C:\Jnoah\vault`.

Checks:
- `npm.cmd run lint` - PASS
- `npx.cmd tsc --noEmit --incremental false` - PASS
- `npm.cmd run build` - FAILS because `next/font` cannot fetch Google Fonts under restricted network
- `http://localhost:3000` - not reachable during this diagnostic

Notes:
- A plain `npx.cmd tsc --noEmit` failed because it attempted to write `tsconfig.tsbuildinfo` and got EPERM; disabling incremental output separated that permission issue from type correctness.
- devserver.log shows the app previously served `/`, `/goals`, `/clients`, and `/website` successfully, but it is not currently running.
- App git repo is dirty on `master`: modified package files and app files, plus untracked dashboard modules/logs.

## Highest-Priority Fixes

1. Update RESEARCH/INDEX.md to include `website-funnel-conversion` and `ig-profile-audit`.
2. Reconcile STATE.md with MEMORY/clients/registry.md, especially active/inactive clients.
3. Patch ROUTER.md for `web-copy.md` and `wod-brain.md` triggers.
4. Sync AGENTS.md engine/skill list to match CLAUDE.md and the actual folders.
5. Update goal files for completed URBN rebrand decision and overdue/past-due task statuses.
6. Clean campaign-performance.md active-campaign section.
7. Decide whether to replace `next/font/google` with local font assets so builds work offline/restricted.
8. Commit or intentionally ignore the dashboard app changes/log files.

