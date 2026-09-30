import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// "How it works" steps for Section 05. Explanatory rows, not controls: nothing
// here is clickable. Icons are the kit's step SVGs; the gold connecting line
// and dots follow steps/gold-timeline.svg, re-spaced to the comp's icon
// centres (636, 598 / 780 / 959). The group box starts at (590, 548) so its
// own entry (EntryScope `data-entry`) fires when the steps scroll into view:
// rows rise at 0 / 220 / 440ms, halos run one at a time, the line lights down.
const ICON_PATHS: Record<string, ReactNode> = {
  upload: <path d="M32 42V10m-12 12 12-12 12 12M13 40v10a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V40" />,
  review: (
    <>
      <rect x="16" y="10" width="32" height="44" rx="3" />
      <path d="M23 22h18M23 30h18M23 38h18M23 46h12" />
    </>
  ),
  learn: <path d="M13 50V34m10 16V22m10 28V31m10 19V15m10 35V25" />,
};

const STEPS = [
  { icon: "upload", title: "Upload", lines: ["Add your", "trade screenshot."], className: "top-12 [--entry-delay:0ms] [--entry-halo-delay:0ms]" },
  { icon: "review", title: "Review", lines: ["We capture", "the key details."], className: "top-194 [--entry-delay:220ms] [--entry-halo-delay:600ms]" },
  {
    icon: "learn",
    title: "Learn",
    lines: ["Keep it organized", "to see your", "patterns over time."],
    className: "top-373 [--entry-delay:440ms] [--entry-halo-delay:1200ms]",
  },
];

interface ProductStepsProps {
  className?: string;
}

export default function ProductSteps({ className }: ProductStepsProps) {
  return (
    <div data-entry="" className={cn("entry-group absolute left-590 top-548 h-540 w-274", className)}>
      {/* Connecting line: dim base, a lit copy that grows down, and the two joints. */}
      <div aria-hidden="true" className="absolute left-45 top-88 h-285 w-[1.5px] bg-[#c1852e]/35" />
      <div aria-hidden="true" className="entry-grow absolute left-45 top-88 h-285 w-[1.5px] origin-top bg-linear-to-b from-[#f6d26c] to-[#c1852e]" />
      {["top-112", "top-300"].map((top) => (
        <span key={top} aria-hidden="true" className={cn("absolute left-46 size-10 -translate-x-1/2 rounded-full bg-[#f4c761]", top)} />
      ))}

      <ol aria-label="How it works" className="list-none">
        {STEPS.map(({ icon, title, lines, className: row }, i) => (
          <li key={title} className={cn("entry-step absolute left-0", row)}>
            <span
              aria-hidden="true"
              className="entry-halo absolute left-8 top-0 flex size-76 items-center justify-center rounded-full border border-[#8a9290]/45 bg-[#0a1113]/85"
            >
              <svg viewBox="0 0 64 64" className="size-36" fill="none" stroke="#E9F1EF" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                {ICON_PATHS[icon]}
              </svg>
            </span>
            {/* 161 ref px column up to the artboard's right margin. The comp's 18px copy is
                ~8px on phones, so it keeps a 10px floor and each comp line may wrap here;
                the shadow keeps it readable over the amber bokeh. */}
            <div className="absolute left-105 top-10 w-161 [text-shadow:0_1px_calc(var(--spacing)*10)_rgba(0,0,0,0.9)]">
              <div aria-hidden="true" className="flex h-20 items-center gap-8">
                <span className="font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*19))] leading-none text-[#f3c45d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-[1.5px] w-46 bg-[#c89a45]" />
                <span className="-ml-2 size-9 rounded-full bg-[#f4c761]" />
              </div>
              <h3 className="mt-6 whitespace-nowrap text-[length:max(13px,calc(var(--spacing)*30))] font-bold! leading-[1.1] tracking-[-0.01em]! text-white">
                {title}
              </h3>
              <p className="mt-8 text-[length:max(10px,calc(var(--spacing)*18))] leading-[1.25] text-[#a3a9ad]">
                {lines.map((line, j) => (
                  <span key={line} className="block">
                    {line}
                    {j < lines.length - 1 && " "}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
