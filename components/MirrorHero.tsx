"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { WAITLIST_HREF } from "@/lib/nav";
import { sceneDisplay, sceneMono } from "@/lib/sceneFonts";
import { cn } from "@/lib/utils";
import DemoVideoDialog, { type DemoVideoDialogHandle } from "./DemoVideoDialog";
import MirrorHeroArt from "./MirrorHeroArt";

// Desktop (lg+) hero rebuilt from the approved "01 / THE MIRROR" concept as
// independent layers (see MirrorHeroArt) under live, selectable copy and the
// site's real waitlist / demo actions. Below lg the layered MobileHero is shown
// instead, so this is hidden there. The whole thing reads correctly with no JS
// and with reduced motion; the pointer parallax below is pure enhancement.
const HEADLINE_LINES = ["The market moves.", "Your patterns"] as const;

export default function MirrorHero() {
  const demoRef = useRef<DemoVideoDialogHandle>(null);
  const heroRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  // Subtle pointer parallax — fine pointers only, off for touch/reduced motion,
  // paused while the hero is scrolled out of view. Feeds --mh-mx / --mh-my
  // (roughly -0.5…0.5) that the mirror and trader wrappers transform against.
  useEffect(() => {
    const hero = heroRef.current;
    const art = artRef.current;
    if (!hero || !art) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const fine = window.matchMedia("(pointer: fine)");
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const opener = document.querySelector(".opener");

    let frame = 0;
    let active = false;
    let visible = false;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let lastTime = 0;

    const paint = () => {
      art.style.setProperty("--mh-mx", x.toFixed(4));
      art.style.setProperty("--mh-my", y.toFixed(4));
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      x = y = targetX = targetY = 0;
      paint();
    };
    const tick = (time: number) => {
      // Time-based easing keeps the same weight on 60 Hz and 144 Hz displays.
      const ease = 1 - Math.exp(-Math.min(time - lastTime, 32) / 110);
      lastTime = time;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      const settled = Math.abs(targetX - x) + Math.abs(targetY - y) < 0.0005;
      if (settled) {
        x = targetX;
        y = targetY;
      }
      paint();
      frame = settled ? 0 : requestAnimationFrame(tick);
    };
    const requestTick = () => {
      if (frame) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const syncActivity = () => {
      // Let the existing logo opener finish before starting the hero sequence.
      // The class check also works when browser storage is unavailable.
      const openerDone = !opener?.isConnected || opener.classList.contains("opener--hidden") ||
        document.documentElement.dataset.opener === "off";
      active = visible && desktop.matches && motionOk.matches && !document.hidden && openerDone;
      hero.dataset.mhPaused = String(!active);
      if (active) hero.dataset.mhReady = "true";
      if (!active || !fine.matches) reset();
    };

    const onMove = (e: PointerEvent) => {
      if (!active || !fine.matches || e.pointerType === "touch") return;
      const r = hero.getBoundingClientRect();
      targetX = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
      targetY = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
      requestTick();
    };
    const onLeave = () => {
      if (!active) return;
      targetX = targetY = 0;
      requestTick();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncActivity();
    });
    io.observe(hero);

    const openerObserver = new MutationObserver(syncActivity);
    openerObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-opener"] });
    if (opener) {
      openerObserver.observe(opener, { attributes: true, attributeFilter: ["class"] });
      if (opener.parentElement) openerObserver.observe(opener.parentElement, { childList: true });
    }

    [desktop, fine, motionOk].forEach((query) => query.addEventListener("change", syncActivity));
    document.addEventListener("visibilitychange", syncActivity);
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    syncActivity();
    return () => {
      reset();
      io.disconnect();
      openerObserver.disconnect();
      [desktop, fine, motionOk].forEach((query) => query.removeEventListener("change", syncActivity));
      document.removeEventListener("visibilitychange", syncActivity);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      delete hero.dataset.mhReady;
      delete hero.dataset.mhPaused;
    };
  }, []);

  return (
    <div className={cn("hidden lg:block", sceneDisplay.variable, sceneMono.variable)}>
      <section
        ref={heroRef}
        aria-label="The mirror"
        className={cn(
          "mh-scene relative flex min-h-[100svh] items-center overflow-hidden bg-[#040A0A] text-[#F2F5F3]",
          // Mirror placement (right-anchored, slightly off-canvas); widens on big screens.
          "[--mh-mirror-right:-3%] [--mh-mirror-top:-6%] [--mh-mirror-h:102%]",
          "min-[1500px]:[--mh-mirror-right:-4%] min-[1500px]:[--mh-mirror-h:106%]",
          // Trader placement (lower-right, in front of the glass).
          "[--mh-trader-right:12%] [--mh-trader-bottom:8%] [--mh-trader-h:56%]",
          "min-[1500px]:[--mh-trader-h:60%]",
        )}
      >
        <div ref={artRef} className="absolute inset-0">
          <MirrorHeroArt />
        </div>

        {/* Content — above the art in stacking order, kept to the readable left. */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl px-9 pt-[4.4rem]">
          <div className="max-w-[42rem]">
            <p className="mh-line font-(family-name:--font-scene-mono) text-[13px] uppercase tracking-[0.42em] text-[#52F7B4]">
              Edgecipline · AI trading journal
            </p>

            <h1 className="mt-6 font-(family-name:--font-scene-display) font-black! uppercase leading-[0.92] tracking-[-0.005em]! text-[clamp(2.25rem,4.9vw,5.25rem)] [font-variation-settings:'wdth'_96]">
              {HEADLINE_LINES.map((line, i) => (
                <span
                  key={line}
                  className="mh-line block whitespace-nowrap"
                  style={{ ["--mh-delay" as string]: `${i * 0.09}s` }}
                >
                  {line}
                </span>
              ))}
              <span
                className="mh-line block whitespace-nowrap text-[#2FF0A2] [text-shadow:0_0_40px_rgba(47,240,162,0.35)]"
                style={{ ["--mh-delay" as string]: "0.18s" }}
              >
                Repeat.
              </span>
            </h1>

            <p
              className="mh-line mt-7 max-w-[30rem] text-[clamp(1rem,1.2vw,1.2rem)] leading-[1.5] text-[#8C9998]"
              style={{ ["--mh-delay" as string]: "0.36s" }}
            >
              See the habits behind every trade. Build the discipline to change the next one.
            </p>

            <div
              className="mh-soft mt-10 flex flex-wrap items-center gap-5"
              style={{ ["--mh-delay" as string]: "0.5s" }}
            >
              <Link
                href={WAITLIST_HREF}
                className="mh-cta group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[linear-gradient(180deg,#52F7B4,#0DE4A7)] px-7 text-[15px] font-bold tracking-[0.01em] text-[#042017] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_34px_rgba(13,228,167,0.28)] transition-[transform,box-shadow] duration-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_42px_rgba(13,228,167,0.4)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52F7B4]"
              >
                Join Waitlist
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => demoRef.current?.open()}
                className="group inline-flex min-h-[48px] items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 text-[15px] font-semibold text-[#F2F5F3] backdrop-blur-md transition-colors duration-200 hover:border-[#52F7B4]/60 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52F7B4]"
              >
                <span className="flex size-7 items-center justify-center rounded-full border border-white/25 text-[#52F7B4] transition-colors duration-200 group-hover:border-[#52F7B4]/70">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[13px]">
                    <path d="M8 5.8a1 1 0 0 1 1.5-.86l10 6.2a1 1 0 0 1 0 1.72l-10 6.2A1 1 0 0 1 8 18.2V5.8Z" fill="currentColor" />
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Chapter marker, bottom-left along the content gutter. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10">
          <div className="mx-auto flex max-w-7xl px-9">
            <div className="mh-soft flex items-center gap-4" style={{ ["--mh-delay" as string]: "0.8s" }}>
              <span className="h-px w-10 bg-white/25" />
              <span className="font-(family-name:--font-scene-mono) text-[11px] uppercase tracking-[0.4em] text-[#8C9998]">
                01 / The Mirror
              </span>
            </div>
          </div>
        </div>

        <DemoVideoDialog ref={demoRef} />
      </section>
    </div>
  );
}
