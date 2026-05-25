/** Verified gym / fitness portrait URLs — real photos only */

type GymPhoto =
  | { provider: "unsplash"; id: string }
  | { provider: "pexels"; id: number };

/** Tested working — people training, in gym, fitness portraits */
const GYM_PHOTOS: GymPhoto[] = [
  { provider: "unsplash", id: "photo-1534438327276-14e5300c3a48" },
  { provider: "unsplash", id: "photo-1594381898411-846e7d193883" },
  { provider: "unsplash", id: "photo-1517836357463-d25dfeac3438" },
  { provider: "unsplash", id: "photo-1549060279-7e168fcee0c2" },
  { provider: "unsplash", id: "photo-1518611012118-696072aa579a" },
  { provider: "unsplash", id: "photo-1571902943202-507ec2618e8f" },
  { provider: "unsplash", id: "photo-1623874514711-0f321325f318" },
  { provider: "unsplash", id: "photo-1571019613454-1cb2f99b2d8b" },
  { provider: "unsplash", id: "photo-1508214751196-bcfd4ca60f91" },
  { provider: "unsplash", id: "photo-1490645935967-10de6ba17061" },
  { provider: "unsplash", id: "photo-1558618666-fcd25c85cd64" },
  { provider: "pexels", id: 5327523 },
  { provider: "pexels", id: 2247179 },
  { provider: "pexels", id: 19663503 },
  { provider: "pexels", id: 4761668 },
  { provider: "pexels", id: 6456285 },
  { provider: "pexels", id: 841130 },
  { provider: "pexels", id: 1552242 },
  { provider: "pexels", id: 3253501 },
  { provider: "pexels", id: 3823037 },
  { provider: "pexels", id: 4056535 },
  { provider: "pexels", id: 414029 },
  { provider: "pexels", id: 1229356 },
  { provider: "pexels", id: 1552103 },
  { provider: "pexels", id: 2261477 },
  { provider: "pexels", id: 3490348 },
  { provider: "pexels", id: 3490368 },
  { provider: "pexels", id: 1552249 },
  { provider: "pexels", id: 2261481 },
  { provider: "pexels", id: 3490369 },
  { provider: "pexels", id: 3257723 },
  { provider: "pexels", id: 1552250 },
  { provider: "pexels", id: 1552106 },
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function photoToUrl(photo: GymPhoto, size: number): string {
  if (photo.provider === "unsplash") {
    return `https://images.unsplash.com/${photo.id}?w=${size}&h=${size}&fit=crop&crop=faces&auto=format&q=85`;
  }
  return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${size}&w=${size}`;
}

function uiAvatarUrl(name: string, size: number): string {
  const label = encodeURIComponent(name.replace(/\s+/g, "+"));
  return `https://ui-avatars.com/api/?name=${label}&size=${size}&background=E06D22&color=F5F5F0&bold=true&format=png`;
}

/** Real gym photos first; rotate through pool on error */
export function getClientAvatarSources(
  slug: string,
  name: string,
  size = 128
): string[] {
  const n = GYM_PHOTOS.length;
  const base = hashSlug(slug) % n;
  const urls: string[] = [];

  for (let i = 0; i < 4; i++) {
    urls.push(photoToUrl(GYM_PHOTOS[(base + i) % n], size));
  }

  urls.push(uiAvatarUrl(name, size));
  return urls;
}

export function getClientInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
