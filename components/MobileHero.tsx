import Link from "next/link";
import { WAITLIST_HREF } from "@/lib/nav";
import { ARTBOARD_SIZES, SCENE_ACCENT_TEXT, SCENE_DISPLAY_SIZE, SCENE_DISPLAY_TYPE, type ArtLayer } from "@/lib/scene";
import { cn } from "@/lib/utils";
import HeroDemoButton from "./HeroDemoButton";
import HeroSignals from "./HeroSignals";
import SceneArtboard from "./SceneArtboard";
import SceneChapterRail from "./SceneChapterRail";
import SceneKicker from "./SceneKicker";
import SceneLayerPicture from "./SceneLayerPicture";
import { ScrollSceneLayer } from "./ScrollScene";

/** Graphite rock + green fissure, full 864×1536 canvas (2160×3840 source). */
const BACKGROUND: ArtLayer = {
  base: "/hero/stop-trading/bg",
  width: 2160,
  height: 3840,
  widths: [480, 720, 1080, 1440],
  sizes: ARTBOARD_SIZES,
};

/** Tilted phone, alpha, cropped to the device (318/864 of the artboard width). */
const PHONE: ArtLayer = {
  base: "/hero/stop-trading/phone",
  width: 1851,
  height: 3840,
  widths: [200, 320, 480, 640],
  sizes: "(min-width: 36rem) 13.6rem, 38vw",
};

// Phone/tablet hero (below lg): separate decorative layers — rocks, signal
// overlay, phone — under live, selectable copy and real controls, positioned in
// 864×1536 artwork coordinates (see lib/scene.ts). The header row of the comp
// is the site's fixed <Navbar variant="hero" />.
export default function MobileHero() {
  return (
    <ScrollSceneLayer className="lg:hidden">
    <SceneArtboard background={BACKGROUND} priority backgroundClassName="hero-anim-bg">
      <div aria-hidden="true" className="hero-fissure-glow pointer-events-none absolute left-150 top-750 z-10 h-470 w-360 rounded-full bg-[radial-gradient(ellipse,rgba(24,244,174,0.18),transparent_68%)] opacity-20" />
      <HeroSignals className="absolute inset-0 z-10 size-full md:mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" />
      <div data-scroll-motion="drift" className="absolute left-283 top-779 z-20 w-318">
        <SceneLayerPicture layer={PHONE} className="hero-anim-device block h-auto w-full [--hero-delay:250ms]" />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-110 bg-linear-to-b from-transparent to-background" />
      <SceneChapterRail chapter="01" className="hero-anim-copy [--hero-delay:500ms]" />

      <SceneKicker className="hero-anim-copy top-141">Edgecipline</SceneKicker>

      <h1
        id="hero-title"
        className={cn(SCENE_DISPLAY_TYPE, SCENE_DISPLAY_SIZE, "hero-anim-copy absolute left-62 top-197 z-30 tracking-[-0.005em]! [font-variation-settings:'wdth'_125] [--hero-delay:80ms]")}
      >
        Stop
        <br />
        Trading
        <br />
        Against
        <br />
        <span className={cn(SCENE_ACCENT_TEXT, "tracking-[-0.035em]")}>Yourself.</span>
      </h1>

      <p className="hero-anim-copy absolute left-62 top-518 z-30 text-[length:max(11px,calc(var(--spacing)*25.5))] leading-[1.32] text-[#8a9097] [--hero-delay:180ms]">
        See your patterns. Follow your plan.
        <br />
        Build better habits.
      </p>

      <HeroDemoButton className="hero-anim-copy absolute left-62 top-620 z-30 h-116 w-443 [--hero-delay:260ms]" />

      <Link
        href={WAITLIST_HREF}
        className="hero-anim-copy group absolute left-547 top-620 z-30 flex h-116 min-h-[44px] items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6a657] [--hero-delay:320ms]"
      >
        <span className="relative flex items-center gap-22 pb-7 text-[length:max(10.5px,calc(var(--spacing)*22))] font-medium tracking-[0.09em] text-[#ece7dc] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:bg-linear-to-r after:from-[#d6a657] after:to-[#d6a657]/45">
          Join Waitlist
          <svg viewBox="0 0 48 48" aria-hidden="true" className="size-28 transition-transform duration-200 group-hover:translate-x-4">
            <path d="M6 24h30M26 13l11 11-11 11" fill="none" stroke="#D6A657" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </SceneArtboard>
    </ScrollSceneLayer>
  );
}
