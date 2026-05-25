import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { vaultFile, getVaultPath } from "./config";
import { daysUntil } from "./dates";
import { parseMarkdownTable } from "./parse-tables";

export type GoalRow = {
  goal: string;
  slug: string;
  type: string;
  priority: string;
  status: string;
  target: string;
  deadline: string;
  file: string;
};

export type ClientRow = {
  client: string;
  serviceTier: string;
  currentCycle: string;
  phaseWeek: string;
  file: string;
  slug: string;
  isTest: boolean;
};

async function readText(...segments: string[]): Promise<string> {
  return fs.readFile(vaultFile(...segments), "utf-8");
}

export async function getGoals(): Promise<GoalRow[]> {
  const raw = await readText("GOALS", "active-goals.md");
  const rows = parseMarkdownTable(raw, "## Active Goals");
  return rows.map((r) => ({
    goal: r["Goal"] ?? "",
    slug: r["Slug"] ?? "",
    type: r["Type"] ?? "",
    priority: r["Priority"] ?? "",
    status: r["Status"] ?? "",
    target: r["Target"] ?? "",
    deadline: r["Deadline"] ?? "",
    file: r["File"] ?? "",
  }));
}

function clientSlugFromFile(filePath: string): string {
  const normalized = filePath.replace(/\\/g, "/");
  const match = normalized.match(/\/MEMORY\/clients\/([^/]+)\//);
  return match?.[1] ?? "";
}

export async function getClients(): Promise<ClientRow[]> {
  const raw = await readText("MEMORY", "clients", "registry.md");
  const real = parseMarkdownTable(raw, "## Real Clients");
  const test = parseMarkdownTable(raw, "## Test / Dummy Clients");

  const mapRow = (r: Record<string, string>, isTest: boolean): ClientRow => {
    const file = r["File"] ?? "";
    return {
      client: r["Client"] ?? "",
      serviceTier: r["Service Tier"] ?? "",
      currentCycle: r["Current Cycle"] ?? "",
      phaseWeek: r["Phase / Week"] ?? "",
      file,
      slug: clientSlugFromFile(file),
      isTest,
    };
  };

  return [
    ...real.map((r) => mapRow(r, false)),
    ...test.map((r) => mapRow(r, true)),
  ].filter((c) => c.slug);
}

export async function getClientProfile(slug: string): Promise<{
  slug: string;
  content: string;
  html: string;
  meta: Record<string, unknown>;
}> {
  const profilePath = vaultFile("MEMORY", "clients", slug, `${slug}.md`);
  const raw = await fs.readFile(profilePath, "utf-8");
  const { content, data } = matter(raw);
  return { slug, content, html: content, meta: data };
}

export async function getClientBySlug(slug: string): Promise<ClientRow | null> {
  const clients = await getClients();
  return clients.find((c) => c.slug === slug) ?? null;
}

export async function getTodayBrief() {
  const goals = await getGoals();
  const clients = await getClients();
  const p1 = goals.find((g) => g.priority === "1") ?? goals[0];
  const realClients = clients.filter((c) => !c.isTest);

  const withDeadlines = goals
    .filter((g) => g.deadline?.trim())
    .map((g) => ({ goal: g, daysLeft: daysUntil(g.deadline) }))
    .filter((x) => x.daysLeft !== null)
    .sort((a, b) => (a.daysLeft ?? 999) - (b.daysLeft ?? 999));

  return {
    vaultPath: getVaultPath(),
    generatedAt: new Date().toISOString(),
    p1Focus: p1,
    goals,
    clientCount: realClients.length,
    testClientCount: clients.length - realClients.length,
    clients: realClients,
    nearestDeadline: withDeadlines[0] ?? null,
  };
}

export async function vaultExists(): Promise<boolean> {
  try {
    await fs.access(vaultFile("CLAUDE.md"));
    return true;
  } catch {
    return false;
  }
}

export function listWatchPaths(): string[] {
  const base = getVaultPath();
  return [
    path.join(base, "GOALS"),
    path.join(base, "MEMORY", "clients"),
  ];
}
