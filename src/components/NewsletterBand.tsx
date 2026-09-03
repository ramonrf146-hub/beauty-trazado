"use client";

import { useState } from "react";

/**
 * El "regalo" se entrega como descarga directa apenas se completa el
 * form — el alta en Buttondown (vía /api/suscribirse) es best-effort y
 * nunca bloquea la descarga si falla o tarda.
 */
export default function NewsletterBand() {
  const [estado, setEstado] = useState<"idle" | "enviado">("idle");

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
            Para pegar al lado del espejo
          </p>
          <h2 className="mt-2 max-w-md text-xl font-bold sm:text-2xl">
            Llevate la rutina de 5 minutos en una sola hoja
          </h2>
          <p className="mt-2 max-w-md text-sm text-text-dim">
            Los 4 pasos de la rutina rápida, con el producto exacto de cada
            paso — lista para imprimir, sin tener que volver a buscarla en
            el sitio cada mañana.
          </p>
        </div>

        {estado === "enviado" ? (
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-semibold text-accent">Listo, ya es tuya.</p>
            <a
              href="/plantillas/rutina-5-minutos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Abrir la rutina
            </a>
          </div>
        ) : (
          <form
            onSubmit={manejarEnvio}
            className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="w-full rounded-full border border-line-dim bg-white px-4 py-2.5 text-sm text-text-light placeholder:text-text-dim/60 focus:border-line focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Quiero la rutina gratis
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
