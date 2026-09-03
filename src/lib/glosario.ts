export interface TerminoGlosario {
  terminoEn: string;
  terminoEs: string;
  definicion: string;
  /** Palabras/frases que, si aparecen en el nombre, tags o nota técnica del producto (sin distinguir mayúsculas), activan este término. */
  palabrasClave: string[];
}

/**
 * Diccionario compartido de jerga de skincare/belleza en inglés. Se filtra
 * por producto en GlosarioDeCampo — no todo término aplica a todo producto.
 */
export const GLOSARIO: TerminoGlosario[] = [
  {
    terminoEn: "SPF (Sun Protection Factor)",
    terminoEs: "SPF — Factor de protección solar",
    definicion:
      "El número indica, en teoría, cuánto más tiempo podés estar al sol sin quemarte comparado con no usar nada — SPF 30 filtra cerca del 97% de los rayos UVB, SPF 50 cerca del 98%.",
    palabrasClave: ["spf"],
  },
  {
    terminoEn: "Broad Spectrum",
    terminoEs: "Amplio espectro",
    definicion:
      "Significa que el protector filtra tanto rayos UVB (los que queman) como UVA (los que envejecen la piel) — un SPF sin esta etiqueta puede estar cubriendo solo la mitad del problema.",
    palabrasClave: ["broad spectrum", "amplio espectro"],
  },
  {
    terminoEn: "Non-comedogenic",
    terminoEs: "No comedogénico",
    definicion:
      "La fórmula fue formulada para no tapar los poros — reduce (no elimina del todo) la probabilidad de que un producto te genere granitos.",
    palabrasClave: ["non-comedogenic", "no comedogénico", "comedogenic"],
  },
  {
    terminoEn: "Hyaluronic Acid",
    terminoEs: "Ácido hialurónico",
    definicion:
      "Una molécula que retiene agua en la piel — no hidrata \"trayendo\" agua de otro lado, sino que ayuda a que la piel retenga la que ya tiene.",
    palabrasClave: ["hyaluronic", "hialurónico", "ácido hialurónico"],
  },
  {
    terminoEn: "Ceramides",
    terminoEs: "Ceramidas",
    definicion:
      "Grasas que ya existen naturalmente en la piel y forman parte de su \"barrera\" protectora — sumarlas en un producto ayuda a reforzar esa barrera cuando está dañada o reseca.",
    palabrasClave: ["ceramide", "ceramida"],
  },
  {
    terminoEn: "Fragrance Free",
    terminoEs: "Sin fragancia",
    definicion:
      "No tiene perfume agregado — relevante para piel sensible, ya que la fragancia es una de las causas más comunes de irritación en productos de skincare.",
    palabrasClave: ["fragrance free", "sin fragancia", "fragrance-free"],
  },
  {
    terminoEn: "Dermatologist Recommended",
    terminoEs: "Recomendado por dermatólogos",
    definicion:
      "Indica que dermatólogos avalan o recomiendan el producto en general — no es lo mismo que \"testeado clínicamente\", que implica un estudio formal con resultados medibles.",
    palabrasClave: ["dermatologist", "dermatólog"],
  },
  {
    terminoEn: "Mineral Sunscreen",
    terminoEs: "Protector solar mineral",
    definicion:
      "Usa óxido de zinc o dióxido de titanio para reflejar la luz solar en vez de absorberla como hacen los filtros químicos — suele dejar menos irritación en piel sensible, a veces a cambio de un poco de repinte blanco.",
    palabrasClave: ["mineral", "zinc oxide", "óxido de zinc", "100% mineral"],
  },
  {
    terminoEn: "Vegan & Cruelty-Free",
    terminoEs: "Vegano y libre de crueldad animal",
    definicion:
      "No contiene ingredientes de origen animal (vegano) y no se testeó en animales en ningún paso de fabricación (cruelty-free) — son dos certificaciones distintas que suelen ir juntas.",
    palabrasClave: ["vegan", "cruelty-free", "cruelty free"],
  },
  {
    terminoEn: "Buildable Formula",
    terminoEs: "Fórmula que se puede intensificar",
    definicion:
      "Podés aplicar una capa liviana o ir sumando capas para más intensidad de color/cobertura, sin que se vea parchado — a diferencia de una fórmula de una sola pasada.",
    palabrasClave: ["buildable"],
  },
  {
    terminoEn: "Oil Control",
    terminoEs: "Control de grasa",
    definicion:
      "Formulado para absorber o reducir el brillo del exceso de sebo en piel grasa/mixta a lo largo del día.",
    palabrasClave: ["oil control", "oil-free", "sin aceite"],
  },
  {
    terminoEn: "Extreme Hold",
    terminoEs: "Fijación extrema",
    definicion:
      "En productos de cejas, indica que la fórmula fija el vello en su lugar por varias horas sin necesidad de retocar — a diferencia de un gel de fijación más ligera que se puede peinar y repeinar.",
    palabrasClave: ["extreme hold", "fijación extrema", "hold"],
  },
];

/** Filtra el glosario según el texto real de un producto (nombre + tags + nota técnica). */
export function glosarioParaProducto(textoBusqueda: string, maximo = 4): TerminoGlosario[] {
  const texto = textoBusqueda.toLowerCase();
  return GLOSARIO.filter((termino) =>
    termino.palabrasClave.some((clave) => texto.includes(clave))
  ).slice(0, maximo);
}
