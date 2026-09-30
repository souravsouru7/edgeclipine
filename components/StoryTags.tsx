import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Live behaviour tags over the mirror, styled after
// edgecipline-story-section-03-assets/tags/*.svg (the SVG text is not used).
// Positions are the comp's tag centres; the tilt follows the mirror's face.
const TAGS: { label: string; icon: ReactNode; className: string }[] = [
  {
    label: "FOMO",
    icon: <path d="M28 4 13 34h13l-4 26 25-34H33l4-22Z" />,
    className: "left-326 top-609",
  },
  {
    label: "Revenge",
    icon: (
      <>
        <circle cx="30" cy="30" r="24" />
        <path d="M19 19l6 5m16-5-6 5M20 42q10-9 20 0" />
      </>
    ),
    className: "left-277 top-736",
  },
  {
    label: "Moved stop",
    icon: <path d="M14 43V23m10 26V12m10 37V19m10 24V8" />,
    className: "left-316 top-838",
  },
];

interface StoryTagsProps {
  className?: string;
}

export default function StoryTags({ className }: StoryTagsProps) {
  return (
    <ul aria-label="Decisions around a trade" className={cn("absolute inset-0 list-none", className)}>
      {TAGS.map(({ label, icon, className: position }, index) => (
        <li key={label} data-scroll-start={0.36 + index * 0.1} data-scroll-end={0.52 + index * 0.1} className={cn("scene-reveal absolute", position)}>
          <span className="flex h-58 -translate-x-1/2 -translate-y-1/2 rotate-[8deg] items-center gap-10 whitespace-nowrap rounded-[calc(var(--spacing)*13)] border border-[#b87b3d]/65 bg-[#101719]/65 pl-12 pr-20 text-[length:max(10px,calc(var(--spacing)*21))] text-[#e9e7e2] shadow-[0_calc(var(--spacing)*8)_calc(var(--spacing)*24)_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <svg
              viewBox="0 0 60 62"
              aria-hidden="true"
              className="size-32 shrink-0"
              fill="none"
              stroke="#EDA34C"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icon}
            </svg>
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
