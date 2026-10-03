import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Além da Avenida — Trabalho, cultura e sustentabilidade no Carnaval", template: "%s | Além da Avenida" },
  description: "Portal educativo sobre a cadeia produtiva das escolas de samba, trabalho decente, consumo responsável e economia circular.",
  openGraph: { title: "Além da Avenida", description: "O trabalho que movimenta o Carnaval. Os recursos que podem ganhar uma nova vida.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteNav /><main id="conteudo">{children}</main><SiteFooter /></body>
    </html>
  );
}
