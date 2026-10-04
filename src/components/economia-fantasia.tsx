import Image from "next/image";
import { RefreshCw, Scissors, Package, Recycle } from "lucide-react";
import styles from "./economia-fantasia.module.css";

const possibilities = [
  { title: "Estrutura", subtitle: "Avaliar a reutilização", text: "Conferir resistência, encaixes e possibilidade de adaptação.", Icon: RefreshCw },
  { title: "Tecidos", subtitle: "Verificar reparos e adaptações", text: "Considerar conservação, composição e condições para um novo uso.", Icon: Scissors },
  { title: "Adereços", subtitle: "Examinar desmontagem e armazenamento", text: "Identificar partes aproveitáveis e o esforço necessário para separá-las.", Icon: Package },
  { title: "Outros resíduos", subtitle: "Verificar alternativas viáveis", text: "Avaliar composição, reciclagem disponível ou destinação adequada.", Icon: Recycle },
];

export function EconomiaFantasia() {
  return (
    <section className={styles.section} aria-labelledby="economia-fantasia-title">
      <header className={styles.heading}>
        <p className="eyebrow">Exemplo ilustrativo · Economia circular</p>
        <h2 id="economia-fantasia-title">Uma fantasia, diferentes possibilidades.</h2>
        <p>Uma mesma peça pode reunir componentes com condições e destinos diferentes. Conheça perguntas que podem orientar a avaliação após seu uso.</p>
      </header>
      <div className={styles.layout}>
        <figure className={styles.figure}>
          <Image src="/images/economia-circular/fantasia-ilustrativa.png" width={343} height={350} sizes="(max-width: 680px) 80vw, 320px" alt="Fantasia carnavalesca ilustrativa em tons de verde, azul e dourado, exibida em um manequim." className={styles.photo} />
        </figure>
        <div className={styles.cards}>
          {possibilities.map(({title,subtitle,text,Icon}) => (
            <article key={title} className={styles.card}>
              <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
              <div><h3>{title}</h3><strong>{subtitle}</strong><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
      <p className={styles.caveat}>Imagem ilustrativa. As possibilidades dependem da composição, do estado de conservação, da demanda e dos recursos disponíveis. Não representam práticas observadas em uma agremiação.</p>
    </section>
  );
}
