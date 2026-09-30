import { Archivo, DM_Mono } from "next/font/google";

// Fonts used only by the layered mobile scenes (SceneArtboard). Both are SIL
// Open Font License. Archivo is loaded as a variable font with its width axis
// so headlines can use the expanded (wdth 125) black cut; DM Mono sets kickers
// and chapter numerals. Exposed as CSS variables so nothing outside the scenes
// changes.
export const sceneDisplay = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-scene-display",
  display: "swap",
});

export const sceneMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-scene-mono",
  display: "swap",
});
