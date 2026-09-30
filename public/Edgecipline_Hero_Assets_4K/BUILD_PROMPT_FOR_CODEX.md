# Codex task: reproduce the supplied Edgecipline hero exactly

I am supplying this ZIP with the original desktop/mobile artwork, 4K PNG exports, clean backgrounds, phone concept art, and logo references. Work in my existing website repository. First inspect the stack, current home page, styles, routes, real store URLs, demo video, and any actual app screenshots. Implement the hero, run it, capture screenshots, compare them to the references, and iterate. Do not stop at a proposal.

## Definition of "pixel exact"

The primary visual target is the supplied flattened artwork. The *only* way to guarantee the same pixels at the source aspect ratio is to render the exact artwork as the visual layer. Use:

- `exact-desktop-source.png` (1142×864, lossless PNG conversion of the supplied desktop panel) and `exact-mobile-source.png` (385×864, supplied mobile panel) as the authoritative design pixels.
- `exact-desktop-4k.png` and `exact-mobile-4k.png` as upscaled distribution assets when a larger source is needed. These are resampled, so they contain no extra native detail. PNG conversion does not undo the original JPEG compression.
- `reference-desktop-portal-4k.png` shows the original combined desktop+mobile image. Do not use that combined image as the website background.

**Implement the screenshot-faithful visual mode first:** a responsive `<picture>` with the desktop-only exact panel at desktop widths and the mobile-only exact panel at mobile widths. Use `width:100%; height:auto; display:block` and preserve aspect ratio without cropping, stretching, text reflow, or duplicated DOM text over the visible artwork. At the reference dimensions, the image should be visually identical to the supplied design. At other aspect ratios, scale uniformly and permit vertical scrolling; do not crop away text or controls. Use the original source PNGs if their clarity is at least as good as the enlarged ones in a browser screenshot. Optimize delivery with equivalent WebP/AVIF derivatives if desired, but keep exact PNGs in the project.

**Make visible controls work:** place position:absolute transparent semantic anchors/buttons over the artwork's visible nav and CTAs, with their positions expressed as percentages of the image's intrinsic width/height. Provide accessible names, keyboard focus outline, minimum usable hit areas without overlapping nearby controls, correct URL or handler, and a descriptive semantic heading/copy for screen readers. Set the decorative artwork's alt appropriately so it does not duplicate the hidden semantic content. On mobile, the menu hotspot must open a real accessible menu. All store/download/demo links must come from the actual project; do not use `href="#"`, fabricate an app-store listing, or claim a video exists. If a link is missing, report it and omit/deactivate that specific control clearly in code. Do not hide a nonfunctional control under a clickable invisible layer.

Approximate regions on `exact-desktop-source.png`: top nav across y=20–75; primary Download App around x=50–303, y=528–584; Watch Video around x=318–475, y=528–584; feature cards across y=734–826. Approximate regions on `exact-mobile-source.png`: menu in upper right, primary Download App around x=50–222, y=330–384; Watch Demo around x=232–355, y=330–384; store badges near bottom. Inspect the actual pixels and adjust, rather than trusting these rough coordinates.

## Optional truly editable version

If my codebase requires SEO-selectable visible text, localization, animations, theme changes, or card interactions, add a separate, live HTML/CSS version after finishing the screenshot-faithful mode. It should match the supplied art closely, but cannot be guaranteed pixel exact because the only source is a flattened image with text, phone, light, and background baked together. Use `desktop-portal-background-4k.png`, `mobile-cinematic-background-4k.png`, `phone-mockup-transparent-4k.png`, and `brand-mark-transparent.png` for that editable version. The mockup screen is illustrative; replace with a real app screenshot if the repository has one. Do not silently present this recreated version as pixel exact.

## Layout, behavior, and verification

- Desktop reference is a 1142:864 artboard; mobile is 385:864. Preserve these ratios for the screenshot-faithful variant. Switch art at a sensible tablet breakpoint based on the site's layout; check 360, 385, 390, 430, 768, 1024, and 1440px widths. No horizontal scrolling, warped typography, or missing CTA.
- Keep the dark theme outside the image (`#050a0a` or sampled from the artwork) so any extra scroll region blends naturally. Avoid the combined panel/divider accidentally appearing on desktop.
- Take screenshots at exact source dimensions **1142×864 desktop and 385×864 mobile**. Compare them to `exact-desktop-source.png` and `exact-mobile-source.png` with a pixel-diff script; the artwork region should match aside from rendering/color management. Then take 1440×900 and 390×844 browser screenshots to assess scaling and interaction, and refine hotspot positions.
- Run the project build/lint and test navigation, CTA clicks, mobile menu, keyboard Tab/Enter, focus outlines, and screen-reader labels. Report changed files, preview screenshots, actual link destinations, and any missing input.

## Production caveats to report clearly

The visual art contains baked-in sample trading numbers, partner/broker logos, social proof, store badges, and app UI. These are part of the supplied design, not verified claims or proof that store links exist. Tell me which elements require factual approval/replacement before publishing. The screenshot-faithful approach also makes visible text nonselectable and harder to maintain; it is suitable for a pixel-accurate visual implementation while a properly layered design source is obtained.
