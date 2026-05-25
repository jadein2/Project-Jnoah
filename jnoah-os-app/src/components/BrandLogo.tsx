type BrandLogoProps = {
  size?: number;
  className?: string;
};

/** Urban Strong Fitness Olongapo — barbell + skyline mark (white on dark) */
export function BrandLogo({ size = 40, className = "" }: BrandLogoProps) {
  return (
    // Native img — reliable for local /public assets (Next/Image was failing to render)
    <img
      src="/logos/urban-strong-fitness.png"
      alt="Urban Strong Fitness Olongapo"
      width={size}
      height={size}
      decoding="async"
      className={`block object-contain ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    />
  );
}
