import { glosarioParaProducto } from "@/lib/glosario";
import type { Producto } from "@/lib/tipos";
import { getDictionary, t, type Locale } from "@/lib/i18n";

/**
 * Traduce y explica en criollo la jerga en inglés que aparece en la
 * etiqueta de un producto (SPF, non-comedogenic, broad spectrum, etc.)
 * para que sepas exactamente qué significa antes de comprar.
 */
export default function GlosarioDeCampo({
  producto,
  locale,
}: {
  producto: Producto;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const textoBusqueda = [producto.nombre, ...(producto.tags ?? []), producto.notaTecnica].join(" ");
  const terminos = glosarioParaProducto(textoBusqueda);

  if (terminos.length === 0) return null;

  return (
    <section className="mt-10 rounded-3xl border border-line-dim bg-ink-2 p-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-wide text-accent-2">
        {dict["glosario.eyebrow"]}
      </p>
      <h2 className="mt-2 text-lg font-bold text-text-light">{dict["glosario.titulo"]}</h2>
      <p className="mt-1 text-sm text-text-dim">{dict["glosario.descripcion"]}</p>

      <dl className="mt-5 space-y-4">
        {terminos.map((termino, i) => (
          <div
            key={termino.terminoEn}
            className={i > 0 ? "border-t border-line-dim/40 pt-4" : ""}
          >
            <dt className="text-sm font-bold text-text-light">
              {termino.terminoEn}
              {locale === "es" && (
                <span className="font-medium text-accent-2"> — {termino.terminoEs}</span>
              )}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-text-dim">
              {t(termino.definicion, termino.definicionEn, locale)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
