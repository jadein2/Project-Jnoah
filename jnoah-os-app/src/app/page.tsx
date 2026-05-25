import Link from "next/link";
import { Target, Users, ArrowRight, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CommandCenterStats } from "@/components/ui/CommandCenterStats";
import { WelcomeBanner } from "@/components/ui/WelcomeBanner";
import { QuickActionCard } from "@/components/ui/QuickActionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoalCard } from "@/components/ui/GoalCard";
import { StatusChip } from "@/components/StatusChip";
import { DeadlinePill } from "@/components/ui/DeadlinePill";
import { daysUntil } from "@/lib/dates";
import { getTodayBrief } from "@/lib/vault";

export const dynamic = "force-dynamic";

export default async function CommandCenterPage() {
  const brief = await getTodayBrief();
  const p1 = brief.p1Focus;
  const days = p1 ? daysUntil(p1.deadline) : null;

  return (
    <>
      <PageHeader
        compact
        eyebrow="Command center"
        description="A quick read on who you’re coaching and what the business is working toward — no digging through files."
      />

      <WelcomeBanner />

      <CommandCenterStats
        clientCount={brief.clientCount}
        goalCount={brief.goals.length}
        nearestDeadline={brief.nearestDeadline}
      />

      <section className="rf-card-dark p-5 sm:p-7 md:p-8 mb-6 sm:mb-8 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[var(--rf-orange)]/15 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="flex items-start gap-2 mb-3">
          <Sparkles size={16} className="text-[var(--rf-gold)] shrink-0 mt-0.5" />
          <p className="rf-label-light text-[var(--rf-gold)]">
            Your #1 focus right now
          </p>
        </div>
        {p1 ? (
          <>
            <h2 className="text-xl sm:text-2xl md:text-[1.75rem] rf-serif text-[var(--rf-white)] mb-3 max-w-2xl leading-snug">
              {p1.goal}
            </h2>
            <p className="text-[var(--rf-soft)] text-sm md:text-[15px] mb-5 max-w-2xl leading-relaxed">
              {p1.target}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <StatusChip status={p1.status} />
              <DeadlinePill
                deadline={p1.deadline}
                daysLeft={days}
                variant="dark"
              />
            </div>
            <Link href="/goals" className="rf-btn text-sm">
              See all targets
              <ArrowRight size={16} />
            </Link>
          </>
        ) : (
          <p className="text-[var(--rf-soft)] leading-relaxed">
            No top priority set yet. Add your main goal in{" "}
            <span className="text-[var(--rf-gold-light)]">Business Targets</span>{" "}
            when you’re ready.
          </p>
        )}
      </section>

      <div className="grid sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
        <QuickActionCard
          href="/clients"
          title="Training roster"
          description="See every client, their program, and where they are in the cycle. Tap any card to open their full profile."
          stat={brief.clientCount}
          statLabel="active"
          icon={Users}
        />
        <QuickActionCard
          href="/goals"
          title="Business targets"
          description="Track website launch, marketing, social growth, and systems — all in one place."
          stat={brief.goals.length}
          statLabel="targets"
          icon={Target}
        />
      </div>

      <section>
        <SectionTitle
          icon={Target}
          title="All targets"
          subtitle="Quick overview"
          action={
            <Link href="/goals" className="rf-btn-ghost shrink-0">
              View details
              <ArrowRight size={14} />
            </Link>
          }
        />
        <ul className="space-y-3">
          {brief.goals.map((g) => (
            <li key={g.slug}>
              <GoalCard
                goal={g.goal}
                target={g.target}
                priority={g.priority}
                type={g.type}
                status={g.status}
                deadline={g.deadline}
                daysLeft={daysUntil(g.deadline)}
                compact
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
