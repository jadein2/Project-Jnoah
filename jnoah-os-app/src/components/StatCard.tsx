import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string | number;
  detail?: string;
  href?: string;
  linkLabel?: string;
  icon: LucideIcon;
  accent?: "orange" | "gold" | "charcoal";
};

export function StatCard({
  label,
  value,
  detail,
  href,
  linkLabel,
  icon: Icon,
  accent = "orange",
}: StatCardProps) {
  const valueColor =
    accent === "orange"
      ? "text-[var(--rf-orange)]"
      : accent === "gold"
        ? "text-[var(--rf-gold-muted)]"
        : "text-[var(--rf-charcoal)]";

  return (
    <div className="rf-card p-5 flex flex-col h-full hover:border-[var(--rf-border-strong)] transition-colors">
      <div className="flex items-start justify-between gap-3 mb-4">
        <p className="rf-label">{label}</p>
        <div className="w-9 h-9 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-cream2)]">
          <Icon size={18} className="text-[var(--rf-mid)]" strokeWidth={1.75} />
        </div>
      </div>
      <p className={`text-3xl sm:text-4xl font-semibold tabular-nums tracking-tight ${valueColor}`}>
        {value}
      </p>
      {detail && <p className="rf-body-muted text-sm mt-2">{detail}</p>}
      {href && linkLabel && (
        <Link href={href} className="rf-link mt-auto pt-4 inline-flex items-center gap-1">
          {linkLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
