import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Chaos-to-calm signal overlay, drawn on the 864×1536 artboard. CHAOS and CALM
// are the paths from edgecipline-stop-trading-hero-assets/signals/
// chaos-to-calm-overlay.svg; the extra strands add the tangle of the target
// comp. Everything converges on the phone's left edge (≈x300, y1005), and the
// calm line re-emerges from behind the phone. Paths draw once on load, then a
// faint calm signal breathes. Under reduced motion they render fully drawn.
const CHAOS =
  "M0 928 22 947 42 884 60 944 80 825 101 1024 127 942 150 957 178 884 203 1010 230 977 256 1034 282 1003 307 1024";
const CALM =
  "M305 1040 344 1044 389 1038 431 1042 473 1037 521 1040 570 1041 612 1048 653 1046 694 1048 738 1045 790 1046 864 1045";

const FOCUS = { x: 302, y: 1006 };

// Wavy strands whose amplitude collapses into FOCUS: [baseline offset, amplitude,
// frequency, phase, colour, opacity]. Deterministic, computed once at build time.
const STRAND_SPECS: [number, number, number, number, string, number][] = [
  [-120, 70, 0.045, 0.3, "#D9A752", 0.55],
  [60, 85, 0.038, 2.1, "#D9A752", 0.45],
  [-60, 110, 0.03, 4.0, "#E0923E", 0.4],
  [130, 60, 0.052, 1.2, "#D9A752", 0.35],
  [-170, 55, 0.06, 5.2, "#E0923E", 0.3],
  [10, 95, 0.042, 3.3, "#D9A752", 0.5],
  [-30, 80, 0.036, 0.9, "#35D6A0", 0.4],
  [100, 70, 0.047, 2.8, "#35D6A0", 0.32],
  [-100, 60, 0.055, 4.6, "#35D6A0", 0.26],
  [170, 45, 0.04, 1.7, "#35D6A0", 0.22],
];

const STRANDS = STRAND_SPECS.map(([offset, amp, freq, phase, color, opacity]) => {
  const pts: string[] = [];
  for (let x = 0; x <= FOCUS.x; x += 6) {
    const t = 1 - x / FOCUS.x; // 1 at the left edge → 0 at the phone
    const y = FOCUS.y + offset * t + amp * t ** 0.7 * Math.sin(freq * x + phase);
    pts.push(`${x} ${y.toFixed(1)}`);
  }
  return { d: `M${pts.join(" ")} ${FOCUS.x} ${FOCUS.y}`, color, opacity };
});

interface HeroSignalsProps {
  className?: string;
}

export default function HeroSignals({ className }: HeroSignalsProps) {
  return (
    <svg viewBox="0 0 864 1536" aria-hidden="true" focusable="false" className={cn("pointer-events-none", className)}>
      <defs>
        <filter id="hero-signal-glow" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <radialGradient id="hero-signal-spark">
          <stop offset="0" stopColor="#FFE6B0" />
          <stop offset="0.35" stopColor="#F2A53C" stopOpacity="0.7" />
          <stop offset="1" stopColor="#F2A53C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {STRANDS.map((s, i) => (
          <path
            key={s.d}
            d={s.d}
            pathLength={1}
            stroke={s.color}
            strokeOpacity={s.opacity}
            strokeWidth={1}
            className="hero-anim-draw [--hero-dur:1.3s]"
            style={{ "--hero-delay": `${300 + i * 60}ms` } as CSSProperties}
          />
        ))}
        <path d={CHAOS} pathLength={1} stroke="#D9A752" strokeWidth={8} opacity={0.18} filter="url(#hero-signal-glow)" className="hero-anim-draw [--hero-delay:300ms] [--hero-dur:1.3s]" />
        <path d={CHAOS} pathLength={1} stroke="#D9A752" strokeWidth={1.3} opacity={0.8} className="hero-anim-draw [--hero-delay:300ms] [--hero-dur:1.3s]" />
        <path d={CALM} pathLength={1} stroke="#42FFD0" strokeWidth={12} opacity={0.75} filter="url(#hero-signal-glow)" className="hero-anim-draw [--hero-delay:1450ms] [--hero-dur:0.9s]" />
        <path d={CALM} pathLength={1} stroke="#42FFD0" strokeWidth={2.1} className="hero-anim-draw [--hero-delay:1450ms] [--hero-dur:0.9s]" />
        <path d={CALM} pathLength={1} stroke="#42FFD0" strokeWidth={5} className="hero-signal-live opacity-20" />
      </g>

      <circle cx={FOCUS.x} cy={FOCUS.y} r="26" fill="url(#hero-signal-spark)" className="hero-anim-fade [--hero-delay:1300ms]" />
    </svg>
  );
}
