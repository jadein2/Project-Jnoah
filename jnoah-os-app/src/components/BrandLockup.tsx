import { BrandLogo } from "./BrandLogo";

type BrandLockupProps = {
  compactOnMobile?: boolean;
  expanded?: boolean;
  pinned?: boolean;
  showPin?: boolean;
  onTogglePin?: () => void;
};

function LogoBox({ size }: { size: number }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-[var(--rf-radius)] overflow-hidden bg-[#111110] border border-white/10"
      style={{ width: size, height: size }}
    >
      <BrandLogo size={size - 8} />
    </div>
  );
}

export function BrandLockup({
  compactOnMobile = false,
  expanded = true,
  pinned = false,
  showPin = false,
  onTogglePin,
}: BrandLockupProps) {
  if (!expanded) {
    return (
      <div className="px-2 py-5 border-b border-white/[0.08] flex justify-center">
        <LogoBox size={44} />
      </div>
    );
  }

  return (
    <div
      className={`px-4 sm:px-5 border-b border-white/[0.08] ${
        compactOnMobile ? "py-4 sm:py-5 pr-12 lg:pr-5" : "py-5"
      }`}
    >
      <div className="flex items-start gap-3">
        <LogoBox size={48} />
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-center justify-between gap-2">
            <p className="rf-serif text-[1.2rem] sm:text-[1.35rem] leading-none text-[var(--rf-gold)]">
              Jnoah OS
            </p>
            {showPin && onTogglePin && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin();
                }}
                className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                  pinned
                    ? "border-[var(--rf-orange)] bg-[var(--rf-orange)] shadow-sm"
                    : "border-[var(--rf-white)]/35 bg-transparent hover:border-[var(--rf-orange)] hover:bg-[var(--rf-orange)]/20"
                }`}
                aria-label={pinned ? "Unpin sidebar" : "Pin sidebar open"}
                aria-pressed={pinned}
                title={pinned ? "Unpin — collapse on mouse leave" : "Pin open"}
              >
                <span
                  className={`block rounded-full transition-all ${
                    pinned
                      ? "w-2.5 h-2.5 bg-[var(--rf-white)]"
                      : "w-2 h-2 bg-[var(--rf-white)]/50"
                  }`}
                />
              </button>
            )}
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rf-white)]/90 mt-1.5">
            Restart Fitness PH
          </p>
          <p className="text-[11px] text-[var(--rf-orange)] font-medium mt-1.5 sm:mt-2 tracking-wide">
            Gym System Access
          </p>
        </div>
      </div>
      <p
        className={`text-[11px] text-[var(--rf-soft)] mt-3 sm:mt-4 leading-snug ${
          compactOnMobile ? "hidden sm:block" : ""
        }`}
      >
        <span className="text-[var(--rf-white)]/70 font-medium">
          Urban Strong Fitness
        </span>
        {" · "}
        Olongapo — training, nutrition, and client management for Coach Jap.
      </p>
    </div>
  );
}
