import Link from "next/link";
import { BookOpen, GraduationCap, MonitorSmartphone, Target, Users } from "lucide-react";
import styles from "./sobre-projeto.module.css";

const aims = [
  "Explicar os ODS 8 e 12 utilizando a produÃ§Ã£o carnavalesca como contexto educativo.",
  "Mostrar como a AdministraÃ§Ã£o pode apoiar decisÃµes sobre trabalho, materiais e sustentabilidade.",
  "Oferecer recursos digitais acessÃ­veis que incentivem a aprendizagem, a reflexÃ£o e o diÃ¡logo com a comunidade.",
];

const resources = [
  { title: "ConteÃºdos e infogrÃ¡ficos", text: "Cadeia produtiva do Carnaval, trabalho decente, materiais e economia circular.", href: "/carnaval-alem-do-espetaculo", Icon: BookOpen },
  { title: "Atividades interativas", text: "AssociaÃ§Ã£o de conceitos, situaÃ§Ãµes de gestÃ£o e desafios sobre os ODS.", href: "/aprenda-na-pratica", Icon: Target },
  { title: "Videoteca", text: "ConteÃºdos audiovisuais contextualizados, com fontes e perguntas educativas.", href: "/videoteca", Icon: MonitorSmartphone },
  { title: "GlossÃ¡rio e biblioteca", text: "DefiniÃ§Ãµes, exemplos e referÃªncias para aprofundar a aprendizagem.", href: "/glossario", Icon: BookOpen },
];

export function SobreProjeto() {
  return (
    <div className={styles.root}>
      <section className={styles.section} aria-labelledby="sobre-identificacao">
        <span className="eyebrow">01 / IdentificaÃ§Ã£o acadÃªmica</span>
        <div className={styles.sectionHeading}><GraduationCap aria-hidden="true" size={25} /><h2 id="sobre-identificacao">Uma iniciativa educacional</h2></div>
        <p>
          O <em>AlÃ©m da Avenida</em> Ã© um Material Educacional Digital desenvolvido no contexto da
          disciplina Ambiente Profissional e de ExtensÃ£o em AdministraÃ§Ã£o II (APEX II), do curso
          de AdministraÃ§Ã£o da Faculdade Unyleya, como parte dos requisitos acadÃªmicos da disciplina.
          A proposta integra o projeto extensionista <em>Educando para a Cidadania</em>.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="sobre-proposta">
        <span className="eyebrow">02 / Nossa proposta</span>
        <div className={styles.sectionHeading}><Target aria-hidden="true" size={25} /><h2 id="sobre-proposta">Aprender com a produÃ§Ã£o cultural</h2></div>
        <p>
          O portal utiliza a produÃ§Ã£o carnavalesca das escolas de samba como contexto educativo
          para relacionar conhecimentos de AdministraÃ§Ã£o, oportunidades de trabalho e renda,
          consumo responsÃ¡vel e economia circular. Os conteÃºdos utilizam exemplos e situaÃ§Ãµes de aprendizagem para aproximar teoria e prÃ¡tica.
        </p>
        <ol className={styles.aims}>{aims.map((aim, index) => (
          <li key={aim}><span>{String(index + 1).padStart(2, "0")}</span><p>{aim}</p></li>
        ))}</ol>
      </section>

      <section className={styles.section} aria-labelledby="sobre-recursos">
        <span className="eyebrow">03 / Explore o portal</span>
        <div className={styles.sectionHeading}><MonitorSmartphone aria-hidden="true" size={25} /><h2 id="sobre-recursos">O que vocÃª encontra aqui</h2></div>
        <div className={styles.resourceGrid}>
          {resources.map(({ title, text, href, Icon }) => (
            <Link className={styles.resource} href={href} key={title}>
              <Icon size={23} aria-hidden="true" strokeWidth={1.7} />
              <h3>{title}</h3><p>{text}</p><span>Explorar <span aria-hidden="true">â†—</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="sobre-creditos">
        <span className="eyebrow">CrÃ©ditos acadÃªmicos</span>
        <div className={styles.sectionHeading}><Users aria-hidden="true" size={25} /><h2 id="sobre-creditos">Quem desenvolveu</h2></div>
        <div className={styles.credits}>
          <div><span>Equipe acadÃªmica</span><strong>Igor Rismo Coelho</strong><strong>Marcelle Nascimento Santos Moraes</strong><strong>Priscilla Porciuncula</strong></div>
          <div><span>OrientaÃ§Ã£o</span><strong>Prof.Âª Ana Shirley de FranÃ§a Moraes</strong><span>Faculdade Unyleya Â· AdministraÃ§Ã£o Â· APEX II Â· 2026</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.transparency}`} aria-labelledby="sobre-conhecimento">
        <span className="eyebrow">04 / Conhecimento que conecta</span>
        <div className={styles.sectionHeading}><BookOpen aria-hidden="true" size={25} /><h2 id="sobre-conhecimento">Conhecimento que conecta</h2></div>
        <p>
          O <em>AlÃ©m da Avenida</em> utiliza o Carnaval como contexto educativo para aproximar os
          conhecimentos da AdministraÃ§Ã£o dos Objetivos de Desenvolvimento SustentÃ¡vel,
          especialmente os ODS 8 e 12.
        </p>
        <p>
          Por meio de conteÃºdos didÃ¡ticos, infogrÃ¡ficos e atividades interativas, o portal busca
          estimular reflexÃµes sobre trabalho decente, desenvolvimento econÃ´mico local, consumo
          responsÃ¡vel e economia circular.
        </p>
        <p>
          A iniciativa integra o projeto extensionista <em>Educando para a Cidadania</em>,
          desenvolvido no Ã¢mbito da disciplina APEX II da Faculdade Unyleya.
        </p>
        <p><Link href="/estudo-de-caso">ConheÃ§a nossa proposta extensionista â†’</Link></p>
      </section>
    </div>
  );
}

