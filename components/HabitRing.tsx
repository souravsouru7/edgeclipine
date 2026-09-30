import { cn } from "@/lib/utils";

// loop/habit-cycle-four-segments.svg, clockwise from Notice (431,649) through
// Pause (758,897), Review (430,1157) and Repeat (112,901), in artboard units.
// Each crisp line draws for 450ms, 100ms after the node it leaves has arrived
// (700, 1250, 1800, 2350ms); its soft glow fades in as it lands.
const SEGMENTS = [
  { id: "notice-to-pause", d: "M431 649C590 632 748 739 758 897", color: "#FFB942", draw: "[--entry-delay:700ms]", glow: "[--entry-delay:1150ms]" },
  { id: "pause-to-review", d: "M758 897C770 1057 611 1167 430 1157", color: "#00F6D0", draw: "[--entry-delay:1250ms]", glow: "[--entry-delay:1700ms]" },
  { id: "review-to-repeat", d: "M430 1157C252 1170 111 1071 112 901", color: "#00F6D0", draw: "[--entry-delay:1800ms]", glow: "[--entry-delay:2250ms]" },
  { id: "repeat-to-notice", d: "M112 901C105 745 266 643 431 649", color: "#FFB942", draw: "[--entry-delay:2350ms]", glow: "[--entry-delay:2800ms]" },
];

interface HabitRingProps {
  className?: string;
}

// The loop behind the phone. The viewBox starts at artboard y=530 to match the
// HabitLoop box, so paths keep the kit's coordinates. Only the 2.5-unit line is
// drawn (stroke-dashoffset); the blurred glow layer is static and just fades
// in, so no blur is recomputed while anything animates.
export default function HabitRing({ className }: HabitRingProps) {
  return (
    <svg
      viewBox="0 530 864 750"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none absolute inset-0 size-full overflow-visible", className)}
    >
      <defs>
        <filter id="habit-ring-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        {/* Shared by the badges in HabitLoopNodes (nodes/*-node.svg's glow). */}
        <filter id="habit-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <g fill="none" strokeLinecap="round">
        {SEGMENTS.map(({ id, d, color, draw, glow }) => (
          <g key={id}>
            <path d={d} stroke={color} strokeWidth={11} opacity={0.6} filter="url(#habit-ring-glow)" className={cn("entry-reveal [--entry-dur:350ms] [--entry-rise:0px]", glow)} />
            <path d={d} pathLength={1} stroke={color} strokeWidth={2.5} className={cn("entry-draw [--entry-dur:450ms]", draw)} />
          </g>
        ))}
      </g>
    </svg>
  );
}
