import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Concept "Your Trading DNA" screen for the blank phone in Section 07. It is
// one overlay sized exactly like the phone image, in the phone's own
// coordinate system: inside it `--spacing` is 1/1000 of the phone's width, so
// the screen spans roughly x 40–955, y 55–1760. A −4° vertical skew gives the
// baselines the device's upward slope (text stays upright); cards step left
// down the screen for its lean. Positions were measured from the comp; with
// the skew, pre-transform y = comp y + 0.07·x. Clipped to the screen.
//
// It illustrates what Edgecipline looks at — no scores or personal results are
// shown. The title and rows are real text (heading + list); icons, chevrons,
// waveforms and placeholder bars are decorative. Nothing here is focusable.
// Entrance timings come from the surrounding .entry-group (DnaVisual).
const ICONS: Record<string, ReactNode> = {
  plan: (
    <>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="12" />
      <path d="M32 32 47 16m-3 0h9v9" />
    </>
  ),
  emotion: (
    <>
      <path d="M32 11c-10-8-23 0-20 14-9 8-4 20 7 20 2 9 12 11 17 5 9 5 18-1 17-10 8-8 3-19-6-20C44 10 37 8 32 11Z" />
      <path d="M32 12v39M24 22l8 6m9-6-9 8m-9 8 9-4m8 8-8-6" />
    </>
  ),
  setups: (
    <>
      <path d="M12 46V25m13 21V15m13 31V30m13 16V20" />
      <path d="M7 51h50" />
    </>
  ),
};

const CARDS = [
  { icon: "plan", label: "Plan adherence", className: "left-182 top-431 [--entry-delay:1410ms] [--wave-delay:1530ms]" },
  { icon: "emotion", label: "Emotional triggers", className: "left-162 top-724 [--entry-delay:1570ms] [--wave-delay:1690ms]" },
  { icon: "setups", label: "Preferred setups", className: "left-135 top-1046 [--entry-delay:1730ms] [--wave-delay:1850ms]" },
];

// phone-ui/card-waveform.svg
const WAVE = "M0 35C19 34 28 10 45 20S66 53 84 37 103 13 120 27 140 47 159 30 181 18 198 28 221 48 250 25";

interface DnaPhoneScreenProps {
  className?: string;
}

export default function DnaPhoneScreen({ className }: DnaPhoneScreenProps) {
  return (
    <figure
      className={cn(
        "@container absolute inset-0 m-0 [--spacing:calc(100cqw/1000)] [clip-path:polygon(21.5%_3.9%,95.5%_3%,86%_97.4%,4%_96.3%)]",
        className,
      )}
    >
      <figcaption className="sr-only">Concept illustration of the Trading DNA screen in the Edgecipline app.</figcaption>
      <div className="absolute inset-0 origin-top-left skew-y-[-4deg]">
        <svg viewBox="0 0 1000 1807" aria-hidden="true" className="absolute inset-0 size-full" fill="none" stroke="#dfe5e6" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M242 222l-20 20 20 20" />
          <g fill="#dfe5e6" stroke="none">
            <circle cx="833" cy="196" r="6" />
            <circle cx="833" cy="216" r="6" />
            <circle cx="833" cy="236" r="6" />
          </g>
        </svg>

        <h3 className="entry-reveal absolute left-211 top-311 whitespace-nowrap text-[length:max(12px,calc(var(--spacing)*66))] font-semibold! tracking-[-0.01em]! text-white [--entry-delay:1250ms]">
          Your Trading DNA
        </h3>

        <ul className="list-none">
          {CARDS.map(({ icon, label, className: row }) => (
            <li
              key={label}
              className={cn(
                "entry-reveal absolute h-266 w-665 rounded-[calc(var(--spacing)*44)] border-[length:calc(var(--spacing)*2.5)] border-white/12 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                row,
              )}
            >
              <span aria-hidden="true" className="absolute left-32 top-77 flex size-112 items-center justify-center rounded-full border-[length:calc(var(--spacing)*3)] border-[#e4a94c]/80">
                <svg viewBox="0 0 64 64" className="size-62" fill="none" stroke="#E4A94C" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[icon]}
                </svg>
              </span>
              <span className="absolute left-178 top-40 whitespace-nowrap text-[length:max(9px,calc(var(--spacing)*40))] font-medium leading-none text-white">
                {label}
              </span>
              <svg viewBox="0 0 64 64" aria-hidden="true" className="absolute right-34 top-34 size-48" fill="none" stroke="#c9cfd1" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 16l16 16-16 16" />
              </svg>
              <svg viewBox="0 0 250 60" preserveAspectRatio="none" aria-hidden="true" className="absolute left-178 top-130 h-72 w-420 overflow-visible">
                <path d={WAVE} pathLength={1} fill="none" stroke="#45F6C7" strokeWidth={8} opacity={0.3} className="entry-draw [--entry-delay:var(--wave-delay)] [--entry-dur:600ms]" />
                <path d={WAVE} pathLength={1} fill="none" stroke="#45F6C7" strokeWidth={2.4} className="entry-draw [--entry-delay:var(--wave-delay)] [--entry-dur:600ms]" />
              </svg>
              <span aria-hidden="true" className="absolute left-182 top-215 h-12 w-250 rounded-full bg-white/14" />
              <span aria-hidden="true" className="absolute left-182 top-240 h-12 w-170 rounded-full bg-white/10" />
            </li>
          ))}
        </ul>

        <span aria-hidden="true" className="entry-reveal absolute left-138 top-1383 h-[1.5px] w-70 bg-white/60 [--entry-delay:1900ms]" />
        <p className="entry-reveal absolute left-128 top-1420 whitespace-nowrap text-[length:max(10px,calc(var(--spacing)*46))] leading-[1.3] text-[#d9dfe0] [--entry-delay:1900ms]">
          Understand the patterns
          <br />
          that make your trading yours.
        </p>

        <svg viewBox="0 0 1000 1807" aria-hidden="true" className="entry-reveal absolute inset-0 size-full [--entry-delay:2000ms]" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <g stroke="#E4A94C" strokeWidth={4}>
            <circle cx="202" cy="1663" r="18" />
            <circle cx="202" cy="1663" r="8" />
            <path d="M202 1663l12-12" />
          </g>
          <path d="M315 1645v52M567 1663v52" stroke="#ffffff" strokeOpacity={0.25} strokeWidth={3} />
          <path d="M410 1683l14-14 12 22 14-26 12 18 14-8" stroke="#45F6C7" strokeWidth={4} />
          <path d="M660 1680v34M678 1672v42M696 1684v30M714 1676v38" stroke="#E4A94C" strokeWidth={5} />
        </svg>
      </div>
    </figure>
  );
}
