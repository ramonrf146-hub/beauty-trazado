# Estado actual — BeautyLab (beautylab.getfastfalcon.com)

> Este archivo se actualiza en cada checkpoint importante para poder retomar el trabajo desde cualquier PC con solo hacer `git pull`. No es un log línea por línea — para el detalle exacto de cada cambio, ver `git log`.

## Sitio
Afiliado Amazon de belleza / skincare. Tag de afiliado: `beautylab02-20`.
Catálogo en `data/productos.json`, artículos en `content/articulos/` (ES) y `content/articulos-en/` (EN).

**Importante:** este sitio NO usa el artifact "Manifiesto de Pines" (ese es solo para HidroLab/AutomatizaLab) — nunca actualizarlo por productos de este sitio.

## Pendiente
- Sumar un producto real de "peel-off lip stain" (candidatos: Sacheu STAY-N, Wonderskin Wonder Blading) a `labios` en cuanto se pueda verificar precio/rating/reseñas reales en su página de Amazon — el 2026-09-13 falló la carga de contenido dinámico de Amazon vía WebFetch para todos los ASIN probados, así que puede ser un problema temporal de la herramienta más que del producto. Reintentar.

## Últimos cambios importantes
- 2026-09-13: No se agregó producto nuevo. Investigación de tendencias TikTok 2026 encontró la categoría viral "peel-off lip stain" (Sacheu STAY-N, Wonderskin Wonder Blading) como hueco real en `labios` (hoy solo hay balm/oil/tratamiento nocturno, ningún color de larga duración) — pero WebFetch no pudo cargar el contenido dinámico (precio/rating/reseñas) de ninguna página de producto de Amazon en esta sesión (falla sistemática confirmada también en ASINs ya existentes del catálogo, no es un problema del candidato). Por la regla de no inventar datos, se descartó agregar el producto. En su lugar se enriqueció `lip-oil-vs-lip-balm-vs-tratamiento-nocturno.md` (ES/EN) con una sección nueva sobre esta tendencia y un video real de YouTube (reseña de Sacheu STAY-N), dejando explícito que el producto se sumará cuando se pueda verificar.
- 2026-09-12: Rare Beauty Soft Pinch Liquid Blush shade Happy (B08JKTGRGT, `maquillaje`, ranking 6) — alternativa premium viral en TikTok (blush más buscado 3 años seguidos) al e.l.f. Sheer For It Blush Tint ya existente. Linkeado en `la-rutina-rapida-de-5-minutos.md` (ES/EN) junto con el video oficial de TikTok de @rarebeauty sobre la fórmula.
- 2026-09-10: Neutrogena Toallitas Desmaquillantes Micelares (B00U2VQZDS, `cuidado-facial`, ranking 18) — linkeada en `la-rutina-rapida-de-5-minutos.md` como alternativa sin agua al Paso 1. Hubo un conflicto de merge con otros dos productos agregados en paralelo (Anua Heartleaf Toner, TYMO Hair Straightener) — resuelto renumerando el ranking.
- e.l.f. Sheer For It Blush Tint (B0GVG4S4X9) y Maybelline Fit Me Polvo Compacto Translúcido (B00PFCSNWA) — linkeados en la misma guía.
- Cerrados 3 pendientes de una auditoría previa: cross-linking de AutomatizaLab, artículo de maquillaje de BeautyLab, y linking producto→artículo de BeautyLab.

## Convenciones a respetar
- Todo producto nuevo: entrada bilingüe (ES/EN) siguiendo el schema existente en `productos.json`, con al menos una limitación real declarada, contrastando con productos ya existentes en el catálogo cuando sea natural.
- Enlazar el producto nuevo en al menos un artículo relacionado existente.
- Validar JSON + build antes de commitear. Verificar la URL en producción antes de reportar como terminado.
