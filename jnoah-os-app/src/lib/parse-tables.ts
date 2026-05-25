export function parseMarkdownTable(
  content: string,
  sectionMarker?: string
): Record<string, string>[] {
  let body = content;
  if (sectionMarker) {
    const idx = content.indexOf(sectionMarker);
    if (idx === -1) return [];
    const after = content.slice(idx + sectionMarker.length);
    const nextSection = after.search(/\n## /);
    body = nextSection === -1 ? after : after.slice(0, nextSection);
  }

  const lines = body.split("\n").filter((l) => l.trim().startsWith("|"));
  if (lines.length < 2) return [];

  const headers = lines[0]
    .split("|")
    .map((h) => h.trim())
    .filter(Boolean);

  const rows: Record<string, string>[] = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line.includes("|")) continue;
    const cells = line
      .split("|")
      .map((c) => c.trim())
      .filter((_, idx, arr) => idx > 0 && idx < arr.length);
    if (cells.length < headers.length) continue;
    const row: Record<string, string> = {};
    headers.forEach((h, j) => {
      row[h] = cells[j] ?? "";
    });
    if (Object.values(row).some((v) => v && !v.match(/^[-:]+$/))) {
      rows.push(row);
    }
  }
  return rows;
}
