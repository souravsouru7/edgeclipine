// Restrained chart texture behind the Watch Demo tile: a soft glow under the
// play icon, blurred "screen" columns and a small rising sparkline. Drawn in
// the tile's own 443×116 reference box and stretched to it.
export default function HeroDemoTexture() {
  return (
    <svg
      viewBox="0 0 443 116"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full"
    >
      <defs>
        <radialGradient id="demo-tile-glow" cx="0.14" cy="0.95" r="0.35">
          <stop offset="0" stopColor="#2fd79a" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2fd79a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="demo-tile-area" x2="0" y2="1">
          <stop offset="0" stopColor="#41f5af" stopOpacity="0.16" />
          <stop offset="1" stopColor="#41f5af" stopOpacity="0" />
        </linearGradient>
        <filter id="demo-tile-blur">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <rect width="443" height="116" fill="url(#demo-tile-glow)" />
      <g fill="#fff" filter="url(#demo-tile-blur)">
        <rect x="262" y="14" width="34" height="90" opacity="0.035" />
        <rect x="318" y="6" width="22" height="100" opacity="0.05" />
        <rect x="372" y="10" width="46" height="96" opacity="0.04" />
        <circle cx="186" cy="22" r="3" opacity="0.25" />
      </g>
      <path d="M270 102 292 100 308 101 322 95 338 98 350 90 364 93 378 83 390 80 402 70V116H270Z" fill="url(#demo-tile-area)" />
      <path
        d="M270 102 292 100 308 101 322 95 338 98 350 90 364 93 378 83 390 80 402 70"
        fill="none"
        stroke="#41f5af"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.85"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
