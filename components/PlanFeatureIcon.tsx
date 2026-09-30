import type { ReactNode } from "react";
import type { PlanFeatureIcon as IconName } from "@/lib/plans";
import { cn } from "@/lib/utils";

// Strokes from the section 09 kit (icons/*.svg, 64-unit box).
const ICONS: Record<IconName, { color: string; paths: ReactNode }> = {
  "trade-review": {
    color: "#00F5D2",
    paths: (
      <>
        <path d="M12 48V35M22 48V27M32 48V18M42 48V29M52 48V23" strokeWidth={4} />
        <circle cx="52" cy="17" r="2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  coaching: {
    color: "#FFC14C",
    paths: (
      <>
        <circle cx="28" cy="35" r="19" strokeWidth={2.5} />
        <circle cx="28" cy="35" r="10" strokeWidth={2.5} />
        <path d="M28 35 52 10m-7 1 7-1-1 7" strokeWidth={3} />
      </>
    ),
  },
  "trading-dna": {
    color: "#00F5D2",
    paths: (
      <>
        <path d="M31 13c-6-6-15-2-15 5-7 1-8 9-3 12-5 5-2 12 3 13 0 8 10 11 15 4V13Zm2 0c6-6 15-2 15 5 7 1 8 9 3 12 5 5 2 12-3 13 0 8-10 11-15 4V13Z" strokeWidth={2.7} />
        <path d="M22 24c6 0 7 7 2 9m-3 8c4-5 10-2 10 5m11-22c-6 0-7 7-2 9m3 8c-4-5-10-2-10 5" strokeWidth={2.4} />
      </>
    ),
  },
};

interface PlanFeatureIconProps {
  name: IconName;
  className?: string;
}

export default function PlanFeatureIcon({ name, className }: PlanFeatureIconProps) {
  const { color, paths } = ICONS[name];
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      color={color}
    >
      {paths}
    </svg>
  );
}
