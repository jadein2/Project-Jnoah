"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  Users,
  Dumbbell,
  Layers,
  FlaskConical,
  Globe,
  Calendar,
  Megaphone,
  FolderOpen,
  X,
} from "lucide-react";
import { BrandLockup } from "./BrandLockup";
import { BrandLogo } from "./BrandLogo";

const operations = [
  { href: "/", label: "Command Center", icon: LayoutDashboard },
  { href: "/clients", label: "Training Roster", icon: Users },
  { href: "/goals", label: "Business Targets", icon: Target },
];

const comingSoon = [
  { label: "Programs", icon: Dumbbell },
  { label: "Session Plans", icon: Layers },
  { label: "Research", icon: FlaskConical },
  { label: "Marketing", icon: Megaphone },
  { label: "Content", icon: Megaphone },
  { label: "Schedule", icon: Calendar },
  { label: "Website", icon: Globe },
  { label: "Deliverables", icon: FolderOpen },
];

type SidebarProps = {
  isOpen: boolean;
  expanded: boolean;
  pinned: boolean;
  isDesktop: boolean;
  onClose: () => void;
  onNavigate: () => void;
  onTogglePin: () => void;
  onHoverChange: (hovering: boolean) => void;
};

export function Sidebar({
  isOpen,
  expanded,
  pinned,
  isDesktop,
  onClose,
  onNavigate,
  onTogglePin,
  onHoverChange,
}: SidebarProps) {
  const pathname = usePathname();
  const showExpanded = !isDesktop || expanded;

  const widthClass = showExpanded
    ? "w-[min(17.5rem,88vw)] max-w-[280px] lg:w-[17.5rem] lg:max-w-none"
    : "w-[4.5rem] max-w-[4.5rem]";

  const handleMouseEnter = () => {
    if (isDesktop) onHoverChange(true);
  };

  const handleMouseLeave = () => {
    if (isDesktop && !pinned) onHoverChange(false);
  };

  return (
    <aside
      id="app-sidebar"
      aria-label="Gym system navigation"
      aria-hidden={!isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={[
        "fixed inset-y-0 left-0 z-50 flex flex-col",
        widthClass,
        "bg-[var(--rf-charcoal)] text-[var(--rf-white)]",
        "border-r border-[var(--rf-dark)]",
        "transition-[transform,width] duration-300 ease-out",
        "min-h-screen min-h-[100dvh]",
        isDesktop ? "shadow-lg lg:shadow-none" : "shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
    >
      <div className="relative shrink-0">
        <BrandLockup
          compactOnMobile={!isDesktop}
          expanded={showExpanded}
          pinned={pinned}
          showPin={isDesktop && showExpanded}
          onTogglePin={onTogglePin}
        />
        {!isDesktop && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-3 w-9 h-9 flex items-center justify-center rounded-[var(--rf-radius)] text-[var(--rf-white)]/70 hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.75} />
          </button>
        )}
      </div>

      <nav
        className={`flex-1 overflow-y-auto overscroll-contain py-3 ${
          showExpanded ? "px-3" : "px-2"
        }`}
      >
        {showExpanded && (
          <p className="rf-label-light px-3 mb-2">Gym operations</p>
        )}
        <ul className={`space-y-1 ${showExpanded ? "mb-4" : "mb-2"}`}>
          {operations.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  title={!showExpanded ? label : undefined}
                  className={[
                    "group relative flex items-center rounded-[var(--rf-radius)] font-medium transition-all",
                    showExpanded
                      ? "gap-3 px-3 py-2.5 min-h-[44px] sm:min-h-0 text-[13px]"
                      : "justify-center w-10 h-10 mx-auto",
                    active
                      ? !showExpanded
                        ? "bg-[var(--rf-orange)] text-white"
                        : "bg-[var(--rf-orange)]/15 text-[var(--rf-white)] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:bg-[var(--rf-orange)] before:rounded-r"
                      : "text-[var(--rf-white)]/75 hover:bg-white/[0.06] hover:text-[var(--rf-white)]",
                  ].join(" ")}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className={
                      active && showExpanded
                        ? "text-[var(--rf-orange)]"
                        : "shrink-0"
                    }
                  />
                  {showExpanded && <span>{label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={showExpanded ? "mt-2" : "mt-1 pt-2 border-t border-white/[0.08]"}>
          {showExpanded ? (
            <p className="rf-label-light px-3 mb-2">Coming online</p>
          ) : (
            <p
              className="text-[8px] text-center uppercase tracking-[0.2em] text-[var(--rf-white)]/25 mb-2 px-1"
              title="Coming online"
            >
              Soon
            </p>
          )}
          <ul className="space-y-1">
            {comingSoon.map(({ label, icon: Icon }) => (
              <li key={label}>
                <span
                  title={!showExpanded ? `${label} — coming soon` : undefined}
                  className={[
                    "flex items-center rounded-[var(--rf-radius)] text-[var(--rf-white)]/30 cursor-not-allowed",
                    showExpanded
                      ? "gap-3 px-3 py-2 text-[12px]"
                      : "justify-center w-10 h-10 mx-auto opacity-70",
                  ].join(" ")}
                >
                  <Icon
                    size={showExpanded ? 16 : 17}
                    strokeWidth={1.5}
                    className="shrink-0"
                  />
                  {showExpanded && (
                    <>
                      <span>{label}</span>
                      <span className="ml-auto text-[9px] uppercase tracking-widest text-[var(--rf-white)]/18">
                        soon
                      </span>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <footer
        className={`shrink-0 border-t border-white/[0.08] pb-[max(0.75rem,env(safe-area-inset-bottom))] ${
          showExpanded ? "px-4 py-4" : "px-2 py-3"
        }`}
      >
        {showExpanded ? (
          <>
            <p className="text-[11px] text-[var(--rf-soft)] leading-relaxed">
              <span className="text-[var(--rf-gold)] font-medium">Jnoah OS</span>
              {" · "}
              <span className="text-[var(--rf-white)]/80">
                Restart Fitness PH
              </span>
            </p>
            <p className="text-[10px] text-[var(--rf-white)]/35 mt-1.5 uppercase tracking-wider">
              {pinned ? "Pinned open" : "Hover to expand · tap circle to pin"}
            </p>
          </>
        ) : (
          <div className="flex justify-center" title="Urban Strong Fitness">
            <div
              className="flex items-center justify-center rounded-[var(--rf-radius)] overflow-hidden bg-[#111110] border border-white/10"
              style={{ width: 36, height: 36 }}
            >
              <BrandLogo size={28} />
            </div>
          </div>
        )}
      </footer>
    </aside>
  );
}
