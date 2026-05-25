import { Sun, Sunset, Moon } from "lucide-react";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return { text: "Good morning", Icon: Sun };
  if (h < 17) return { text: "Good afternoon", Icon: Sun };
  if (h < 21) return { text: "Good evening", Icon: Sunset };
  return { text: "Good evening", Icon: Moon };
}

export function WelcomeBanner() {
  const { text, Icon } = getGreeting();

  return (
    <div className="rf-card rf-card-interactive p-4 sm:p-5 mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[var(--rf-white)] to-[var(--rf-cream2)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-[var(--rf-radius)] bg-[var(--rf-orange)]/10 flex items-center justify-center">
          <Icon size={20} className="text-[var(--rf-orange)]" />
        </div>
        <div>
          <p className="text-base font-semibold text-[var(--rf-charcoal)]">
            {text}, Coach Jap
          </p>
          <p className="text-sm text-[var(--rf-muted)]">
            Built for the floor, not the spreadsheet.
          </p>
        </div>
      </div>
      <p className="text-xs text-[var(--rf-muted)] max-w-xs leading-relaxed">
        Clients, targets, and your #1 focus — everything below pulls from your
        vault.
      </p>
    </div>
  );
}
