import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BrandRestartLogo } from "./BrandRestartLogo";

const FOOTER_LINKS = [
  { href: "/", label: "Command Center" },
  { href: "/clients", label: "Training Roster" },
  { href: "/goals", label: "Business Targets" },
];

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="shrink-0 mt-auto border-t border-[var(--rf-border)] bg-[var(--rf-white)]">
      <div
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--rf-orange)]/80 to-transparent"
        aria-hidden
      />

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-8">
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex shrink-0 gap-2">
                <div className="w-11 h-11 flex items-center justify-center rounded-[var(--rf-radius)] bg-[#111110] border border-[var(--rf-border)] p-1">
                  <BrandLogo size={34} />
                </div>
                <div className="w-11 h-11 flex items-center justify-center rounded-[var(--rf-radius)] bg-[#111110] border border-[var(--rf-border)] overflow-hidden">
                  <BrandRestartLogo size={44} />
                </div>
              </div>
              <div className="min-w-0">
                <p className="rf-serif text-lg text-[var(--rf-charcoal)] leading-none">
                  Jnoah OS
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--rf-orange)] mt-1.5">
                  Restart Fitness PH
                </p>
                <p className="text-xs text-[var(--rf-muted)] mt-2 leading-relaxed max-w-xs">
                  Urban Strong Fitness · Olongapo — built for the floor, not the
                  spreadsheet.
                </p>
              </div>
            </div>

            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end"
              aria-label="Footer navigation"
            >
              {FOOTER_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--rf-muted)] hover:text-[var(--rf-orange)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6 pt-5 border-t border-[var(--rf-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-[var(--rf-muted)]">
            <p>
              © {year} Restart Fitness PH · Urban Strong Fitness. Coaching data
              stays in your vault.
            </p>
            <p className="sm:text-right">
              <span className="text-[var(--rf-soft)]">Project Jnoah</span>
              {" · "}
              Phase 0 dashboard
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
