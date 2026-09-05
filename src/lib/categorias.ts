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
  },
  {
    slug: "proteccion-solar",
    nombre: "Protección Solar",
    descripcion: "Protectores solares de uso diario que no dejan la piel grasosa ni con capa blanca.",
  },
  {
    slug: "maquillaje",
    nombre: "Maquillaje Diario",
    descripcion: "Lo que realmente se usa todos los días: máscara de pestañas, cejas, base — sin vueltas.",
  },
  {
    slug: "labios",
    nombre: "Labios",
    descripcion: "Aceites, bálsamos y tratamientos labiales con reseñas reales, no promesas de marketing.",
  },
  {
    slug: "cuidado-capilar",
    nombre: "Cuidado Capilar",
    descripcion: "Serums, tratamientos y productos de peinado probados para el día a día.",
  },
];

export function getCategoriaPorSlug(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}
