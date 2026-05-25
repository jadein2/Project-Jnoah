"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import {
  CalendarDays,
  Menu,
  PanelLeftClose,
  ShieldCheck,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { getPageMeta } from "@/lib/page-meta";
import { formatRelativeTime } from "@/lib/format-relative";

type TopBarProps = {
  onMenuClick: () => void;
  menuOpen: boolean;
  showMenuButton: boolean;
};

export function TopBar({
  onMenuClick,
  menuOpen,
  showMenuButton,
}: TopBarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const page = getPageMeta(pathname);
  const PageIcon = page.icon;

  const clientSlug = useMemo(() => {
    const m = pathname.match(/^\/clients\/([^/]+)$/);
    return m?.[1] ?? null;
  }, [pathname]);

  const [clientName, setClientName] = useState<string | null>(null);
  const [status, setStatus] = useState<"connecting" | "live" | "offline">(
    "connecting"
  );
  const [lastSynced, setLastSynced] = useState<string | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!clientSlug) {
      setClientName(null);
      return;
    }
    let cancelled = false;
    fetch(`/api/clients/${clientSlug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data?.client?.client) {
          setClientName(data.client.client);
        }
      })
      .catch(() => {
        if (!cancelled) setClientName(null);
      });
    return () => {
      cancelled = true;
    };
  }, [clientSlug]);

  useEffect(() => {
    const es = new EventSource("/api/events");
    const markSynced = () => setLastSynced(new Date().toISOString());

    es.addEventListener("connected", () => {
      setStatus("live");
      markSynced();
    });
    es.addEventListener("vault-changed", () => {
      markSynced();
      router.refresh();
    });
    es.onerror = () => setStatus("offline");
    return () => es.close();
  }, [router]);

  useEffect(() => {
    if (!lastSynced || status !== "live") return;
    const id = setInterval(() => setTick((t) => t + 1), 30000);
    return () => clearInterval(id);
  }, [lastSynced, status]);

  const pageTitle = clientName ?? page.title;
  const pageSubtitle = clientName
    ? "Training roster · Client profile"
    : page.subtitle;

  const now = new Date();
  const dateLong = now.toLocaleDateString("en-PH", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dateShort = now.toLocaleDateString("en-PH", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const syncedLabel =
    lastSynced && status === "live"
      ? `Synced ${formatRelativeTime(lastSynced)}`
      : status === "connecting"
        ? "Connecting…"
        : null;

  const syncConfig = {
    live: {
      label: "Vault live",
      detail: syncedLabel ?? "Coaching files synced",
      dot: "bg-[var(--rf-orange)] animate-pulse",
      pill: "border-[var(--rf-orange)]/35 bg-[var(--rf-orange)]/10 text-[var(--rf-orange-dark)]",
    },
    connecting: {
      label: "Syncing…",
      detail: "Reading vault",
      dot: "bg-[var(--rf-gold)]",
      pill: "border-[var(--rf-gold)]/35 bg-[var(--rf-gold)]/10 text-[var(--rf-gold-muted)]",
    },
    offline: {
      label: "Offline",
      detail: "Check vault path & dev server",
      dot: "bg-red-500",
      pill: "border-red-200 bg-red-50 text-red-800",
    },
  }[status];

  return (
    <header className="shrink-0 sticky top-0 z-30 pt-[env(safe-area-inset-top)] bg-[var(--rf-white)] border-b border-[var(--rf-border)] shadow-sm">
      <div className="bg-gradient-to-r from-[var(--rf-white)] via-[var(--rf-cream)] to-[var(--rf-white)]">
        <div className="px-3 sm:px-6 md:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4 min-w-0 flex-1">
            {showMenuButton && (
              <button
                type="button"
                onClick={onMenuClick}
                className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-[var(--rf-radius)] transition-colors ${
                  menuOpen
                    ? "bg-[var(--rf-orange)] text-[var(--rf-white)]"
                    : "bg-[var(--rf-charcoal)] text-[var(--rf-white)] hover:bg-[var(--rf-orange)]"
                }`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-controls="app-sidebar"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <PanelLeftClose size={20} strokeWidth={1.75} />
                ) : (
                  <Menu size={20} strokeWidth={1.75} />
                )}
              </button>
            )}

            <div className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-[var(--rf-radius)] bg-[#111110] p-1 border border-[var(--rf-border)]">
              <BrandLogo size={32} />
            </div>

            <div className="hidden md:flex w-9 h-9 shrink-0 items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)]">
              <PageIcon size={18} className="text-[var(--rf-gold)]" strokeWidth={1.75} />
            </div>

            <div className="min-w-0 border-l border-[var(--rf-border)] pl-3 sm:pl-4 hidden sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--rf-orange)] leading-none mb-1">
                Urban Strong · Gym access
              </p>
              <h2 className="text-base sm:text-lg font-semibold text-[var(--rf-charcoal)] truncate leading-tight">
                {pageTitle}
              </h2>
              <p className="text-xs text-[var(--rf-muted)] truncate mt-0.5 hidden md:block">
                {pageSubtitle}
              </p>
            </div>

            <div className="min-w-0 sm:hidden">
              <p className="text-sm font-semibold text-[var(--rf-charcoal)] truncate">
                {pageTitle}
              </p>
              <p className="text-[11px] text-[var(--rf-muted)] flex items-center gap-1 mt-0.5">
                <CalendarDays size={12} />
                {dateShort}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-[var(--rf-radius)] bg-[var(--rf-white)] border border-[var(--rf-border)]">
              <CalendarDays
                size={16}
                className="text-[var(--rf-muted)] shrink-0"
                strokeWidth={1.75}
              />
              <p className="text-xs font-medium text-[var(--rf-charcoal)] leading-tight whitespace-nowrap">
                {dateLong}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-[var(--rf-border)]">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)] flex items-center justify-center text-[var(--rf-white)] text-sm font-semibold ring-2 ring-[var(--rf-orange)]/30"
                aria-hidden
              >
                JF
              </div>
              <div className="hidden md:block text-left min-w-0">
                <p className="text-sm font-semibold text-[var(--rf-charcoal)] leading-tight">
                  Coach Jap Felipe
                </p>
                <p className="text-[11px] text-[var(--rf-muted)] mt-0.5">
                  Head coach · Operations
                </p>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-[var(--rf-radius)] border ${syncConfig.pill}`}
              title={syncConfig.detail}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${syncConfig.dot} ${status === "live" ? "animate-ping" : ""}`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${syncConfig.dot}`}
                />
              </span>
              <div className="min-w-0 hidden sm:block">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide leading-none">
                  {syncConfig.label}
                </p>
                <p className="text-[9px] text-[var(--rf-muted)] mt-0.5 max-w-[8rem] truncate">
                  {syncConfig.detail}
                </p>
              </div>
              <ShieldCheck
                size={14}
                className="shrink-0 opacity-60 hidden sm:block"
                strokeWidth={1.75}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[3px] w-full bg-gradient-to-r from-transparent via-[var(--rf-orange)] to-transparent"
        aria-hidden
      />
    </header>
  );
}
