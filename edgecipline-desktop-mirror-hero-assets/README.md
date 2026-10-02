# Edgecipline desktop mirror hero asset kit

This kit implements the approved desktop concept as separate visual layers. Use `PROMPT_FOR_CODEX.md` in your IDE and give Codex access to the entire extracted folder. The existing website supplies the logo and navbar.

| File | Role | Dimensions |
| --- | --- | --- |
| `reference/approved-desktop-hero.png` | Composition reference, **never rendered as the hero** | 1672 × 941 |
| `background/empty-hall-3840x2160.png` | Clean cinematic hall | 3840 × 2160 |
| `mirror/behavior-mirror-transparent-2160h.png` | Mirror and its two ghost reflections | 2699 × 2160, alpha |
| `foreground/standing-trader-transparent-2160h.png` | Standing trader, independent foreground | 1406 × 2160, alpha |
| `effects/fingerprint-orbits.svg` | Optional animated fingerprint highlight | Vector |
| `effects/decision-trace.svg` | Optional animated signal trace | Vector |
| `effects/floor-glow.svg` | Optional bottom light spill | Vector |
| `ui/play.svg`, `ui/arrow-up-right.svg` | Icons for live HTML buttons | Vector |

The background and cutouts are 4K-scale **pixel dimensions** derived from smaller generated images with high quality resizing. They do not contain native optical 4K detail. The recreated transparent layers are visually matched to the approved concept, so they need careful CSS placement and cannot produce a mathematically pixel identical image. The text, controls, connectors, and labels should be rebuilt in code for sharpness and responsiveness.

The kit contains no font license, logo, navbar, or finished app code. The prompt directs your IDE to reuse what is already in the website, connect the existing waitlist/demo actions, and verify desktop and mobile layouts.
