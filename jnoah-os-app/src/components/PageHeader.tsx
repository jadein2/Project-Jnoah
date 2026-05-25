type PageHeaderProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  /** When true, skip the large title (shown in TopBar instead). */
  compact?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  compact = false,
}: PageHeaderProps) {
  return (
    <header className="mb-6 sm:mb-8">
      <span className="rf-accent-line mb-3 sm:mb-4" aria-hidden />
      <p className="rf-label mt-3 sm:mt-4 mb-1.5 sm:mb-2">{eyebrow}</p>
      {!compact && title && (
        <h1 className="text-[1.65rem] sm:text-[2rem] md:text-[2.25rem] leading-tight rf-serif text-[var(--rf-charcoal)]">
          {title}
        </h1>
      )}
      {description && (
        <p
          className={`rf-body-muted max-w-2xl text-sm sm:text-[15px] leading-relaxed ${
            compact || !title ? "mt-1" : "mt-2 sm:mt-3"
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
