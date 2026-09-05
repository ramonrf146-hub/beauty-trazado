import type { Metadata } from "next";
import { getProductos, getEstadisticas } from "@/lib/productos";
import { getDictionary, normalizarLocale, type Locale } from "@/lib/i18n";
import HeroDiagrama from "@/components/HeroDiagrama";
import StatsGrid from "@/components/StatsGrid";
import BuscadorDeProducto from "@/components/BuscadorDeProducto";
import RankingConFiltros from "@/components/RankingConFiltros";
import ComoArmamosRanking from "@/components/ComoArmamosRanking";
import NewsletterBand from "@/components/NewsletterBand";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://beautylab.com";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = normalizarLocale(lang);

  return {
    description:
      locale === "en"
        ? "Practical beauty routines and honest recommendations: skincare, sun protection, makeup, lips, and hair, with real, tested products from Amazon."
        : "Rutinas de belleza prácticas y recomendaciones honestas: skincare, protección solar, maquillaje, labios y cabello, con productos reales y probados de Amazon.",
    alternates: {
      canonical: "/",
      languages: {
        es: `${SITE_URL}/`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/`,
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = normalizarLocale(lang);
  const dict = getDictionary(locale);

  const [productos, estadisticas] = await Promise.all([
    getProductos(),
    getEstadisticas(),
  ]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line-dim/60">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-line">
              {dict["home.eyebrow"]}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-text-light sm:text-4xl lg:text-5xl">
              {dict["home.heroTitulo"]}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-dim">
              {dict["home.heroDescripcion"]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ranking"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
              >
                {dict["home.verProductosDelMes"]}
              </a>
              <a
                href="#metodologia"
                className="rounded-full border border-line-dim bg-white/70 px-6 py-3 text-sm font-semibold text-text-light backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-line hover:bg-white hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                {dict["home.comoElegimos"]}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[dict["home.badgeProbados"], dict["home.badgeActualizado"], dict["home.badgePrecios"]].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-line-dim/70 bg-white/85 px-3 py-1.5 text-xs font-semibold text-[#0369A1] shadow-sm backdrop-blur-md"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          <HeroDiagrama />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <StatsGrid
          totalProductos={estadisticas.totalProductos}
          ultimaActualizacion={estadisticas.ultimaActualizacion}
          locale={locale}
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-4 sm:px-6">
        <BuscadorDeProducto productos={productos} locale={locale} />
      </section>

      <section id="ranking" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          {dict["home.rankingEyebrow"]}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-text-light sm:text-3xl">
          {dict["home.rankingTitulo"]}
        </h2>
        <p className="mt-6 max-w-2xl text-sm text-text-dim">{dict["home.rankingNota"]}</p>

        <div className="mt-8">
          <RankingConFiltros productos={productos} locale={locale} />
        </div>
      </section>

      <div id="metodologia">
        <ComoArmamosRanking locale={locale} />
      </div>

      <NewsletterBand locale={locale} />
    </>
  );
}
