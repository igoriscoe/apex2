"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Search, ArrowUpRight, BookOpen } from "lucide-react";
import { glossaryEntries } from "@/lib/content";
import styles from "./glossario-interativo.module.css";

type Category = "Todos" | "Sustentabilidade" | "Materiais" | "Trabalho e renda" | "Administração";

const extraEntries = [
  { term: "Agenda 2030", definition: "Plano de ação global das Nações Unidas que reúne 17 Objetivos de Desenvolvimento Sustentável e metas para promover desenvolvimento social, econômico e ambiental.", example: "Relacionar decisões da produção carnavalesca às metas de trabalho decente e consumo responsável." },
  { term: "ODS 8", definition: "Objetivo de Desenvolvimento Sustentável voltado ao crescimento econômico inclusivo e sustentável, emprego produtivo e trabalho decente para todas as pessoas.", example: "Investigar oportunidades de trabalho, empreendedorismo e condições de contratação na cadeia carnavalesca." },
  { term: "ODS 12", definition: "Objetivo de Desenvolvimento Sustentável dedicado a assegurar padrões sustentáveis de consumo e produção.", example: "Planejar aquisições de materiais e avaliar a prevenção de resíduos na produção de fantasias." },
  { term: "Desenvolvimento sustentável", definition: "Desenvolvimento que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atender às próprias necessidades.", example: "Conciliar geração de renda cultural, condições dignas de trabalho e cuidado com recursos materiais." },
  { term: "Responsabilidade socioambiental", definition: "Compromisso de considerar os efeitos sociais e ambientais das decisões e atividades de uma organização.", example: "Avaliar condições de trabalho e uso de materiais ao planejar a produção de fantasias." },
  { term: "Ciclo de vida dos produtos", definition: "Conjunto de etapas pelas quais um produto passa, desde obtenção de materiais e fabricação até uso e etapa pós-consumo.", example: "Considerar compras, confecção, desfile, armazenamento e possíveis destinos posteriores de uma fantasia." },
  { term: "Produção sustentável", definition: "Organização da produção que procura reduzir impactos negativos, usar recursos com responsabilidade e considerar aspectos sociais e econômicos.", example: "Planejar cortes de tecidos para reduzir sobras sem prejudicar segurança e condições de trabalho." },
  { term: "Prevenção de resíduos", definition: "Ações realizadas antes ou durante a produção e o consumo para evitar que materiais se tornem resíduos.", example: "Rever um molde antes de cortar o tecido para evitar sobras desnecessárias." },
  { term: "Redução de desperdícios", definition: "Diminuição do uso desnecessário de recursos e das perdas ao longo dos processos.", example: "Conferir quantidades e dimensões de tecido antes de encomendar novos lotes." },
  { term: "Reaproveitamento", definition: "Expressão ampla para o aproveitamento de materiais ou componentes em novos usos; o processo específico deve ser identificado como reutilização, reciclagem ou outra alternativa.", example: "Separar adereços conservados para examinar um possível novo uso." },
  { term: "Triagem de materiais", definition: "Separação e classificação de itens segundo suas características, seu estado e as alternativas de uso ou destinação.", example: "Distinguir peças íntegras, componentes recuperáveis e materiais sem aproveitamento identificado." },
  { term: "Coleta seletiva", definition: "Coleta diferenciada de resíduos previamente separados conforme composição ou constituição.", example: "Separar resíduos de materiais compatíveis com a coleta disponível na localidade." },
  { term: "Rejeitos", definition: "Resíduos sólidos que, após esgotadas as possibilidades tecnológicas e economicamente viáveis de tratamento e recuperação, não apresentam outra possibilidade além da disposição final ambientalmente adequada.", example: "Um material misto sem alternativa viável de recuperação pode exigir avaliação como rejeito." },
  { term: "Destinação ambientalmente adequada", definition: "Encaminhamento dos resíduos a reutilização, reciclagem, compostagem, recuperação, aproveitamento energético ou outros destinos admitidos pelos órgãos competentes, observadas normas aplicáveis.", example: "Verificar operadores habilitados e infraestrutura disponível antes de encaminhar resíduos de um ateliê." },
  { term: "Ecodesign", definition: "Concepção de produtos e processos que considera aspectos ambientais ao longo de seu ciclo de vida.", example: "Projetar um adereço que permita desmontar e conservar componentes após o desfile." },
  { term: "Rastreabilidade de materiais", definition: "Capacidade de identificar e acompanhar a origem, as características, a movimentação ou o destino de materiais ao longo de processos.", example: "Registrar a composição e a localização de componentes guardados para novo uso." },
  { term: "Economia criativa", definition: "Atividades econômicas que têm criatividade, cultura, conhecimento e propriedade intelectual como recursos relevantes para gerar valor.", example: "A criação artística de fantasias e adereços pode integrar atividades da economia criativa." },
  { term: "Economia local", definition: "Conjunto de atividades produtivas, empregos, empreendimentos e trocas econômicas de determinado território.", example: "Investigar se compras e serviços da produção carnavalesca envolvem fornecedores do entorno." },
  { term: "Trabalho artesanal", definition: "Atividade produtiva baseada em habilidades técnicas e conhecimentos manuais, podendo utilizar ferramentas e equipamentos.", example: "Costura e montagem manual de adereços, com atenção a prazos, segurança e remuneração." },
  { term: "Formalização", definition: "Regularização de uma atividade econômica ou relação de trabalho de acordo com as exigências legais aplicáveis.", example: "Avaliar as formas legais adequadas à prestação de serviços de um pequeno ateliê." },
  { term: "Empreendedorismo comunitário", definition: "Iniciativas econômicas desenvolvidas por pessoas ou grupos de uma comunidade para atender necessidades ou oportunidades do território.", example: "Profissionais locais podem organizar serviços artesanais para diferentes eventos culturais." },
  { term: "Cadeia de fornecedores", definition: "Rede de organizações e profissionais que fornecem insumos e serviços necessários à produção de bens ou à prestação de serviços.", example: "Mapear quem fornece tecidos, aviamentos, transporte e montagem para uma produção cultural." },
  { term: "Remuneração justa", definition: "Pagamento compatível com o trabalho realizado, as responsabilidades, o tempo e as normas aplicáveis, considerado o contexto da contratação.", example: "Definir claramente escopo, prazo e pagamento em uma encomenda de fantasias." },
  { term: "Planejamento operacional", definition: "Definição de atividades, responsáveis, recursos e prazos necessários à execução de objetivos concretos.", example: "Organizar a sequência de compras, corte, costura e montagem das fantasias." },
  { term: "Gestão de estoques", definition: "Organização e controle de entradas, saídas, quantidades, localização e condições de itens armazenados.", example: "Saber quais tecidos e adereços estão disponíveis antes de novas compras." },
  { term: "Inventário", definition: "Levantamento e registro sistemático dos bens ou materiais existentes em determinado momento.", example: "Listar componentes disponíveis, quantidades e estado de conservação no ateliê." },
  { term: "Indicadores de desempenho", definition: "Medidas usadas para acompanhar resultados de um processo em relação a objetivos previamente definidos.", example: "Acompanhar quantos materiais foram identificados e recuperados após um teste de organização." },
  { term: "Gestão de processos", definition: "Identificação, organização, acompanhamento e melhoria do conjunto de atividades que produzem resultados.", example: "Representar o fluxo entre compra, confecção, uso, recolhimento e triagem." },
  { term: "Viabilidade econômica", definition: "Avaliação de custos, recursos, riscos e benefícios para verificar se determinada alternativa pode ser sustentada economicamente.", example: "Comparar custos de guardar uma estrutura de fantasia com os de produzir outra futuramente." },
  { term: "Melhoria contínua", definition: "Prática de aperfeiçoar processos gradualmente com base em observação, avaliação e ajustes.", example: "Testar novas etiquetas de estoque, verificar resultados e aperfeiçoar o método." },
  { term: "Diagnóstico organizacional", definition: "Levantamento e análise de informações sobre uma organização ou processo para compreender seu funcionamento e identificar necessidades.", example: "Conversar com participantes e observar rotinas, após autorização, sem presumir resultados." },
  { term: "Hierarquia de gestão de resíduos", definition: "Ordem de prioridade prevista na Política Nacional de Resíduos Sólidos: não geração, redução, reutilização, reciclagem, tratamento e disposição final ambientalmente adequada dos rejeitos.", example: "Revisar moldes para evitar sobras antes de avaliar reutilização ou reciclagem dos retalhos." },
];
const entries = [...glossaryEntries, ...extraEntries];
const categories: Category[] = ["Todos", "Sustentabilidade", "Materiais", "Trabalho e renda", "Administração"];
const categoryMap: Record<string, Exclude<Category, "Todos">> = {
  "Diagnóstico organizacional": "Administração",
  "Melhoria contínua": "Administração",
  "Viabilidade econômica": "Administração",
  "Gestão de processos": "Administração",
  "Indicadores de desempenho": "Administração",
  "Inventário": "Administração",
  "Gestão de estoques": "Administração",
  "Planejamento operacional": "Administração",
  "Remuneração justa": "Trabalho e renda",
  "Cadeia de fornecedores": "Trabalho e renda",
  "Empreendedorismo comunitário": "Trabalho e renda",
  "Formalização": "Trabalho e renda",
  "Trabalho artesanal": "Trabalho e renda",
  "Economia local": "Trabalho e renda",
  "Economia criativa": "Trabalho e renda",
  "Rastreabilidade de materiais": "Materiais",
  "Ecodesign": "Materiais",
  "Destinação ambientalmente adequada": "Materiais",
  "Rejeitos": "Materiais",
  "Coleta seletiva": "Materiais",
  "Triagem de materiais": "Materiais",
  "Reaproveitamento": "Materiais",
  "Redução de desperdícios": "Materiais",
  "Prevenção de resíduos": "Materiais",
  "Produção sustentável": "Sustentabilidade",
  "Ciclo de vida dos produtos": "Sustentabilidade",
  "Responsabilidade socioambiental": "Sustentabilidade",
  "Desenvolvimento sustentável": "Sustentabilidade",
  "ODS 12": "Sustentabilidade",
  "ODS 8": "Sustentabilidade",
  "Agenda 2030": "Sustentabilidade",
  ODS: "Sustentabilidade",
  "Economia circular": "Sustentabilidade",
  "Consumo consciente": "Sustentabilidade",
  Reutilização: "Materiais",
  Reciclagem: "Materiais",
  "Logística reversa": "Materiais",
  "Hierarquia de gestão de resíduos": "Materiais",
  "Gestão de materiais": "Administração",
  "Trabalho decente": "Trabalho e renda",
  Empreendedorismo: "Trabalho e renda",
  "Cadeia produtiva": "Trabalho e renda",
  "5W2H": "Administração",
  PDCA: "Administração",
};
const relatedPages: Record<string, { href: string; label: string }> = {
  "Diagnóstico organizacional": { href: "/estudo-de-caso", label: "Projeto extensionista" },
  "Melhoria contínua": { href: "/administracao-na-pratica", label: "PDCA" },
  "Viabilidade econômica": { href: "/economia-circular", label: "Economia circular" },
  "Gestão de processos": { href: "/carnaval-alem-do-espetaculo", label: "Cadeia produtiva" },
  "Indicadores de desempenho": { href: "/administracao-na-pratica", label: "PDCA" },
  "Inventário": { href: "/administracao-na-pratica", label: "Administração na prática" },
  "Gestão de estoques": { href: "/administracao-na-pratica", label: "Gestão de materiais" },
  "Planejamento operacional": { href: "/administracao-na-pratica", label: "Ferramentas de gestão" },
  "Remuneração justa": { href: "/ods-8-trabalho", label: "Trabalho decente" },
  "Cadeia de fornecedores": { href: "/carnaval-alem-do-espetaculo", label: "Cadeia produtiva" },
  "Empreendedorismo comunitário": { href: "/ods-8-trabalho", label: "ODS 8 e empreendedorismo" },
  "Formalização": { href: "/ods-8-trabalho", label: "Empreendedorismo" },
  "Trabalho artesanal": { href: "/ods-8-trabalho", label: "Trabalho decente" },
  "Economia local": { href: "/ods-8-trabalho", label: "ODS 8" },
  "Economia criativa": { href: "/carnaval-alem-do-espetaculo", label: "Cadeia produtiva" },
  "Rastreabilidade de materiais": { href: "/administracao-na-pratica", label: "Gestão de materiais" },
  "Ecodesign": { href: "/economia-circular", label: "Economia circular" },
  "Destinação ambientalmente adequada": { href: "/depois-da-avenida", label: "Depois da avenida" },
  "Rejeitos": { href: "/ods-12-consumo", label: "Hierarquia de resíduos" },
  "Coleta seletiva": { href: "/ods-12-consumo", label: "Gestão de resíduos" },
  "Triagem de materiais": { href: "/depois-da-avenida", label: "Triagem pós-desfile" },
  "Reaproveitamento": { href: "/depois-da-avenida", label: "Decisões após o desfile" },
  "Redução de desperdícios": { href: "/ods-12-consumo", label: "ODS 12" },
  "Prevenção de resíduos": { href: "/ods-12-consumo", label: "Hierarquia de resíduos" },
  "Produção sustentável": { href: "/ods-12-consumo", label: "Consumo responsável" },
  "Ciclo de vida dos produtos": { href: "/depois-da-avenida", label: "Depois da avenida" },
  "Responsabilidade socioambiental": { href: "/ods-8-trabalho", label: "Trabalho e renda" },
  "Desenvolvimento sustentável": { href: "/economia-circular", label: "Economia circular" },
  "ODS 12": { href: "/ods-12-consumo", label: "Conheça o ODS 12" },
  "ODS 8": { href: "/ods-8-trabalho", label: "Conheça o ODS 8" },
  "Agenda 2030": { href: "/ods-12-consumo", label: "ODS 12 e Agenda 2030" },
  ODS: { href: "/ods-12-consumo", label: "Conheça o ODS 12" },
  "Economia circular": { href: "/economia-circular", label: "Economia circular na prática" },
  "Consumo consciente": { href: "/ods-12-consumo", label: "Veja o ODS 12" },
  Reutilização: { href: "/depois-da-avenida", label: "Depois da avenida" },
  Reciclagem: { href: "/ods-12-consumo", label: "Materiais e consumo responsável" },
  "Logística reversa": { href: "/administracao-na-pratica", label: "Administração na prática" },
  "Trabalho decente": { href: "/ods-8-trabalho", label: "Conheça o ODS 8" },
  Empreendedorismo: { href: "/ods-8-trabalho", label: "Trabalho e renda" },
  "Cadeia produtiva": { href: "/carnaval-alem-do-espetaculo", label: "Conheça a cadeia produtiva" },
  "Gestão de materiais": { href: "/administracao-na-pratica", label: "Ferramentas de gestão" },
  "5W2H": { href: "/administracao-na-pratica", label: "Experimente o 5W2H" },
  PDCA: { href: "/administracao-na-pratica", label: "Conheça o PDCA" },
  "Hierarquia de gestão de resíduos": { href: "/ods-12-consumo", label: "Hierarquia no ODS 12" },
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function GlossarioInterativo() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("Todos");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(() => {
    const search = normalize(query.trim());
    return entries.filter((item) => {
      if (category !== "Todos" && categoryMap[item.term] !== category) return false;
      return !search || normalize(`${item.term} ${item.definition} ${item.example}`).includes(search);
    }).sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
  }, [query, category]);

  const toggle = (term: string) => setOpen((current) =>
    current.includes(term) ? current.filter((value) => value !== term) : [...current, term]
  );

  return (
    <section className={styles.section} aria-labelledby="glossary-interactive-title">
      <div className={styles.heading}>
        <span className="eyebrow">Glossário interativo</span>
        <h2 id="glossary-interactive-title">Encontre um conceito.</h2>
        <p>Pesquise por palavra ou escolha um tema. Abra cada conceito para conhecer uma definição e um exemplo educativo relacionado ao Carnaval.</p>
      </div>
      <label htmlFor="glossary-search" className={styles.label}>O que deseja consultar?</label>
      <div className={styles.searchBox}>
        <Search size={19} aria-hidden="true" />
        <input id="glossary-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: reutilização, trabalho, 5W2H..." />
      </div>
      <div className={styles.categories} role="group" aria-label="Filtrar por tema">
        {categories.map((value) => (
          <button type="button" key={value} className={`${styles.filter} ${category === value ? styles.active : ""}`} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>
        ))}
      </div>
      <p className={styles.count} role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? "conceito encontrado" : "conceitos encontrados"}</p>
      <div className={styles.list} tabIndex={0} role="region" aria-label="Lista de conceitos; role para consultar mais termos">
        {filtered.map((item) => {
          const expanded = open.includes(item.term);
          const anchor = `conceito-${normalize(item.term).replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <article key={item.term} className={styles.entry}>
              <h3 className={styles.entryHeading}>
                <button type="button" className={styles.expand} aria-expanded={expanded} aria-controls={anchor} onClick={() => toggle(item.term)}>
                  <span className={styles.termBlock}><span className={styles.term}>{item.term}</span><span className={styles.categoryLabel}>{categoryMap[item.term] || "Conceito"}</span></span>
                  {expanded ? <ChevronUp size={19} aria-hidden="true" /> : <ChevronDown size={19} aria-hidden="true" />}
                </button>
              </h3>
              {expanded && (
                <div className={styles.details} id={anchor}>
                  <p>{item.definition}</p>
                  <div className={styles.example}><BookOpen size={18} aria-hidden="true" /><p><strong>Exemplo no Carnaval:</strong> {item.example}</p></div>
                  {relatedPages[item.term] && <Link className={styles.related} href={relatedPages[item.term].href}>{relatedPages[item.term].label}<ArrowUpRight size={15} aria-hidden="true" /></Link>}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && <p className={styles.empty}>Nenhum conceito encontrado. Experimente outro termo ou selecione “Todos”.</p>}
      </div>
      <p className={styles.note}>As definições são introdutórias, com exemplos hipotéticos. Não descrevem práticas de uma agremiação específica.</p>
    </section>
  );
}
