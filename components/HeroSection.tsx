import MirrorHero from "./MirrorHero";
import MobileHero from "./MobileHero";

// Below lg: the layered, live-DOM "Stop trading against yourself" hero (MobileHero).
//
// lg and up: the "01 / THE MIRROR" hero — the approved desktop concept rebuilt
// from independent layers (cinematic hall, transparent behavior mirror,
// standing trader, emerald effects) under live, selectable copy and the site's
// real waitlist/demo actions. See MirrorHero / MirrorHeroArt. The site's own
// fixed <Navbar /> overlays it, exactly as in the reference composition.
export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-background lg:bg-[#040A0A]">
      <MobileHero />
      <MirrorHero />
    </section>
  );
}
