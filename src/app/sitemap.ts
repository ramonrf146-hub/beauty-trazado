import type { MetadataRoute } from "next";
import { CATEGORIAS } from "@/lib/categorias";
import { getArticulos } from "@/lib/contenido";
import { getProductos } from "@/lib/productos";
import { withLocale } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://beautylab.com";

/** Emite la entrada española (sin prefijo) y su equivalente /en para cada ruta. */
function entradasBilingues(
  path: string,
  opciones: { changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number; lastModified?: string }
): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}${withLocale(path, "es")}`, ...opciones },
    { url: `${SITE_URL}${withLocale(path, "en")}`, ...opciones },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articulos, productos] = await Promise.all([getArticulos(), getProductos()]);

  const paginasEstaticas: MetadataRoute.Sitemap = [
    ...entradasBilingues("/", { changeFrequency: "monthly", priority: 1 }),
    ...entradasBilingues("/articulos", { changeFrequency: "monthly", priority: 0.6 }),
    ...entradasBilingues("/acerca-de", { changeFrequency: "yearly", priority: 0.3 }),
    ...entradasBilingues("/privacidad", { changeFrequency: "yearly", priority: 0.2 }),
  ];

  const paginasCategoria: MetadataRoute.Sitemap = CATEGORIAS.flatMap((categoria) =>
    entradasBilingues(`/categorias/${categoria.slug}`, { changeFrequency: "monthly", priority: 0.9 })
  );

  const paginasArticulos: MetadataRoute.Sitemap = articulos.flatMap((articulo) =>
    entradasBilingues(`/articulos/${articulo.slug}`, {
      changeFrequency: "yearly",
      priority: 0.5,
      lastModified: articulo.fecha,
    })
  );

  const paginasProductos: MetadataRoute.Sitemap = productos.flatMap((producto) =>
    entradasBilingues(`/productos/${producto.asin}`, {
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: producto.actualizadoEn,
    })
  );

  return [...paginasEstaticas, ...paginasCategoria, ...paginasArticulos, ...paginasProductos];
}
