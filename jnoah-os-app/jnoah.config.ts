import fs from "fs";
import path from "path";

/** Vault root: parent when app lives inside Project-Jnoah, else sibling Project-Jnoah folder. */
function resolveDefaultVaultPath(): string {
  const parent = path.resolve(__dirname, "..");
  if (fs.existsSync(path.join(parent, "CLAUDE.md"))) {
    return parent;
  }
  return path.resolve(parent, "Project-Jnoah");
}

/** Canonical Project Jnoah vault. Override with JNOAH_VAULT_PATH env. */
export const JNOAH_VAULT_PATH =
  process.env.JNOAH_VAULT_PATH ?? resolveDefaultVaultPath();
