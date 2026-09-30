import { DESKTOP_MEDIA } from "@/lib/heroArt";
import { BLANK_IMAGE, layerFallbackSrc, layerSrcSet, type ArtLayer } from "@/lib/scene";

interface SceneLayerPictureProps {
  layer: ArtLayer;
  className?: string;
  priority?: boolean;
  /** Below-the-fold layers (e.g. section 02) load lazily. */
  lazy?: boolean;
  scrollStart?: number;
  scrollEnd?: number;
  scrollMotion?: "drift" | "depth";
}

// Decorative, art-directed layer of a mobile scene. Resolves to a blank image
// at desktop widths, where the scenes are hidden, so it is never fetched there.
export default function SceneLayerPicture({ layer, className, priority, lazy, scrollStart, scrollEnd, scrollMotion }: SceneLayerPictureProps) {
  return (
    <picture>
      <source media={DESKTOP_MEDIA} srcSet={BLANK_IMAGE} />
      <source type="image/avif" srcSet={layerSrcSet(layer, "avif")} sizes={layer.sizes} />
      <source type="image/webp" srcSet={layerSrcSet(layer, "webp")} sizes={layer.sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element -- art-directed <picture>; images are pre-optimized (static export) */}
      <img
        src={layerFallbackSrc(layer)}
        width={layer.width}
        height={layer.height}
        alt=""
        decoding="async"
        loading={lazy ? "lazy" : undefined}
        fetchPriority={priority ? "high" : undefined}
        draggable={false}
        data-scroll-start={scrollStart}
        data-scroll-end={scrollEnd}
        data-scroll-motion={scrollMotion}
        className={className}
      />
    </picture>
  );
}
