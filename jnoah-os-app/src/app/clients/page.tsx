import { Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ClientRoster } from "@/components/clients/ClientRoster";
import { getClients } from "@/lib/vault";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const clients = await getClients();
  const real = clients.filter((c) => !c.isTest);
  const test = clients.filter((c) => c.isTest);

  return (
    <>
      <PageHeader
        compact
        eyebrow="Your people"
        description="Everyone you’re coaching right now. Use search to find someone fast, then open their profile for programs, nutrition, and notes."
      />

      <div className="rf-card p-4 sm:p-5 mb-6 flex items-start gap-3 bg-[var(--rf-cream2)]/80 border-[var(--rf-orange)]/20">
        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)]">
          <Users size={18} className="text-[var(--rf-gold)]" />
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--rf-charcoal)]">
            {real.length} people on your active roster
          </p>
          <p className="text-xs text-[var(--rf-muted)] mt-1 leading-relaxed">
            Tap a card to view their full coaching file — training history,
            check-ins, and program details.
          </p>
        </div>
      </div>

      <ClientRoster real={real} test={test} />
    </>
  );
}
