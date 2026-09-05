"use client";

import { useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

/**
 * El "regalo" se entrega como descarga directa apenas se completa el
 * form — el alta en Buttondown (vía /api/suscribirse) es best-effort y
 * nunca bloquea la descarga si falla o tarda.
 */
export default function NewsletterBand({ locale }: { locale: Locale }) {
  const [estado, setEstado] = useState<"idle" | "enviado">("idle");
  const dict = getDictionary(locale);

  function manejarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const email = new FormData(evento.currentTarget).get("email");
    fetch("/api/suscribirse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, tag: "rutina-5-minutos" }),
    }).catch(() => {});
    setEstado("enviado");
  }

  return (
    <section className="bg-paper text-text-light">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0369A1]">
            {dict["newsletter.eyebrow"]}
          </p>
          <h2 className="mt-2 max-w-md text-xl font-bold sm:text-2xl">
            {dict["newsletter.titulo"]}
          </h2>
          <p className="mt-2 max-w-md text-sm text-text-dim">{dict["newsletter.descripcion"]}</p>
        </div>

        {estado === "enviado" ? (
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-semibold text-accent">{dict["newsletter.enviadoMensaje"]}</p>
            <a
              href="/plantillas/rutina-5-minutos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1D4ED8]"
            >
              {dict["newsletter.abrirRutina"]}
            </a>
          </div>
        ) : (
          <form
            onSubmit={manejarEnvio}
            className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {dict["newsletter.emailLabel"]}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder={dict["newsletter.emailPlaceholder"]}
              className="w-full rounded-full border border-line-dim bg-white px-4 py-2.5 text-sm text-text-light placeholder:text-text-dim/60 focus:border-line focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1D4ED8]"
            >
              {dict["newsletter.boton"]}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
