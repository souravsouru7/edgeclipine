// ─────────────────────────────────────────────────────────────────────────────
// Layered mobile scenes (below lg): hero "Stop trading against yourself" and
// section 02 "The loop is the problem".
//
// Every layer is laid out on an 864×1536 reference artboard (SceneArtboard).
// Inside the artboard Tailwind's `--spacing` is redefined to one reference
// pixel (100cqw / 864), so spacing utilities read as artwork coordinates:
// `left-62 top-620 w-443` is a box at x=62, y=620, w=443. Real CSS sizes, such
// as the 44px touch minimum, must use px arbitrary values (`min-h-[44px]`).
//
// Raster derivatives are generated with sharp from the asset kits
// (edgecipline-*-assets/; lanczos3, WebP q82 / q88 with alpha, AVIF q55 / q62).
// ─────────────────────────────────────────────────────────────────────────────

export interface ArtLayer {
  /** Public path without the width/extension suffix, e.g. "/hero/stop-trading/bg". */
  base: string;
  /** Source PNG size, used for the intrinsic aspect ratio. */
  width: number;
  height: number;
  /** Widths generated next to `base` (ascending). */
  widths: number[];
  sizes: string;
}

/** `sizes` for a full-artboard layer (artboard is capped at max-w-xl = 36rem). */
export const ARTBOARD_SIZES = "(min-width: 36rem) 36rem, 100vw";

export function layerSrcSet(layer: ArtLayer, ext: "avif" | "webp") {
  return layer.widths.map((w) => `${layer.base}-${w}.${ext} ${w}w`).join(", ");
}

export function layerFallbackSrc(layer: ArtLayer) {
  return `${layer.base}-${layer.widths[1]}.webp`;
}

/**
 * 1×1 transparent GIF. Used as the <source> for the breakpoint where a layer is
 * hidden, so phones never download the desktop art and desktops never download
 * the mobile layers.
 */
export const BLANK_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/**
 * Display headline type shared by the scenes: Archivo black, uppercase. Each
 * scene adds a size (usually SCENE_DISPLAY_SIZE), its own width axis
 * (`[font-variation-settings:'wdth'_N]`) and tracking (with `!`) to fit its
 * copy. `!` because globals.css sets unlayered h1–h6 weight/tracking that
 * outrank utilities.
 */
export const SCENE_DISPLAY_TYPE =
  "whitespace-nowrap font-(family-name:--font-scene-display) font-black! uppercase text-[#eef1f1]";

/** Standard scene headline size: 86 ref px (59 ref px caps), tight leading. */
export const SCENE_DISPLAY_SIZE = "text-[length:calc(var(--spacing)*86)] leading-[0.88]";

/** Emerald accent used inside scene headlines. */
export const SCENE_ACCENT_TEXT =
  "text-[#2ff0a2] [text-shadow:0_0_calc(var(--spacing)*26)_rgba(47,240,162,0.38)]";

/** Cooler turquoise accent the section 08–09 comps use for their headlines. */
export const SCENE_CYAN_TEXT =
  "text-[#14f7d0] [text-shadow:0_0_calc(var(--spacing)*26)_rgba(20,247,208,0.36)]";
