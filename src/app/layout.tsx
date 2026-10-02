import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Set Architect — La inteligencia que transforma tu biblioteca en sets perfectos",
  description:
    "Motor Pro Audio con Hard Phase Lock a 0 ms, sincronización 1:1, Auto Loops cuantizados a la grilla y maquetado inteligente de sets para Rekordbox y Serato.",
  keywords: ["DJ", "Rekordbox", "Serato", "mixing armónico", "rueda Camelot", "software DJ"],
  openGraph: {
    title: "Smart Set Architect — Inteligencia para DJs",
    description:
      "Motor Pro Audio con Hard Phase Lock a 0 ms, sincronización 1:1, Auto Loops cuantizados y maquetado inteligente de sets.",
    type: "website",
    url: "https://smart-set-landing.vercel.app",
    images: [
      {
        url: "https://smart-set-landing.vercel.app/logo.png",
        width: 1024,
        height: 1024,
        alt: "Smart Set Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Set Architect — Inteligencia para DJs",
    description:
      "Motor Pro Audio con Hard Phase Lock a 0 ms, sincronización 1:1, Auto Loops cuantizados y maquetado inteligente de sets.",
    images: ["https://smart-set-landing.vercel.app/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}