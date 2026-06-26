import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from "@/components/header";
import { CoverParticles } from "@/components/cover-particles";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

// TODO: cambia esta URL por tu dominio real cuando publiques
const siteUrl = "https://hernanludena.com";
const siteTitle = "Hernán Ludeña — Tech Lead & Software Engineer";
const siteDescription =
  "Portafolio de Hernán Ludeña, Tech Lead y Full Stack Java con más de 15 años de experiencia en software financiero, microservicios, cloud (AWS) y liderazgo técnico.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Hernán Ludeña",
  },
  description: siteDescription,
  keywords: [
    "Hernán Ludeña",
    "Tech Lead",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Microservicios",
    "AWS",
    "Kubernetes",
    "Portafolio",
    "Ecuador",
  ],
  authors: [{ name: "Hernán Ludeña" }],
  creator: "Hernán Ludeña",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "Hernán Ludeña",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/perfil.jpg",
        width: 1200,
        height: 630,
        alt: "Hernán Ludeña — Tech Lead & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/perfil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <CoverParticles />
            <Header />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
