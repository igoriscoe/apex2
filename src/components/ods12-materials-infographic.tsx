import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./ods12-materials-infographic.module.css";

const materialCards = [
  {
    title: "Tecidos e retalhos",
    image: "/images/ods12/tecidos-retalhos.png",
    alt: "Tecidos coloridos, retalhos e materiais de fantasia organizados sobre uma mesa de ateliê.",
    description:
      "Verificar composição, dimensões, conservação e possibilidades de reutilização antes de comprar novos insumos ou descartar sobras.",
  },
  {
    title: "Pedrarias e aviamentos",
    image: "/images/ods12/pedrarias-aviamentos.png",
    alt: "Pedrarias, lantejoulas e aviamentos coloridos organizados em recipientes transparentes.",
    description:
      "Avaliar desmontagem, separação, armazenamento e novo uso. Pequenas peças podem ter valor para reaproveitamento quando são bem triadas.",
  },
  {
    title: "Estruturas e suportes",
    image: "/images/ods12/estruturas-suportes.png",
    alt: "Estruturas e suportes de fantasia expostos em um ateliê.",
    description:
      "Identificar os materiais, observar a integridade e verificar se podem ser reutilizados com segurança em novas montagens.",
  },
  {
    title: "Materiais armazenados",
    image: "/images/ods12/materiais-armazenados.png",
    alt: "Prateleiras de ateliê com caixas de materiais e fantasias organizadas por tipo.",
    description:
      "Catalogar, identificar quantidades e conferir estoques antes de novas aquisições ajuda a evitar compras desnecessárias e perdas.",
  },
];

export function ODS12MaterialsInfographic() {
  return (
    <section className={styles.wrapper} aria-labelledby="ods12-materials-title">
      <div className={styles.header}>
        <span className="eyebrow">Exemplos ilustrativos · gestão dos materiais</span>
        <h2 id="ods12-materials-title">Cada material pede informações antes da decisão.</h2>
        <p>
          Os exemplos abaixo não indicam automaticamente a destinação correta.
          Eles mostram quais informações podem orientar escolhas sobre prevenção de resíduos,
          reaproveitamento e organização dos materiais ao longo da produção.
        </p>
      </div>

      <div className={styles.grid}>
        {materialCards.map((card) => (
          <article className={styles.card} key={card.title}>
            <figure className={styles.figure}>
              <Image
                src={card.image}
                alt={card.alt}
                width={1448}
                height={1086}
                className={styles.image}
              />
            </figure>
            <div className={styles.cardBody}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.note}>
        Imagens meramente ilustrativas. A viabilidade de cada alternativa
        depende das características dos materiais, das condições de armazenamento e da infraestrutura disponível.
      </p>

      <div className={styles.nextBox}>
        <div>
          <span className="eyebrow">Conexão com a próxima página</span>
          <p>
            E depois do desfile? Explore decisões sobre recolhimento, triagem,
            armazenamento e novos destinos para as fantasias.
          </p>
        </div>
        <Link href="/depois-da-avenida" className={styles.nextLink}>
          Ir para “Depois da avenida”
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
