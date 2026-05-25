import { AppShell } from "./AppShell";
import { VaultUnavailable } from "./VaultUnavailable";
import { vaultExists } from "@/lib/vault";

export async function Shell({ children }: { children: React.ReactNode }) {
  if (!(await vaultExists())) {
    return <VaultUnavailable />;
  }
  return <AppShell>{children}</AppShell>;
}
