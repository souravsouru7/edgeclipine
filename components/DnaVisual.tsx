import type { ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import DnaPhoneScreen from "./DnaPhoneScreen";
import SceneLayerPicture from "./SceneLayerPicture";

/** Turquoise fingerprint with baked-in amber nodes (alpha). Decorative. */
const FINGERPRINT: ArtLayer = {
  base: "/scenes/dna/fingerprint",
  width: 2848,
  height: 3840,
  widths: [480, 720, 960],
  sizes: "(min-width: 36rem) 19.6rem, 55vw",
};

/** Blank physical phone; the Trading DNA screen is live DOM on top. */
const PHONE: ArtLayer = {
  base: "/scenes/dna/phone",
  width: 2125,
  height: 3840,
  widths: [480, 720, 960],
  sizes: "(min-width: 36rem) 18.8rem, 52vw",
};

// The fingerprint's own amber nodes, as fractions of its box (measured from the
// art). Glints light over them once as the scan passes: delay = 1200ms × y.
const NODE_GLINTS = [
  "left-[70%] top-[9.4%] [--entry-delay:110ms]",
  "left-[67%] top-[15.4%] [--entry-delay:185ms]",
  "left-[73.2%] top-[19.7%] [--entry-delay:235ms]",
  "left-[77.7%] top-[27.2%] [--entry-delay:325ms]",
  "left-[34.6%] top-[36.2%] [--entry-delay:435ms]",
  "left-[71.2%] top-[40.8%] [--entry-delay:490ms]",
  "left-[44.9%] top-[59.5%] [--entry-delay:715ms]",
  "left-[82%] top-[60.1%] [--entry-delay:720ms]",
  "left-[67.7%] top-[81.4%] [--entry-delay:975ms]",
];

// fingerprint-to-phone-strands.svg (artboard coordinates)
const STRANDS = ["M376 735C421 748 439 761 473 785", "M382 856C425 859 450 892 471 917"];

interface DnaVisualProps {
  className?: string;
}

// Fingerprint → phone group for Section 07. It is its own EntryScope target
// (`data-entry`), so it plays when the visual itself scrolls into view. Box
// origin is artboard y=465; children use artboard x and (y − 465).
// 0ms fingerprint fades/scales in and wipes top→bottom over 1.2s with one scan
// sweep; nodes glint as it passes · 400ms phone rises · strands follow scroll
// progress · 1250ms+ title, cards (160ms apart), waveforms.
export default function DnaVisual({ className }: DnaVisualProps) {
  return (
    <div data-entry="" className={cn("entry-group absolute inset-x-0 top-465 bottom-0", className)}>
      <div aria-hidden="true" data-scroll-motion="drift" className="entry-emerge absolute -left-19 top-7 z-10 w-470 [--entry-dur:700ms] [--entry-rise:0px] [--entry-scale:0.95]">
        <SceneLayerPicture layer={FINGERPRINT} lazy className="entry-wipe block h-auto w-full" />
        {NODE_GLINTS.map((pos) => (
          <span
            key={pos}
            className={cn(
              "entry-glint absolute size-28 -translate-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,214,140,0.95),rgba(245,160,60,0.45)_45%,transparent_70%)] opacity-0",
              pos,
            )}
          />
        ))}
        <svg
          viewBox="0 0 500 30"
          preserveAspectRatio="none"
          className="entry-scan absolute -inset-x-20 -top-15 h-30 w-[calc(100%+var(--spacing)*40)] opacity-0 [--entry-scan-distance:calc(var(--spacing)*634)]"
        >
          <defs>
            <linearGradient id="dna-scan">
              <stop stopColor="#0BFAAE" stopOpacity="0" />
              <stop offset=".5" stopColor="#64FFE2" />
              <stop offset="1" stopColor="#0BFAAE" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 15H500" stroke="url(#dna-scan)" strokeWidth={12} opacity={0.45} />
          <path d="M0 15H500" stroke="url(#dna-scan)" strokeWidth={2} />
        </svg>
      </div>

      <svg viewBox="0 0 864 1536" aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-x-0 -top-465 z-10 h-1536 w-full">
        <defs>
          <filter id="dna-strand-glow" x="-10%" y="-20%" width="120%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <g fill="none" strokeLinecap="round" className="[--entry-delay:650ms] [--entry-dur:550ms]">
          {STRANDS.map((d) => (
            <g key={d}>
              <path d={d} pathLength={1} stroke="#3DFDCC" strokeWidth={8} opacity={0.45} filter="url(#dna-strand-glow)" data-scroll-start="0.47" data-scroll-end="0.73" className="scene-draw" />
              <path d={d} pathLength={1} stroke="#65FFDC" strokeWidth={1.8} data-scroll-start="0.47" data-scroll-end="0.73" className="scene-draw" />
            </g>
          ))}
        </g>
      </svg>

      <div data-scroll-motion="drift" className="entry-emerge absolute left-397 top-3 z-20 w-450 [--entry-delay:400ms] [--entry-rise:26px] [--entry-scale:0.97]">
        <SceneLayerPicture layer={PHONE} lazy className="block h-auto w-full" />
        <DnaPhoneScreen />
      </div>
    </div>
  );
}
