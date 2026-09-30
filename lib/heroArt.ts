// ─────────────────────────────────────────────────────────────────────────────
// Screenshot-faithful DESKTOP hero artwork + clickable hotspot maps. (Below lg
// the hero is the layered live-DOM design in components/MobileHero.tsx.)
//
// The hero renders the supplied flattened artwork and lays transparent,
// semantic links over the controls that are visible in it. Every box below is
// [x0, y0, x1, y1] in the SOURCE PNG's pixels (public/Edgecipline_Hero_Assets_4K/)
// and is converted to percentages at render time, so hotspots track the art at
// any width.
//
// The artwork's own drawn navigation is cropped off (`cropTop` source rows) —
// the site's real <Navbar /> is used instead. Derivatives in public/hero/ are
// already cropped; boxes stay in uncropped source coordinates.
//
// `href: null` means the control is visible in the art but the project has no
// real destination for it. Those are deliberately NOT rendered as hotspots —
// never hide a dead control under a clickable layer. Fill in the URL once it
// exists and the hotspot appears automatically.
//
// Derivatives are generated from the exact PNGs with sharp (lanczos3, WebP q90 /
// AVIF q70). Widths equal to a source panel (alt desktop 1142) are
// lossless WebP / AVIF q88 4:4:4 copies of the exact PNG.
// ─────────────────────────────────────────────────────────────────────────────

import { WAITLIST_HREF } from "./nav";

export type HotspotShape = "pill" | "rect" | "card";

export interface HeroHotspot {
  id: string;
  /** Accessible name announced by screen readers. */
  label: string;
  href: string | null;
  /** Why the control is inactive — required when href is null. */
  missing?: string;
  box: [number, number, number, number];
  shape: HotspotShape;
}

export interface HeroArtboard {
  /** File stem in public/hero/, e.g. "hero-desktop" → hero-desktop-1920.webp */
  stem: string;
  /** Source PNG size the hotspot boxes were measured against. */
  width: number;
  height: number;
  /** Source rows removed from the top (the drawn nav bar). */
  cropTop: number;
  /** Widths generated in public/hero/ (ascending). */
  widths: number[];
  headline: string;
  description: string;
  hotspots: HeroHotspot[];
}

const FEATURES_SECTION = "#features";

// "Turn Every Trade Into A Better You" — reference-desktop-4k.png (3840×2560).
export const DESKTOP_PORTAL: HeroArtboard = {
  stem: "hero-desktop",
  width: 3840,
  height: 2560,
  cropTop: 200,
  widths: [1280, 1440, 1920, 2560, 3840],
  headline: "Turn every trade into a better you.",
  description:
    "Upload your trade screenshot. Edgecipline analyzes your trades, finds your patterns, and helps you build discipline with AI coaching and gamified progress. App Store and Google Play apps are coming soon.",
  hotspots: [
    {
      id: "cta-download",
      label: "Download App: join the early-access waitlist",
      href: WAITLIST_HREF,
      box: [173, 1444, 749, 1594],
      shape: "pill",
    },
    {
      id: "cta-demo",
      label: "Watch Demo",
      href: null,
      missing: "No demo video exists in the project.",
      box: [783, 1444, 1433, 1594],
      shape: "pill",
    },
    {
      id: "store-apple",
      label: "App Store",
      href: null,
      missing: "No App Store listing (art says 'Coming Soon').",
      box: [173, 1644, 601, 1774],
      shape: "rect",
    },
    {
      id: "store-google",
      label: "Google Play",
      href: null,
      missing: "No Google Play listing (art says 'Available Soon').",
      box: [651, 1644, 1078, 1774],
      shape: "rect",
    },
    {
      id: "card-import",
      label: "Screenshot Import: works with MT4, MT5, Zerodha, Upstox, Angel One and more",
      href: FEATURES_SECTION,
      box: [100, 1954, 850, 2240],
      shape: "card",
    },
    {
      id: "card-analytics",
      label: "Deep Analytics: find what really works for you",
      href: FEATURES_SECTION,
      box: [850, 1954, 1580, 2240],
      shape: "card",
    },
    {
      id: "card-coaching",
      label: "AI Coaching: beat emotional trading with personalized AI insights",
      href: FEATURES_SECTION,
      box: [1580, 1954, 2320, 2240],
      shape: "card",
    },
    {
      id: "card-progress",
      label: "Gamified Progress: streaks, missions and real improvement",
      href: FEATURES_SECTION,
      box: [2320, 1954, 3034, 2240],
      shape: "card",
    },
    { id: "scroll", label: "Scroll to explore", href: "#journey", box: [170, 2320, 700, 2470], shape: "rect" },
  ],
};

// "Control Your Trades. Create a Better You." — exact-desktop-source.png
// (1142×864), the panel the build brief names as authoritative. Swap
// DESKTOP_ART below to use it. Its primary CTA reads "Download on Play Store",
// which has no real URL, so that CTA stays inactive.
export const DESKTOP_CONTROL: HeroArtboard = {
  stem: "hero-desktop-alt",
  width: 1142,
  height: 864,
  cropTop: 92,
  widths: [1142, 1920, 2560, 3840],
  headline: "Control your trades. Create a better you.",
  description:
    "Edgecipline turns your trades into insights, builds discipline with AI coaching, and helps you grow with a gamified system — so you trade with a plan, not emotion.",
  hotspots: [
    {
      id: "cta-playstore",
      label: "Download on Play Store",
      href: null,
      missing: "No Google Play listing exists in the project.",
      box: [50, 529, 303, 583],
      shape: "pill",
    },
    {
      id: "cta-video",
      label: "Watch Video",
      href: null,
      missing: "No demo video exists in the project.",
      box: [319, 529, 473, 583],
      shape: "pill",
    },
    {
      id: "card-upload",
      label: "Upload Trade Screenshot: we extract and save your trades automatically",
      href: FEATURES_SECTION,
      box: [48, 734, 305, 823],
      shape: "card",
    },
    {
      id: "card-analytics",
      label: "Deep Analytics: find what works, what doesn't and why",
      href: FEATURES_SECTION,
      box: [311, 734, 568, 823],
      shape: "card",
    },
    {
      id: "card-coach",
      label: "AI Discipline Coach: personalized insights and daily guidance",
      href: FEATURES_SECTION,
      box: [574, 734, 830, 823],
      shape: "card",
    },
    {
      id: "card-progress",
      label: "Gamified Progress: streaks, missions and a Trading DNA to track your growth",
      href: FEATURES_SECTION,
      box: [836, 734, 1095, 823],
      shape: "card",
    },
  ],
};

/** Which desktop artwork the hero shows. Swap to DESKTOP_CONTROL for the brief's panel. */
export const DESKTOP_ART: HeroArtboard = DESKTOP_PORTAL;

/** The desktop art takes over from MobileHero at Tailwind's `lg` (64rem = 1024px). */
export const DESKTOP_MEDIA = "(min-width: 64rem)";

/** Rendered (cropped) height of an artboard, in source pixels. */
export function visibleHeight(art: HeroArtboard) {
  return art.height - art.cropTop;
}

export function boxToStyle(art: HeroArtboard, box: HeroHotspot["box"]) {
  const [x0, y0, x1, y1] = box;
  const h = visibleHeight(art);
  return {
    left: `${(x0 / art.width) * 100}%`,
    top: `${((y0 - art.cropTop) / h) * 100}%`,
    width: `${((x1 - x0) / art.width) * 100}%`,
    height: `${((y1 - y0) / h) * 100}%`,
  };
}

export function srcSet(art: HeroArtboard, ext: "avif" | "webp") {
  return art.widths.map((w) => `/hero/${art.stem}-${w}.${ext} ${w}w`).join(", ");
}
