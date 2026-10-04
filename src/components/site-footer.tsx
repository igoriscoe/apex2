import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main"><div><p className="eyebrow">Além da Avenida</p><p className="footer-line">O trabalho que movimenta o Carnaval.<br />Os recursos que podem ganhar uma nova vida.</p></div><div className="footer-credit"><span>Material Educacional Digital · APEX II · 2026</span><span>Igor Rismo Coelho · Marcelle Nascimento Santos Moraes · Priscilla Porciuncula</span><span>Orientação: Ana Shirley de França Moraes</span></div></div><div className="footer-bottom"><span>Finalidade educativa. Não é publicação oficial da Faculdade Unyleya.</span><Link href="/sobre-o-projeto">Sobre o projeto <ArrowUpRight size={14} aria-hidden="true" /></Link></div></footer>;
}