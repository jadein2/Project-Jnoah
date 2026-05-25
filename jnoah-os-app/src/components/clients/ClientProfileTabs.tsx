"use client";

import { useState } from "react";
import { MarkdownView } from "@/components/MarkdownView";
import type { ProfileTab } from "@/lib/split-profile";

type ClientProfileTabsProps = {
  tabs: ProfileTab[];
};

export function ClientProfileTabs({ tabs }: ClientProfileTabsProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? "full");

  if (tabs.length <= 1) {
    return (
      <div className="rf-card p-6 md:p-8">
        <MarkdownView content={tabs[0]?.content ?? ""} />
      </div>
    );
  }

  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className="rf-card overflow-hidden">
      <div
        className="flex gap-0 border-b border-[var(--rf-border)] overflow-x-auto overscroll-x-contain"
        role="tablist"
        aria-label="Profile sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`shrink-0 px-4 sm:px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              active === tab.id
                ? "border-[var(--rf-orange)] text-[var(--rf-orange-dark)] bg-[var(--rf-orange)]/5"
                : "border-transparent text-[var(--rf-muted)] hover:text-[var(--rf-charcoal)] hover:bg-[var(--rf-cream2)]/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 md:p-8" role="tabpanel">
        <MarkdownView content={current.content} />
      </div>
    </div>
  );
}
