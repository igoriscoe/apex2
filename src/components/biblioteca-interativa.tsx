"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Check, ChevronDown, ChevronUp, Clapperboard, Copy, GraduationCap, Landmark, Search } from "lucide-react";
import styles from "./biblioteca-interativa.module.css";

type Categoria = "Documentos oficiais" | "Publicações acadêmicas" | "Administração e gestão";
type Fonte = {
  id: string;
  titulo: string;
  autor: string;
  ano: string;
  tipo: string;
  categoria: Categoria;
  descricao: string;
  abnt: string;
  url: string;
  temas: string[];
};

// As três primeiras entradas preservam as referências já utilizadas no portal.
const fontes: Fonte[] = [
  {
    id: "ods8", titulo: "ODS 8 — Trabalho Decente e Crescimento Econômico", autor: "Nações Unidas Brasil", ano: "s. d.", tipo: "Página institucional", categoria: "Documentos oficiais",
    descricao: "Objetivos e metas relacionados ao trabalho decente, à atividade produtiva, ao empreendedorismo e ao crescimento econômico inclusivo.",
    abnt: "NAÇÕES UNIDAS BRASIL. Objetivo de Desenvolvimento Sustentável 8: trabalho decente e crescimento econômico. Brasília, DF: Nações Unidas Brasil, [s. d.]. Disponível em: https://brasil.un.org/pt-br/sdgs/8. Acesso em: 3 out. 2026.",
    url: "https://brasil.un.org/pt-br/sdgs/8", temas: ["ODS 8", "trabalho", "empreendedorismo"]
  },
  {
    id: "ods12", titulo: "ODS 12 — Consumo e Produção Responsáveis", autor: "Nações Unidas Brasil", ano: "s. d.", tipo: "Página institucional", categoria: "Documentos oficiais",
    descricao: "Metas sobre padrões sustentáveis de produção e consumo, informação, prevenção e redução da geração de resíduos.",
    abnt: "NAÇÕES UNIDAS BRASIL. Objetivo de Desenvolvimento Sustentável 12: consumo e produção responsáveis. Brasília, DF: Nações Unidas Brasil, [s. d.]. Disponível em: https://brasil.un.org/pt-br/sdgs/12. Acesso em: 3 out. 2026.",
    url: "https://brasil.un.org/pt-br/sdgs/12", temas: ["ODS 12", "resíduos", "sustentabilidade"]
  },
  {
    id: "pnrs", titulo: "Lei nº 12.305/2010 — Política Nacional de Resíduos Sólidos", autor: "Brasil", ano: "2010", tipo: "Legislação", categoria: "Documentos oficiais",
    descricao: "Base legal brasileira para conceitos como reutilização, reciclagem, logística reversa e hierarquia de gestão de resíduos.",
    abnt: "BRASIL. Lei nº 12.305, de 2 de agosto de 2010. Institui a Política Nacional de Resíduos Sólidos; altera a Lei nº 9.605, de 12 de fevereiro de 1998; e dá outras providências. Diário Oficial da União: Brasília, DF, 3 ago. 2010. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm. Acesso em: 3 out. 2026.",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm", temas: ["legislação", "resíduos", "logística reversa"]
  },
  {
    id: "santhias", titulo: "Zzzziriguidum! Consulado: o choque do samba em Florianópolis", autor: "Paulo Roberto Santhias", ano: "2010", tipo: "Dissertação de mestrado", categoria: "Publicações acadêmicas",
    descricao: "Pesquisa histórica sobre memórias e histórias de uma escola de samba de Florianópolis entre 1976 e 2000. É referência contextual, não diagnóstico das práticas atuais da agremiação.",
    abnt: "SANTHIAS, Paulo Roberto. Zzzziriguidum! Consulado: o choque do samba em Florianópolis (memórias e histórias de uma escola de samba encravada na cidade – 1976 a 2000). 2010. 107 f. Dissertação (Mestrado em História) – Universidade do Estado de Santa Catarina, Florianópolis, 2010. Disponível em: https://www.faed.udesc.br/arquivos/id_submenu/479/ppgh_udesc_dissert_paulo_roberto_santhias.pdf. Acesso em: 4 out. 2026.",
    url: "https://www.faed.udesc.br/arquivos/id_submenu/479/ppgh_udesc_dissert_paulo_roberto_santhias.pdf", temas: ["carnaval", "Florianópolis", "história", "escola de samba"]
  },
  {
    id: "circular", titulo: "O que é a economia circular?", autor: "Ellen MacArthur Foundation", ano: "s. d.", tipo: "Material técnico introdutório", categoria: "Administração e gestão",
    descricao: "Explica os três princípios da economia circular e como projeto, circulação de produtos e regeneração podem orientar decisões de gestão.",
    abnt: "ELLEN MACARTHUR FOUNDATION. O que é a economia circular? [S. l.]: Ellen MacArthur Foundation, [s. d.]. Disponível em: https://www.ellenmacarthurfoundation.org/pt/temas/economia-circular-introducao/visao-geral. Acesso em: 4 out. 2026.",
    url: "https://www.ellenmacarthurfoundation.org/pt/temas/economia-circular-introducao/visao-geral", temas: ["economia circular", "gestão", "materiais"]
  },
];

type Filtro = "Todos" | Categoria | "Conteúdos audiovisuais";
const filtros: { id: Filtro; label: string; Icon: typeof BookOpen }[] = [
  { id: "Todos", label: "Todos", Icon: BookOpen },
  { id: "Documentos oficiais", label: "Documentos oficiais", Icon: Landmark },
  { id: "Publicações acadêmicas", label: "Publicações acadêmicas", Icon: GraduationCap },
  { id: "Administração e gestão", label: "Administração e gestão", Icon: BookOpen },
  { id: "Conteúdos audiovisuais", label: "Audiovisuais", Icon: Clapperboard },
];

function semAcento(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function BibliotecaInterativa() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const [abertos, setAbertos] = useState<string[]>([]);
  const [copiado, setCopiado] = useState<string | null>(null);
  const resultado = useMemo(() => fontes.filter((fonte) => {
    const corresponde = filtro === "Todos" || fonte.categoria === filtro;
    const pesquisavel = semAcento([fonte.titulo, fonte.autor, fonte.descricao, fonte.tipo, ...fonte.temas].join(" "));
    return corresponde && pesquisavel.includes(semAcento(busca.trim()));
  }), [busca, filtro]);

  const alternar = (id: string) => setAbertos(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  async function copiar(fonte: Fonte) {
    try { await navigator.clipboard.writeText(fonte.abnt); setCopiado(fonte.id); }
    catch { setCopiado(null); window.prompt("Selecione e copie a referência:", fonte.abnt); }
  }

  return (
    <section className={styles.root} aria-labelledby="biblioteca-titulo">
      <div className={styles.intro}>
        <span className="eyebrow">Biblioteca do Além da Avenida</span>
        <h2 id="biblioteca-titulo">Encontre uma fonte.</h2>
        <p>Consulte materiais que fundamentam o portal. Cada referência tem origem identificada, resumo e acesso à fonte original.</p>
      </div>

      <label className={styles.searchLabel} htmlFor="biblioteca-busca"><Search size={17} aria-hidden="true" /> Pesquisar por título, autor ou tema</label>
      <input id="biblioteca-busca" className={styles.searchInput} value={busca} onChange={e => setBusca(e.target.value)} placeholder="Ex.: trabalho decente, Carnaval, resíduos..." type="search" />
      <div className={styles.filters} role="group" aria-label="Filtrar fontes por tipo">
        {filtros.map(({ id, label, Icon }) => (
          <button key={id} type="button" className={`${styles.filter} ${filtro === id ? styles.active : ""}`} onClick={() => setFiltro(id)} aria-pressed={filtro === id}>
            <Icon size={15} aria-hidden="true" /> {label}
          </button>
        ))}
      </div>

      {filtro === "Conteúdos audiovisuais" ? (
        <div className={styles.audiovisual}>
          <Clapperboard size={25} strokeWidth={1.5} aria-hidden="true" />
          <div><h3>Vídeos com contexto e autoria</h3><p>Os vídeos educativos estão organizados na Videoteca, onde você encontra fonte, tema e uma pergunta para reflexão.</p>
            <Link href="/videoteca">Explorar a Videoteca <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      ) : (
        <>
          <p className={styles.counter} aria-live="polite">{resultado.length} {resultado.length === 1 ? "fonte encontrada" : "fontes encontradas"}</p>
          <div className={styles.list}>
            {resultado.map(fonte => {
              const aberta = abertos.includes(fonte.id);
              return (
                <article key={fonte.id} className={styles.item}>
                  <button className={styles.trigger} type="button" onClick={() => alternar(fonte.id)} aria-expanded={aberta} aria-controls={`biblioteca-${fonte.id}`}>
                    <span><span className={styles.category}>{fonte.categoria} · {fonte.ano}</span><strong>{fonte.titulo}</strong><small>{fonte.autor} · {fonte.tipo}</small></span>
                    {aberta ? <ChevronUp size={19} aria-hidden="true" /> : <ChevronDown size={19} aria-hidden="true" />}
                  </button>
                  {aberta && <div className={styles.details} id={`biblioteca-${fonte.id}`}>
                    <p>{fonte.descricao}</p>
                    <div className={styles.themes}>{fonte.temas.map(tema => <span key={tema}>{tema}</span>)}</div>
                    <h3>Referência bibliográfica</h3><p className={styles.citation}>{fonte.abnt}</p>
                    <div className={styles.actions}>
                      <button type="button" onClick={() => copiar(fonte)}><Copy size={15} aria-hidden="true" /> {copiado === fonte.id ? "Referência copiada" : "Copiar referência"} {copiado === fonte.id && <Check size={15} aria-hidden="true" />}</button>
                      <a href={fonte.url} target="_blank" rel="noopener noreferrer">Consultar fonte <ArrowUpRight size={15} aria-hidden="true" /></a>
                    </div>
                  </div>}
                </article>
              );
            })}
            {resultado.length === 0 && <p className={styles.empty}>Nenhuma fonte encontrada. Experimente outro termo ou filtro.</p>}
          </div>
        </>
      )}
      <p className={styles.disclaimer}>As referências orientam a aprendizagem. A presença de uma fonte sobre uma escola de samba não representa parceria institucional nem comprova práticas atuais. Confira sempre o documento original.</p>
    </section>
  );
}
