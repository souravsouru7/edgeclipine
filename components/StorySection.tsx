import { ARTBOARD_SIZES, SCENE_ACCENT_TEXT, SCENE_DISPLAY_SIZE, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";
import SceneLayerPicture from "./SceneLayerPicture";
import StoryInsightPanel from "./StoryInsightPanel";
import StoryTags from "./StoryTags";
import StoryTrail from "./StoryTrail";
import { ScrollScene } from "./ScrollScene";

/** Graphite rubble and atmosphere, full 864×1536 canvas (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/story/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

/** Cracked mirror with abstract candles (no labels), 620/864 of the artboard wide. */
const MIRROR: ArtLayer = {
  base: "/scenes/story/mirror",
  width: 3840,
  height: 3512,
  widths: [480, 720, 960],
  sizes: "(min-width: 36rem) 26rem, 72vw",
};

// Section 03 on phones/tablets (below lg): "The chart isn't the whole story."
// Layers, bottom to top: rubble, mirror (bleeds off the left edge as in the
// comp), live behaviour tags, signal trail, insight panel, copy. ScrollScene
// reveals each layer and draws the trail as it enters. The side cue links to
// the next section.
export default function StorySection() {
  return (
    <ScrollScene id="the-story" aria-labelledby="story-title" className="lg:hidden">
      <SceneArtboard background={BACKGROUND} lazy>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-120 bg-linear-to-b from-background to-transparent" />
        <SceneLayerPicture
          layer={MIRROR}
          lazy
          scrollStart={0.23}
          scrollEnd={0.49}
          scrollMotion="depth"
          className="scene-reveal absolute -left-62 top-456 z-10 h-auto w-620 max-w-none md:mask-[linear-gradient(to_right,transparent,black_18%)]"
        />
        <StoryTags className="z-20" />
        <StoryTrail className="absolute inset-0 z-20 size-full" />
        <StoryInsightPanel className="scene-reveal absolute left-516 top-1010 z-30" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="03" className="scene-reveal" />
        <SceneKicker className="scene-reveal top-141">Discipline over emotion</SceneKicker>

        {/* Both lines are justified to x≈747 as in the comp, so line 1 uses a slightly wider cut. */}
        <h2 id="story-title" className={cn(SCENE_DISPLAY_TYPE, SCENE_DISPLAY_SIZE, "scene-reveal absolute left-62 top-197 z-30 tracking-[-0.02em]! [font-variation-settings:'wdth'_76]")}>
          <span className="[font-variation-settings:'wdth'_86]">The chart isn’t</span>
          <br />
          The whole <span className={SCENE_ACCENT_TEXT}>story.</span>
        </h2>

        <p className="scene-reveal absolute left-62 top-362 z-30 text-[length:max(12px,calc(var(--spacing)*28))] leading-[1.18] text-[#8a9097]">
          The decisions around a trade
          <br />
          matter too.
        </p>
      </SceneArtboard>
    </ScrollScene>
  );
}
