# Edgecipline correct mobile hero asset kit

This package matches the **STOP TRADING AGAINST YOURSELF** hero in `reference/target-hero-01.png`. The earlier portal / “Trade with intention” kit was the wrong design. Use this package instead.

| Layer | Asset | Delivery |
|---|---|---|
| 1 | `background/graphite-fissure-clean-2160x3840.png` | Separate reconstructed rocks and light, no text or phone |
| 2 | `signals/chaos-to-calm-overlay.svg` plus `.png` | Independent animated orange-to-mint signal, 4K transparent PNG |
| 3 | `phone/tilted-edgecipline-phone-transparent-4k.png` | Isolated alpha phone, 3840px tall |
| 4 | `brand/edgecipline-mark.svg` plus 2K transparent PNG | Standalone geometric brand icon |
| 5 | `controls/` | Separate menu, play and arrow SVGs + high-density PNGs, demo tile and waitlist preview PNGs, progress rail SVG + PNG |
| 6 | `reference/target-hero-01.png` | QA image only; never render this whole screenshot |
| 7 | `PROMPT_FOR_CODEX.md` | Implementation prompt for your IDE |

The title, paragraph, kicker, wordmark and CTA labels should be live HTML text. Buttons and menu should have actual click behavior. The 4K files are upscaled from generated source artwork; dimensions are 4K, but this cannot recover details absent in the source. The extracted concept phone's tiny screen text is illustrative and may differ from the final app. `reference/target-hero-01.png` stays a comparison reference, never a webpage layer.
