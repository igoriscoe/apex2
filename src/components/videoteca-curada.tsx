"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, X, Film } from "lucide-react";
import styles from "./videoteca-curada.module.css";

type Video = {
  id: string;
  title: string;
  author: string;
  category: "ODS 8" | "ODS 12" | "Economia circular";
  description: string;
  question: string;
  poster: string;
};

// URLs e atribuições conferidos na publicação original. Não há vídeos ou entrevistas do estudo de caso aqui.
const videos: Video[] = [
  {
    id: "AGV3rW83UKk",
    title: "ODS #8: Trabalho decente e crescimento econômico • IBGE Explica",
    author: "IBGE",
    category: "ODS 8",
    description: "Introdução institucional ao ODS 8 e a seus objetivos. Relacione os conceitos às atividades produtivas presentes na preparação do Carnaval.",
    question: "Uma oportunidade de trabalho necessariamente oferece condições de trabalho decente? Que evidências seriam necessárias?",
    poster: "/images/videoteca/ods8-ibge.jpg",
  },
  {
    id: "Q0y52DbGig4",
    title: "Objetivo #12: produção e consumo sustentáveis",
    author: "ONU Brasil",
    category: "ODS 12",
    description: "Apresentação do ODS 12 pelas Nações Unidas. Discuta como planejamento e escolhas de materiais se relacionam à produção responsável.",
    question: "Antes de pensar em reciclagem, quais desperdícios podem ser evitados durante a confecção de fantasias?",
    poster: "/images/videoteca/ods12-onu.jpg",
  },
  {
    id: "tMtMphzAcK8",
    title: "ODS #12: Consumo e produção responsáveis • IBGE Explica",
    author: "IBGE",
    category: "ODS 12",
    description: "Outra perspectiva institucional sobre padrões sustentáveis de produção e consumo e os desafios de mensurar avanços.",
    question: "Como identificar informações confiáveis sobre os materiais usados em uma produção carnavalesca?",
    poster: "/images/videoteca/ods12-ibge.jpg",
  },
  {
    id: "CSaB05K_nDs",
    title: "Economia circular | Empreende Sebrae",
    author: "TV Câmara São José dos Campos",
    category: "Economia circular",
    description: "Conteúdo do programa Empreende Sebrae, publicado pela TV Câmara de São José dos Campos. Complemente com os conceitos e critérios apresentados no portal.",
    question: "Quais custos, pessoas e recursos devem ser considerados antes de decidir reaproveitar materiais?",
    poster: "/images/videoteca/circular-tv.jpg",
  },
];

const filters = ["Todos", "ODS 8", "ODS 12", "Economia circular"] as const;

export function VideotecaCurada() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [playing, setPlaying] = useState<string | null>(null);
  const filtered = videos.filter((video) => filter === "Todos" || video.category === filter);
  return (
    <section className={styles.section} aria-labelledby="videoteca-curada-title">
      <header className={styles.heading}>
        <p className="eyebrow">Videoteca · Curadoria educativa</p>
        <h2 id="videoteca-curada-title">Assista, conecte e reflita.</h2>
        <p>Seleção de vídeos publicados por instituições ou canais identificados. As perguntas abaixo fazem a ponte entre os vídeos e o contexto educativo da produção carnavalesca.</p>
      </header>
      <div className={styles.filters} role="group" aria-label="Filtrar vídeos por tema">
        {filters.map((label) => <button key={label} type="button" onClick={() => {setFilter(label); setPlaying(null);}} className={filter === label ? styles.active : styles.filter} aria-pressed={filter === label}>{label}</button>)}
      </div>
      <div className={styles.grid}>
        {filtered.map((video) => (
          <article className={styles.card} key={video.id}>
            <div className={styles.media}>
              {playing === video.id ? (
                <div className={styles.player}>
                  <iframe title={video.title} src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  <button className={styles.close} type="button" onClick={() => setPlaying(null)} aria-label="Fechar reprodução"><X size={17} /></button>
                </div>
              ) : (
                <button className={styles.coverButton} type="button" onClick={() => setPlaying(video.id)} aria-label={`Reproduzir ${video.title}`}>
                  <Image className={styles.cover} src={video.poster} alt={`Capa editorial ilustrativa para: ${video.title}`} width={1280} height={720} sizes="(max-width: 720px) 100vw, 46vw" />
                  <span className={styles.play}><Play aria-hidden="true" size={27} fill="currentColor" /></span>
                </button>
              )}
            </div>
            <div className={styles.body}>
              <span className={styles.category}>{video.category} · {video.author}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <div className={styles.question}><strong>Para refletir</strong><p>{video.question}</p></div>
              <Link className={styles.source} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">Assistir no canal de origem <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.group}>
        <Film size={25} aria-hidden="true" />
        <div><h3>Futuras produções do grupo</h3><p>Este espaço poderá receber uma apresentação do projeto, explicações sobre os ODS e demonstrações do portal. Os materiais só serão incluídos depois de produzidos e publicados, com os créditos e as autorizações necessários.</p></div>
      </div>
      <p className={styles.disclaimer}>Capas editoriais ilustrativas do portal. Os vídeos pertencem aos respectivos canais e podem deixar de estar disponíveis ou não permitir reprodução incorporada; nesse caso, utilize o link de origem.</p>
    </section>
  );
}
