// ══════════════════════════════════════════════
//  src/app/layout.tsx — Layout raíz
// ══════════════════════════════════════════════

import type { Metadata } from "next";
import { AuthProvider } from "@/contexts/AuthContext";
import { MapProvider } from "@/contexts/MapContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDUNEX — Mapa de Seguridad",
  description:
    "Mapa interactivo de seguridad para la Zona Metropolitana de Guadalajara. Hospitales, comisarías, puntos púrpura, tótems C5, y más.",
  keywords: ["seguridad", "guadalajara", "mapa", "ZMG", "jalisco"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-brand-dark text-gray-200">
        <AuthProvider>
          <MapProvider>{children}</MapProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
