"use client";



import { useEffect, useState } from "react";

import { Copy, Printer, Search, Pause, Play } from "lucide-react";

import { glossaryEntries, videoCategories, videos } from "@/lib/content";



const stages = [

  { title: "Planejamento", x: 120, y: 50, detail: "Definir finalidade, quantidades, prazos, orçamento e responsáveis antes de mobilizar materiais e serviços." },

  { title: "Aquisição", x: 300, y: 44, detail: "Comparar especificações e fornecedores, conferir estoque disponível e planejar recebimento e armazenamento." },

  { title: "Confecção", x: 440, y: 142, detail: "Organizar corte, costura, adereços e montagem; registrar sobras e condições de segurança do trabalho." },

  { title: "Desfile", x: 380, y: 298, detail: "A peça cumpre sua função cultural. O uso, o cuidado e a desmontagem posterior dependem do projeto e da operação." },

  { title: "Recolhimento", x: 180, y: 298, detail: "Planejar responsáveis, triagem, identificação, movimentação e espaço disponível para cada item." },

  { title: "Novo uso", x: 40, y: 142, detail: "Avaliar conservação, reparo, reutilização, reciclagem viável ou destinação adequada, sem presumir um único caminho." },

];



const ORBIT_CENTER = { x: 240, y: 171 };

const ORBIT_RADIUS = { x: 180, y: 113 };

const ORBIT_DURATION_MS = 60_000;



export function CycleMap() {

  const [selected, setSelected] = useState(0);

  const [orbitAngle, setOrbitAngle] = useState(0);

  const [hovered, setHovered] = useState(false);

  const [focused, setFocused] = useState(false);

  const [manuallyPaused, setManuallyPaused] = useState(false);

  const [reducedMotion, setReducedMotion] = useState(false);

  const paused = hovered || focused || manuallyPaused || reducedMotion;



  useEffect(() => {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreference = () => setReducedMotion(mediaQuery.matches);

    syncPreference();

    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);

  }, []);



  useEffect(() => {

    if (paused) return;

    let frame = 0;

    let previousTime: number | null = null;

    const animate = (time: number) => {

      if (previousTime !== null) {

        const elapsed = Math.min(time - previousTime, 100);

        setOrbitAngle((angle) => (angle + (elapsed / ORBIT_DURATION_MS) * Math.PI * 2) % (Math.PI * 2));

      }

      previousTime = time;

      frame = window.requestAnimationFrame(animate);

    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);

  }, [paused]);



  return <div className="cycle-map">

    <svg

      className="cycle-svg"

      viewBox="0 0 500 350"

      role="group"

      aria-label="Etapas possíveis do ciclo produtivo carnavalesco em uma órbita interativa"

      onPointerEnter={() => setHovered(true)}

      onPointerLeave={() => setHovered(false)}

      onFocusCapture={() => setFocused(true)}

      onBlurCapture={(event) => {

        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);

      }}

    >

      <ellipse className="cycle-edge" cx={ORBIT_CENTER.x} cy={ORBIT_CENTER.y} rx={ORBIT_RADIUS.x} ry={ORBIT_RADIUS.y} />

      <circle className="cycle-center" cx={ORBIT_CENTER.x} cy={ORBIT_CENTER.y} r="79" />

      <text className="cycle-center-title" x="240" y="165">CULTURA</text>

      <text className="cycle-center-title" x="240" y="187">EM CICLO</text>

      <text className="cycle-center-copy" x="240" y="207">pessoas · recursos · escolhas</text>

      {stages.map((stage, index) => {

        const angle = (-130 + index * 60) * Math.PI / 180 + orbitAngle;

        const cos = Math.cos(angle);

        const sin = Math.sin(angle);

        const x = ORBIT_CENTER.x + ORBIT_RADIUS.x * cos;

        const y = ORBIT_CENTER.y + ORBIT_RADIUS.y * sin;

        return <g

          key={stage.title}

          className={`cycle-node ${selected === index ? "active" : ""}`}

          role="button"

          tabIndex={0}

          aria-pressed={selected === index}

          aria-label={`${stage.title}: ver detalhes`}

          onClick={() => setSelected(index)}

          onKeyDown={(event) => {

            if (event.key === "Enter" || event.key === " ") {

              event.preventDefault();

              setSelected(index);

            }

          }}

        >

          <circle cx={x} cy={y} r="12" />

          <text x={x} y={y + 28} textAnchor="middle">{stage.title}</text>

        </g>;

      })}

    </svg>

    <div className="orbit-controls">
      <button
        className="orbit-toggle"
        type="button"
        aria-label={reducedMotion ? "Animação desativada pelas preferências do dispositivo" : manuallyPaused ? "Retomar órbita" : "Pausar órbita"}
        title={reducedMotion ? "Animação desativada pelas preferências do dispositivo" : manuallyPaused ? "Retomar órbita" : "Pausar órbita"}
        aria-pressed={manuallyPaused}
        disabled={reducedMotion}
        onClick={() => setManuallyPaused((value) => !value)}
      >
        {manuallyPaused ? <Play size={17} fill="currentColor" aria-hidden="true" /> : <Pause size={17} fill="currentColor" aria-hidden="true" />}
      </button>
    </div>
    <div className="cycle-detail" aria-live="polite">

      <h3>{stages[selected].title}</h3>

      <span className="cycle-count">ETAPA {String(selected + 1).padStart(2, "0")} / 06</span>

      <p>{stages[selected].detail}</p>

    </div>

  </div>;

}



export function EducationalDiagram({ slug }: { slug: string }) {

  if (slug === "ods-8-trabalho") return <figure className="edu-diagram"><figcaption><span className="eyebrow">Atividades produtivas · Meta 8.3</span><h2>Uma rede de possibilidades, com condições a avaliar.</h2></figcaption><ol className="work-path">{["Criatividade e saberes", "Pequenos negócios e serviços", "Trabalho e atividade produtiva", "Renda e desenvolvimento local"].map((label, index) => <li key={label}><span>0{index + 1}</span><strong>{label}</strong></li>)}</ol><p className="diagram-caveat">A existência dessa rede não comprova trabalho decente: remuneração, direitos, segurança e voz precisam ser observados.</p></figure>;

  if (slug === "ods-12-consumo") return <figure className="edu-diagram"><figcaption><span className="eyebrow">Hierarquia de gestão de resíduos · Lei nº 12.305/2010</span><h2>Priorize o que evita o resíduo.</h2></figcaption><ol className="waste-hierarchy">{["Não geração", "Redução", "Reutilização", "Reciclagem", "Tratamento", "Disposição final adequada dos rejeitos"].map((label, index) => <li key={label} className={`waste-step waste-step-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong></li>)}</ol><p className="diagram-caveat">A composição do material e os serviços disponíveis determinam quais alternativas são viáveis.</p></figure>;

  if (slug === "depois-da-avenida") return <figure className="edu-diagram"><figcaption><span className="eyebrow">Possíveis caminhos · decisões situadas</span><h2>Triar antes de decidir o destino.</h2></figcaption><div className="material-flow"><div className="flow-origin">Recolhimento e triagem</div><div className="flow-branches">{["Reutilizar ou emprestar", "Reparar e armazenar", "Reciclar se houver viabilidade", "Destinar adequadamente"].map((path) => <div className="flow-outcome" key={path}>{path}</div>)}</div></div><p className="diagram-caveat">Caminhos ilustrativos: estado, composição, demanda, segurança e infraestrutura orientam cada decisão.</p></figure>;

  if (slug === "administracao-na-pratica") return <figure className="edu-diagram"><figcaption><span className="eyebrow">Melhoria contínua · PDCA</span><h2>Testar, observar e ajustar.</h2></figcaption><ol className="pdca-loop">{[["P", "Planejar", "Definir objetivo e indicador"], ["D", "Executar", "Testar a organização do estoque"], ["C", "Verificar", "Comparar o resultado esperado"], ["A", "Agir", "Corrigir ou padronizar"]].map(([letter, title, text]) => <li key={letter}><span>{letter}</span><strong>{title}</strong><small>{text}</small></li>)}</ol></figure>;

  if (slug === "estudo-de-caso") return <figure className="edu-diagram"><figcaption><span className="eyebrow">Percurso metodológico previsto</span><h2>Sete etapas, com autorização antes do campo.</h2></figcaption><ol className="case-timeline">{["Pesquisa documental", "Contato e autorização", "Visita e diagnóstico", "Sistematização", "Material educativo", "Apresentação", "Avaliação e revisão"].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol><p className="diagram-caveat">A sequência representa o planejamento acadêmico, não etapas já concluídas.</p></figure>;

  return null;

}



type LabKind = "cycle" | "comparison" | "plan" | "quiz" | "materials" | "glossary" | "video";

export function PracticalActivities() {

  return <><Quiz /><MaterialsChallenge /><ActionPlan /></>;

}



export function InteractiveLab({ kind }: { kind: LabKind }) {

  if (kind === "cycle") return <CycleMap />;

  if (kind === "comparison") return <Comparison />;

  if (kind === "plan") return <ActionPlan />;

  if (kind === "quiz") return <Quiz />;

  if (kind === "materials") return <MaterialsChallenge />;

  if (kind === "glossary") return <GlossarySearch />;

  return <VideoLibrary />;

}



function Comparison() {

  const [mode, setMode] = useState<"linear" | "circular">("linear");

  return <section className="lab-panel" aria-labelledby="comparison-title"><p className="eyebrow">Comparação interativa</p><h2 id="comparison-title">Do fluxo linear aos ciclos</h2><p>Alterne o modelo para comparar onde entram as decisões de gestão.</p><div className="lab-controls" role="group" aria-label="Selecionar modelo de produção"><button className={`lab-choice ${mode === "linear" ? "selected" : ""}`} aria-pressed={mode === "linear"} onClick={() => setMode("linear")}>Fluxo linear</button><button className={`lab-choice ${mode === "circular" ? "selected" : ""}`} aria-pressed={mode === "circular"} onClick={() => setMode("circular")}>Abordagem circular</button></div><div className="comparison"><div className="comparison-column"><h3>{mode === "linear" ? "Extrair → produzir → usar → descartar" : "Planejar → usar → cuidar → manter em uso"}</h3><p>{mode === "linear" ? "A sequência ajuda a enxergar a saída de materiais após o uso. Que informação sobre composição e destino precisa ser prevista?" : "A abordagem prioriza prevenir perdas, conservar valor e organizar manutenção e reuso. Reciclagem pode ser considerada se houver compatibilidade técnica."}</p></div><div className="comparison-column"><h3>Na produção carnavalesca</h3><p>{mode === "linear" ? "Uma fantasia pode ser comprada, confeccionada, usada e depois encaminhada sem triagem prévia. É cenário ilustrativo, não descrição de uma escola." : "Um projeto pode prever peças desmontáveis, identificar componentes e planejar armazenamento. Custos, demanda e condições reais precisam ser avaliados."}</p></div></div></section>;

}



const fields = [["what", "O que será feito?"], ["why", "Por que será feito?"], ["where", "Onde?"], ["when", "Quando?"], ["who", "Por quem?"], ["how", "Como?"], ["cost", "Quanto custa?"]] as const;

type FieldKey = (typeof fields)[number][0];



function ActionPlan() {

  const [values, setValues] = useState<Record<FieldKey, string>>({ what: "", why: "", where: "", when: "", who: "", how: "", cost: "" });

  const [copyMessage, setCopyMessage] = useState("");

  const output = fields.map(([key, label]) => `${label} ${values[key] || "(a definir)"}`).join("\n");

  const update = (key: FieldKey, value: string) => setValues((current) => ({ ...current, [key]: value }));

  async function copyPlan() {

    try { await navigator.clipboard.writeText(`Plano de ação 5W2H\n${output}`); setCopyMessage("Plano copiado."); }

    catch { setCopyMessage("A cópia automática não está disponível neste navegador. Você ainda pode selecionar o texto do plano."); }

  }

  return <section className="lab-panel" aria-labelledby="plan-title"><p className="eyebrow">Ferramenta 5W2H</p><h2 id="plan-title">Esboce um plano de ação</h2><p>Situação hipotética: sobras de tecido sem identificação dificultam localizar o que ainda pode ser usado.</p><div className="plan-fields">{fields.map(([key, label]) => <div className="plan-field" key={key}><label htmlFor={`plan-${key}`}>{label}</label>{key === "how" ? <textarea id={`plan-${key}`} value={values[key]} onChange={(event) => update(key, event.target.value)} /> : <input id={`plan-${key}`} value={values[key]} onChange={(event) => update(key, event.target.value)} />}</div>)}</div><div className="lab-controls"><button className="lab-button primary" onClick={copyPlan}><Copy size={15} aria-hidden="true" /> Copiar plano</button><button className="lab-button" onClick={() => window.print()}><Printer size={15} aria-hidden="true" /> Imprimir</button></div><p className="copy-message" aria-live="polite">{copyMessage}</p><div className="plan-output" aria-live="polite"><strong>Seu plano</strong>{"\n"}{output}</div></section>;

}



const questions = [

  { prompt: "A existência de uma oportunidade de trabalho comprova que há trabalho decente?", options: ["Sim, oportunidade já é suficiente", "Não; é preciso observar condições, direitos, segurança e remuneração"], answer: 1, explanation: "Atividade econômica e trabalho decente se relacionam, mas não são equivalentes. Condições e direitos precisam ser avaliados." },

  { prompt: "Qual ação está mais alinhada à prioridade da Meta 12.5?", options: ["Prever quantidades e evitar sobras antes da compra", "Comprar excedentes para garantir que não falte"], answer: 0, explanation: "Prevenir e reduzir a geração de resíduos vem antes de reutilizar ou reciclar na hierarquia legal brasileira." },

  { prompt: "Reutilização e reciclagem significam a mesma coisa?", options: ["Sim, ambas transformam o material", "Não; reciclagem transforma o resíduo, reutilização aproveita o item sem transformá-lo"], answer: 1, explanation: "Reciclagem depende de compatibilidade técnica e serviço disponível; reutilização mantém o item em uso sem transformá-lo." },

];



function Quiz() {

  const [index, setIndex] = useState(0);

  const [answer, setAnswer] = useState<number | null>(null);

  const question = questions[index];

  return <section className="lab-panel" aria-labelledby="quiz-title"><p className="eyebrow">Quiz dos ODS</p><h2 id="quiz-title">Uma pergunta de cada vez</h2><p>{question.prompt}</p><div className="lab-controls">{question.options.map((option, optionIndex) => <button key={option} className={`lab-choice ${answer === optionIndex ? "selected" : ""}`} aria-pressed={answer === optionIndex} onClick={() => setAnswer(optionIndex)}>{option}</button>)}</div>{answer !== null && <div className="lab-feedback" aria-live="polite"><strong>{answer === question.answer ? "Boa leitura." : "Vamos revisar."}</strong><p>{question.explanation}</p></div>}<div className="lab-controls"><span className="cycle-count">PERGUNTA {index + 1} / {questions.length}</span><button className="lab-button primary" disabled={answer === null} onClick={() => { setIndex((index + 1) % questions.length); setAnswer(null); }}>{index === questions.length - 1 ? "Recomeçar" : "Próxima"}</button></div></section>;

}



const materialScenarios = [

  { title: "Uma decisão antes do corte", prompt: "O molde de uma fantasia pode ser revisto antes de iniciar o corte. Qual ação deve ser considerada primeiro?", options: ["Prever medidas e ajustar o molde antes de cortar", "Separar o excedente para reutilizar em componentes menores", "Encaminhar tudo para reciclagem sem verificar a composição"], answer: 0, explanation: "Prevenir a geração de sobras vem antes de decidir o destino do excedente." },

  { title: "Adereços de composição mista", prompt: "Após o uso, um adereço reúne tecido, cola e pedrarias. Qual é o próximo passo mais responsável?", options: ["Classificar tudo como reciclável", "Identificar composição e condição antes de separar ou encaminhar", "Descartar sem triagem"], answer: 1, explanation: "A composição e a infraestrutura local precisam ser conhecidas antes de afirmar que a reciclagem é viável." },

  { title: "Uma peça ainda inteira", prompt: "Uma fantasia está conservada e pode voltar a ser usada. Que alternativa vale avaliar primeiro?", options: ["Reutilização ou reparo, considerando necessidade e armazenamento", "Desmontagem imediata de todos os componentes", "Reciclagem, sem conferir o estado da peça"], answer: 0, explanation: "Manter a peça em uso pode conservar mais valor, mas depende da demanda, do estado e da capacidade de guardar." },

];



function MaterialsChallenge() {

  const [scenarioIndex, setScenarioIndex] = useState(0);

  const [choice, setChoice] = useState<number | null>(null);

  const scenario = materialScenarios[scenarioIndex];

  return <section className="lab-panel" aria-labelledby="materials-title"><p className="eyebrow">Desafio dos materiais · cenário {scenarioIndex + 1} de {materialScenarios.length}</p><h2 id="materials-title">{scenario.title}</h2><p>{scenario.prompt}</p><div className="lab-controls">{scenario.options.map((option, index) => <button key={option} className={`lab-choice ${choice === index ? "selected" : ""}`} aria-pressed={choice === index} onClick={() => setChoice(index)}>{option}</button>)}</div>{choice !== null && <div className="lab-feedback" aria-live="polite"><strong>{choice === scenario.answer ? "Boa decisão." : "Considere outra etapa da hierarquia."}</strong><p>{scenario.explanation}</p><button className="lab-button primary" onClick={() => { setScenarioIndex((scenarioIndex + 1) % materialScenarios.length); setChoice(null); }}>{scenarioIndex === materialScenarios.length - 1 ? "Recomeçar desafio" : "Próximo cenário"}</button></div>}</section>;

}



function GlossarySearch() {

  const [query, setQuery] = useState("");

  const entries = glossaryEntries.filter((entry) => `${entry.term} ${entry.definition} ${entry.example}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")));

  return <section className="lab-panel" aria-labelledby="glossary-title"><p className="eyebrow">Busca no glossário</p><h2 id="glossary-title">Encontre um conceito</h2><label className="plan-field" htmlFor="glossary-search"><span>Termo ou palavra</span><span className="search-wrap"><Search size={17} aria-hidden="true" /><input id="glossary-search" className="search-field" value={query} onChange={(event) => setQuery(event.target.value)} /></span></label><div className="glossary-list" aria-live="polite">{entries.map((entry) => <article className="glossary-entry" key={entry.term}><h3>{entry.term}</h3><p>{entry.definition}</p><p><strong>Exemplo:</strong> {entry.example}</p></article>)}{entries.length === 0 && <p>Nenhum conceito corresponde à busca.</p>}</div></section>;

}



export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {

  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return null;

  return <div className="youtube-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> </div>;

}



function VideoLibrary() {

  return <section className="lab-panel" aria-labelledby="video-library-title"><p className="eyebrow">Videoteca</p><h2 id="video-library-title">Curadoria por tema</h2><div className="video-categories">{videoCategories.map((category) => <span key={category}>{category}</span>)}</div>{videos.length === 0 ? <p className="video-empty">Catálogo sem vídeos até que título, autoria, fonte e endereço possam ser verificados.</p> : videos.map((video) => <article className="video-item" key={video.videoId}><YouTubeEmbed videoId={video.videoId} title={video.title} /><h3>{video.title}</h3><p>{video.description}</p><p>{video.author} · {video.source} · {video.theme}</p></article>)}</section>;

}
