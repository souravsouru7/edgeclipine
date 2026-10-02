import { ARTBOARD_SIZES, SCENE_ACCENT_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import DnaVisual from "./DnaVisual";
import EntryScope from "./EntryScope";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";

/** Near-black rock with amber bokeh and glints (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/dna/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

const HEADLINE_LINE = "entry-title block [--entry-dur:450ms] [--entry-rise:14px]";

// Section 07 on phones/tablets (below lg): "Meet your trading DNA."
// Entrance (EntryScope): headline lines rise 14px at 80ms offsets and the rock
// glints brighten once; the fingerprint → phone visual (DnaVisual) has its own
// trigger. The side cue links to the next section.
export default function DnaSection() {
  return (
    <EntryScope id="the-dna" aria-labelledby="dna-title" className="lg:hidden">
      <SceneArtboard
        background={BACKGROUND}
        lazy
        backgroundClassName="entry-light [--entry-from-opacity:1] [--entry-pulse-delay:1200ms]"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-120 bg-linear-to-b from-background to-transparent" />
        <DnaVisual />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="07" className="entry-title [--entry-delay:200ms]" />
        <SceneKicker className="entry-title top-141 [--entry-delay:0ms]">Edgecipline</SceneKicker>

        {/* Line spans animate separately; the {" "} keep the heading's text "Meet your trading DNA."
            Lines 2–3 use wider cuts, as the comp sets them proportionally wider. */}
        <h2
          id="dna-title"
          className={cn(
            SCENE_DISPLAY_TYPE,
            "absolute left-62 top-211 z-30 text-[length:calc(var(--spacing)*82)] leading-[0.854] tracking-[-0.02em]! [font-variation-settings:'wdth'_110]",
          )}
        >
          <span className={cn(HEADLINE_LINE, "[--entry-delay:0ms]")}>Meet your</span>{" "}
          <span className={cn(HEADLINE_LINE, "[--entry-delay:80ms] [font-variation-settings:'wdth'_115]")}>Trading</span>{" "}
          <span className={cn(HEADLINE_LINE, SCENE_ACCENT_TEXT, "[--entry-delay:160ms] [font-variation-settings:'wdth'_125]")}>DNA.</span>
        </h2>
      </SceneArtboard>
    </EntryScope>
  );
}
