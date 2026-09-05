import type { Categoria } from "./tipos";

/**
 * Lista fija de categorías del sitio. Cambiar aquí se propaga a filtros,
 * páginas de categoría y navegación.
 */
export const CATEGORIAS: Categoria[] = [
  {
    slug: "cuidado-facial",
    nombre: "Cuidado Facial",
    descripcion: "Limpiadores, sérums e hidratantes probados — la base de cualquier rutina que funcione de verdad.",
    nombreEn: "Facial Care",
    descripcionEn: "Proven cleansers, serums, and moisturizers — the foundation of any routine that actually works.",
  },
  {
    slug: "proteccion-solar",
    nombre: "Protección Solar",
    descripcion: "Protectores solares de uso diario que no dejan la piel grasosa ni con capa blanca.",
    nombreEn: "Sun Protection",
    descripcionEn: "Everyday sunscreens that don't leave skin greasy or cast a white sheen.",
  },
  {
    slug: "maquillaje",
    nombre: "Maquillaje Diario",
    descripcion: "Lo que realmente se usa todos los días: máscara de pestañas, cejas, base — sin vueltas.",
    nombreEn: "Everyday Makeup",
    descripcionEn: "What you actually use every day: mascara, brows, foundation — no fuss.",
  },
  {
    slug: "labios",
    nombre: "Labios",
    descripcion: "Aceites, bálsamos y tratamientos labiales con reseñas reales, no promesas de marketing.",
    nombreEn: "Lips",
    descripcionEn: "Lip oils, balms, and treatments backed by real reviews, not marketing promises.",
  },
  {
    slug: "cuidado-capilar",
    nombre: "Cuidado Capilar",
    descripcion: "Serums, tratamientos y productos de peinado probados para el día a día.",
    nombreEn: "Hair Care",
    descripcionEn: "Proven serums, treatments, and styling products for everyday use.",
  },
];

export function getCategoriaPorSlug(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}
