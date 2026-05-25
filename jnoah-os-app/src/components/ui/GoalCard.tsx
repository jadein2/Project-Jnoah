import { StatusChip } from "@/components/StatusChip";
import { DeadlinePill } from "./DeadlinePill";

type GoalCardProps = {
  goal: string;
  target: string;
  priority: string;
  type: string;
  status: string;
  deadline: string;
  daysLeft: number | null;
  compact?: boolean;
};

export function GoalCard({
  goal,
  target,
  priority,
  type,
  status,
  deadline,
  daysLeft,
  compact = false,
}: GoalCardProps) {
  const progress =
    daysLeft !== null
      ? Math.min(100, Math.max(8, 100 - (daysLeft / 60) * 100))
      : 50;

  return (
    <article
      className={`rf-card overflow-hidden hover:border-[var(--rf-orange)]/40 hover:shadow-sm transition-all ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
    >
      <div className="h-1 w-full bg-[var(--rf-cream2)] mb-4 sm:mb-5">
        <div
          className="h-full bg-[var(--rf-orange)] transition-all"
          style={{ width: `${progress}%` }}
          role="presentation"
        />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--rf-orange)] mb-1.5">
            Priority {priority}
            <span className="text-[var(--rf-muted)] font-normal normal-case tracking-normal">
              {" "}
              · {type}
            </span>
          </p>
          <h3
            className={`rf-serif text-[var(--rf-charcoal)] leading-snug ${
              compact ? "text-base" : "text-xl sm:text-2xl"
            }`}
          >
            {goal}
          </h3>
        </div>
        <StatusChip status={status} />
      </div>

      {!compact && (
        <p className="text-[15px] text-[var(--rf-charcoal)]/90 leading-relaxed mb-4">
          {target}
        </p>
      )}

      <DeadlinePill deadline={deadline} daysLeft={daysLeft} />
    </article>
  );
}
