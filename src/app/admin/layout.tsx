import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AmazonDisclosureToast from "@/components/AmazonDisclosureToast";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://beautylab.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BeautyLab — Rutinas de belleza probadas, sin relleno",
    template: "%s | BeautyLab",
  },
  robots: { index: false, follow: false },
};

/**
 * Layout propio para /admin: el layout raíz vive ahora en
 * `src/app/[lang]/layout.tsx` (solo aplica a rutas localizadas), así que
 * /admin —que no está bajo [lang] y debe permanecer en español, sin
 * selector de idioma— necesita su propio <html>/<body>. Es una copia
 * intencional del layout raíz original: misma fuente, mismos estilos
 * globales, mismos componentes de shell. No usar `t()`/`withLocale` acá.
 */
export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-text-light">
        <div id="site-bg" aria-hidden="true">
          <span className="bg-blob blob-1" />
          <span className="bg-blob blob-2" />
          <span className="bg-blob blob-3" />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">
          <GoogleAnalytics />
          <Header locale="es" />
          <main className="flex-1">{children}</main>
          <Footer locale="es" />
          <AmazonDisclosureToast />
        </div>
      </body>
    </html>
  );
}
