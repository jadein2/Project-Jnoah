import type { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export function SectionTitle({
  icon: Icon,
  title,
  subtitle,
  action,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-5">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)]">
            <Icon size={18} className="text-[var(--rf-gold)]" strokeWidth={1.75} />
          </div>
        )}
        <div>
          {subtitle && (
            <p className="text-xs font-medium text-[var(--rf-muted)] mb-0.5">
              {subtitle}
            </p>
          )}
          <h2 className="text-lg sm:text-xl rf-serif text-[var(--rf-charcoal)]">
            {title}
          </h2>
        </div>
      </div>
      {action}
    </div>
  );
}
