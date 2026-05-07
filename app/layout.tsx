import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PowerUp | Brian Perez - Entrenador Personal",
  description:
    "Transforma tu cuerpo con Brian Perez. Entrenamiento personalizado, planes de nutricion y seguimiento constante. Mejorando Juntos.",
  keywords: [
    "entrenador personal",
    "fitness",
    "entrenamiento",
    "nutricion",
    "gym",
    "powerup",
    "brian perez",
  ],
  authors: [{ name: "Brian Perez" }],
  openGraph: {
    title: "PowerUp | Brian Perez - Entrenador Personal",
    description:
      "Transforma tu cuerpo con Brian Perez. Entrenamiento personalizado.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
