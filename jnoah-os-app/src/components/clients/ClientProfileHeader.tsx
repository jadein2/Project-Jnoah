import { ClientAvatar } from "./ClientAvatar";
import { ServiceTierBadge } from "@/components/ui/ServiceTierBadge";
import type { ClientRow } from "@/lib/vault";

type ClientProfileHeaderProps = {
  client: ClientRow;
};

export function ClientProfileHeader({ client }: ClientProfileHeaderProps) {
  return (
    <header className="rf-card p-5 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
        <ClientAvatar
          slug={client.slug}
          name={client.client}
          size={72}
          muted={client.isTest}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <p className="rf-label mb-0">Client profile</p>
            <ServiceTierBadge tier={client.serviceTier} size="md" />
            {client.isTest && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--rf-muted)] border border-dashed border-[var(--rf-border-strong)] px-2 py-0.5 rounded-[var(--rf-radius)]">
                Test profile
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-[1.75rem] rf-serif text-[var(--rf-charcoal)]">
            {client.client}
          </h1>
          <p className="text-sm font-medium text-[var(--rf-charcoal)] mt-3 leading-snug">
            {client.currentCycle}
          </p>
          <p className="text-xs text-[var(--rf-muted)] mt-1">{client.phaseWeek}</p>
          <p className="text-sm text-[var(--rf-muted)] mt-3 leading-relaxed max-w-xl">
            Full coaching file — programs, health, nutrition, and notes from
            Project Jnoah.
          </p>
        </div>
      </div>
    </header>
  );
}
