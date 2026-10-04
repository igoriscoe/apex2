import Link from "next/link";
import { BookOpen, GraduationCap, MonitorSmartphone, Target, Users } from "lucide-react";
import styles from "./sobre-projeto.module.css";

const aims = [
  "Explicar os ODS 8 e 12 utilizando a produção carnavalesca como contexto educativo.",
  "Mostrar como a Administração pode apoiar decisões sobre trabalho, materiais e sustentabilidade.",
  "Oferecer recursos digitais acessíveis que incentivem a aprendizagem, a reflexão e o diálogo com a comunidade.",
];

const resources = [
  { title: "Conteúdos e infográficos", text: "Cadeia produtiva do Carnaval, trabalho decente, materiais e economia circular.", href: "/carnaval-alem-do-espetaculo", Icon: BookOpen },
  { title: "Atividades interativas", text: "Associação de conceitos, situações de gestão e desafios sobre os ODS.", href: "/aprenda-na-pratica", Icon: Target },
  { title: "Videoteca", text: "Conteúdos audiovisuais contextualizados, com fontes e perguntas educativas.", href: "/videoteca", Icon: MonitorSmartphone },
  { title: "Glossário e biblioteca", text: "Definições, exemplos e referências para aprofundar a aprendizagem.", href: "/glossario", Icon: BookOpen },
];

export function SobreProjeto() {
  return (
    <div className={styles.root}>
      <section className={styles.section} aria-labelledby="sobre-identificacao">
        <span className="eyebrow">01 / Identificação acadêmica</span>
        <div className={styles.sectionHeading}><GraduationCap aria-hidden="true" size={25} /><h2 id="sobre-identificacao">Uma iniciativa educacional</h2></div>
        <p>
          O <em>Além da Avenida</em> é um Material Educacional Digital desenvolvido no contexto da
          disciplina Ambiente Profissional e de Extensão em Administração II (APEX II), do curso
          de Administração da Faculdade Unyleya, como parte dos requisitos acadêmicos da disciplina.
          A proposta integra o projeto extensionista <em>Educando para a Cidadania</em>.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="sobre-proposta">
        <span className="eyebrow">02 / Nossa proposta</span>
        <div className={styles.sectionHeading}><Target aria-hidden="true" size={25} /><h2 id="sobre-proposta">Aprender com a produção cultural</h2></div>
        <p>
          O portal utiliza a produção carnavalesca das escolas de samba como contexto educativo
          para relacionar conhecimentos de Administração, oportunidades de trabalho e renda,
          consumo responsável e economia circular. Os conteúdos utilizam exemplos e situações de aprendizagem para aproximar teoria e prática.
        </p>
        <ol className={styles.aims}>{aims.map((aim, index) => (
          <li key={aim}><span>{String(index + 1).padStart(2, "0")}</span><p>{aim}</p></li>
        ))}</ol>
      </section>

      <section className={styles.section} aria-labelledby="sobre-recursos">
        <span className="eyebrow">03 / Explore o portal</span>
        <div className={styles.sectionHeading}><MonitorSmartphone aria-hidden="true" size={25} /><h2 id="sobre-recursos">O que você encontra aqui</h2></div>
        <div className={styles.resourceGrid}>
          {resources.map(({ title, text, href, Icon }) => (
            <Link className={styles.resource} href={href} key={title}>
              <Icon size={23} aria-hidden="true" strokeWidth={1.7} />
              <h3>{title}</h3><p>{text}</p><span>Explorar <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="sobre-creditos">
        <span className="eyebrow">Créditos acadêmicos</span>
        <div className={styles.sectionHeading}><Users aria-hidden="true" size={25} /><h2 id="sobre-creditos">Quem desenvolveu</h2></div>
        <div className={styles.credits}>
          <div><span>Equipe acadêmica</span><strong>Igor Rismo Coelho</strong><strong>Marcelle Nascimento Santos Moraes</strong><strong>Priscila Porciuncula</strong></div>
          <div><span>Orientação</span><strong>Prof.ª Ana Shirley de França Moraes</strong><span>Faculdade Unyleya · Administração · APEX II · 2026</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.transparency}`} aria-labelledby="sobre-conhecimento">
        <span className="eyebrow">04 / Conhecimento que conecta</span>
        <div className={styles.sectionHeading}><BookOpen aria-hidden="true" size={25} /><h2 id="sobre-conhecimento">Conhecimento que conecta</h2></div>
        <p>
          O <em>Além da Avenida</em> utiliza o Carnaval como contexto educativo para aproximar os
          conhecimentos da Administração dos Objetivos de Desenvolvimento Sustentável,
          especialmente os ODS 8 e 12.
        </p>
        <p>
          Por meio de conteúdos didáticos, infográficos e atividades interativas, o portal busca
          estimular reflexões sobre trabalho decente, desenvolvimento econômico local, consumo
          responsável e economia circular.
        </p>
        <p>
          A iniciativa integra o projeto extensionista <em>Educando para a Cidadania</em>,
          desenvolvido no âmbito da disciplina APEX II da Faculdade Unyleya.
        </p>
        <p><Link href="/estudo-de-caso">Conheça nossa proposta extensionista →</Link></p>
      </section>
    </div>
  );
}
