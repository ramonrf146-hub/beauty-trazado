import { getDictionary, type Locale } from "@/lib/i18n";

function pasos(dict: ReturnType<typeof getDictionary>) {
  return [
    { numero: "01", titulo: dict["metodologia.paso1Titulo"], texto: dict["metodologia.paso1Texto"] },
    { numero: "02", titulo: dict["metodologia.paso2Titulo"], texto: dict["metodologia.paso2Texto"] },
    { numero: "03", titulo: dict["metodologia.paso3Titulo"], texto: dict["metodologia.paso3Texto"] },
    { numero: "04", titulo: dict["metodologia.paso4Titulo"], texto: dict["metodologia.paso4Texto"] },
  ];
}

export default function ComoArmamosRanking({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const PASOS = pasos(dict);

  return (
    <section className="border-y border-line-dim/40 bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          {dict["metodologia.eyebrow"]}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-text-light sm:text-3xl">
          {dict["metodologia.titulo"]}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line-dim/40 bg-line-dim/40 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((paso) => (
            <div key={paso.numero} className="bg-ink-2 p-6">
              <span className="font-mono text-3xl font-light text-line/60">
                {paso.numero}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-text-light">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">
                {paso.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
