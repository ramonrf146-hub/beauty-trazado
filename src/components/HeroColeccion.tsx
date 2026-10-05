"use client";

import Link from "next/link";
import { useEffect, useReducer, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";

export interface ItemColeccion {
  asin: string;
  nombre: string;
  imagen: string;
  href: string;
}

export interface GrupoColeccion {
  categoria: string;
  items: ItemColeccion[];
}

const DESFASE_Y = [26, -6, 34, -14, 12];
const DURACION = [6, 7.5, 6.8, 8, 7.2];
const INTERVALO_MS = 2600;

interface Rotacion {
  tick: number;
  indices: number[];
}

/** Cada tick cambia una sola ficha (la siguiente de la fila, en orden) por el
 * próximo producto de su categoría. Función pura: segura bajo StrictMode. */
function rotar(
  estado: Rotacion,
  accion: { largos: number[]; activas: number }
): Rotacion {
  const ficha = estado.tick % accion.activas;
  const indices = [...estado.indices];
  const largo = accion.largos[ficha] ?? 0;
  if (largo > 1) indices[ficha] = (indices[ficha] + 1) % largo;
  return { tick: estado.tick + 1, indices };
}

function useFichasActivas(total: number) {
  const [activas, setActivas] = useState(total);

  useEffect(() => {
    const consulta = window.matchMedia("(min-width: 640px)");
    const actualizar = () => setActivas(consulta.matches ? total : Math.min(3, total));
    actualizar();
    consulta.addEventListener("change", actualizar);
    return () => consulta.removeEventListener("change", actualizar);
  }, [total]);

  return activas;
}

/**
 * Mosaico del hero: una ficha por categoría que rota sola por los productos de
 * esa categoría, flotando suave sobre un degradado pastel. Vive dentro del
 * contenedor que se expande con el scroll (el padre tiene pointer-events-none,
 * por eso el wrapper los reactiva).
 */
export default function HeroColeccion({ grupos }: { grupos: GrupoColeccion[] }) {
  const raiz = useRef<HTMLDivElement>(null);
  const enPantalla = useInView(raiz, { amount: 0.25 });
  const reducirMovimiento = useReducedMotion();
  const [pausado, setPausado] = useState(false);
  const activas = useFichasActivas(grupos.length);
  const [rotacion, rotarUna] = useReducer(rotar, {
    tick: 0,
    indices: grupos.map(() => 0),
  });

  const rotando = !reducirMovimiento && !pausado && enPantalla;
  const largos = grupos.map((g) => g.items.length);
  const clave = largos.join(",");

  useEffect(() => {
    if (!rotando) return;
    const id = window.setInterval(
      () => rotarUna({ largos: clave.split(",").map(Number), activas }),
      INTERVALO_MS
    );
    return () => window.clearInterval(id);
  }, [rotando, clave, activas]);

  return (
    <div
      ref={raiz}
      className="pointer-events-auto relative h-full w-full overflow-hidden bg-linear-to-br from-paper via-white to-paper-dim/60"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <div
        className="absolute -left-10 top-6 h-48 w-48 rounded-full bg-line/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-8 bottom-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <ul className="relative z-10 flex h-full items-center justify-center gap-3 px-4 sm:gap-4 sm:px-8">
        {grupos.map((grupo, i) => {
          const item = grupo.items[rotacion.indices[i] % grupo.items.length];
          return (
            <motion.li
              key={grupo.categoria}
              className={`min-w-0 flex-1 ${i >= 3 ? "hidden sm:block" : ""}`}
              style={{ marginTop: DESFASE_Y[i % DESFASE_Y.length] }}
              animate={reducirMovimiento ? undefined : { y: [0, -10, 0] }}
              transition={{
                duration: DURACION[i % DURACION.length],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.asin}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.28 }}
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
                    <span className="mt-1 line-clamp-2 min-h-[2.1em] text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-line sm:text-[11px]">
                      {grupo.categoria}
                    </span>
                    <span className="line-clamp-2 min-h-[2.6em] text-center leading-tight text-[10px] text-text-dim sm:text-[11px]">
                      {item.nombre}
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
