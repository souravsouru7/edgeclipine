import { cn } from "@/lib/utils";

// Screen UI for the blank coach phone (Section 06). It sits in one overlay
// sized exactly like the phone image and uses the kit's 873×1530 phone
// coordinate system: inside it `--spacing` is one phone unit (100cqw / 873).
// Positions are fitted to this cutout's actual screen (the kit's OVERLAY_LAYOUT
// numbers land ~80 units right of the comp) and the content is skewed -3.5° to
// follow the phone's lean, then clipped to the screen.
//
// It is an illustration: the site has no coaching flow, so "Review" and
// "Set a rule" are drawn pills, not buttons. The coaching message stays
// readable text; the figure caption says what it is.
//
// Entrance (its own `data-entry`, after the phone emerges): the message and
// pills follow the node cues. ScrollScene draws the YESTERDAY→TODAY route while
// the visitor moves through the section.

// yesterday-to-today-route.svg's curve, re-mapped so its nodes sit at
// (215, 300) and (740, 700) on this screen.
const ROUTE = "M215 300C229.7 366.4 380.7 332 452.6 386.6C524.4 437.7 490.7 516 557.9 565.8C621.2 610.9 684.3 626.4 740 700";

const PILL =
  "absolute top-1110 flex h-140 items-center justify-center gap-22 rounded-[calc(var(--spacing)*52)] border-[length:calc(var(--spacing)*2.5)] text-[length:max(10px,calc(var(--spacing)*36))] font-medium whitespace-nowrap text-white";

interface CoachPhoneScreenProps {
  className?: string;
}

export default function CoachPhoneScreen({ className }: CoachPhoneScreenProps) {
  return (
    <figure
      data-entry=""
      className={cn(
        "entry-group @container absolute inset-0 m-0 [--spacing:calc(100cqw/873)] [clip-path:polygon(20%_6.2%,95.6%_4.6%,91%_95%,4.6%_93.5%)]",
        className,
      )}
    >
      <figcaption className="sr-only">Illustration of an Edgecipline coaching prompt after a trade.</figcaption>
      <div className="absolute inset-0 origin-top-left skew-x-[-3.5deg]">
        <svg viewBox="0 0 873 1530" aria-hidden="true" focusable="false" className="absolute inset-0 size-full overflow-visible">
          <defs>
            <filter id="coach-route-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <linearGradient id="coach-route-signal" x1="0" x2="1">
              <stop stopColor="#F7B345" />
              <stop offset=".45" stopColor="#D8A656" />
              <stop offset=".63" stopColor="#55FFD9" />
              <stop offset="1" stopColor="#1FE4C3" />
            </linearGradient>
          </defs>
          <g fill="none" strokeLinecap="round" className="[--entry-delay:900ms]">
            <path d={ROUTE} pathLength={1} stroke="url(#coach-route-signal)" strokeWidth={14} opacity={0.6} filter="url(#coach-route-glow)" data-scroll-start="0.43" data-scroll-end="0.77" className="scene-draw" />
            <path d={ROUTE} pathLength={1} stroke="url(#coach-route-signal)" strokeWidth={3.3} data-scroll-start="0.43" data-scroll-end="0.77" className="scene-draw" />
          </g>
          <path d="M215 314v54M740 714v56" fill="none" stroke="#5FEBD0" opacity={0.45} strokeDasharray="3 7" strokeWidth={1.5} />
          <circle cx="215" cy="300" r="12" fill="#0B1717" stroke="#FFC25D" strokeWidth={3} className="entry-node-pulse origin-center transform-fill [--entry-delay:900ms]" />
          <circle cx="740" cy="700" r="12" fill="#0B1717" stroke="#5BFFDD" strokeWidth={3} className="entry-node-arrive origin-center transform-fill [--entry-delay:1750ms]" />
          {/* App chrome from the comp: back chevron and overflow menu glyphs. */}
          <path d="M226 142l-18 18 18 18" fill="none" stroke="#dfe5e6" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
          <g fill="#dfe5e6">
            <circle cx="782" cy="118" r="4.5" />
            <circle cx="782" cy="138" r="4.5" />
            <circle cx="782" cy="158" r="4.5" />
          </g>
        </svg>

        <span aria-hidden="true" className="entry-reveal absolute left-262 top-262 font-(family-name:--font-scene-mono) text-[length:max(7px,calc(var(--spacing)*22))] uppercase leading-none tracking-[0.32em] text-[#b9c0c2] [--entry-delay:800ms]">
          Yesterday
        </span>
        <span aria-hidden="true" className="entry-reveal absolute right-58 top-612 font-(family-name:--font-scene-mono) text-[length:max(7px,calc(var(--spacing)*22))] uppercase leading-none tracking-[0.32em] text-[#6ff0d4] [--entry-delay:1650ms]">
          Today
        </span>

        <p className="entry-reveal absolute left-180 top-745 whitespace-nowrap text-[length:max(12px,calc(var(--spacing)*62))] font-bold leading-[1.15] tracking-[-0.01em] text-white [--entry-delay:1850ms]">
          You traded
          <br />
          outside your plan
          <br />
          yesterday.
          <span className="entry-reveal mt-10 block font-normal text-[#8b9095] [--entry-delay:1970ms]">What changed?</span>
        </p>

        <span aria-hidden="true" className={cn(PILL, "entry-reveal left-165 w-300 border-[#d4a04c]/75 bg-[#140f08]/70 [--entry-delay:2090ms]")}>
          <svg viewBox="0 0 64 64" className="size-48 shrink-0" fill="none" stroke="#F5B84C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="33" r="22" />
            <path d="M32 19v15l-10 7M15 8v12H3" />
            <path d="M15 20a23 23 0 0 1 39 4" />
          </svg>
          Review
        </span>
        <span aria-hidden="true" className={cn(PILL, "entry-reveal left-490 w-330 border-[#3af8ce]/70 bg-[#06201b]/60 [--entry-delay:2210ms]")}>
          <svg viewBox="0 0 64 64" className="size-48 shrink-0" fill="none" stroke="#3AF8CE" strokeWidth={3} strokeLinecap="round">
            <path d="M8 16h48M8 32h48M8 48h48" />
            <circle cx="26" cy="16" r="5" fill="#071F1C" />
            <circle cx="42" cy="32" r="5" fill="#071F1C" />
            <circle cx="22" cy="48" r="5" fill="#071F1C" />
          </svg>
          Set a rule
        </span>
      </div>
    </figure>
  );
}
