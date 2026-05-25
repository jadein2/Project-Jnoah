export function formatRelativeTime(iso: string | Date): string {
  const then = typeof iso === "string" ? new Date(iso) : iso;
  const sec = Math.floor((Date.now() - then.getTime()) / 1000);
  if (sec < 0) return "Just now";
  if (sec < 15) return "Just now";
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  return `${day}d ago`;
}
