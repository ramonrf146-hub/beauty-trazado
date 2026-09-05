export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];

/** Normaliza el `lang` crudo de params a un Locale válido, con "es" como fallback. */
export function normalizarLocale(lang: string): Locale {
  return lang === "en" ? "en" : "es";
}

/** Español es siempre el fallback: nunca renderizamos un campo vacío por
 * falta de traducción, aunque el objetivo es traducir todo el contenido. */
export function t(es: string, en: string | undefined, locale: Locale): string {
  return locale === "en" && en ? en : es;
}

/** Antepone /en a una ruta interna cuando el locale es inglés. El
 * español nunca lleva prefijo (son las URLs históricas del sitio). */
export function withLocale(path: string, locale: Locale): string {
  if (locale === "es") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Quita el prefijo /en de una ruta actual para poder reconstruirla en
 * el otro idioma (usado por el selector de idioma en el Header). */
export function quitarPrefijoLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

export const MESES: Record<Locale, string[]> = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

type Dictionary = {
  [K in keyof typeof es]: string;
};

const es = {
  "nav.categoriasAria": "Categorías",
  "nav.guias": "Guías",
  "nav.guiasYArticulos": "Guías y artículos",
  "nav.verRanking": "Ver ranking",
  "nav.verProductos": "Ver productos",
  "nav.abrirMenu": "Abrir menú",
  "nav.cerrarMenu": "Cerrar menú",
  "nav.inicio": "Inicio",

  "lang.es": "ES",
  "lang.en": "EN",
  "lang.switchAria": "Cambiar idioma",

  "home.eyebrow": "Rutinas prácticas, recomendaciones probadas",
  "home.heroTitulo": "Simplificá tu rutina diaria con lo que de verdad funciona",
  "home.heroDescripcion":
    "Skincare, protección solar, maquillaje, labios y cabello — seleccionados por reseñas reales y probados en el día a día, no por quién paga más publicidad.",
  "home.verProductosDelMes": "Ver productos del mes",
  "home.comoElegimos": "Cómo elegimos",
  "home.badgeProbados": "Productos probados",
  "home.badgeActualizado": "Actualizado semanalmente",
  "home.badgePrecios": "Precios en tiempo real",
  "home.rankingEyebrow": "Ranking del mes",
  "home.rankingTitulo": "Los más vendidos, filtrados por categoría",
  "home.rankingNota":
    "Precios referenciales al momento de la última actualización. El precio real y la disponibilidad se confirman siempre en Amazon.",

  "buscador.eyebrow": "Buscador rápido",
  "buscador.titulo": "¿Qué producto te conviene?",
  "buscador.descripcion": "Dos clics y te decimos cuál del ranking se ajusta mejor a tu caso.",
  "buscador.resultadoIntro": "Según lo que elegiste, este es el que más te conviene:",
  "buscador.precioReferencial": "precio referencial",
  "buscador.verGuiaCompleta": "Ver guía completa",
  "buscador.empezarDeNuevo": "Empezar de nuevo",
  "buscador.elegirOpcion": "Elegí la opción que más se parece a tu situación:",
  "buscador.volver": "← Volver",

  "ranking.todas": "Todas",
  "ranking.sinProductos": "Aún no hay productos rankeados en esta categoría.",
  "ranking.verProductoAnterior": "Ver producto anterior",
  "ranking.verProductoSiguiente": "Ver producto siguiente",
  "ranking.deslizar": "Deslizá para ver el siguiente →",
  "ranking.seleccionados": "seleccionados",
  "ranking.comparar": "Comparar",
  "ranking.cancelarComparacion": "Cancelar comparación",
  "ranking.guiaCuidadoFacial": "📖 Guía: la rutina rápida de 5 minutos para el día a día",
  "ranking.guiaProteccionSolar": "📖 Guía: cómo elegir protector solar de uso diario",
  "ranking.guiaCuidadoCapilar": "📖 Guía: rutina capilar básica, el orden correcto de cada paso",

  "producto.masVendido": "🏆 Más vendido",
  "producto.mejorValorado": "⭐ Mejor valorado",
  "producto.sinResenas": "Sin reseñas todavía",
  "producto.resenas": "reseñas",
  "producto.compararEste": "Comparar este producto",
  "producto.precioReferencial": "precio referencial",
  "producto.verGuiaCompra": "Ver guía de compra completa",
  "producto.verEnAmazon": "Ver en Amazon",
  "producto.verPrecioActual": "Ver precio actual en Amazon",
  "producto.verDisponibilidad": "Ver disponibilidad en Amazon",
  "producto.revisarEnAmazon": "Revisar en Amazon",
  "producto.guiaDeCompra": "Guía de compra",
  "producto.queEsYParaQueSirve": "¿Qué es y para qué sirve?",
  "producto.ejemplosPracticos": "Ejemplos prácticos de uso",
  "producto.enRutinaDiaria": "En tu rutina diaria: ",
  "producto.usoProfesional": "Uso profesional: ",
  "producto.guiaParaNoEquivocarte": "Guía para no equivocarte al comprar",
  "producto.consejoDeInversion": "El consejo de inversión",
  "producto.desde": "Desde",

  "comparador.comparando": "Comparando",
  "comparador.producto": "producto",
  "comparador.cerrarComparacion": "Cerrar comparación",
  "comparador.precioMasBajo": "💰 Precio más bajo",
  "comparador.mejorValorado": "⭐ Mejor valorado",
  "comparador.masResenado": "🏆 Más reseñado",
  "comparador.idealPara": "Ideal para: ",
  "comparador.especificaciones": "Especificaciones",

  "metodologia.eyebrow": "Metodología",
  "metodologia.titulo": "Cómo armamos el ranking",
  "metodologia.paso1Titulo": "Consultamos datos de venta reales",
  "metodologia.paso1Texto":
    "Cada mes consultamos la Amazon Product Advertising API para las categorías del sitio: precio, rating y volumen de reseñas actualizados.",
  "metodologia.paso2Titulo": "Filtramos por criterio real",
  "metodologia.paso2Texto":
    "Descartamos productos con reseñas insuficientes o con problemas repetidos reportados por compradores (fragancia no declarada, cambios de fórmula, tono que no coincide).",
  "metodologia.paso3Titulo": "Sumamos nota editorial",
  "metodologia.paso3Texto":
    "Escribimos a mano una nota técnica por producto — este texto no viene de ninguna API, es criterio propio revisado manualmente.",
  "metodologia.paso4Titulo": "Publicamos el ranking del mes",
  "metodologia.paso4Texto":
    "El resultado se regenera y publica el día 1 de cada mes, preservando las notas técnicas ya escritas para cada ASIN.",

  "stats.productosEvaluados": "Productos evaluados",
  "stats.categoriasCubiertas": "Categorías cubiertas",
  "stats.actualizacion": "Actualización",
  "stats.mensual": "Mensual",
  "stats.ultimoCorte": "Último corte",

  "newsletter.eyebrow": "Para pegar al lado del espejo",
  "newsletter.titulo": "Llevate la rutina de 5 minutos en una sola hoja",
  "newsletter.descripcion":
    "Los 4 pasos de la rutina rápida, con el producto exacto de cada paso — lista para imprimir, sin tener que volver a buscarla en el sitio cada mañana.",
  "newsletter.enviadoMensaje": "Listo, ya es tuya.",
  "newsletter.abrirRutina": "Abrir la rutina",
  "newsletter.emailLabel": "Correo electrónico",
  "newsletter.emailPlaceholder": "tu@correo.com",
  "newsletter.boton": "Quiero la rutina gratis",

  "glosario.eyebrow": "Glosario de etiqueta",
  "glosario.titulo": "Términos en inglés que vas a ver en este producto",
  "glosario.descripcion":
    "Para que sepas exactamente qué significan antes de decidir si te sirve para tu piel.",

  "disclosure.toast":
    "Como Afiliado de Amazon, BeautyLab gana por compras calificadas. Los precios están sujetos a confirmación en Amazon.",
  "disclosure.verAviso": "Ver aviso de afiliación de Amazon",
  "disclosure.aviso": "Aviso de afiliación:",
  "disclosure.texto":
    "BeautyLab es un participante en el Programa de Afiliados de Amazon Services LLC. Ganamos comisión por compras calificadas realizadas a través de nuestros enlaces, sin costo adicional para vos. Los precios mostrados son referenciales — el precio real solo se confirma en Amazon.",

  "footer.descripcion":
    "Recomendaciones de belleza y cuidado personal probadas de verdad, actualizadas seguido — sin relleno ni publicidad disfrazada de reseña.",
  "footer.categorias": "Categorías",
  "footer.sitio": "Sitio",
  "footer.guiasYArticulos": "Guías y artículos",
  "footer.acercaDe": "Acerca de",
  "footer.privacidad": "Política de privacidad",
  "footer.avisoAfiliacion": "Aviso de afiliación:",
  "footer.avisoTexto":
    "BeautyLab es un participante en el Programa de Afiliados de Amazon Services LLC, un programa de publicidad de afiliados diseñado para proporcionar un medio para que los sitios obtengan comisiones por publicidad, publicitando y enlazando a Amazon.com. Como Afiliado de Amazon, ganamos por compras calificadas. Los precios mostrados son referenciales y pueden cambiar — el precio real solo se confirma en Amazon.",
  "footer.derechos": "Todos los derechos reservados.",

  "articulos.eyebrow": "Guías",
  "articulos.titulo": "Artículos y guías técnicas",
  "articulos.descripcion":
    "Explicaciones honestas para armar tu rutina y elegir bien cada producto, sin promesas de marketing de por medio.",

  "articulo.productosRelacionados": "Productos relacionados",
  "articulo.verRankingCompleto": "Ver ranking completo →",

  "categoria.rankingDelMes": "Ranking del mes",
  "categoria.sinProductos": "Aún no hay productos rankeados en esta categoría.",
  "categoria.guiaDeCompra": "Guía de compra",
} as const;

const en: Dictionary = {
  "nav.categoriasAria": "Categories",
  "nav.guias": "Guides",
  "nav.guiasYArticulos": "Guides & articles",
  "nav.verRanking": "See ranking",
  "nav.verProductos": "See products",
  "nav.abrirMenu": "Open menu",
  "nav.cerrarMenu": "Close menu",
  "nav.inicio": "Home",

  "lang.es": "ES",
  "lang.en": "EN",
  "lang.switchAria": "Switch language",

  "home.eyebrow": "Practical routines, proven recommendations",
  "home.heroTitulo": "Simplify your daily routine with what actually works",
  "home.heroDescripcion":
    "Skincare, sun protection, makeup, lips, and hair — picked from real reviews and tested day to day, not by who pays for the most advertising.",
  "home.verProductosDelMes": "See this month's products",
  "home.comoElegimos": "How we choose",
  "home.badgeProbados": "Tested products",
  "home.badgeActualizado": "Updated weekly",
  "home.badgePrecios": "Real-time prices",
  "home.rankingEyebrow": "This month's ranking",
  "home.rankingTitulo": "Best sellers, filtered by category",
  "home.rankingNota":
    "Reference prices as of the last update. The actual price and availability are always confirmed on Amazon.",

  "buscador.eyebrow": "Quick finder",
  "buscador.titulo": "Which product is right for you?",
  "buscador.descripcion": "Two clicks and we'll tell you which one in the ranking fits your case best.",
  "buscador.resultadoIntro": "Based on what you picked, this is the best fit for you:",
  "buscador.precioReferencial": "reference price",
  "buscador.verGuiaCompleta": "See full guide",
  "buscador.empezarDeNuevo": "Start over",
  "buscador.elegirOpcion": "Pick the option that best matches your situation:",
  "buscador.volver": "← Back",

  "ranking.todas": "All",
  "ranking.sinProductos": "No products ranked in this category yet.",
  "ranking.verProductoAnterior": "See previous product",
  "ranking.verProductoSiguiente": "See next product",
  "ranking.deslizar": "Swipe to see more →",
  "ranking.seleccionados": "selected",
  "ranking.comparar": "Compare",
  "ranking.cancelarComparacion": "Cancel comparison",
  "ranking.guiaCuidadoFacial": "📖 Guide: the quick 5-minute everyday routine",
  "ranking.guiaProteccionSolar": "📖 Guide: how to choose a daily sunscreen",
  "ranking.guiaCuidadoCapilar": "📖 Guide: basic hair routine, the right order for each step",

  "producto.masVendido": "🏆 Best seller",
  "producto.mejorValorado": "⭐ Top rated",
  "producto.sinResenas": "No reviews yet",
  "producto.resenas": "reviews",
  "producto.compararEste": "Compare this product",
  "producto.precioReferencial": "reference price",
  "producto.verGuiaCompra": "See full buying guide",
  "producto.verEnAmazon": "View on Amazon",
  "producto.verPrecioActual": "See current price on Amazon",
  "producto.verDisponibilidad": "Check availability on Amazon",
  "producto.revisarEnAmazon": "Check it out on Amazon",
  "producto.guiaDeCompra": "Buying guide",
  "producto.queEsYParaQueSirve": "What is it and what's it for?",
  "producto.ejemplosPracticos": "Real-world use cases",
  "producto.enRutinaDiaria": "In your daily routine: ",
  "producto.usoProfesional": "Professional use: ",
  "producto.guiaParaNoEquivocarte": "How to avoid buying the wrong one",
  "producto.consejoDeInversion": "The investment takeaway",
  "producto.desde": "From",

  "comparador.comparando": "Comparing",
  "comparador.producto": "product",
  "comparador.cerrarComparacion": "Close comparison",
  "comparador.precioMasBajo": "💰 Lowest price",
  "comparador.mejorValorado": "⭐ Top rated",
  "comparador.masResenado": "🏆 Most reviewed",
  "comparador.idealPara": "Best for: ",
  "comparador.especificaciones": "Specifications",

  "metodologia.eyebrow": "Methodology",
  "metodologia.titulo": "How we build the ranking",
  "metodologia.paso1Titulo": "We check real sales data",
  "metodologia.paso1Texto":
    "Every month we query the Amazon Product Advertising API for the site's categories: updated price, rating, and review volume.",
  "metodologia.paso2Titulo": "We filter by real criteria",
  "metodologia.paso2Texto":
    "We rule out products with too few reviews or with repeated issues reported by buyers (undisclosed fragrance, formula changes, shade mismatches).",
  "metodologia.paso3Titulo": "We add editorial notes",
  "metodologia.paso3Texto":
    "We write a technical note by hand for every product — this text doesn't come from any API, it's our own judgment, manually reviewed.",
  "metodologia.paso4Titulo": "We publish the month's ranking",
  "metodologia.paso4Texto":
    "The result is regenerated and published on the 1st of every month, keeping the technical notes already written for each ASIN.",

  "stats.productosEvaluados": "Products evaluated",
  "stats.categoriasCubiertas": "Categories covered",
  "stats.actualizacion": "Updates",
  "stats.mensual": "Monthly",
  "stats.ultimoCorte": "Last update",

  "newsletter.eyebrow": "To stick next to your mirror",
  "newsletter.titulo": "Get the 5-minute routine on a single sheet",
  "newsletter.descripcion":
    "The 4 steps of the quick routine, with the exact product for each step — ready to print, so you don't have to hunt for it on the site every morning.",
  "newsletter.enviadoMensaje": "Done, it's yours.",
  "newsletter.abrirRutina": "Open the routine",
  "newsletter.emailLabel": "Email address",
  "newsletter.emailPlaceholder": "you@email.com",
  "newsletter.boton": "Send me the free routine",

  "glosario.eyebrow": "Label glossary",
  "glosario.titulo": "English terms you'll see on this product",
  "glosario.descripcion":
    "So you know exactly what they mean before deciding if it's right for your skin.",

  "disclosure.toast":
    "As an Amazon Associate, BeautyLab earns from qualifying purchases. Prices shown are subject to confirmation on Amazon.",
  "disclosure.verAviso": "See Amazon affiliate disclosure",
  "disclosure.aviso": "Affiliate disclosure:",
  "disclosure.texto":
    "BeautyLab is a participant in the Amazon Services LLC Associates Program. We earn a commission on qualifying purchases made through our links, at no extra cost to you. Prices shown are reference prices — the actual price is only confirmed on Amazon.",

  "footer.descripcion":
    "Genuinely tested beauty and personal care recommendations, updated often — no filler, no advertising disguised as a review.",
  "footer.categorias": "Categories",
  "footer.sitio": "Site",
  "footer.guiasYArticulos": "Guides & articles",
  "footer.acercaDe": "About",
  "footer.privacidad": "Privacy policy",
  "footer.avisoAfiliacion": "Affiliate disclosure:",
  "footer.avisoTexto":
    "BeautyLab is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases. Prices shown are reference prices and may change — the actual price is only confirmed on Amazon.",
  "footer.derechos": "All rights reserved.",

  "articulos.eyebrow": "Guides",
  "articulos.titulo": "Articles and guides",
  "articulos.descripcion":
    "Honest explanations to build your routine and choose each product well, no marketing promises attached.",

  "articulo.productosRelacionados": "Related products",
  "articulo.verRankingCompleto": "See full ranking →",

  "categoria.rankingDelMes": "This month's ranking",
  "categoria.sinProductos": "No products ranked in this category yet.",
  "categoria.guiaDeCompra": "Buying guide",
};

const DICTIONARIES: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
