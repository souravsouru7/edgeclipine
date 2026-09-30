# Codex implementation prompt — Edgecipline section 09

In my existing Edgecipline website, build the mobile-first pricing/waitlist Section 09 using `reference/section-09-target.png` as a visual target only. Do not use the flattened screenshot in the page. Inspect the project framework, current navigation, actual product tier rules and waitlist integration first. Use the separate assets in this kit, HTML/CSS for the entire pricing matrix and button, and the project's established design tokens/components where possible.

## Exact visual structure

1. Nearly black page. Header with the angular mint brand mark, live “Edgecipline” text and an accessible working menu. Small mint horizontal rule and letter-spaced `DISCIPLINE OVER EMOTION` eyebrow. Side rail 09 /10 only if there are actually ten sections; otherwise show truthful progress.
2. Heavy all-caps display headline with tight leading: first line `INVEST IN` warm white, then `YOUR` and `DISCIPLINE.` in brilliant turquoise. In the reference at 864×1536 the composition starts around x60 y205; at 390 CSS px this is x27, ~92px down from section top. Scale typography with clamp; target ~53–62px at 390px and tune actual font metrics. Keep the three-line break at 360–430px without clipping.
3. Tiny wide-tracked uppercase copy: `SAME TOOLS. A CLEARER YOU.` then `CHOOSE THE PLAN THAT FITS YOUR NEXT STEP.` **Content check before publishing:** “Same tools” contradicts the feature comparison. Replace it with accurate product copy after checking real entitlements. Do not invent pricing or features.
4. Glass comparison matrix, roughly x53–810 and y522–1030 in the 864×1536 target. Header row with feature label area left (about 40%), `Essential` center (about 26%) / `BUILD THE HABIT`, and `Pro` right (about 34%) / `GO DEEPER`. Three rows with icon, title and short description: `Trade review` / `Turn your trades into progress.`; `Behavior insights` / `See your patterns more clearly.`; `Coaching & missions` / `Guidance and structure to stay consistent.` The target visual marks Essential only for Trade review, Pro for all three. Verify against real plans before shipping; render true availability. Use `<table>` or an equivalently accessible structure with column/row headers. Do not put glyphs into the image.
5. Glass panels in deep teal-black, fine translucent borders, rounded corners. Pro column has a mint light edge that transitions to warm amber on lower/right corners. Use `effects/pro-border-glow.svg` and `effects/topographic-contours.svg` as decorative layers, or reproduce responsively in CSS. Each row has its own inset glass surface. The individual feature and check assets are in `icons/`.
6. Beneath matrix, centered tiny label `LAUNCH PRICING ANNOUNCED SOON.` only while true. Wide pill `Join Waitlist` plus arrow as real anchor/button; use `effects/waitlist-border-glow.svg` only as decoration behind it, never as the clickable surface. Connect to the actual project's waitlist flow and retain visible keyboard focus.
7. Behind the page use `background/rocky-pricing-valley-clean-2160x3840.png`, positioned so the wet obsidian rock and amber-to-teal light trail fill the lower third while the headline has clear black space. Add a dark overlay behind table text if necessary. The background is independent from every UI element.

## Animation/effects sequence

Trigger once via IntersectionObserver at ~25% visibility, no scroll lock. Use opacity and transform for reveal. Honor `prefers-reduced-motion` with an instant complete state.

- 0–550ms: eyebrow then three headline lines rise 16px and fade in with 100ms stagger.
- 450–950ms: matrix appears with 16px rise, rows stagger by 90ms. Header text is readable before row checks light up.
- 850–1400ms: one highlight travels clockwise along the Pro outline (a CSS pseudo-element with conic-gradient mask or an SVG stroke-dashoffset path); stop at complete outline, then a single subtle halo pulse. Never loop indefinitely.
- 1050–1500ms: each enabled check draws or scales in, top to bottom, with a gentle teal glow. Disabled checks stay muted and never misleadingly brighten.
- 1450–1900ms: waitlist pill fades up and its border has one controlled bright sweep. On pointer hover or keyboard focus, raise 2px and strengthen glow; on click, navigate/submit once with pending/disabled state according to the real flow.
- Optional lower rocky background moves a maximum of 12px during entrance only. Do not animate expensive large background blur or continuously moving particles on mobile.

## Responsive and correctness

At 360, 390, 430px widths show the table without horizontal scrolling. Shrink feature labels carefully or stack each row into semantic mini cards if a narrow width cannot fit readable type. Do not hide plan entitlements. At tablet 768px, retain the side-by-side comparison with a centered max-width. Lazy-load the background if this section is below the fold. Check screenshots at 360×800, 390×844, 430×932, and 768×1024 against the reference. Report changed files, actual waitlist destination, and verified plan entitlements. Do not hardcode the screenshot, fake a waitlist submission, claim an unannounced price, or claim native 4K detail from an upscaled photo.
