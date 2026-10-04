import { ChartNoAxesCombined, Handshake, Scissors, Store } from "lucide-react";
import styles from "./ods8-infographic.module.css";

const examples = [
  {
    number: "01",
    title: "Saberes e habilidades",
    description: "Costura, criação de fantasias, adereços e técnicas artesanais.",
    Icon: Scissors,
  },
  {
    number: "02",
    title: "Empreendedorismo",
    description: "Ateliês, pequenos negócios e fornecimento de produtos e serviços.",
    Icon: Store,
  },
  {
    number: "03",
    title: "Trabalho decente",
    description: "Remuneração adequada, segurança, direitos e condições dignas.",
    Icon: Handshake,
  },
  {
    number: "04",
    title: "Desenvolvimento local",
    description: "Possibilidades de circulação de renda e fortalecimento de atividades econômicas.",
    Icon: ChartNoAxesCombined,
  },
];

/** Exemplos didáticos, não dados levantados em uma escola de samba. */
export function ODS8Infographic() {
  return (
    <section className={styles.section} aria-labelledby="ods8-infographic-title">
      <p className={styles.eyebrow}>ODS 8 · Meta 8.3 · Contexto carnavalesco</p>
      <h2 className={styles.title} id="ods8-infographic-title">
        Do conhecimento à oportunidade econômica.
      </h2>
      <p className={styles.intro}>
        Esses quatro elementos ajudam a analisar possibilidades da produção carnavalesca.
        Eles não representam uma sequência de resultados garantidos.
      </p>
      <div className={styles.grid}>
        {examples.map(({ number, title, description, Icon }) => (
          <article className={styles.card} key={number}>
            <div className={styles.cardHead}>
              <span className={styles.number}>{number}</span>
              <Icon size={25} strokeWidth={1.65} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <p className={styles.disclaimer}>
        Exemplos educativos. Oportunidades econômicas, resultados e condições de trabalho
        precisam ser investigados antes de qualquer conclusão sobre uma organização.
      </p>
    </section>
  );
}
