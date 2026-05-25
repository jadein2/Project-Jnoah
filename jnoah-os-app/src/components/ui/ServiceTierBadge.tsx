import { getServiceTierInfo, BADGE_STYLES } from "@/lib/service-tier";

type ServiceTierBadgeProps = {
  tier: string;
  size?: "sm" | "md";
};

export function ServiceTierBadge({ tier, size = "sm" }: ServiceTierBadgeProps) {
  const info = getServiceTierInfo(tier);
  const sizeClass =
    size === "md"
      ? "px-2.5 py-1 text-[11px]"
      : "px-2 py-0.5 text-[10px]";

  return (
    <span
      className={`inline-block font-semibold uppercase tracking-[0.1em] rounded-[var(--rf-radius)] border ${sizeClass} ${BADGE_STYLES[info.key]}`}
      title={tier}
    >
      {info.shortLabel}
    </span>
  );
}
