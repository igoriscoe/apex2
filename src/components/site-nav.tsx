"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const primary = navigation.slice(0, 7);
  const more = navigation.slice(7);
  return <header className="site-header"><div className="header-inner">
    <Link className="brand" href="/" aria-label="Além da Avenida, página inicial" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true"><span /></span><span>ALÉM DA<br />AVENIDA</span></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">{primary.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<details className="nav-more"><summary>Explorar <ArrowUpRight size={14} aria-hidden="true" /></summary><div className="nav-menu">{more.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></details></nav>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
  </div><nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel" hidden={!open}>{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={15} aria-hidden="true" /></Link>)}</nav></header>;
}