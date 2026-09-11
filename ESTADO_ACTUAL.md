# Estado actual — BeautyLab (beautylab.getfastfalcon.com)

> Este archivo se actualiza en cada checkpoint importante para poder retomar el trabajo desde cualquier PC con solo hacer `git pull`. No es un log línea por línea — para el detalle exacto de cada cambio, ver `git log`.

## Sitio
Afiliado Amazon de belleza / skincare. Tag de afiliado: `beautylab02-20`.
Catálogo en `data/productos.json`, artículos en `content/articulos/` (ES) y `content/articulos-en/` (EN).

**Importante:** este sitio NO usa el artifact "Manifiesto de Pines" (ese es solo para HidroLab/AutomatizaLab) — nunca actualizarlo por productos de este sitio.

## Pendiente
- Ninguna tarea abierta específica de este sitio en este momento. La categoría `maquillaje`, que estaba floja, ya se enriqueció con 2 productos buscados directamente en Amazon.

## Últimos cambios importantes
- 2026-09-10: Neutrogena Toallitas Desmaquillantes Micelares (B00U2VQZDS, `cuidado-facial`, ranking 18) — linkeada en `la-rutina-rapida-de-5-minutos.md` como alternativa sin agua al Paso 1. Hubo un conflicto de merge con otros dos productos agregados en paralelo (Anua Heartleaf Toner, TYMO Hair Straightener) — resuelto renumerando el ranking.
- e.l.f. Sheer For It Blush Tint (B0GVG4S4X9) y Maybelline Fit Me Polvo Compacto Translúcido (B00PFCSNWA) — linkeados en la misma guía.
- Cerrados 3 pendientes de una auditoría previa: cross-linking de AutomatizaLab, artículo de maquillaje de BeautyLab, y linking producto→artículo de BeautyLab.

## Convenciones a respetar
- Todo producto nuevo: entrada bilingüe (ES/EN) siguiendo el schema existente en `productos.json`, con al menos una limitación real declarada, contrastando con productos ya existentes en el catálogo cuando sea natural.
- Enlazar el producto nuevo en al menos un artículo relacionado existente.
- Validar JSON + build antes de commitear. Verificar la URL en producción antes de reportar como terminado.
