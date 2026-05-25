import { FolderX, Settings } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { getVaultPath } from "@/lib/config";

export function VaultUnavailable() {
  const vaultPath = getVaultPath();

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col items-center justify-center p-6 sm:p-10 bg-[var(--rf-cream)]">
      <div className="max-w-md w-full rf-card p-8 sm:p-10 text-center">
        <div className="flex justify-center gap-3 mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-[var(--rf-radius)] bg-[#111110] p-1">
            <BrandLogo size={40} />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-[var(--rf-orange)]/10 text-[var(--rf-orange)]">
            <FolderX size={28} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl rf-serif text-[var(--rf-charcoal)] mb-2">
          Vault not found
        </h1>
        <p className="text-sm text-[var(--rf-muted)] leading-relaxed mb-6">
          Jnoah OS can&apos;t read your coaching files. Point{" "}
          <code className="text-xs bg-[var(--rf-cream2)] px-1.5 py-0.5 rounded-[var(--rf-radius)] text-[var(--rf-charcoal)]">
            JNOAH_VAULT_PATH
          </code>{" "}
          at your Project Jnoah folder, then restart the dev server.
        </p>

        <div className="text-left rf-card p-4 bg-[var(--rf-cream2)]/80 mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--rf-muted)] mb-2 flex items-center gap-1.5">
            <Settings size={12} />
            Looking for
          </p>
          <p className="text-xs font-mono text-[var(--rf-charcoal)] break-all leading-relaxed">
            {vaultPath}
            <span className="block mt-2 font-sans text-[var(--rf-muted)]">
              (needs <strong>CLAUDE.md</strong> at the root)
            </span>
          </p>
        </div>

        <p className="text-xs text-[var(--rf-muted)] leading-relaxed">
          Example in <strong>.env.local</strong>:
          <br />
          <code className="text-[11px] mt-2 inline-block">
            JNOAH_VAULT_PATH=D:\URBAN STRONG\Project-Jnoah
          </code>
        </p>
      </div>
    </div>
  );
}
