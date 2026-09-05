import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AmazonDisclosureToast from "@/components/AmazonDisclosureToast";
import "./globals.css";

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
  description:
    "Recomendaciones honestas de skincare, protección solar, maquillaje, labios y cabello — productos reales probados, sin publicidad disfrazada de reseña.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "BeautyLab",
    title: "BeautyLab — Rutinas de belleza probadas, sin relleno",
    description:
      "Recomendaciones honestas de skincare, protección solar, maquillaje, labios y cabello, evaluadas con criterio real de uso diario.",
  },
  verification: {
    google: "cHAXwgMf7nei0wj-akoVC6iukswd9dwuqYZORPvSh0A",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AmazonDisclosureToast />
        </div>
      </body>
    </html>
  );
}
