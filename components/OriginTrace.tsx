import { cn } from "@/lib/utils";

// Teal light tracing the lower-right rock, from
// edgecipline-origin-section-04-assets/accents/emerald-rock-trace.svg (glow
// thinned to match the comp). ScrollScene draws it after the founders arrive.
const BEAM = "M651 1016C618 1059 609 1106 608 1139C608 1170 640 1195 701 1215";

interface OriginTraceProps {
  className?: string;
}

export default function OriginTrace({ className }: OriginTraceProps) {
  return (
    <svg
      viewBox="0 0 864 1536"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "pointer-events-none",
        className,
      )}
    >
      <defs>
        <filter id="origin-trace-glow" x="-20%" y="-10%" width="140%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path d={BEAM} pathLength={1} stroke="#17F2BB" strokeWidth={7} opacity={0.55} filter="url(#origin-trace-glow)" data-scroll-start="0.56" data-scroll-end="0.81" className="scene-draw" />
        <path d={BEAM} pathLength={1} stroke="#51FFD5" strokeWidth={2} data-scroll-start="0.56" data-scroll-end="0.81" className="scene-draw" />
      </g>
    </svg>
  );
}
