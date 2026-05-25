import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ClientProfileHeader } from "@/components/clients/ClientProfileHeader";
import { ClientProfileTabs } from "@/components/clients/ClientProfileTabs";
import { getClientBySlug, getClientProfile } from "@/lib/vault";
import { splitProfileIntoTabs } from "@/lib/split-profile";

export const dynamic = "force-dynamic";

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const client = await getClientBySlug(slug);
  if (!client) notFound();

  let profile;
  try {
    profile = await getClientProfile(slug);
  } catch {
    notFound();
  }

  const tabs = splitProfileIntoTabs(profile.content);

  return (
    <>
      <nav
        className="flex items-center gap-1.5 text-sm text-[var(--rf-muted)] mb-4"
        aria-label="Breadcrumb"
      >
        <Link
          href="/clients"
          className="inline-flex items-center gap-1.5 hover:text-[var(--rf-orange)] transition-colors"
        >
          <ArrowLeft size={14} />
          Training roster
        </Link>
        <ChevronRight size={14} className="shrink-0 opacity-50" />
        <span className="font-medium text-[var(--rf-charcoal)] truncate">
          {client.client}
        </span>
      </nav>

      <ClientProfileHeader client={client} />

      <ClientProfileTabs tabs={tabs} />
    </>
  );
}
