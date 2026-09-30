import { ARTBOARD_SIZES, SCENE_ACCENT_TEXT, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import EntryScope from "./EntryScope";
import ProductSteps from "./ProductSteps";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";
import SceneLayerPicture from "./SceneLayerPicture";

/** Dark rock with teal electrical fissures and amber bokeh (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/scenes/product/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

/**
 * Tilted phone with a static, illustrative "screenshot → journal entry" split.
 * The AAPL values are artwork, not live data, so the image is decorative and
 * nothing presents it as an interactive slider.
 */
const PHONE: ArtLayer = {
  base: "/scenes/product/phone",
  width: 2333,
  height: 3840,
  widths: [480, 720, 960],
  sizes: "(min-width: 36rem) 24.3rem, 68vw",
};

// Section 05 on phones/tablets (below lg): "One screenshot. A clearer picture."
// One-shot entrance (EntryScope + .entry-* in globals.css): room light 500ms
// with a single crack pulse, headline rise 450ms, phone rise/scale 650ms, then
// the divider glow draws over the phone's own split. The steps have their own
// trigger so they play when they scroll into view.
export default function ProductSection() {
  return (
    <EntryScope id="the-product" aria-labelledby="product-title" className="lg:hidden">
      <SceneArtboard background={BACKGROUND} lazy backgroundClassName="entry-light">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-120 bg-linear-to-b from-background to-transparent" />
        <SceneLayerPicture layer={PHONE} lazy scrollMotion="drift" className="entry-phone absolute left-48 top-394 z-10 h-auto w-583 origin-bottom" />
        {/* Glow over the phone's baked-in divider, measured from the art: pinned at its
            top (304, 482) and tilted to reach (359, 1290). Screen blend, text stays visible. */}
        <div
          aria-hidden="true"
          className="entry-divider absolute left-292 top-482 z-10 flex h-810 w-24 origin-top -rotate-[3.9deg] justify-center opacity-45 mix-blend-screen"
        >
          <span className="h-full w-[2px] bg-linear-to-b from-transparent via-[#7cffde] to-transparent shadow-[0_0_calc(var(--spacing)*12)_rgba(43,255,198,0.75)]" />
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />

        <SceneChapterRail chapter="05" className="entry-title [--entry-delay:200ms]" />
        <SceneKicker className="entry-title top-141 [--entry-delay:0ms]">Discipline over emotion</SceneKicker>

        <h2
          id="product-title"
          className={cn(
            SCENE_DISPLAY_TYPE,
            "entry-title absolute left-62 top-211 z-30 text-[length:calc(var(--spacing)*77)] leading-[0.88] tracking-[-0.02em]! [font-variation-settings:'wdth'_81]",
          )}
        >
          One screenshot.
          <br />A <span className={SCENE_ACCENT_TEXT}>clearer</span> picture.
        </h2>

        <ProductSteps className="z-30" />
      </SceneArtboard>
    </EntryScope>
  );
}
