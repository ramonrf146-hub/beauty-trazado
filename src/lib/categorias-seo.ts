import type { Locale } from "./i18n";

export interface PreguntaCategoria {
  pregunta: string;
  respuesta: string;
}

export interface ContenidoCategoria {
  comoElegir: string[];
  faq: PreguntaCategoria[];
}

/**
 * Texto de apoyo de cada categoría (cómo elegir + preguntas frecuentes).
 * Solo afirmaciones generales, sin promesas de resultados: lo específico de
 * cada producto vive en su ficha. Las categorías sin entrada no muestran el
 * bloque.
 */
export const CONTENIDO_CATEGORIAS: Record<string, Record<Locale, ContenidoCategoria>> = {
  "cuidado-facial": {
    es: {
      comoElegir: [
        "Empezá por el paso, no por la marca: limpiador, hidratante y protector solar cubren lo básico antes de sumar activos.",
        "Sumá un activo nuevo a la vez y probalo unos días antes de incorporar otro.",
        "Revisá la lista de ingredientes si tenés la piel sensible o reactiva.",
      ],
      faq: [
        {
          pregunta: "¿En qué orden se aplica el skincare?",
          respuesta:
            "De lo más liviano a lo más espeso: limpiador, tónico o esencia, sérum, hidratante y, por la mañana, protector solar al final.",
        },
        {
          pregunta: "¿Se pueden combinar varios activos a la vez?",
          respuesta:
            "Conviene introducirlos de a uno. Algunos, como los exfoliantes con ácidos, no se recomiendan juntos la misma noche; ante dudas, consultá con un dermatólogo.",
        },
        {
          pregunta: "¿Cuánto tarda en notarse un producto nuevo?",
          respuesta:
            "Depende del producto y de la piel; en general se evalúa después de varias semanas de uso constante, no de un día para otro.",
        },
      ],
    },
    en: {
      comoElegir: [
        "Start with the step, not the brand: cleanser, moisturizer and sunscreen cover the basics before adding actives.",
        "Add one new active at a time and try it for a few days before introducing another.",
        "Check the ingredient list if your skin is sensitive or reactive.",
      ],
      faq: [
        {
          pregunta: "In what order should I apply skincare?",
          respuesta:
            "From lightest to thickest: cleanser, toner or essence, serum, moisturizer and, in the morning, sunscreen last.",
        },
        {
          pregunta: "Can I combine several actives at once?",
          respuesta:
            "It's better to introduce them one at a time. Some, such as acid exfoliants, aren't recommended together the same night; if in doubt, ask a dermatologist.",
        },
        {
          pregunta: "How long does a new product take to show results?",
          respuesta:
            "It depends on the product and your skin; it's generally judged after several weeks of consistent use, not overnight.",
        },
      ],
    },
  },
  "proteccion-solar": {
    es: {
      comoElegir: [
        "Elegí el factor (SPF) y confirmá que diga amplio espectro, es decir, protección contra UVA y UVB.",
        "Elegí la textura (fluido, gel, crema o stick) que vayas a usar todos los días: el mejor protector es el que realmente te ponés.",
        "Fijate si es resistente al agua o al sudor si hacés deporte o vas a la playa.",
      ],
      faq: [
        {
          pregunta: "¿Qué SPF necesito para el uso diario?",
          respuesta:
            "Las recomendaciones habituales de dermatología sugieren un SPF 30 o más de amplio espectro para uso diario. Aplicalo en cantidad suficiente y reaplicá si estás expuesto al sol.",
        },
        {
          pregunta: "¿Qué significa amplio espectro?",
          respuesta:
            "Que protege tanto contra los rayos UVB (los que queman la piel) como contra los UVA (los asociados al envejecimiento y a otros daños de la piel).",
        },
        {
          pregunta: "¿Hace falta protector solar en interiores o con el cielo nublado?",
          respuesta:
            "La radiación UVA atraviesa nubes y vidrios, por eso muchas guías recomiendan usarlo a diario.",
        },
      ],
    },
    en: {
      comoElegir: [
        "Choose the SPF and confirm it says broad spectrum, meaning protection against both UVA and UVB.",
        "Pick the texture (fluid, gel, cream or stick) you will actually use every day: the best sunscreen is the one you really apply.",
        "Check whether it is water or sweat resistant if you exercise or go to the beach.",
      ],
      faq: [
        {
          pregunta: "What SPF do I need for everyday use?",
          respuesta:
            "Common dermatology guidance suggests broad-spectrum SPF 30 or higher for daily use. Apply enough and reapply if you are exposed to the sun.",
        },
        {
          pregunta: "What does broad spectrum mean?",
          respuesta:
            "It protects against both UVB rays (the ones that burn) and UVA rays (associated with aging and other skin damage).",
        },
        {
          pregunta: "Do I need sunscreen indoors or on cloudy days?",
          respuesta:
            "UVA radiation passes through clouds and glass, which is why many guides recommend wearing it daily.",
        },
      ],
    },
  },
  maquillaje: {
    es: {
      comoElegir: [
        "Probá el tono con luz natural y en la mandíbula, no en la muñeca ni en la mano.",
        "Para uso diario, priorizá fórmulas livianas y de aplicación sencilla.",
        "Fijate si necesitás resistencia al agua o a la transferencia según tu rutina.",
      ],
      faq: [
        {
          pregunta: "¿Cómo elijo el tono de una base o un corrector?",
          respuesta:
            "Probalo sobre la mandíbula o el borde del rostro con luz natural, no en la mano: ahí se ve mejor si iguala con el cuello y la cara.",
        },
        {
          pregunta: "¿Qué diferencia hay entre una máscara de pestañas resistente al agua y una normal?",
          respuesta:
            "La resistente al agua aguanta humedad, sudor y lluvia, pero suele requerir un desmaquillante específico para quitarse.",
        },
        {
          pregunta: "¿Se puede usar maquillaje todos los días con piel sensible?",
          respuesta:
            "Sí, con fórmulas pensadas para piel sensible y desmaquillando bien por la noche; si aparece irritación, suspendé el uso y consultá a un profesional.",
        },
      ],
    },
    en: {
      comoElegir: [
        "Test the shade in natural light and along the jawline, not on your wrist or hand.",
        "For everyday wear, prioritize lightweight formulas that are easy to apply.",
        "Check whether you need water or transfer resistance for your routine.",
      ],
      faq: [
        {
          pregunta: "How do I choose a foundation or concealer shade?",
          respuesta:
            "Test it along the jawline or edge of the face in natural light, not on your hand: that is where you can best see whether it matches your neck and face.",
        },
        {
          pregunta: "What is the difference between waterproof and regular mascara?",
          respuesta:
            "Waterproof mascara withstands moisture, sweat and rain, but usually needs a dedicated makeup remover to take off.",
        },
        {
          pregunta: "Can I wear makeup every day with sensitive skin?",
          respuesta:
            "Yes, with formulas designed for sensitive skin and by removing it well at night; if irritation appears, stop using it and consult a professional.",
        },
      ],
    },
  },
  labios: {
    es: {
      comoElegir: [
        "Decidí el objetivo: hidratar (bálsamo), dar color o brillo (gloss, aceite) o tratar de noche.",
        "Revisá si incluye protección solar (SPF) si lo vas a usar de día.",
        "Elegí la textura y el acabado con los que te sientas cómoda o cómodo todo el día.",
      ],
      faq: [
        {
          pregunta: "¿Qué diferencia hay entre lip oil, bálsamo y tratamiento nocturno?",
          respuesta:
            "El bálsamo sella la humedad con una barrera más oclusiva; el lip oil aporta brillo y suavidad con una textura más ligera; el tratamiento nocturno suele ser más rico y se usa antes de dormir.",
        },
        {
          pregunta: "¿Cada cuánto conviene aplicar un bálsamo labial?",
          respuesta:
            "Las veces que lo necesites durante el día; si los labios se sienten secos de forma persistente, vale la pena revisar si algún producto los irrita.",
        },
        {
          pregunta: "¿Los labios necesitan protector solar?",
          respuesta:
            "Sí, la piel de los labios también recibe radiación UV; un producto con SPF es una forma práctica de protegerlos.",
        },
      ],
    },
    en: {
      comoElegir: [
        "Decide the goal: moisturizing (balm), color or shine (gloss, oil) or overnight treatment.",
        "Check whether it includes sun protection (SPF) if you will use it in the daytime.",
        "Choose the texture and finish that feel comfortable all day.",
      ],
      faq: [
        {
          pregunta: "What is the difference between lip oil, lip balm and an overnight treatment?",
          respuesta:
            "Balm seals in moisture with a more occlusive barrier; lip oil adds shine and softness with a lighter texture; an overnight treatment is usually richer and used before bed.",
        },
        {
          pregunta: "How often should I apply lip balm?",
          respuesta:
            "As often as you need during the day; if your lips feel persistently dry, it's worth checking whether a product is irritating them.",
        },
        {
          pregunta: "Do lips need sunscreen?",
          respuesta:
            "Yes, the skin on your lips also receives UV radiation; a product with SPF is a practical way to protect them.",
        },
      ],
    },
  },
  "cuidado-capilar": {
    es: {
      comoElegir: [
        "Identificá tu tipo de cuero cabelludo y de cabello (graso, seco, rizado, teñido) antes de elegir.",
        "Elegí por necesidad: limpieza, hidratación, reparación o control del frizz.",
        "Mirá la frecuencia de uso que recomienda cada producto.",
      ],
      faq: [
        {
          pregunta: "¿Cada cuánto hay que lavarse el cabello?",
          respuesta:
            "Depende del tipo de cuero cabelludo y del estilo de vida; muchas personas lo hacen entre 2 y 4 veces por semana, pero no hay una regla única.",
        },
        {
          pregunta: "¿Para qué sirve un aceite capilar?",
          respuesta:
            "Aporta suavidad y brillo y ayuda a sellar la humedad en el largo y las puntas; se usa en poca cantidad.",
        },
        {
          pregunta: "¿El acondicionador y la mascarilla capilar son lo mismo?",
          respuesta:
            "No: el acondicionador se usa en cada lavado para suavizar y facilitar el peinado; la mascarilla es un tratamiento más intenso que se usa con menos frecuencia.",
        },
      ],
    },
    en: {
      comoElegir: [
        "Identify your scalp and hair type (oily, dry, curly, color-treated) before choosing.",
        "Choose by need: cleansing, hydration, repair or frizz control.",
        "Look at the usage frequency each product recommends.",
      ],
      faq: [
        {
          pregunta: "How often should I wash my hair?",
          respuesta:
            "It depends on your scalp type and lifestyle; many people wash 2 to 4 times a week, but there is no single rule.",
        },
        {
          pregunta: "What is a hair oil for?",
          respuesta:
            "It adds softness and shine and helps seal moisture into the lengths and ends; use a small amount.",
        },
        {
          pregunta: "Are conditioner and a hair mask the same thing?",
          respuesta:
            "No: conditioner is used at every wash to soften and ease styling; a mask is a more intensive treatment used less often.",
        },
      ],
    },
  },
};
