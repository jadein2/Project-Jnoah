import { NextResponse } from "next/server";
import { getClients, vaultExists } from "@/lib/vault";

export async function GET() {
  if (!(await vaultExists())) {
    return NextResponse.json({ error: "Vault not found" }, { status: 404 });
  }
  return NextResponse.json({ clients: await getClients() });
}
