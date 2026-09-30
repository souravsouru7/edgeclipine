# Phone overlay geometry

The phone PNG is a blank physical device with a near-black screen. Overlay real DOM UI within the phone asset's own relative box, keeping it scaled/rotated with that box and clipped to the screen polygon. The reference uses a tilted device, so tune offsets in browser rather than pasting them as absolute viewport pixels.

Suggested overlay hierarchy: tiny back/ellipsis controls (decorative unless wired), live title `Your Trading DNA`, three glass cards using individual icon SVGs, each with an independent waveform SVG, then live conclusion `Understand the patterns that make your trading yours.`

Rows: `Plan adherence`, `Emotional triggers`, `Preferred setups`. Keep copy readable and avoid inventing percentage scores. If the phone overlay cannot remain aligned at a viewport width, simplify internal screen detail while preserving the separate fingerprint and cards; never replace the whole page with the reference PNG.
