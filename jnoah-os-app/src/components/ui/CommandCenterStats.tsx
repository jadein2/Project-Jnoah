import Link from "next/link";
import { Calendar, Target, Users, ChevronRight } from "lucide-react";
import type { GoalRow } from "@/lib/vault";

type CommandCenterStatsProps = {
  clientCount: number;
  goalCount: number;
  nearestDeadline: {
    goal: GoalRow;
    daysLeft: number | null;
  } | null;
};

export function CommandCenterStats({
  clientCount,
  goalCount,
  nearestDeadline,
}: CommandCenterStatsProps) {
  const deadlineLabel = nearestDeadline
    ? nearestDeadline.daysLeft !== null && nearestDeadline.daysLeft < 0
      ? `${Math.abs(nearestDeadline.daysLeft)}d overdue`
      : nearestDeadline.daysLeft === 0
        ? "Due today"
        : `${nearestDeadline.daysLeft}d left`
    : "—";

  const items = [
    {
      href: "/clients",
      icon: Users,
      value: clientCount,
      label: "Active clients",
      detail: "On your training roster",
      accent: "text-[var(--rf-orange)]",
    },
    {
      href: "/goals",
      icon: Target,
      value: goalCount,
      label: "Business targets",
      detail: "Growth & systems",
      accent: "text-[var(--rf-gold-muted)]",
    },
    {
      href: nearestDeadline ? "/goals" : "/goals",
      icon: Calendar,
      value: deadlineLabel,
      label: "Next deadline",
      detail: nearestDeadline
        ? nearestDeadline.goal.goal.slice(0, 42) +
          (nearestDeadline.goal.goal.length > 42 ? "…" : "")
        : "No dated targets",
      accent: "text-[var(--rf-charcoal)]",
      valueIsText: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className="rf-card rf-card-interactive group p-4 sm:p-5 flex items-start gap-3"
          >
            <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)] group-hover:bg-[var(--rf-orange)] transition-colors">
              <Icon size={18} className="text-[var(--rf-white)]" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={`font-bold tabular-nums leading-none ${item.valueIsText ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"} ${item.accent}`}
              >
                {item.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--rf-charcoal)] mt-1.5">
                {item.label}
              </p>
              <p className="text-[11px] text-[var(--rf-muted)] mt-1 line-clamp-2 leading-snug">
                {item.detail}
              </p>
            </div>
            <ChevronRight
              size={16}
              className="shrink-0 text-[var(--rf-muted)] group-hover:text-[var(--rf-orange)] mt-1 transition-colors"
            />
          </Link>
        );
      })}
    </div>
  );
}
