import { ImageResponse } from "next/og";
import { getArticuloPorSlug } from "@/lib/contenido";

export const runtime = "nodejs";

const SIZE = { width: 1000, height: 1500 };

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const articulo = await getArticuloPorSlug(slug);

  const titulo = articulo?.titulo ?? "BeautyLab";
  const descripcion = articulo?.descripcion ?? "Rutinas de belleza probadas, sin relleno";
  const tituloFontSize = titulo.length > 70 ? 52 : titulo.length > 45 ? 60 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          backgroundImage: "linear-gradient(160deg, #ffffff 0%, #ffffff 55%, #e0f2fe 100%)",
          padding: "70px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="22" fill="#0EA5E9" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: 16,
              fontSize: 34,
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Beauty<span style={{ fontWeight: 300, color: "#0EA5E9" }}>Lab</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: tituloFontSize,
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {titulo}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#475569",
              lineHeight: 1.4,
            }}
          >
            {descripcion}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e2e8f0",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#0F172A", fontWeight: 700 }}>
            Ver guía completa →
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#94a3b8" }}>
            beautylab.com
          </div>
        </div>
      </div>
    ),
    { ...SIZE }
  );
}
