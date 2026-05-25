import { NextResponse } from "next/server";
import { getTodayBrief, vaultExists } from "@/lib/vault";

export async function GET() {
  if (!(await vaultExists())) {
    return NextResponse.json(
      { error: "Vault not found. Set JNOAH_VAULT_PATH in .env.local" },
      { status: 404 }
    );
  }
  const data = await getTodayBrief();
  return NextResponse.json(data);
}
