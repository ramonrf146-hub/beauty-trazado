import { ImageResponse } from "next/og";

export const alt = "BeautyLab — Rutinas de belleza probadas, sin relleno";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#ffffff",
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #ffffff 60%, #e0f2fe 100%)",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="36" fill="#0EA5E9" />
        </svg>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 72,
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-0.02em",
          }}
        >
          Beauty<span style={{ fontWeight: 300, color: "#0EA5E9" }}>Lab</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "#475569",
          }}
        >
          Rutinas de belleza probadas, sin relleno
        </div>
      </div>
    ),
    { ...size }
  );
}
