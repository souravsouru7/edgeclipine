import { ARTBOARD_SIZES, SCENE_ACCENT_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import CoachPhoneScreen from "./CoachPhoneScreen";
import EntryScope from "./EntryScope";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";
import SceneLayerPicture from "./SceneLayerPicture";

/** Atmospheric rocks with amber reflections and teal accents (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/coach/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

/** Blank angled phone (mountain contour screen only); UI is live HTML on top. */
const PHONE: ArtLayer = {
  base: "/scenes/coach/phone",
  width: 2191,
  height: 3840,
  widths: [480, 720, 960],
  sizes: "(min-width: 36rem) 20.5rem, 57vw",
};

const HEADLINE_LINE = "entry-title block [--entry-dur:420ms] [--entry-rise:14px]";

// Section 06 on phones/tablets (below lg): "A coach for the moment after."
// Entrance (EntryScope): background light 0.75→1 over 600ms, headline lines
// rise 14px at 90ms offsets, then the phone emerges (26px, 0.96→1, 700ms).
// The screen UI has its own trigger and plays the yesterday→today route.
// The comp's garbled subkicker ("06 COACHINS") is replaced with a clear label.
// The side cue links to the next section.
export default function CoachSection() {
  return (
    <EntryScope id="the-coach" aria-labelledby="coach-title" className="lg:hidden">
      <SceneArtboard
        background={BACKGROUND}
        lazy
        backgroundClassName="entry-light [--entry-dur:600ms] [--entry-from-opacity:0.75] [--entry-pulse-delay:1400ms]"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-120 bg-linear-to-b from-background to-transparent" />
        <div data-scroll-motion="drift" className="entry-phone absolute left-258 top-486 z-10 w-491 origin-bottom [--entry-delay:450ms] [--entry-dur:700ms] [--entry-rise:26px] [--entry-scale:0.96]">
          <SceneLayerPicture layer={PHONE} lazy className="block h-auto w-full" />
          <CoachPhoneScreen />
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="06" className="entry-title [--entry-delay:200ms]" />
        <SceneKicker className="entry-title top-141 [--entry-delay:0ms]">Edgecipline</SceneKicker>

        <h2
          id="coach-title"
          className={cn(
            SCENE_DISPLAY_TYPE,
            "absolute left-62 top-208 z-30 text-[length:calc(var(--spacing)*82)] leading-[0.878] tracking-[-0.02em]! [font-variation-settings:'wdth'_105]",
          )}
        >
          {/* Line spans animate separately; the {" "} keep the heading's text "A coach for the moment after." */}
          <span className={cn(HEADLINE_LINE, "[--entry-delay:0ms] [font-variation-settings:'wdth'_108]")}>A coach</span>{" "}
          <span className={cn(HEADLINE_LINE, "[--entry-delay:90ms]")}>for the</span>{" "}
          {/* The comp sets the last line proportionally narrower. */}
          <span className={cn(HEADLINE_LINE, SCENE_ACCENT_TEXT, "[--entry-delay:180ms] [font-variation-settings:'wdth'_90]")}>Moment after.</span>
        </h2>

        <p className="entry-title absolute left-62 top-441 z-30 whitespace-nowrap font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*15))] font-light uppercase leading-none tracking-[calc(var(--spacing)*17.2-0.6em)] text-[#8f989d] [--entry-delay:270ms]">
          The coach / the moment after
        </p>
      </SceneArtboard>
    </EntryScope>
  );
}
