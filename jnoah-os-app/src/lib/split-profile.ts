export type ProfileTab = {
  id: string;
  label: string;
  content: string;
};

type Section = { title: string; content: string };

const TAB_RULES: { id: string; label: string; match: RegExp }[] = [
  {
    id: "overview",
    label: "Overview",
    match: /pipeline|personal profile|service profile|active record/i,
  },
  {
    id: "training",
    label: "Training",
    match: /baseline|pr tracker|body metrics|cycle history/i,
  },
  {
    id: "health",
    label: "Health & goals",
    match: /health profile|nutrition profile|goal profile/i,
  },
  {
    id: "notes",
    label: "Coach notes",
    match: /coach notes/i,
  },
];

function parseSections(markdown: string): Section[] {
  const trimmed = markdown.trim();
  if (!trimmed) return [];

  const body = trimmed.replace(/^#\s+[^\n]+\n+/, "").trim();
  const chunks = body.split(/\n(?=## )/);
  return chunks.map((chunk) => {
    const lines = chunk.split("\n");
    const first = lines[0] ?? "";
    const title = first.replace(/^##\s*/, "").trim() || "Introduction";
    return { title, content: chunk.trim() };
  });
}

function assignTabId(title: string): string {
  for (const rule of TAB_RULES) {
    if (rule.match.test(title)) return rule.id;
  }
  return "overview";
}

export function splitProfileIntoTabs(markdown: string): ProfileTab[] {
  const sections = parseSections(markdown);
  if (sections.length === 0) {
    return [{ id: "full", label: "Profile", content: markdown }];
  }

  const buckets = new Map<string, Section[]>();
  for (const section of sections) {
    const tabId = assignTabId(section.title);
    const list = buckets.get(tabId) ?? [];
    list.push(section);
    buckets.set(tabId, list);
  }

  const tabs: ProfileTab[] = [];
  for (const rule of TAB_RULES) {
    const list = buckets.get(rule.id);
    if (!list?.length) continue;
    tabs.push({
      id: rule.id,
      label: rule.label,
      content: list.map((s) => s.content).join("\n\n"),
    });
  }

  const assigned = new Set(TAB_RULES.map((r) => r.id));
  const other = sections.filter((s) => !assigned.has(assignTabId(s.title)));
  if (other.length) {
    const existing = tabs.find((t) => t.id === "overview");
    const extra = other.map((s) => s.content).join("\n\n");
    if (existing) {
      existing.content += `\n\n${extra}`;
    } else {
      tabs.push({ id: "overview", label: "Overview", content: extra });
    }
  }

  if (tabs.length === 0) {
    return [{ id: "full", label: "Profile", content: markdown }];
  }

  return tabs;
}
