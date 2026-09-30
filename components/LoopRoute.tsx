import { LOOP_STAGES } from "@/lib/loopScene";
import { cn } from "@/lib/utils";

// Emerald ribbon winding past the four stages, from
// edgecipline-loop-section-02-assets/path/emerald-loop-route.svg (glow thinned
// to match the comp). ScrollScene draws it through the section; each arrowhead
// appears with its stage.
const ROUTE =
  "M408 460C375 525 263 564 179 604C94 646 90 687 186 707C307 737 432 685 485 738C561 813 487 853 363 870C217 884 115 898 132 951C155 1014 381 1024 461 1088C545 1155 485 1174 337 1195C188 1219 92 1241 102 1308C112 1368 275 1384 438 1417";

const ARROWHEADS = ["M398 475l10-15 2 17", "M477 732l9 9-14-1", "M136 949l-5 13 15-3", "M430 1410l13 7-15 2"];

interface LoopRouteProps {
  className?: string;
}

export default function LoopRoute({ className }: LoopRouteProps) {
  return (
    <svg
      viewBox="0 0 864 1536"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <filter id="loop-route-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <linearGradient id="loop-route-light" x1="0" x2="1">
          <stop stopColor="#32F2B5" />
          <stop offset=".7" stopColor="#56FFCE" />
          <stop offset="1" stopColor="#12A988" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path d={ROUTE} pathLength={1} stroke="#22EFC0" strokeWidth={9} opacity={0.5} filter="url(#loop-route-glow)" data-scroll-start="0.23" data-scroll-end="0.87" className="scene-draw" />
        <path d={ROUTE} pathLength={1} stroke="url(#loop-route-light)" strokeWidth={2.3} data-scroll-start="0.23" data-scroll-end="0.87" className="scene-draw" />
        {ARROWHEADS.map((d, i) => (
          <path
            key={d}
            d={d}
            stroke="#7CFFDC"
            strokeWidth={2.4}
            strokeLinejoin="round"
            data-scroll-start={0.35 + i * 0.15}
            data-scroll-end={0.46 + i * 0.15}
            className="scene-fade"
          />
        ))}
      </g>
    </svg>
  );
}
