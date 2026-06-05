# Checkpoint — Scheduled Tasks Audit
**Date:** 2026-05-30
**Scope:** All 4 background scheduled tasks attached to this workspace.
**Mode:** Audit + merge plan. Execution pending Jap's go.

---

## Inventory

| Task | Schedule (actual) | Description says | Enabled | Source | Purpose |
|---|---|---|---|---|---|
| morning-brief-jnoah | Daily ~5:03 AM | daily 5am | ✅ | Vault: CLAUDE.md + 5 GOALS files + posting-log | Structured daily brief — Today's Focus, This Week, Goals Status, Quick Fire |
| daily-campaign-briefing | Daily ~7:03 AM | morning briefing | ✅ | ClickUp CAMPAIGNS folder (90169722350) | Campaign-task briefing — Today/Overdue/48h/Waiting/Active |
| social-media-content-ideas | Daily ~5:06 AM | "twice a week at 8 AM" | ✅ | None (generic brand) | 7 IG/FB content ideas + 7 X/Threads one-liners → outputs |
| coach-corner-content-creator | Manual only | manual | ✅ | Restart brand (inline rules) | 3 Coach Corner [Client]/[Coach] chat drafts, validated |

---

## Findings

**F1 — Two morning briefings, same job, split data, 2 hrs apart.** `morning-brief-jnoah` (5 AM, vault goals) and `daily-campaign-briefing` (7 AM, ClickUp campaigns) are both morning orientation. They pull complementary data (goals vs campaign tasks) and never overlap in content — which means they should be *one* brief, not two notifications. QUALIFIED FOR MERGE.

**F2 — 5 AM collision.** `morning-brief-jnoah` (5:03) and `social-media-content-ideas` (5:06) fire within minutes of each other. Two outputs land at once each morning.

**F3 — social-media-content-ideas: schedule contradicts itself + off-system.** Its description says "twice a week at 8 AM" but the cron is `0 5 * * *` = every day at 5 AM. It also loads no brand file, no anti-ai rules, no content engine — generic "fitness & life coaching" voice, not Restart Fitness PH. Output drifts off-brand and piles up daily. NEEDS FIX (cadence + brand), not merge.

**F4 — content tasks are distinct products, not mergeable.** `social-media-content-ideas` (post ideas) and `coach-corner-content-creator` (chat-bubble conversations) are different deliverables. Keep separate; do not merge into one task.

**F5 — coach-corner is healthy.** Manual-only, on-brand, validated workflow, no collision. Last run 2026-04-22. Leave as-is (optionally give it a cadence if Jap wants).

**F6 — none of these read STATE.md.** The new state board exists now; the unified morning brief should read STATE.md too so it reflects current in-flight work.

---

## Merge / cleanup plan (proposed — pending go)

1. **MERGE** `daily-campaign-briefing` → into `morning-brief-jnoah`. Add a "CAMPAIGN TASKS" section (reads ClickUp CAMPAIGNS folder + STATE.md) to the morning brief. Disable/retire the standalone 7 AM task. Result: one unified brief, one time.
2. **FIX** `social-media-content-ideas`: set cadence to 2×/week (its intended design), move off the 5 AM collision, and point it at `/BRANDS/restart-fitness-ph.md` + anti-ai rules + content engine so output is on-brand.
3. **KEEP** `coach-corner-content-creator` as-is (manual, on-brand).

Open choices for Jap: unified brief time; social-ideas day/time + whether to keep it generic or make it Restart-branded; whether coach-corner gets a schedule.

---

## Status
EXECUTED 2026-05-30. Choices: unified brief 5 AM · content-ideas on-brand 2×/wk Tue+Fri 8 AM · coach-corner kept manual.
- morning-brief-jnoah → rewritten to unified brief (goals + CAMPAIGN TASKS from ClickUp + reads STATE.md first). Cron unchanged 0 5 * * *.
- daily-campaign-briefing → DISABLED (merged in).
- social-media-content-ideas → cron 0 8 * * 2,5 (Tue+Fri), prompt now loads Restart brand + anti-ai + social-post engine.
- coach-corner-content-creator → unchanged (manual, on-brand).
From 4 jobs (3 firing before 7 AM, one 5 AM collision) → 2 active recurring (one 5 AM brief, one 2×/wk content) + 1 manual. No data lost.
