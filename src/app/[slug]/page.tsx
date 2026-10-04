import type { Metadata } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import {

  ArrowUpRight,

  BookOpenCheck,

  ClipboardList,

  PackageSearch,

  Scissors,

  Recycle,

} from "lucide-react";

import {

  EducationalDiagram,

  InteractiveLab,

} from "@/components/interactive-lab";

import { pages, references } from "@/lib/content";

import styles from "./cadeia-produtiva.module.css";



import { ODS8Infographic } from "@/components/ods8-infographic";



import { ODS12MaterialsInfographic } from "@/components/ods12-materials-infographic";



import { PostCarnivalDecision } from "@/components/pos-desfile";



import { EconomiaFantasia } from "@/components/economia-fantasia";



import { AdminFerramentas } from "@/components/admin-ferramentas";



import { AdminPlano5W2H } from "@/components/admin-plano-5w2h";



import { ProjetoExtensionista } from "@/components/projeto-extensionista";



import { VideotecaCurada } from "@/components/videoteca-curada";



import { AtividadesImersivas } from "@/components/atividades-imersivas";



import { GlossarioInterativo } from "@/components/glossario-interativo";



import { BibliotecaInterativa } from "@/components/biblioteca-interativa";

import { SobreProjeto } from "@/components/sobre-projeto";

export function generateStaticParams() {

  return pages.map(({ slug }) => ({ slug }));

}



export function generateMetadata({

  params,

}: {

  params: Promise<{ slug: string }>;

}): Promise<Metadata> {

  return params.then(({ slug }) => {

    const page = pages.find((item) => item.slug === slug);

    return page ? { title: page.navTitle, description: page.intro } : {};

  });

}



const chainSteps = [

  {

    title: "Planejamento",

    description: "Projeto, orçamento, cronograma e definição de recursos.",

    detail: "Quais necessidades, prazos e profissionais devem ser previstos?",

    Icon: ClipboardList,

  },

  {

    title: "Fornecimento",

    description: "Aquisição de materiais e contratação de serviços.",

    detail: "Quais fornecedores e conhecimentos locais podem participar?",

    Icon: PackageSearch,

  },

  {

    title: "Produção",

    description: "Costura, adereços, montagem e acabamento.",

    detail: "Como organizar o trabalho e prevenir perdas de materiais?",

    Icon: Scissors,

  },

  {

    title: "Próximos usos",

    description: "Triagem, armazenamento, reutilização e destinação.",

    detail: "O que poderá permanecer em uso após o desfile?",

    Icon: Recycle,

  },

];



function ProductionChainDiagram() {

  return (

    <figure className={styles.diagram} aria-labelledby="chain-title">

      <figcaption className={styles.heading}>

        <span className="eyebrow">Exemplo educativo · Cadeia produtiva</span>

        <h2 id="chain-title">Da ideia à próxima oportunidade de uso.</h2>

        <p>

          A confecção de uma fantasia envolve diferentes decisões de gestão.

          Explore as perguntas de cada etapa para relacionar trabalho, materiais

          e sustentabilidade.

        </p>

      </figcaption>



      <ol className={styles.steps}>

        {chainSteps.map(({ title, description, detail, Icon }, index) => (

          <li className={styles.step} key={title}>

            <div className={styles.stepTop}>

              <span className={styles.number}>

                {String(index + 1).padStart(2, "0")}

              </span>

              <Icon className={styles.icon} size={27} strokeWidth={1.6} aria-hidden="true" />

            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <span className={styles.question}>{detail}</span>

          </li>

        ))}

      </ol>



      <p className={styles.disclaimer}>

        Fluxo hipotético com finalidade educativa. As etapas e os procedimentos

        podem variar entre escolas de samba; não representam resultados de

        investigação em uma organização específica.

      </p>

    </figure>

  );

}



const chainIntro =

  "Antes de chegar à avenida, o Carnaval mobiliza uma cadeia produtiva formada por profissionais, conhecimentos, fornecedores e recursos materiais. A preparação das fantasias permite compreender como diferentes decisões de gestão podem criar oportunidades de trabalho e renda e influenciar o consumo de materiais e a geração de resíduos. Nesta seção, vamos conhecer os bastidores desse processo e identificar suas relações com a Administração e o desenvolvimento sustentável.";



const chainSections = [

  {

    title: "Uma produção feita por muitas mãos",

    text: "A preparação de um desfile pode reunir criação artística, planejamento, aquisição de insumos, serviços e montagem. A configuração muda conforme a escola, o território, os recursos disponíveis e o projeto de cada ano.",

    points: [

      "Criação e planejamento definem necessidades, cronograma e orçamento.",

      "Compras e contratações conectam a produção a fornecedores e prestadores de serviço.",

      "Costura, adereços e montagem combinam técnica, experiência e trabalho artesanal.",

    ],

  },

  {

    title: "Economia que se organiza em rede",

    text: "Costureiras, aderecistas, artesãos, profissionais de montagem e comerciantes são exemplos de participantes possíveis. Esses exemplos ilustram funções, mas não comprovam contratações nem quantidades de trabalhadores em uma escola específica.",

    points: [

      "Pequenos negócios podem fornecer materiais ou serviços especializados.",

      "Prazos e especificações influenciam a organização e a distribuição do trabalho.",

      "Parcerias locais podem fortalecer capacidades, sem garantir, por si só, renda estável ou condições de trabalho decente.",

    ],

  },

  {

    title: "Ler o processo com a Administração",

    text: "Mapear entradas, atividades, responsáveis, prazos e resultados ajuda a identificar dificuldades e planejar melhor. Um mapa de processos também permite investigar onde podem ocorrer perdas de materiais e como conhecimentos são compartilhados.",

  },

  {

    title: "Da produção ao próximo uso",

    text: "As decisões sobre os materiais não precisam terminar com o desfile. Um planejamento que considere recolhimento, triagem e armazenamento pode abrir possibilidades de reparo e reutilização. Quando essas alternativas não forem viáveis, é necessário avaliar reciclagem tecnicamente possível e destinação adequada. Cada decisão depende das características dos materiais, dos custos e das condições disponíveis.",

  },

];



export default async function TopicPage({

  params,

}: {

  params: Promise<{ slug: string }>;

}) {

  const { slug } = await params;

  const page = pages.find((item) => item.slug === slug);

  if (!page) notFound();



  const isChainPage = slug === "carnaval-alem-do-espetaculo";

  const isPostPage = slug === "depois-da-avenida";

  const intro = isChainPage ? chainIntro : page.intro;

  const sections = isChainPage ? chainSections : page.sections;

  const reflection = isChainPage

    ? "Como uma escola de samba poderia identificar os profissionais e fornecedores envolvidos na produção de suas fantasias e avaliar sua contribuição para a economia local?"

    : page.reflection;

  const pageReferences = isChainPage

    ? [references.ods8, references.ods12]

    : page.references;



  return (

    <article className="topic-page">

      <header className="topic-hero content-wrap">

        <div className="section-index">{page.eyebrow}</div>

        <h1>{page.title}</h1>

        <p className="topic-intro">{intro}</p>

        <div className="learning-box">

          <BookOpenCheck size={20} aria-hidden="true" />

          <div>

            <span className="eyebrow">Ao final, você poderá</span>

            <ul>

              {page.learning.map((goal) => (

                <li key={goal}>{goal}</li>

              ))}

              {isChainPage && (

                <li>

                  Identificar decisões de gestão que influenciam o uso dos

                  materiais e suas possibilidades de reaproveitamento.

                </li>

              )}

            </ul>

          </div>

        </div>

      </header>



      <div className="topic-body content-wrap">

        <div className="topic-prose">

          {sections.map((section, index) => (

            <section className="prose-section" key={section.title}>

              <div className="prose-index">

                {String(index + 1).padStart(2, "0")}

              </div>

              <div>

                <h2>{section.title}</h2>

                <p>{section.text}</p>

                {"points" in section && section.points && (

                  <ul>

                    {section.points.map((point) => (

                      <li key={point}>{point}</li>

                    ))}

                  </ul>

                )}

              </div>

            </section>

          ))}

        </div>



        {page.slug === "sobre-o-projeto" && <SobreProjeto />}

        {page.slug === "economia-circular" && <EconomiaFantasia />}



        {isPostPage ? (<PostCarnivalDecision />) : isChainPage ? (

          <ProductionChainDiagram />

        ) : (

          <>

            {page.slug === "ods-8-trabalho" ? <ODS8Infographic /> : page.slug === "ods-12-consumo" ? (<><ODS12MaterialsInfographic /><EducationalDiagram slug={page.slug} /></>) : page.slug === "estudo-de-caso" ? <ProjetoExtensionista /> : <EducationalDiagram slug={page.slug} />}

            {page.slug === "aprenda-na-pratica" ? (

              <AtividadesImersivas />

            ) : (

              page.interaction && (page.slug === "glossario" ? <GlossarioInterativo /> : <InteractiveLab kind={page.interaction} />)

            )}

          </>

        )}



        {page.slug === "administracao-na-pratica" && (

          <>

            <AdminFerramentas />

            <AdminPlano5W2H />

          </>

        )}

        {page.slug === "videoteca" && <VideotecaCurada />}

        <aside className="reflection">

          <span className="eyebrow">Para refletir</span>

          <p>{reflection}</p>

        </aside>



        {page.slug === "biblioteca-e-referencias" ? (
          <BibliotecaInterativa />
        ) : (
        <section className="reference-list">

          <div>

            <span className="eyebrow">Referências desta página</span>

            {pageReferences.length === 0 && (

              <p>Conteúdo metodológico do projeto; sem dados externos apresentados.</p>

            )}

            {pageReferences.map((reference) => (

              <Link

                href={reference.href}

                target="_blank"

                rel="noreferrer"

                key={reference.href}

              >

                {reference.label}

                <ArrowUpRight size={14} aria-hidden="true" />

              </Link>

            ))}

          </div>

        </section>
        )}


      </div>

    </article>

  );

}
