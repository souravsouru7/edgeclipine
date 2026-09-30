import { cn } from "@/lib/utils";

// Orange-to-mint signal from the mirror's edge to the insight panel, from
// edgecipline-story-section-03-assets/trail/chart-to-insight-glow.svg (glow
// thinned to match the comp). ScrollScene draws it as the mirror appears; nodes
// and the spark follow the line.
const TRACK =
  "M474 695C560 684 610 713 622 758C665 768 704 784 766 819C805 849 850 866 823 907C804 932 717 917 659 952C634 974 688 986 693 1020";

const NODES = [
  { cx: 620, cy: 758 },
  { cx: 765, cy: 819 },
  { cx: 758, cy: 913 },
];

interface StoryTrailProps {
  className?: string;
}

export default function StoryTrail({ className }: StoryTrailProps) {
  return (
    <svg
      viewBox="0 0 864 1536"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <filter id="story-trail-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <linearGradient id="story-trail-light">
          <stop stopColor="#FFB85C" />
          <stop offset=".28" stopColor="#F7A854" />
          <stop offset=".42" stopColor="#42FFD1" />
          <stop offset="1" stopColor="#34E7C3" />
        </linearGradient>
        <radialGradient id="story-trail-spark">
          <stop offset="0" stopColor="#FFF1CC" />
          <stop offset=".35" stopColor="#FFB85C" stopOpacity=".8" />
          <stop offset="1" stopColor="#FFB85C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path d={TRACK} pathLength={1} stroke="url(#story-trail-light)" strokeWidth={9} opacity={0.5} filter="url(#story-trail-glow)" data-scroll-start="0.38" data-scroll-end="0.75" className="scene-draw" />
        <path d={TRACK} pathLength={1} stroke="url(#story-trail-light)" strokeWidth={2.5} data-scroll-start="0.38" data-scroll-end="0.75" className="scene-draw" />
      </g>
      <circle cx="474" cy="695" r="16" fill="url(#story-trail-spark)" data-scroll-start="0.38" data-scroll-end="0.48" className="scene-fade" />
      {NODES.map(({ cx, cy }, index) => (
        <circle key={cx} cx={cx} cy={cy} r={8} fill="#101D1C" stroke="#5DFFD7" strokeWidth={3} data-scroll-start={0.5 + index * 0.08} data-scroll-end={0.59 + index * 0.08} className="scene-fade" />
      ))}
    </svg>
  );
}
