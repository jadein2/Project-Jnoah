export type ServiceTierKey =
  | "personal-training"
  | "online"
  | "nutrition"
  | "program"
  | "group"
  | "other";

export type ServiceTierInfo = {
  key: ServiceTierKey;
  label: string;
  shortLabel: string;
};

const TIER_RULES: { key: ServiceTierKey; match: RegExp; label: string; shortLabel: string }[] = [
  {
    key: "nutrition",
    match: /nutrition|6fix|meal prep/i,
    label: "Nutrition",
    shortLabel: "Nutrition",
  },
  {
    key: "online",
    match: /online/i,
    label: "Online coaching",
    shortLabel: "Online",
  },
  {
    key: "personal-training",
    match: /personal training|personal train/i,
    label: "Personal training",
    shortLabel: "PT",
  },
  {
    key: "program",
    match: /program only|program\b/i,
    label: "Program only",
    shortLabel: "Program",
  },
  {
    key: "group",
    match: /group|team|class|swimming/i,
    label: "Group / team",
    shortLabel: "Group",
  },
];

export function getServiceTierInfo(tier: string): ServiceTierInfo {
  const t = tier.trim();
  for (const rule of TIER_RULES) {
    if (rule.match.test(t)) {
      return { key: rule.key, label: rule.label, shortLabel: rule.shortLabel };
    }
  }
  const short =
    t.length > 28 ? `${t.slice(0, 26).trim()}…` : t || "Coaching";
  return { key: "other", label: t || "Coaching", shortLabel: short };
}

export const FILTER_CHIPS: { id: ServiceTierKey | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "personal-training", label: "PT" },
  { id: "online", label: "Online" },
  { id: "nutrition", label: "Nutrition" },
  { id: "program", label: "Program" },
  { id: "group", label: "Group" },
];

export const BADGE_STYLES: Record<ServiceTierKey, string> = {
  "personal-training":
    "bg-[var(--rf-orange)] text-[var(--rf-white)] border-[var(--rf-orange)]",
  online:
    "bg-[var(--rf-charcoal)] text-[var(--rf-white)] border-[var(--rf-charcoal)]",
  nutrition:
    "bg-[var(--rf-gold)]/15 text-[var(--rf-gold-muted)] border-[var(--rf-gold)]/40",
  program:
    "bg-[var(--rf-cream2)] text-[var(--rf-charcoal)] border-[var(--rf-border-strong)]",
  group:
    "bg-[var(--rf-orange)]/10 text-[var(--rf-orange-dark)] border-[var(--rf-orange)]/25",
  other:
    "bg-[var(--rf-cream2)] text-[var(--rf-muted)] border-[var(--rf-border)]",
};
