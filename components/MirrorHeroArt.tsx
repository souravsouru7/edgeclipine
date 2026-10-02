import { cn } from "@/lib/utils";

// Decorative artwork layers for the desktop mirror hero. Everything here is
// aria-hidden — the real copy lives in MirrorHero as live text. Coordinates for
// the transparent subjects come from CSS custom properties set on the hero
// section (--mh-mirror-*, --mh-trader-*) so they can be tuned per breakpoint.
// The behaviour mirror and the standing trader each sit inside a .mh-parallax
// wrapper that the client reads pointer movement into; the entrance wrappers
// (.mh-mirror-in / .mh-trader-in) animate separately so the two never fight.

const CALLOUTS = [
  { label: "FOMO", left: "57%", top: "30%" },
  { label: "REVENGE", left: "69%", top: "36%" },
  { label: "PLAN", left: "85%", top: "40%" },
] as const;

const DECISION_TRACE = "M0 342c150-15 198 22 284 5 120-25 173-91 270-57 68 24 94 71 188 54 100-19 133-91 238-86 118 5 115 72 218 45 143-37 242-4 402-28";

export default function MirrorHeroArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 1 · Full-bleed cinematic hall. Decorative, so plain <img> with empty alt. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative full-bleed layer */}
      <img
        src="/hero/mirror/empty-hall.webp"
        alt=""
        decoding="async"
        fetchPriority="high"
        draggable={false}
        className="mh-hall-in absolute inset-0 size-full select-none object-cover object-[55%_center]"
      />

      {/* Left readability wash + bottom vignette + a faint top band under the nav. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#040A0A_0%,rgba(4,10,10,0.94)_26%,rgba(4,10,10,0.6)_44%,rgba(4,10,10,0.12)_60%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#040A0A_0%,rgba(4,10,10,0.72)_9%,transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(4,10,10,0.85),transparent)]" />

      {/* 2 · Floor glow — wide low light spill, bottom-right, behind mirror + trader. */}
      <svg
        viewBox="0 0 1600 480"
        className="mh-glow absolute bottom-[2%] right-[-6%] h-[36%] w-[72%] opacity-[0.22]"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <radialGradient id="mh-floor-green">
            <stop stopColor="#17F8B6" stopOpacity=".34" />
            <stop offset=".3" stopColor="#07A987" stopOpacity=".13" />
            <stop offset="1" stopColor="#07A987" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mh-floor-white">
            <stop stopColor="#E9FFF5" stopOpacity=".17" />
            <stop offset="1" stopColor="#E9FFF5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="780" cy="302" rx="775" ry="152" fill="url(#mh-floor-green)" />
        <ellipse cx="955" cy="342" rx="515" ry="65" fill="url(#mh-floor-white)" />
      </svg>

      {/* 3 · Behavior mirror — transparent, anchored right. width:auto keeps its ratio. */}
      <div
        className="mh-mirror-in absolute"
        style={{
          right: "var(--mh-mirror-right)",
          top: "var(--mh-mirror-top)",
          height: "var(--mh-mirror-h)",
        }}
      >
        <div className="mh-parallax relative h-full [transform:perspective(1400px)_rotateY(calc(var(--mh-mx,0)*3deg))_rotateX(calc(var(--mh-my,0)*-2deg))_translateX(calc(var(--mh-mx,0)*12px))] [transform-style:preserve-3d]">
          {/* eslint-disable-next-line @next/next/no-img-element -- transparent art layer */}
          <img
            src="/hero/mirror/behavior-mirror.webp"
            alt=""
            decoding="async"
            draggable={false}
            className="block h-full w-auto max-w-none select-none"
          />
          {/* The image's alpha masks the light to the actual glass silhouette. */}
          <div className="mh-glass-mask">
            <span className="mh-glass-sweep" />
          </div>
        </div>
      </div>

      {/* 4 · Fingerprint orbit highlight — traced over the mirror's own swirl, low opacity. */}
      <svg
        viewBox="0 0 1000 1000"
        className="absolute right-[14%] top-[26%] h-[48%] w-auto opacity-[0.5] mix-blend-screen"
        style={{ aspectRatio: "1 / 1" }}
      >
        <defs>
          <linearGradient id="mh-fp" x1=".1" y1=".8" x2=".9" y2=".1">
            <stop stopColor="#00D8AB" stopOpacity=".05" />
            <stop offset=".55" stopColor="#22F4B9" stopOpacity=".78" />
            <stop offset="1" stopColor="#B4FFE1" stopOpacity=".1" />
          </linearGradient>
        </defs>
        {[
          "M205 606C174 328 339 182 504 180c199-2 347 158 313 387-14 90-60 165-133 219",
          "M262 641C209 370 344 238 506 237c168-1 277 143 261 327-10 103-58 173-129 235",
          "M320 665C260 438 350 293 505 291c137-2 218 114 209 269-6 99-51 172-122 250",
          "M380 689C313 457 385 347 510 345c107-2 159 95 151 218-6 101-44 185-111 267",
          "M441 703C376 486 410 404 514 401c73-3 96 66 91 155-6 108-40 197-97 273",
          "M499 711c-57-191-36-256 17-256 29 0 40 40 37 98-4 92-32 172-76 245",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength={1}
            className="mh-draw"
            style={{ ["--mh-delay" as string]: `${0.7 + i * 0.05}s`, ["--mh-draw-dur" as string]: "1.1s" }}
            fill="none"
            stroke="url(#mh-fp)"
            strokeWidth={3}
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* 5 · Decision trace — emerald signal line across the right half; fades left on its own. */}
      <svg
        viewBox="0 0 1600 620"
        className="absolute right-0 top-[40%] h-[30%] w-[60%]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mh-signal" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00DBA8" stopOpacity="0" />
            <stop offset=".2" stopColor="#1EECAD" stopOpacity=".25" />
            <stop offset=".55" stopColor="#5BFFD3" />
            <stop offset="1" stopColor="#12F4AE" stopOpacity=".15" />
          </linearGradient>
          <filter id="mh-signal-soft"><feGaussianBlur stdDeviation="10" /></filter>
        </defs>
        <path
          d={DECISION_TRACE}
          pathLength={1}
          className="mh-draw"
          style={{ ["--mh-delay" as string]: "0.75s", ["--mh-draw-dur" as string]: "1.2s" }}
          fill="none"
          stroke="#22F5B4"
          strokeWidth={16}
          opacity={0.4}
          filter="url(#mh-signal-soft)"
        />
        <path
          d={DECISION_TRACE}
          pathLength={1}
          className="mh-draw"
          style={{ ["--mh-delay" as string]: "0.75s", ["--mh-draw-dur" as string]: "1.2s" }}
          fill="none"
          stroke="url(#mh-signal)"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <path
          d={DECISION_TRACE}
          pathLength={1}
          className="mh-signal-travel"
          fill="none"
          stroke="#CEFFEA"
          strokeWidth={3.5}
          strokeLinecap="round"
        />
        <g className="mh-signal-pulse" style={{ transformOrigin: "1198px 303px" }}>
          <circle cx="1198" cy="303" r="24" fill="#18EFB5" opacity=".14" />
          <circle cx="1198" cy="303" r="7" fill="#C7FFE8" />
        </g>
      </svg>

      {/* 6 · Standing trader — independent foreground, grounded with a soft shadow. */}
      <div
        className="mh-trader-in absolute"
        style={{
          right: "var(--mh-trader-right)",
          bottom: "var(--mh-trader-bottom)",
          height: "var(--mh-trader-h)",
        }}
      >
        <div className="mh-parallax relative h-full [transform:translate(calc(var(--mh-mx,0)*-18px),calc(var(--mh-my,0)*-10px))]">
          {/* grounded contact shadow */}
          <span className="absolute inset-x-[-18%] bottom-[-5%] h-[8%] rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.65),transparent_70%)] blur-[4px]" />
          {/* eslint-disable-next-line @next/next/no-img-element -- transparent art layer */}
          <img
            src="/hero/mirror/standing-trader.webp"
            alt=""
            decoding="async"
            draggable={false}
            className="relative block h-full w-auto max-w-none select-none drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>

      {/* 7 · Behaviour callouts — quiet mono labels with a hairline + dot toward the glass. */}
      {CALLOUTS.map(({ label, left, top }, i) => (
        <div
          key={label}
          className="mh-soft absolute flex items-center gap-2.5"
          style={{ left, top, ["--mh-delay" as string]: `${0.95 + i * 0.12}s` }}
        >
          <span className="font-(family-name:--font-scene-mono) text-[11px] uppercase tracking-[0.34em] text-[#cfe9df]/85">
            {label}
          </span>
          <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(82,247,180,0.65),rgba(82,247,180,0.05))]" />
          <span className="size-[5px] rounded-full bg-[#52F7B4] shadow-[0_0_8px_rgba(82,247,180,0.9)]" />
        </div>
      ))}
    </div>
  );
}
