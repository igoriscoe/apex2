import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import { CycleMap } from "@/components/interactive-lab";

const routes = [
  {
    href: "/carnaval-alem-do-espetaculo",
    number: "01",
    title: "A cadeia produtiva",
    note: "Quem faz o Carnaval acontecer?",
  },
  {
    href: "/ods-8-trabalho",
    number: "02",
    title: "Trabalho e renda",
    note: "Como o Carnaval movimenta a economia local?",
  },
  {
    href: "/ods-12-consumo",
    number: "03",
    title: "Materiais e escolhas",
    note: "Como evitar o desperdício de materiais?",
  },
  {
    href: "/administracao-na-pratica",
    number: "04",
    title: "Administração na prática",
    note: "Como transformar boas ideias em ações?",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow light">
            Trabalho, cultura e sustentabilidade no Carnaval
          </p>
          <h1>
            Além da
            <br />
            <em>Avenida.</em>
          </h1>
          <p className="hero-subtitle">
            O trabalho que movimenta o Carnaval.
            <br />
            Os recursos que podem ganhar uma nova vida.
          </p>
          <Link className="hero-link" href="/carnaval-alem-do-espetaculo">
            Entre nos bastidores
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="intro-band content-wrap">
        <div className="section-index">
          01 <span>O propósito</span>
        </div>
        <div className="intro-content">
          <h2>
            Um desfile não começa
            <br />
            nem termina na avenida.
          </h2>
          <p>
            Por trás de cada desfile existe uma cadeia produtiva que mobiliza
            profissionais, conhecimentos, fornecedores e recursos materiais. Da
            criação das fantasias à sua utilização, diferentes atividades podem
            gerar oportunidades de trabalho, renda e desenvolvimento econômico
            local.
          </p>
          <p>
            Mas o que acontece com os materiais depois que o espetáculo termina?
            Este portal utiliza os processos produtivos das escolas de samba como
            contexto educativo para explorar essa questão, relacionando o ODS 8
            — Trabalho Decente e Crescimento Econômico — ao ODS 12 — Consumo e
            Produção Responsáveis —, com foco no planejamento, na prevenção de
            resíduos e nas possibilidades de reaproveitamento.
          </p>
          <p className="intro-caveat" style={{ marginTop: 24 }}>
            Os exemplos são educativos e não descrevem as práticas de uma escola
            de samba específica.
          </p>
        </div>
        <div className="ods-stamps">
          <Link className="ods-stamp ods-eight" href="/ods-8-trabalho">
            <span className="ods-theme-label">Trabalho e renda</span>
            <Image
              className="ods-logo"
              src="/ods8.png"
              alt="ODS 8: Trabalho decente e crescimento econômico"
              width={1000}
              height={1000}
              sizes="(max-width: 560px) 40vw, 130px"
            />
            <span className="ods-goal-meta">Meta 8.3</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link className="ods-stamp ods-twelve" href="/ods-12-consumo">
            <span className="ods-theme-label">Consumo responsável</span>
            <Image
              className="ods-logo"
              src="/ods12.jpg"
              alt="ODS 12: Consumo e produção responsáveis"
              width={380}
              height={380}
              sizes="(max-width: 560px) 40vw, 130px"
            />
            <span className="ods-goal-meta">Metas 12.5 e 12.8</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <span className="ods-caption">
            Ícones oficiais das Nações Unidas.
          </span>
        </div>
      </section>

      <section className="cycle-section">
        <div className="content-wrap cycle-layout">
          <div className="cycle-heading">
            <div className="section-index">
              02 <span>O ciclo produtivo</span>
            </div>
            <p className="eyebrow">Percorra as etapas</p>
            <h2>
              Do planejamento
              <br />
              ao próximo uso.
            </h2>
            <p>
              Explore as etapas da produção carnavalesca e descubra como
              decisões de gestão podem gerar oportunidades econômicas e
              contribuir para reduzir desperdícios.
            </p>
            <span className="micro-caption">
              <Layers3 size={15} aria-hidden="true" /> UMA VISÃO EDUCATIVA, NÃO
              UM FLUXO UNIVERSAL
            </span>
          </div>
          <CycleMap />
        </div>
      </section>

      <section className="route-section content-wrap">
        <div className="route-heading">
          <div>
            <div className="section-index">
              03 <span>Explore</span>
            </div>
            <h2>Comece por uma pergunta.</h2>
          </div>
          <p>
            Conceitos e ferramentas para olhar de perto os bastidores da
            produção cultural.
          </p>
        </div>
        <div className="route-list">
          {routes.map((route) => (
            <Link className="route-row" href={route.href} key={route.href}>
              <span className="route-number">{route.number}</span>
              <span className="route-title">{route.title}</span>
              <span className="route-note">{route.note}</span>
              <ArrowUpRight className="route-arrow" size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link className="all-topics home-activity-cta" href="/aprenda-na-pratica">
          <Sparkles size={17} aria-hidden="true" />
          Experimente: quiz, desafio dos materiais e plano sustentável
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </section>

      <section className="academic-note">
        <div className="content-wrap academic-inner">
          <span className="academic-label">
            CONTEXTO
            <br />
            ACADÊMICO
          </span>
          <p>
            Este portal é um Material Educacional Digital desenvolvido como
            atividade extensionista da disciplina Ambiente Profissional e de
            Extensão em Administração II (APEX II), do curso de Administração da
            Faculdade Unyleya, como parte dos requisitos acadêmicos para
            aprovação na disciplina.
          </p>
          <Link href="/sobre-o-projeto" aria-label="Saiba mais sobre o projeto">
            Conheça o projeto <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
