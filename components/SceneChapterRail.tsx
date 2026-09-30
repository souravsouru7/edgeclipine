import { cn } from "@/lib/utils";

interface SceneChapterRailProps {
  /** Two-digit chapter, e.g. "01". */
  chapter: string;
  className?: string;
}

const NEXT_CHAPTER: Record<string, { href: string; label: string } | null> = {
  "01": { href: "#the-loop", label: "The loop" },
  "02": { href: "#the-story", label: "The story" },
  "03": { href: "#the-origin", label: "The origin" },
  "04": { href: "#the-product", label: "The product" },
  "05": { href: "#the-coach", label: "The coach" },
  "06": { href: "#the-dna", label: "Trading DNA" },
  "07": { href: "#the-habits", label: "Habits" },
  "08": { href: "#the-pricing", label: "Pricing" },
  "09": { href: "#the-questions", label: "Questions and waitlist" },
  "10": null,
};

// The fill and dot follow --chapter-progress from ScrollScene / EntryScope.
export default function SceneChapterRail({ chapter, className }: SceneChapterRailProps) {
  const next = NEXT_CHAPTER[chapter];
  if (!next) return null;

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-30", className)}>
      <a
        href={next.href}
        aria-label={`Go to ${next.label}`}
        className="chapter-next pointer-events-auto absolute left-793 top-118 flex min-h-[44px] w-[max(44px,calc(var(--spacing)*100))] -translate-x-1/2 flex-col items-center rounded-lg py-2 font-(family-name:--font-scene-mono) text-[#30eba6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30eba6]"
      >
        <span className="chapter-next-label text-[length:max(10px,calc(var(--spacing)*16))] font-semibold leading-none tracking-[0.18em]">NEXT</span>
        <span aria-hidden="true" className="mt-[calc(var(--spacing)*20)] h-26 w-3 bg-current shadow-[0_0_8px_rgba(48,235,166,0.6)]" />
        <span aria-hidden="true" className="relative mt-11 h-135 w-px bg-[repeating-linear-gradient(to_bottom,#626b70_0_calc(var(--spacing)*25),transparent_0_calc(var(--spacing)*33))] mask-[linear-gradient(to_bottom,black,transparent)]">
          <span className="absolute inset-0 origin-top bg-[#30eba6] shadow-[0_0_6px_rgba(48,235,166,0.75)]" style={{ transform: "scaleY(var(--chapter-progress, 0))" }} />
          <span className="chapter-next-dot absolute -left-[2.5px] h-[6px] w-[6px] rounded-full bg-[#30eba6] shadow-[0_0_10px_2px_rgba(48,235,166,0.75)]" style={{ top: "calc(var(--chapter-progress, 0) * 100%)" }} />
        </span>
        <svg aria-hidden="true" viewBox="0 0 14 8" className="chapter-next-arrow mt-5 h-[6px] w-[11px] fill-none stroke-current stroke-[1.5]">
          <path d="m1 1 6 6 6-6" />
        </svg>
        <span className="mt-7 max-w-[calc(var(--spacing)*112)] text-center text-[length:max(8px,calc(var(--spacing)*13))] uppercase leading-[1.3] tracking-[0.12em] text-[#a7b1b4]">{next.label}</span>
      </a>
    </div>
  );
}
