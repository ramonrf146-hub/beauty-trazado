import { ImageResponse } from "next/og";
import { getProductoPorAsin } from "@/lib/productos";
import { getCategoriaPorSlug } from "@/lib/categorias";

export const runtime = "nodejs";

const SIZE = { width: 1000, height: 1500 };

function Estrellas({ rating }: { rating: number }) {
  const llenas = Math.round(rating);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5 L14.6 9 L21.5 9.4 L16.1 13.8 L18 20.5 L12 16.7 L6 20.5 L7.9 13.8 L2.5 9.4 L9.4 9 Z"
            fill={i < llenas ? "#0EA5E9" : "none"}
            stroke="#0EA5E9"
            strokeWidth="1.5"
          />
        </svg>
      ))}
    </div>
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ asin: string }> }
) {
  const { asin } = await params;
  const producto = await getProductoPorAsin(asin);

  if (!producto) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            color: "#0F172A",
            fontSize: 40,
          }}
        >
          BeautyLab
        </div>
      ),
      { ...SIZE }
    );
  }

  const categoria = getCategoriaPorSlug(producto.categoria);
  const nombreFontSize = producto.nombre.length > 60 ? 40 : 48;
  const precioTexto =
    producto.precioMax !== undefined
      ? `Desde $${producto.precio.toFixed(2)}`
      : `$${producto.precio.toFixed(2)}`;

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
          padding: "64px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#0EA5E9" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: 14,
              fontSize: 30,
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Beauty<span style={{ fontWeight: 300, color: "#0EA5E9" }}>Lab</span>
          </div>
          {categoria && (
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                fontSize: 18,
                fontWeight: 700,
                color: "#0369A1",
                background: "#E0F2FE",
                borderRadius: 999,
                padding: "8px 16px",
              }}
            >
              #{producto.ranking} en {categoria.nombre}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#F8FAFC",
            borderRadius: 32,
            padding: 40,
            height: 560,
            border: "1px solid #E2E8F0",
          }}
        >
          <img
            src={producto.imagen}
            width={480}
            height={480}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: nombreFontSize,
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            {producto.nombre}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Estrellas rating={producto.rating} />
            <div style={{ display: "flex", fontSize: 24, color: "#475569" }}>
              {producto.rating} ({producto.numResenas} reseñas)
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 800, color: "#2563EB" }}>
            {precioTexto}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e2e8f0",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#0F172A", fontWeight: 700 }}>
            Ver ficha completa →
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
