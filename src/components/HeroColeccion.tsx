"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export interface ItemColeccion {
  asin: string;
  nombre: string;
  imagen: string;
  categoria: string;
  href: string;
}

const DESFASE_Y = [26, -6, 34, -14, 12];
const DURACION = [6, 7.5, 6.8, 8, 7.2];

/**
 * Mosaico del hero: el producto #1 de cada categoría, flotando suave sobre un
 * degradado pastel. Vive dentro del contenedor que se expande con el scroll
 * (el padre tiene pointer-events-none, por eso el wrapper los reactiva).
 */
export default function HeroColeccion({ items }: { items: ItemColeccion[] }) {
  const reducirMovimiento = useReducedMotion();

  return (
    <div className="pointer-events-auto relative h-full w-full overflow-hidden bg-linear-to-br from-paper via-white to-paper-dim/60">
      <div
        className="absolute -left-10 top-6 h-48 w-48 rounded-full bg-line/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-8 bottom-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <ul className="relative z-10 flex h-full items-center justify-center gap-3 px-4 sm:gap-4 sm:px-8">
        {items.map((item, i) => (
          <motion.li
            key={item.asin}
            className={`min-w-0 flex-1 ${i >= 3 ? "hidden sm:block" : ""}`}
            style={{ marginTop: DESFASE_Y[i % DESFASE_Y.length] }}
            animate={reducirMovimiento ? undefined : { y: [0, -10, 0] }}
            transition={{
              duration: DURACION[i % DURACION.length],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link
              href={item.href}
              className="group block rounded-2xl bg-white p-2 shadow-md ring-1 ring-line-dim/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-line/50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imagen}
                alt={item.nombre}
                loading="eager"
                className="aspect-square w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="mt-1 line-clamp-2 block text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-line sm:text-[11px]">
                {item.categoria}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
