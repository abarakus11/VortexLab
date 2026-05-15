import type { Metadata } from "next";
import { Caveat, JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-pen",
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-label",
  weight: ["400", "500", "600"],
  display: "swap",
});

const fontVars = `${spaceGrotesk.variable} ${syne.variable} ${caveat.variable} ${jetbrainsMono.variable}`;

export const metadata: Metadata = {
  title: "VORTEX — Criação de Sites Premium | Design Cinematográfico",
  description:
    "Transformamos ideias em experiências digitais impossíveis de ignorar. Websites premium, landing pages, sistemas web e branding digital para marcas que querem ser extraordinárias.",
  keywords:
    "criação de sites, agência digital, websites premium, landing page, design ui ux, next.js, desenvolvimento web",
  authors: [{ name: "Vortex Agency" }],
  openGraph: {
    title: "VORTEX — Criação de Sites Premium",
    description:
      "Experiências digitais de nível mundial. Design cinematográfico, performance absurda e resultados reais.",
    url: "https://vortexagency.com.br",
    siteName: "Vortex Agency",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VORTEX — Criação de Sites Premium",
    description: "Experiências digitais de nível mundial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={fontVars}>
      <body
        className="min-h-screen antialiased"
        style={{ color: "#f8f8ff", fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
