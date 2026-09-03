import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0EA5E9",
        }}
      >
        <div style={{ display: "flex", fontSize: 300, fontWeight: 800, color: "#ffffff" }}>B</div>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
