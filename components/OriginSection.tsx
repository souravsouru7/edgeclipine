import { ARTBOARD_SIZES, SCENE_ACCENT_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import OriginQuotes from "./OriginQuotes";
import OriginTrace from "./OriginTrace";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";
import SceneLayerPicture from "./SceneLayerPicture";
import { ScrollScene } from "./ScrollScene";

/** Dark room, window and amber light, diagonal foreground rock (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/origin/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

/**
 * Two anonymous silhouettes at a desk with a monitor. Generated illustration,
 * not the real founders, so it is decorative (alt="") and never captioned as
 * a portrait.
 */
const FOUNDERS: ArtLayer = {
  base: "/scenes/origin/founders",
  width: 3840,
  height: 1589,
  widths: [480, 720, 1080],
  sizes: "(min-width: 36rem) 31rem, 86vw",
};

// Section 04 on phones/tablets (below lg): "We needed to see ourselves clearly."
// Layers, bottom to top: room (fades up), founders group, rock trace, copy and
// the quote list 01→03. ScrollScene reveals the layers in reading order.
export default function OriginSection() {
  return (
    <ScrollScene id="the-origin" aria-labelledby="origin-title" className="lg:hidden">
      <SceneArtboard background={BACKGROUND} lazy backgroundClassName="scene-fade">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-120 bg-linear-to-b from-background to-transparent" />
        <div aria-hidden="true" data-scroll-start="0.28" data-scroll-end="0.62" className="scene-fade pointer-events-none absolute left-380 top-480 z-10 h-500 w-410 bg-[radial-gradient(ellipse,rgba(245,168,83,0.15),transparent_68%)]" />
        <SceneLayerPicture layer={FOUNDERS} lazy scrollStart={0.28} scrollEnd={0.53} scrollMotion="depth" className="scene-reveal absolute left-57 top-565 z-10 h-auto w-742" />
        <OriginTrace className="absolute inset-0 z-10 size-full" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="04" className="scene-reveal" />
        <SceneKicker className="scene-reveal top-141">Edgecipline</SceneKicker>

        <h2
          id="origin-title"
          className={cn(
            SCENE_DISPLAY_TYPE,
            "scene-reveal absolute left-62 top-208 z-30 text-[length:calc(var(--spacing)*82)] leading-[0.872] tracking-[-0.02em]! [font-variation-settings:'wdth'_95]",
          )}
        >
          We needed to
          <br />
          See ourselves
          <br />
          {/* The comp sets the last line proportionally wider. */}
          <span className={cn(SCENE_ACCENT_TEXT, "[font-variation-settings:'wdth'_108]")}>Clearly.</span>
        </h2>

        <p className="scene-reveal absolute left-62 top-440 z-30 whitespace-nowrap font-(family-name:--font-scene-mono) text-[length:max(9px,calc(var(--spacing)*15))] font-light uppercase leading-none tracking-[calc(var(--spacing)*17.2-0.6em)] text-[#8f989d]">
          The origin / 02 founders
        </p>

        <OriginQuotes className="z-30" />
      </SceneArtboard>
    </ScrollScene>
  );
}
