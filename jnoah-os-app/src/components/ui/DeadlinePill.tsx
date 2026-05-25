import { CalendarClock } from "lucide-react";

type DeadlinePillProps = {
  deadline: string;
  daysLeft: number | null;
  variant?: "light" | "dark";
};

export function DeadlinePill({
  deadline,
  daysLeft,
  variant = "light",
}: DeadlinePillProps) {
  const urgent = daysLeft !== null && daysLeft <= 14;
  const isDark = variant === "dark";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm rounded-[var(--rf-radius)] px-2.5 py-1 ${
        isDark
          ? "text-[var(--rf-soft)]"
          : "bg-[var(--rf-cream2)] text-[var(--rf-muted)]"
      }`}
    >
      <CalendarClock
        size={14}
        className={urgent ? "text-[var(--rf-orange)]" : "shrink-0 opacity-70"}
      />
      <span>
        <span className={isDark ? "text-[var(--rf-white)]/80" : "font-medium text-[var(--rf-charcoal)]"}>
          {deadline}
        </span>
        {daysLeft !== null && (
          <span
            className={
              urgent
                ? " text-[var(--rf-orange)] font-semibold ml-1"
                : isDark
                  ? " text-[var(--rf-gold-light)] ml-1"
                  : " text-[var(--rf-gold-muted)] ml-1"
            }
          >
            · {daysLeft} {daysLeft === 1 ? "day" : "days"} left
          </span>
        )}
      </span>
    </span>
  );
}
