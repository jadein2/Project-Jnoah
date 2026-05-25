import path from "path";
import { JNOAH_VAULT_PATH } from "../../jnoah.config";

export function getVaultPath(): string {
  return process.env.JNOAH_VAULT_PATH ?? JNOAH_VAULT_PATH;
}

export function vaultFile(...segments: string[]): string {
  return path.join(getVaultPath(), ...segments);
}
