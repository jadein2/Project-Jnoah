export function StatusChip({ status }: { status: string }) {
  const s = (status || "PENDING").toUpperCase();

  const styles: Record<string, string> = {
    "ON TRACK":
      "bg-[var(--rf-charcoal)] text-[var(--rf-white)] border border-[var(--rf-charcoal)]",
    COMPLETE:
      "bg-[var(--rf-gold-muted)] text-[var(--rf-white)] border border-[var(--rf-gold-muted)]",
    "AT RISK":
      "bg-[var(--rf-orange)]/12 text-[var(--rf-orange-dark)] border border-[var(--rf-orange)]/25",
    BEHIND:
      "bg-[var(--rf-charcoal)]/8 text-[var(--rf-mid)] border border-[var(--rf-border-strong)]",
    PENDING:
      "bg-[var(--rf-cream2)] text-[var(--rf-muted)] border border-[var(--rf-border)]",
  };

  const label =
    s === "PENDING"
      ? "In progress"
      : s === "ON TRACK"
        ? "On track"
        : s === "AT RISK"
          ? "At risk"
          : s === "BEHIND"
            ? "Behind"
            : s === "COMPLETE"
              ? "Complete"
              : status;

  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] rounded-[var(--rf-radius)] ${styles[s] ?? styles.PENDING}`}
    >
      {label}
    </span>
  );
}
