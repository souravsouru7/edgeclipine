# Codex prompt — Edgecipline Section 07, Trading DNA + animation

Implement the next section of my existing Edgecipline mobile website after Section 06. Reference: `reference/section-07-target.png`; it is for visual comparison ONLY. Never render the full screenshot as the website section or its background. Inspect the existing code and reuse its header/menu, design tokens, section rail and routes.

Layered visual construction:
1. `background/amber-graphite-clean-2160x3840.png`: near-black atmospheric rock/bokeh, no phone or fingerprint.
2. `fingerprint/trading-dna-fingerprint-transparent-4k.png`: giant independent turquoise fingerprint, placed roughly at x=21–431,y=488–1096 in the 864×1536 visual reference. Preserve alpha and do not flatten into the background.
3. `phone/blank-trading-dna-phone-transparent-4k.png`: independent physical phone at x≈406–829,y≈468–1260. Overlay the live card UI inside its screen (see `phone-ui/OVERLAY_LAYOUT.md`), keeping alignment/clip under responsive scaling. Do not bake the cards/headline into a new PNG.
4. `links/fingerprint-to-phone-strands.svg` behind the phone and above fingerprint, plus `links/fingerprint-scan-line.svg` as a separate scan cue. Three independent card icons and `phone-ui/card-waveform.svg` can be used in real CSS glass cards.
5. `ui/` has the shared separate brand/menu/progress artwork. Render one working header across the page. Show `07 /10` only if the real page contains the ten-part sequence. The tiny right-side chapter label reads `THE ORIGIN` in the reference; use only if that is accurate for this navigation structure.

All copy must be live HTML: kicker `DISCIPLINE OVER EMOTION`; heading `MEET YOUR` / `TRADING` / `DNA.` with the last line mint. Phone title `Your Trading DNA`; rows `Plan adherence`, `Emotional triggers`, `Preferred setups`; conclusion `Understand the patterns that make your trading yours.` Treat the phone as concept UI, not an actual personal assessment or guaranteed analytics output. Do not invent metrics or trader scores.

Reference geometry in 864×1536: top brand x≈61,y≈31; kicker x≈62,y≈145; heading x≈62,y≈211–418; fingerprint and phone begin around y≈470. Maintain legible heading and enough space for fingerprint/card at 360/390/430px, then make a considered 768px tablet layout rather than simply stretching the mobile composition. Honor safe areas and avoid horizontal overflow.

MOTION:
1. Enter section: headline stagger upward 14px at 450ms with 80ms offset; fade fingerprint from 0 to 1 and scale 0.95→1 over 700ms. Phone follows with translateY(26px)→0 and slight scale 0.97→1 over 650ms.
2. Use a mask/clip reveal on the fingerprint from top to bottom over 1.2s. Sweep the independent scan line down once; amber nodes briefly illuminate at their static positions. Do not loop scanning forever or flash.
3. Draw the two connecting strands with stroke-dashoffset over 550ms after the scan reaches the middle. Then reveal the live phone title and the three cards sequentially (~160ms offset). On each card, draw its waveform once, left-to-right.
4. Rock glints can brighten briefly, then settle. Use IntersectionObserver or a site-native scroll animation library, no scroll lock or long pinned sections. When `prefers-reduced-motion: reduce`, show all content and routes immediately without movement/pulses.

Production notes: keep heading text selectable and card labels as real DOM. The fingerprint is decorative and should be hidden from assistive technology; screen title/rows need meaningful semantics. Menu remains functional; no Download App CTA. Run build/lint and capture screenshots at 360/390/430/768px after animation settles. Compare font breaks, fingerprint size, phone position, card layout and background crop against `reference/section-07-target.png`; refine until visually close. This reconstructed layered art cannot recover pixels originally hidden by flattened objects, so report meaningful differences rather than claiming mathematical pixel identity.
