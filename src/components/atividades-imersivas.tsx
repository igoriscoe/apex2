"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock3, GripVertical, RotateCcw } from "lucide-react";
import styles from "./atividades-imersivas.module.css";

type Pair = { id: string; title: string; image: string; alt: string; action: string; explanation: string };
const pairs: Pair[] = [
  { id: "retalhos", title: "Retalhos de tecido", image: "/images/atividades/ilustracoes/retalhos.svg", alt: "Retalhos coloridos de tecido no ateliê carnavalesco", action: "Avaliar reutilização", explanation: "Conservação, dimensões e composição ajudam a decidir se os retalhos podem ter novo uso." },
  { id: "aderecos", title: "Adereços desmontáveis", image: "/images/atividades/ilustracoes/aderecos.svg", alt: "Pedrarias e aviamentos separados em recipientes", action: "Separar e armazenar", explanation: "Peças desmontáveis podem ser identificadas e armazenadas, desde que a separação seja segura e viável." },
  { id: "estoque", title: "Materiais em estoque", image: "/images/atividades/ilustracoes/estoque.svg", alt: "Materiais carnavalescos organizados em caixas de armazenamento", action: "Conferir inventário", explanation: "Consultar o estoque antes de comprar evita aquisições desnecessárias e melhora o planejamento." },
  { id: "artesanato", title: "Produção artesanal", image: "/images/atividades/ilustracoes/artesanato.svg", alt: "Materiais e indumentária artesanal em ateliê de Carnaval", action: "Valorizar trabalho decente", explanation: "Planejamento, remuneração, segurança e condições dignas devem acompanhar as oportunidades produtivas." },
];
const actionOptions = ["Conferir inventário", "Valorizar trabalho decente", "Separar e armazenar", "Avaliar reutilização"];

type Question = { prompt: string; options: [string,string,string]; correct: number; explanation: string };
const questionBank: Question[] = [
  { prompt: "Antes de comprar tecidos para uma nova produção, qual é a primeira medida?", options: ["Consultar o estoque e dimensionar a necessidade", "Comprar uma margem grande por precaução", "Descartar todo o estoque antigo"], correct: 0, explanation: "Conhecer o estoque e dimensionar compras ajuda a prevenir sobras e custos." },
  { prompt: "Qual situação se aproxima mais da ideia de trabalho decente?", options: ["Aceitar qualquer prazo em troca de visibilidade", "Estabelecer tarefas, prazo, remuneração e condições seguras", "Não documentar as condições da contratação"], correct: 1, explanation: "A oportunidade de trabalho deve considerar direitos, remuneração, segurança e condições dignas." },
  { prompt: "Segundo a hierarquia de resíduos, o que tem prioridade?", options: ["Reciclar tudo", "Descartar corretamente tudo", "Evitar a geração do resíduo"], correct: 2, explanation: "A não geração precede redução, reutilização, reciclagem e outras formas de destinação." },
  { prompt: "Uma fantasia está bem conservada. O que avaliar primeiro após o desfile?", options: ["Possibilidade de novo uso com segurança", "Descartar sem avaliação", "Misturar seus materiais a todos os resíduos"], correct: 0, explanation: "O estado de conservação, a demanda e o armazenamento ajudam a avaliar a possibilidade de reutilização." },
  { prompt: "Qual ferramenta ajuda a definir o que fazer, quem fará, quando, como e a que custo?", options: ["Mapa sem responsáveis", "5W2H", "Somente o inventário"], correct: 1, explanation: "O 5W2H estrutura um plano de ação com atividades, responsáveis, local, prazo, método, justificativa e custos." },
  { prompt: "O que é necessário antes de afirmar que um material é reciclável localmente?", options: ["Observar apenas a cor", "Verificar apenas o preço", "Confirmar composição e infraestrutura disponível"], correct: 2, explanation: "A reciclabilidade prática depende do material, da sua condição e dos serviços efetivamente disponíveis." },
  { prompt: "O que é economia circular no exemplo da produção carnavalesca?", options: ["Planejar para conservar o valor de produtos e materiais", "Comprar mais para garantir estoque", "Considerar somente o descarte final"], correct: 0, explanation: "A circularidade procura prevenir perdas e favorecer durabilidade, reparo, reutilização e outras alternativas viáveis." },
  { prompt: "Por que avaliar uma proposta com os participantes da comunidade?", options: ["Para garantir que todos concordem", "Para verificar clareza, pertinência e condições reais", "Para afirmar resultados antes da atividade"], correct: 1, explanation: "A escuta ajuda a identificar necessidades e limites, sem transformar hipóteses em resultados observados." },
];
const integrativeScenarios: Question[] = [
  { prompt: "Há tecidos guardados, fornecedores locais e orçamento limitado. Qual deve ser a primeira decisão?", options: ["Comprar todos os materiais imediatamente", "Conferir estoque, necessidades e cronograma", "Usar qualquer material sem verificar conservação"], correct: 1, explanation: "O planejamento baseado em estoque, necessidades e prazos permite comparar alternativas e evitar desperdícios." },
  { prompt: "Uma costureira recebeu uma encomenda com prazo curto. Como começar uma contratação responsável?", options: ["Alinhar escopo, prazo viável, remuneração e condições de segurança", "Considerar apenas o menor preço", "Dispensar o diálogo sobre o trabalho"], correct: 0, explanation: "Valorizar o trabalho exige conhecer as condições concretas da atividade, não apenas os resultados da produção." },
  { prompt: "Depois do desfile, um adereço contém diferentes materiais. Qual é a decisão mais responsável?", options: ["Colocar tudo diretamente para reciclagem", "Guardar tudo indefinidamente sem registro", "Identificar composição, conservação e possibilidades de desmontagem"], correct: 2, explanation: "A avaliação e a triagem permitem considerar alternativas tecnicamente e economicamente viáveis." },
];

export function AtividadesImersivas() {
  return <div className={styles.activities}>
    <section className={styles.intro} aria-labelledby="pratica-intro">
      <span className="eyebrow">Percurso de aprendizagem</span>
      <h2 id="pratica-intro">Quatro maneiras de aprender fazendo.</h2>
      <p>As situações são hipotéticas e as respostas ficam apenas neste navegador. Explore sem pressa ou experimente o desafio cronometrado quando estiver preparado.</p>
      <nav aria-label="Ir para uma atividade" className={styles.jumpLinks}>
        <a href="#associacao">Associar imagens</a><a href="#gestao">Desafio de gestão</a><a href="#quiz-rapido">Quiz dos ODS</a><a href="#quiz-tempo">Contra o tempo</a>
      </nav>
    </section>
    <Association />
    <IntegrativeDecision />
    <StudyQuiz />
    <TimedQuiz />
    <section className={styles.endLink}>
      <span className="eyebrow">Quer ir além?</span>
      <h2>Transforme uma decisão em plano de ação.</h2>
      <p>A ferramenta 5W2H completa está disponível na página Administração na Prática, com campos editáveis, exemplo e opções para copiar e imprimir.</p>
      <Link href="/administracao-na-pratica">Abrir a ferramenta 5W2H <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </section>
  </div>;
}

function Association() {
  const [answers, setAnswers] = useState<Record<string,string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const assign = (id:string, action:string) => { setAnswers(v=>({...v,[id]:action}));setChecked(false);setSelected(null); };
  const score = pairs.filter(p=>answers[p.id]===p.action).length;
  return <section id="associacao" className={styles.activitySection} aria-labelledby="association-title">
    <header className={styles.sectionHeader}><span className="eyebrow">01 · Associe as decisões</span><h2 id="association-title">Cada imagem, uma escolha.</h2><p>Arraste uma decisão para a ilustração correspondente. No celular ou pelo teclado, selecione primeiro a decisão e depois toque em “Associar aqui”.</p></header>
    <div className={styles.actionBank} aria-label="Decisões disponíveis">
      {actionOptions.map(action=><button type="button" key={action} className={`${styles.dragAction} ${selected===action?styles.active:""}`} draggable onDragStart={e=>{e.dataTransfer.effectAllowed="copy";e.dataTransfer.setData("text/plain",action);}} onClick={()=>setSelected(selected===action?null:action)} aria-pressed={selected===action}><GripVertical size={16} aria-hidden="true"/>{action}</button>)}
    </div>
    <div className={styles.pairGrid}>{pairs.map(p=><article className={styles.pairCard} key={p.id}>
      <Image src={p.image} alt={p.alt} width={760} height={570} className={styles.pairImage}/>
      <h3>{p.title}</h3>
      <div className={styles.dropZone} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();const data=e.dataTransfer.getData("text/plain");if(actionOptions.includes(data)) assign(p.id,data);}}>
        <span>{answers[p.id]||"Solte uma decisão aqui"}</span>
        <button type="button" disabled={!selected} onClick={()=>selected&&assign(p.id,selected)}>Associar aqui</button>
      </div>
      <label className={styles.fallbackLabel}>Ou escolha sem arrastar:
        <select value={answers[p.id]||""} onChange={e=>assign(p.id,e.target.value)}><option value="">Selecione</option>{actionOptions.map(a=><option value={a} key={a}>{a}</option>)}</select>
      </label>
      {checked && <p className={answers[p.id]===p.action?styles.correct:styles.incorrect}>{answers[p.id]===p.action?"Associação adequada. ":`Melhor associação: ${p.action}. `}{p.explanation}</p>}
    </article>)}</div>
    <div className={styles.controls}><button type="button" className={styles.primary} disabled={pairs.some(p=>!answers[p.id])} onClick={()=>setChecked(true)}>Conferir associações</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSelected(null);}}><RotateCcw size={15} aria-hidden="true"/> Recomeçar</button>{checked&&<strong role="status">{score} de 4 associações adequadas</strong>}</div>
    <p className={styles.disclaimer}>As decisões são exemplos educativos. Na prática, conservação, composição, recursos e segurança devem orientar a análise.</p>
  </section>;
}

function IntegrativeDecision() {
  const [index,setIndex]=useState(0);const [answer,setAnswer]=useState<number|null>(null);
  const scenario=integrativeScenarios[index];
  return <section id="gestao" className={styles.activitySection} aria-labelledby="management-title"><header className={styles.sectionHeader}><span className="eyebrow">02 · Desafio integrador</span><h2 id="management-title">Você é responsável pela produção.</h2><p>Três situações conectam ODS 8, ODS 12 e decisões de gestão.</p></header>
    <div className={styles.questionPanel}><span className={styles.progress}>SITUAÇÃO {index+1} / {integrativeScenarios.length}</span><h3>{scenario.prompt}</h3><div className={styles.choiceList}>{scenario.options.map((option,i)=><button type="button" key={option} aria-pressed={answer===i} className={answer===i?styles.chosen:""} onClick={()=>setAnswer(i)}>{option}</button>)}</div>{answer!==null&&<div role="status" className={styles.feedback}><strong>{answer===scenario.correct?"Boa decisão.":"Vale reconsiderar."}</strong><p>{scenario.explanation}</p></div>}<div className={styles.controls}><button type="button" disabled={answer===null} className={styles.primary} onClick={()=>{setIndex((index+1)%integrativeScenarios.length);setAnswer(null);}}>{index===integrativeScenarios.length-1?"Recomeçar desafios":"Próxima situação"}</button></div></div>
  </section>;
}

function StudyQuiz() {
  const [index,setIndex]=useState(0);const [answer,setAnswer]=useState<number|null>(null);const q=questionBank[index];
  return <section id="quiz-rapido" className={styles.activitySection} aria-labelledby="study-title"><header className={styles.sectionHeader}><span className="eyebrow">03 · Quiz para aprender</span><h2 id="study-title">Uma pergunta de cada vez, sem cronômetro.</h2><p>Leia a explicação de cada resposta. Não há ranking nem coleta de dados.</p></header><div className={styles.questionPanel}><span className={styles.progress}>PERGUNTA {index+1} / {questionBank.length}</span><h3>{q.prompt}</h3><div className={styles.choiceList}>{q.options.map((option,i)=><button type="button" key={option} aria-pressed={answer===i} className={answer===i?styles.chosen:""} onClick={()=>setAnswer(i)}>{option}</button>)}</div>{answer!==null&&<div role="status" className={styles.feedback}><strong>{answer===q.correct?"Boa leitura.":"Vamos revisar."}</strong><p>{q.explanation}</p></div>}<div className={styles.controls}><button type="button" disabled={answer===null} className={styles.primary} onClick={()=>{setIndex((index+1)%questionBank.length);setAnswer(null);}}>{index===questionBank.length-1?"Recomeçar quiz":"Próxima pergunta"}</button></div></div></section>;
}

function TimedQuiz() {
  const [mode,setMode]=useState<"timed"|"free">("timed");
  const [phase,setPhase]=useState<"ready"|"playing"|"finished">("ready");
  const [time,setTime]=useState(60);const [questions,setQuestions]=useState<Question[]>([]);
  const [index,setIndex]=useState(0);const [answer,setAnswer]=useState<number|null>(null);const [history,setHistory]=useState<{question:Question;answer:number}[]>([]);
  useEffect(()=>{if(phase!=="playing"||mode!=="timed"||time===0)return;const interval=window.setInterval(()=>setTime(t=>Math.max(0,t-1)),1000);return()=>window.clearInterval(interval);},[phase,mode,time]);
  const start=()=>{const shuffled=[...questionBank].sort(()=>Math.random()-0.5).slice(0,6);setQuestions(shuffled);setHistory([]);setIndex(0);setTime(60);setAnswer(null);setPhase("playing");};
  const next=()=>{if(answer===null)return;setHistory(v=>[...v,{question:questions[index],answer}]);setAnswer(null);if(index===questions.length-1)setPhase("finished");else setIndex(v=>v+1);};
  const timedOut=phase==="playing"&&mode==="timed"&&time===0;
  const q=questions[index];const points=history.filter(v=>v.answer===v.question.correct).length;
  return <section id="quiz-tempo" className={styles.activitySection} aria-labelledby="timer-title"><header className={styles.sectionHeader}><span className="eyebrow">04 · Desafio final</span><h2 id="timer-title">Carnaval sustentável: contra o tempo.</h2><p>Você escolhe: seis perguntas em 60 segundos ou modo livre, sem limite de tempo.</p></header>
    {phase==="ready"&&<div className={styles.timerIntro}><Clock3 size={28} aria-hidden="true"/><h3>Atenção: esta atividade pode ser cronometrada.</h3><p>O relógio só começará após clicar em “Iniciar desafio”. Se o tempo acabar, as respostas já enviadas serão contabilizadas; nenhuma resposta é enviada para servidores.</p><fieldset><legend>Escolha como deseja participar:</legend><label><input type="radio" checked={mode==="timed"} onChange={()=>setMode("timed")}/> 60 segundos — desafio cronometrado</label><label><input type="radio" checked={mode==="free"} onChange={()=>setMode("free")}/> Sem cronômetro — modo livre</label></fieldset><button className={styles.primary} type="button" onClick={start}>Iniciar desafio</button></div>}
    {phase==="playing"&&!timedOut&&q&&<div className={styles.questionPanel}><div className={styles.timerHead}><span className={styles.progress}>PERGUNTA {index+1} / 6</span>{mode==="timed"&&<div className={time<=15?styles.urgent:styles.clock} aria-live={time<=10?"assertive":"off"}><Clock3 size={18} aria-hidden="true"/> {time} s restantes</div>}{mode==="free"&&<span>Sem limite de tempo</span>}</div>{mode==="timed"&&<div className={styles.timerTrack}><div style={{width:`${time/60*100}%`}}/></div>}<h3>{q.prompt}</h3><div className={styles.choiceList}>{q.options.map((option,i)=><button type="button" key={option} className={answer===i?styles.chosen:""} aria-pressed={answer===i} onClick={()=>setAnswer(i)}>{option}</button>)}</div><div className={styles.controls}><button type="button" className={styles.primary} disabled={answer===null} onClick={next}>{index===5?"Concluir":"Confirmar e avançar"}</button><button type="button" onClick={()=>setPhase("finished")}>Encerrar agora</button></div></div>}
    {(phase==="finished"||timedOut)&&<div className={styles.timerIntro} role="status"><h3>Seu resultado: {points} de {history.length} respostas corretas</h3><p>{time===0&&mode==="timed"?"O tempo terminou. Confira as explicações abaixo.":"Obrigado por participar. Confira as explicações abaixo."}</p>{history.map((r,i)=><div className={styles.resultRow} key={`${r.question.prompt}-${i}`}><strong>{i+1}. {r.question.prompt}</strong><p>{r.answer===r.question.correct?"✓ Correto. ":"Resposta para revisar. "}{r.question.explanation}</p></div>)}<div className={styles.controls}><button type="button" className={styles.primary} onClick={()=>setPhase("ready")}>Jogar novamente</button><button type="button" onClick={()=>{setMode("free");setPhase("ready");}}>Escolher modo livre</button></div></div>}
  </section>;
}
