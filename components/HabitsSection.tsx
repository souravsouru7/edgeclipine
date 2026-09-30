import { ARTBOARD_SIZES, SCENE_CYAN_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import EntryScope from "./EntryScope";
import HabitLoop from "./HabitLoop";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";

/** Wet dark rock valley with an amber river and teal glints (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/habits/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

const HEADLINE_LINE = "entry-title block [--entry-dur:450ms] [--entry-rise:18px]";

// Section 08 on phones/tablets (below lg): "Small changes. Stronger habits."
// Entrance (EntryScope): kicker and four headline lines rise 18px (0–480ms),
// then the valley fades in over 700ms. The habit loop has its own trigger
// (HabitLoop). The side cue links to the next section.
export default function HabitsSection() {
  return (
    <EntryScope id="the-habits" aria-labelledby="habits-title" className="lg:hidden">
      <SceneArtboard
        background={BACKGROUND}
        lazy
        backgroundClassName="entry-title [--entry-delay:250ms] [--entry-dur:700ms] [--entry-rise:0px]"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-620 bg-linear-to-b from-background from-40% to-transparent" />
        <HabitLoop />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="08" className="entry-title [--entry-delay:200ms]" />
        <SceneKicker className="entry-title top-141 [--entry-delay:0ms]">Discipline over emotion</SceneKicker>

        {/* Line spans animate separately; the {" "} keep the heading's text "Small changes. Stronger habits." */}
        <h2
          id="habits-title"
          className={cn(
            SCENE_DISPLAY_TYPE,
            "absolute left-62 top-196 z-30 text-[length:calc(var(--spacing)*82)] leading-[0.826] tracking-[-0.03em]! [font-variation-settings:'wdth'_115]",
          )}
        >
          <span className={cn(HEADLINE_LINE, "[--entry-delay:0ms]")}>Small</span>{" "}
          <span className={cn(HEADLINE_LINE, "[--entry-delay:100ms]")}>changes.</span>{" "}
          <span className={cn(HEADLINE_LINE, SCENE_CYAN_TEXT, "[--entry-delay:200ms]")}>Stronger</span>{" "}
          <span className={cn(HEADLINE_LINE, SCENE_CYAN_TEXT, "[--entry-delay:300ms]")}>habits.</span>
        </h2>

        <p className="entry-title absolute left-62 top-486 z-30 font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*15))] font-light uppercase leading-[calc(var(--spacing)*26)] tracking-[calc(var(--spacing)*15.6-0.6em)] text-[#b3b8ba] [--entry-delay:420ms]">
          A clearer process for a calmer,
          <br />
          more consistent you.
        </p>
      </SceneArtboard>
    </EntryScope>
  );
}
