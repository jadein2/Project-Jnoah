import { NextResponse } from "next/server";
import { getGoals, vaultExists } from "@/lib/vault";

export async function GET() {
  if (!(await vaultExists())) {
    return NextResponse.json({ error: "Vault not found" }, { status: 404 });
  }
  return NextResponse.json({ goals: await getGoals() });
}
