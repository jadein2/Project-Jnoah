"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppFooter } from "./AppFooter";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

const DESKTOP_MQ = "(min-width: 1024px)";
const PINNED_KEY = "jnoah-sidebar-pinned";

function isDesktopViewport() {
  return typeof window !== "undefined" && window.matchMedia(DESKTOP_MQ).matches;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (localStorage.getItem(PINNED_KEY) === "true") setPinned(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => {
      const desktop = mq.matches;
      setIsDesktop(desktop);
      if (!desktop) {
        setMobileOpen(false);
        setHovering(false);
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isDesktopViewport()) closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (!mobileOpen || isDesktop) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, isDesktop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMobile]);

  const handleNavigate = useCallback(() => {
    if (!isDesktopViewport()) closeMobile();
  }, [closeMobile]);

  const togglePin = useCallback(() => {
    setPinned((p) => {
      const next = !p;
      localStorage.setItem(PINNED_KEY, String(next));
      return next;
    });
  }, []);

  const handleSidebarHover = useCallback((enter: boolean) => {
    if (!isDesktopViewport()) return;
    setHovering(enter);
  }, []);

  const sidebarExpanded = isDesktop && (pinned || hovering);
  const sidebarVisible = isDesktop || mobileOpen;

  const mainMargin = isDesktop
    ? sidebarExpanded
      ? "lg:ml-[17.5rem]"
      : "lg:ml-[4.5rem]"
    : "";

  return (
    <div className="flex min-h-screen min-h-[100dvh] bg-[var(--rf-cream)]">
      <div
        role="presentation"
        aria-hidden={!mobileOpen || isDesktop}
        className={`fixed inset-0 z-40 bg-[var(--rf-black)]/60 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          mobileOpen && !isDesktop
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      <Sidebar
        isOpen={sidebarVisible}
        expanded={sidebarExpanded}
        pinned={pinned}
        isDesktop={isDesktop}
        onClose={closeMobile}
        onNavigate={handleNavigate}
        onTogglePin={togglePin}
        onHoverChange={handleSidebarHover}
      />

      <div
        className={`flex-1 flex flex-col min-w-0 w-full transition-[margin] duration-300 ease-out ${mainMargin}`}
      >
        <TopBar
          onMenuClick={() => setMobileOpen((o) => !o)}
          menuOpen={mobileOpen}
          showMenuButton={!isDesktop}
        />
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-x-hidden">
          <div className="max-w-5xl mx-auto w-full">{children}</div>
        </main>
        <AppFooter />
      </div>
    </div>
  );
}
