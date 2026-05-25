import { Target, Flag } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { GoalCard } from "@/components/ui/GoalCard";
import { daysUntil } from "@/lib/dates";
import { getGoals } from "@/lib/vault";

export const dynamic = "force-dynamic";

export default async function GoalsPage() {
  const goals = await getGoals();
  const p1 = goals.find((g) => g.priority === "1");
  const rest = goals.filter((g) => g.priority !== "1");

  return (
    <>
      <PageHeader
        compact
        eyebrow="Business growth"
        description="What Restart Fitness PH is building toward — deadlines, status, and what “done” looks like for each goal."
      />

      <div className="rf-card p-4 sm:p-5 mb-6 flex items-start gap-3">
        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-orange)]/10">
          <Flag size={18} className="text-[var(--rf-orange)]" />
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--rf-charcoal)]">
            {goals.length} active targets · June 2026 horizon
          </p>
          <p className="text-xs text-[var(--rf-muted)] mt-1 leading-relaxed">
            Orange progress bars are a visual cue for timeline — not a
            completion percentage. Check status chips for where each goal
            stands.
          </p>
        </div>
      </div>

      {p1 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Target size={18} className="text-[var(--rf-orange)]" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--rf-charcoal)]">
              Top priority
            </h2>
          </div>
          <GoalCard
            goal={p1.goal}
            target={p1.target}
            priority={p1.priority}
            type={p1.type}
            status={p1.status}
            deadline={p1.deadline}
            daysLeft={daysUntil(p1.deadline)}
          />
        </section>
      )}

      {rest.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--rf-muted)] mb-4">
            Also in focus
          </h2>
          <ul className="space-y-4">
            {rest.map((g) => (
              <li key={g.slug}>
                <GoalCard
                  goal={g.goal}
                  target={g.target}
                  priority={g.priority}
                  type={g.type}
                  status={g.status}
                  deadline={g.deadline}
                  daysLeft={daysUntil(g.deadline)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
