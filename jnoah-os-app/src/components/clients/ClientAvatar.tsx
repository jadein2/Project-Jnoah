"use client";

import { useMemo, useState } from "react";
import { Dumbbell } from "lucide-react";
import { getClientAvatarSources, getClientInitials } from "@/lib/client-avatars";

type ClientAvatarProps = {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  muted?: boolean;
};

export function ClientAvatar({
  slug,
  name,
  size = 48,
  className = "",
  muted = false,
}: ClientAvatarProps) {
  const sources = useMemo(
    () => getClientAvatarSources(slug, name, size * 2),
    [slug, name, size]
  );
  const [sourceIndex, setSourceIndex] = useState(0);
  const initials = getClientInitials(name);
  const exhausted = sourceIndex >= sources.length;

  if (exhausted) {
    return (
      <div
        className={`shrink-0 flex items-center justify-center rounded-[var(--rf-radius)] bg-gradient-to-br from-[var(--rf-charcoal)] to-[var(--rf-dark)] text-[var(--rf-white)] font-semibold ring-2 ring-[var(--rf-orange)]/50 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.32 }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[var(--rf-radius)] shadow-sm bg-[var(--rf-charcoal)] transition-all ${
        muted
          ? "ring-2 ring-dashed ring-[var(--rf-muted)]/50 opacity-75 grayscale-[25%]"
          : "ring-2 ring-[var(--rf-orange)]/45 group-hover:ring-[var(--rf-orange)]"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        key={sources[sourceIndex]}
        src={sources[sourceIndex]}
        alt={`${name} — gym coaching client`}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        onError={() => setSourceIndex((i) => i + 1)}
        className="h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--rf-black)]/40 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0.5 right-0.5 w-5 h-5 flex items-center justify-center rounded-[var(--rf-radius)] bg-[var(--rf-charcoal)]/90 border border-[var(--rf-orange)]/40"
        aria-hidden
      >
        <Dumbbell size={10} className="text-[var(--rf-orange)]" strokeWidth={2} />
      </div>
    </div>
  );
}
