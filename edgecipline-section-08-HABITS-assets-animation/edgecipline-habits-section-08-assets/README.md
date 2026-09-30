# Edgecipline — section 08 asset kit

Target: `reference/section-08-target.png` (visual guidance only; do not put it on the page).

| Production layer | File | Use |
| --- | --- | --- |
| Wet amber rock environment | `background/amber-rock-valley-clean-2160x3840.png` | Atmospheric backdrop; no text, device, or UI baked in. |
| Dark phone shell | `phone/blank-weekly-reflection-phone-transparent-4k.png` | Foreground cutout, 3840 px high with alpha. |
| Weekly reflection screen | `phone-ui/weekly-reflection-screen-editable.svg` | Separate visual guide; recreate as live HTML for real interaction. |
| Four-part path | `loop/habit-cycle-four-segments.svg` | Independent, named path IDs for sequential draw animation. |
| Four cycle badges | `nodes/*-node.svg` | Individually positioned and animated vector icons. |
| Brand/menu/rail | `ui/*` | SVG source; brand spelling and menu should be live/interactive. |

The photographic layers were generated separately from the target composition. Their 4K export sizes are upscale targets from smaller generated masters, so the files have 4K dimensions but cannot honestly claim native 4K detail. The reference is never a production layer. Headline, labels, button, and phone UI should be typeset in the website.

Read `PROMPT_FOR_CODEX.md` for exact content, responsive positioning, and motion behavior.
