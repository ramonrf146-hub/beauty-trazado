/**
 * Visual de firma del hero: collage de tarjetas flotantes con fotos reales
 * de producto, en vez de un diagrama técnico — coherente con la estética
 * editorial de belleza (tarjetas rounded-2xl, sombra sutil) en vez del
 * plano de ingeniería que usan los sitios hermanos.
 */
const FOTOS = [
  {
    src: "https://m.media-amazon.com/images/I/71V-hFCug0L._SY355_.jpg",
    alt: "CeraVe Hydrating Facial Cleanser",
  },
  {
    src: "https://m.media-amazon.com/images/I/71MQo8pHmBL._SY355_.jpg",
    alt: "Maybelline Lash Sensational Sky High",
  },
  {
    src: "https://m.media-amazon.com/images/I/61qptGY6NaL._SY355_.jpg",
    alt: "e.l.f. Glow Reviver Lip Oil",
  },
];

function FotoFlotante({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-line-dim/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-line/50 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="aspect-square w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
      />
    </div>
  );
}

export default function HeroDiagrama() {
  return (
    <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-4">
      <FotoFlotante src={FOTOS[0].src} alt={FOTOS[0].alt} className="col-span-2 aspect-4/3" />
      <FotoFlotante src={FOTOS[1].src} alt={FOTOS[1].alt} className="aspect-square translate-y-4" />
      <FotoFlotante src={FOTOS[2].src} alt={FOTOS[2].alt} className="aspect-square" />
    </div>
  );
}
