import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

type QuickActionCardProps = {
  href: string;
  title: string;
  description: string;
  stat?: string | number;
  statLabel?: string;
  icon: LucideIcon;
};

export function QuickActionCard({
  href,
  title,
  description,
  stat,
  statLabel,
  icon: Icon,
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className="rf-card rf-card-interactive group p-5 sm:p-6 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-11 h-11 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)] group-hover:bg-[var(--rf-orange)] transition-colors">
          <Icon size={22} className="text-[var(--rf-white)]" strokeWidth={1.75} />
        </div>
        {stat !== undefined && (
          <div className="text-right">
            <p className="text-2xl sm:text-3xl font-bold tabular-nums text-[var(--rf-orange)] leading-none">
              {stat}
            </p>
            {statLabel && (
              <p className="text-[10px] uppercase tracking-wider text-[var(--rf-muted)] mt-1">
                {statLabel}
              </p>
            )}
          </div>
        )}
      </div>
      <h3 className="font-semibold text-[var(--rf-charcoal)] text-base mb-1">
        {title}
      </h3>
      <p className="text-sm text-[var(--rf-muted)] leading-relaxed flex-1">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--rf-orange)] group-hover:gap-2 transition-all">
        Open
        <ChevronRight size={16} />
      </span>
    </Link>
  );
}
