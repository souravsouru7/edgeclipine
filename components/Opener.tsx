"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SEEN_KEY = "edgecipline-opener-seen";
const HOLD_MS = 2400;
const FADE_MS = 600;

// First-visit loading opener. The real logo (/logo.png) fades up out of a soft
// blur while an orbiting brand ring sweeps around it and a light sheen — masked
// to the logo's own shape — glints across the mark; then the wordmark rises and
// the overlay fades to the site. Shown once per browser: the no-flash inline
// script in app/layout.tsx sets data-opener="off" before paint for returning
// visitors, so this overlay (CSS-hidden by that attribute) never flashes for
// them. Decorative: aria-hidden, no focus trap. Reduced motion shows the
// composed final frame with no motion.
export default function Opener() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(SEEN_KEY);
    } catch {}
    if (seen) {
      setGone(true);
      return;
    }
    const hold = setTimeout(() => setHiding(true), HOLD_MS);
    return () => clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (!hiding) return;
    try {
      localStorage.setItem(SEEN_KEY, "1");
      document.documentElement.setAttribute("data-opener", "off");
    } catch {}
    const done = setTimeout(() => setGone(true), FADE_MS);
    return () => clearTimeout(done);
  }, [hiding]);

  if (gone) return null;

  return (
    <div className={cn("opener", hiding && "opener--hidden")} aria-hidden="true" role="presentation">
      <div className="opener__stage">
        <div className="opener__mark">
          <span className="opener__ring" />
          <Image
            className="opener__logo"
            src="/logo.png"
            alt=""
            width={160}
            height={160}
            priority
            draggable={false}
          />
          <span className="opener__sheen" />
        </div>

        <div className="opener__word">
          <span className="opener__brand">
            Edge<span className="opener__brand-accent">cipline</span>
          </span>
          <span className="opener__tag">Discipline over emotion</span>
        </div>
      </div>
    </div>
  );
}
