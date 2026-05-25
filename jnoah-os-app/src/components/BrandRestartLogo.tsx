type BrandRestartLogoProps = {
  size?: number;
  className?: string;
};

/** Restart Fitness PH — charcoal + gold RF monogram (SVG; JPG asset was corrupt) */
export function BrandRestartLogo({
  size = 40,
  className = "",
}: BrandRestartLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Restart Fitness PH"
      className={`block shrink-0 rounded-[var(--rf-radius)] overflow-hidden ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <rect width="44" height="44" fill="#1A1A18" />
      <text
        x="22"
        y="27"
        textAnchor="middle"
        fill="#C9A84C"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontSize="17"
        fontWeight="600"
      >
        RF
      </text>
      <rect x="14" y="36" width="16" height="2" fill="#E06D22" />
    </svg>
  );
}
