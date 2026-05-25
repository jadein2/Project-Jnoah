import { NextResponse } from "next/server";
import {
  getClientBySlug,
  getClientProfile,
  vaultExists,
} from "@/lib/vault";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!(await vaultExists())) {
    return NextResponse.json({ error: "Vault not found" }, { status: 404 });
  }

  const client = await getClientBySlug(slug);
  if (!client) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  try {
    const profile = await getClientProfile(slug);
    return NextResponse.json({ ...profile, client });
  } catch {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }
}
