import { LOOP_STAGES } from "@/lib/loopScene";
import { cn } from "@/lib/utils";

// Gold callout leaders from edgecipline-loop-section-02-assets/path/
// gold-callout-leaders.svg as one full-canvas layer; each leader fades in with
// its stage through ScrollScene.
interface LoopLeadersProps {
  className?: string;
}

export default function LoopLeaders({ className }: LoopLeadersProps) {
  return (
    <svg viewBox="0 0 864 1536" aria-hidden="true" focusable="false" className={cn("pointer-events-none", className)}>
      {LOOP_STAGES.map(({ number, leader }, index) => (
        <g key={number} data-scroll-start={0.32 + index * 0.15} data-scroll-end={0.44 + index * 0.15} className="scene-fade">
          <path d={`M${leader.x0} ${leader.y}H${leader.x1}`} stroke="#D8A94E" strokeWidth={1.2} />
          <circle cx={leader.x1} cy={leader.y} r={4.5} fill="#F7CE6C" />
        </g>
      ))}
    </svg>
  );
}
