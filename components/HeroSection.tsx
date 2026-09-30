import { DESKTOP_ART, DESKTOP_MEDIA, srcSet, visibleHeight } from "@/lib/heroArt";
import { BLANK_IMAGE } from "@/lib/scene";
import HeroHotspot from "./HeroHotspot";
import MobileHero from "./MobileHero";

// Below lg: the layered, live-DOM "Stop trading against yourself" hero (MobileHero).
//
// lg and up: screenshot-faithful hero — the supplied flattened artwork is the
// visual layer (its drawn nav bar cropped off — the site's own <Navbar /> sits
// above it), with transparent semantic links over the controls drawn in it.
// All visible text is baked into the image, so the real copy is provided to
// assistive tech and crawlers via the visually-hidden heading below; the <img>
// itself is alt="". Hotspot coordinates and art selection live in lib/heroArt.ts.
export default function HeroSection() {
  return (
    // lg:pt-17.5 reserves the fixed Navbar's height (70px) so it never covers the desktop art.
    <section id="hero" className="relative bg-background lg:bg-[#050a0a] lg:pt-17.5">
      <MobileHero />

      <div className="hidden lg:block">
        <div className="sr-only">
          <h1>{DESKTOP_ART.headline}</h1>
          <p>{DESKTOP_ART.description}</p>
        </div>

        <div className="relative w-full">
          <picture>
            <source media={`not all and ${DESKTOP_MEDIA}`} srcSet={BLANK_IMAGE} />
            <source type="image/avif" srcSet={srcSet(DESKTOP_ART, "avif")} sizes="100vw" />
            <source type="image/webp" srcSet={srcSet(DESKTOP_ART, "webp")} sizes="100vw" />
            {/* eslint-disable-next-line @next/next/no-img-element -- art-directed <picture> (blank below lg) */}
            <img
              src={`/hero/${DESKTOP_ART.stem}-1920.webp`}
              width={DESKTOP_ART.width}
              height={visibleHeight(DESKTOP_ART)}
              alt=""
              fetchPriority="high"
              decoding="async"
              draggable={false}
              // The art's cropped top edge runs through bright sky; fade it into the nav band.
              className="block h-auto w-full select-none mask-[linear-gradient(to_bottom,transparent,black_2rem)]"
            />
          </picture>

          <div className="absolute inset-0">
            {DESKTOP_ART.hotspots.map((h) => (
              <HeroHotspot key={h.id} art={DESKTOP_ART} hotspot={h} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
