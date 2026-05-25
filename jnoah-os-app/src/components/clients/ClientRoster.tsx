"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  FlaskConical,
  ArrowUpDown,
} from "lucide-react";
import type { ClientRow } from "@/lib/vault";
import {
  FILTER_CHIPS,
  getServiceTierInfo,
  type ServiceTierKey,
} from "@/lib/service-tier";
import { ServiceTierBadge } from "@/components/ui/ServiceTierBadge";
import { ClientAvatar } from "./ClientAvatar";

type ClientRosterProps = {
  real: ClientRow[];
  test: ClientRow[];
};

type SortKey = "name" | "program" | "phase";

function ClientCard({
  client,
  dashed = false,
}: {
  client: ClientRow;
  dashed?: boolean;
}) {
  return (
    <Link
      href={`/clients/${client.slug}`}
      className={`rf-card rf-card-interactive group p-5 flex flex-col h-full ${
        dashed ? "border-dashed opacity-85" : ""
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <ClientAvatar
          slug={client.slug}
          name={client.client}
          size={52}
          muted={dashed}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-semibold text-[var(--rf-charcoal)] text-base leading-snug group-hover:text-[var(--rf-orange-dark)] transition-colors">
              {client.client}
            </h3>
          </div>
          <ServiceTierBadge tier={client.serviceTier} />
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-[var(--rf-border)] space-y-1">
        <p className="text-sm font-medium text-[var(--rf-charcoal)] line-clamp-2">
          {client.currentCycle}
        </p>
        <p className="text-xs text-[var(--rf-muted)]">{client.phaseWeek}</p>
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--rf-orange)]">
        View profile
        <ChevronRight
          size={16}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </span>
    </Link>
  );
}

export function ClientRoster({ real, test }: ClientRosterProps) {
  const [query, setQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<ServiceTierKey | "all">("all");
  const [sort, setSort] = useState<SortKey>("name");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = real;

    if (tierFilter !== "all") {
      list = list.filter(
        (c) => getServiceTierInfo(c.serviceTier).key === tierFilter
      );
    }

    if (q) {
      list = list.filter(
        (c) =>
          c.client.toLowerCase().includes(q) ||
          c.serviceTier.toLowerCase().includes(q) ||
          c.currentCycle.toLowerCase().includes(q) ||
          c.slug.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    sorted.sort((a, b) => {
      if (sort === "name") return a.client.localeCompare(b.client);
      if (sort === "program")
        return a.currentCycle.localeCompare(b.currentCycle);
      return a.phaseWeek.localeCompare(b.phaseWeek);
    });
    return sorted;
  }, [real, query, tierFilter, sort]);

  return (
    <>
      <div className="rf-card p-4 mb-4 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--rf-muted)]"
            />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, program, or service…"
              className="w-full pl-10 pr-16 py-2.5 text-sm bg-[var(--rf-cream)] border border-[var(--rf-border)] rounded-[var(--rf-radius)] text-[var(--rf-charcoal)] placeholder:text-[var(--rf-muted)] focus:outline-none focus:border-[var(--rf-orange)] focus:ring-1 focus:ring-[var(--rf-orange)]/30"
              aria-label="Search clients"
            />
            <kbd className="hidden sm:inline absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-medium text-[var(--rf-muted)] border border-[var(--rf-border)] px-1.5 py-0.5 rounded-[var(--rf-radius)] bg-[var(--rf-white)]">
              /
            </kbd>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown size={14} className="text-[var(--rf-muted)]" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="text-sm py-2 px-2 bg-[var(--rf-cream)] border border-[var(--rf-border)] rounded-[var(--rf-radius)] text-[var(--rf-charcoal)] focus:outline-none focus:border-[var(--rf-orange)]"
              aria-label="Sort clients"
            >
              <option value="name">Sort: Name</option>
              <option value="program">Sort: Program</option>
              <option value="phase">Sort: Phase / week</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setTierFilter(chip.id)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded-[var(--rf-radius)] border transition-colors ${
                tierFilter === chip.id
                  ? "bg-[var(--rf-orange)] text-[var(--rf-white)] border-[var(--rf-orange)]"
                  : "bg-[var(--rf-white)] text-[var(--rf-muted)] border-[var(--rf-border)] hover:border-[var(--rf-orange)]/50 hover:text-[var(--rf-charcoal)]"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-[var(--rf-muted)]">
          <span className="font-semibold text-[var(--rf-charcoal)]">
            {filtered.length}
          </span>
          {query || tierFilter !== "all" ? " shown" : " active clients"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rf-card p-10 text-center">
          <p className="text-[var(--rf-muted)] mb-2">
            No clients match your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setTierFilter("all");
            }}
            className="text-sm font-medium text-[var(--rf-orange)] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
          {filtered.map((c) => (
            <ClientCard key={c.slug} client={c} />
          ))}
        </div>
      )}

      {test.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical size={16} className="text-[var(--rf-muted)]" />
            <p className="text-sm font-medium text-[var(--rf-muted)]">
              Practice profiles ({test.length}) — for testing only
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {test.map((c) => (
              <ClientCard key={c.slug} client={c} dashed />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
