import { ImageResponse } from "next/og";
import { FOUNDERS, FOUNDER_NAMES_SHORT } from "@/lib/founders";

export const dynamic = "force-static";
export const alt = `Founders of Edgecipline — ${FOUNDER_NAMES_SHORT}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function FoundersOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05080f",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(0,255,178,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,178,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00ffb2",
                display: "flex",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 14,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00ffb2",
              }}
            >
              FOUNDERS OF EDGECIPLINE
            </span>
          </div>

          {/* Both names — the whole point of this card */}
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: 44,
            }}
          >
            {FOUNDER_NAMES_SHORT}
          </div>

          {/* Role split */}
          <div style={{ display: "flex", gap: 20 }}>
            {FOUNDERS.map((founder) => (
              <div
                key={founder.slug}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 10,
                  width: 440,
                  padding: "24px 28px",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.02)",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 26, fontWeight: 800, color: "#ffffff" }}>
                  {founder.name}
                </span>
                <span style={{ fontSize: 18, color: "#8b95aa", lineHeight: 1.4 }}>
                  {founder.shortRole}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", fontSize: 17, color: "#8b95aa", marginTop: 40 }}>
            edgecipline.com/founders
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
