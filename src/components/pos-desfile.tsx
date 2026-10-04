"use client";

import { useState } from "react";
import { ClipboardCheck, PackageCheck, RefreshCcw, Wrench, Boxes, Recycle } from "lucide-react";
import styles from "./pos-desfile.module.css";

const alternatives = [
  { title: "Reutilizar", text: "Verificar se a peça conservada pode voltar a ser utilizada, considerando a demanda e as condições de armazenamento.", Icon: RefreshCcw },
  { title: "Reparar", text: "Avaliar se o reparo é seguro, viável e adequado ao próximo uso previsto.", Icon: Wrench },
  { title: "Desmontar e armazenar", text: "Separar e catalogar componentes aproveitáveis quando a desmontagem fizer sentido.", Icon: Boxes },
  { title: "Avaliar encaminhamento", text: "Verificar a composição e as alternativas reais de reciclagem ou destinação ambientalmente adequada.", Icon: Recycle },
];

const scenarios = [
  {
    title: "Uma fantasia conservada",
    question: "A fantasia está em boas condições, mas ainda não há previsão de novo uso. O que investigar primeiro?",
    options: [
      "Descartar imediatamente para liberar espaço.",
      "Verificar demanda futura, condições de armazenamento e possibilidades de empréstimo ou adaptação.",
      "Encaminhar diretamente à reciclagem, sem avaliar a conservação.",
    ],
    correct: 1,
    explanation: "Conservar uma peça pode manter seu valor de uso. Mas vale investigar se há demanda, espaço e condições de guarda antes de decidir.",
  },
  {
    title: "Um adereço danificado",
    question: "Um adereço tem tecido, cola e pedrarias. Qual informação é necessária antes de definir o destino?",
    options: [
      "A composição, a condição dos componentes e as possibilidades seguras de desmontagem e encaminhamento.",
      "Somente a cor predominante.",
      "A quantidade de material, assumindo que tudo pode ser reciclado.",
    ],
    correct: 0,
    explanation: "Materiais compostos exigem cautela. Composição, segurança e infraestrutura disponível determinam quais alternativas são realmente viáveis.",
  },
  {
    title: "Retalhos identificados",
    question: "Há caixas com retalhos catalogados. O que ajudaria a decidir se vale mantê-los?",
    options: [
      "Guardar tudo indefinidamente, sem verificar demanda nem espaço.",
      "Misturar os tecidos para reduzir o número de caixas.",
      "Conferir metragem, composição, conservação, demanda provável e custos de armazenamento.",
    ],
    correct: 2,
    explanation: "Um inventário simples ajuda a evitar novas compras e permite avaliar se a guarda dos materiais é útil e proporcional.",
  },
];

export function PostCarnivalDecision() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const scenario = scenarios[scenarioIndex];

  return (
    <div className={styles.root}>
      <section className={styles.diagram} aria-labelledby="post-destino-title">
        <p className={styles.kicker}>Roteiro educativo · Gestão no pós-desfile</p>
        <h2 id="post-destino-title">Qual será o próximo destino?</h2>
        <p className={styles.lead}>
          Não existe uma solução única. A triagem e o inventário ajudam a comparar
          possibilidades sem presumir que todo material poderá ser reaproveitado.
        </p>
        <div className={styles.decisionPath}>
          <div className={styles.start}>
            <PackageCheck size={23} aria-hidden="true" />
            <strong>Recolher e identificar</strong>
            <span>Qual é o material? Em que condições está?</span>
          </div>
          <span className={styles.connector} aria-hidden="true" />
          <div className={styles.checkpoint}>
            <ClipboardCheck size={22} aria-hidden="true" />
            <strong>Avaliar possibilidades</strong>
            <span>Estado, composição, segurança, custos, demanda e infraestrutura</span>
          </div>
          <span className={styles.connector} aria-hidden="true" />
        </div>
        <div className={styles.options}>
          {alternatives.map(({ title, text, Icon }) => (
            <article className={styles.option} key={title}>
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className={styles.caveat}>
          Caminhos ilustrativos: podem existir outras alternativas, e mais de uma
          opção pode ser apropriada conforme o caso. Não representam práticas
          observadas em uma escola de samba específica.
        </p>
      </section>

      <section className={styles.activity} aria-labelledby="post-activity-title">
        <p className={styles.kicker}>Atividade interativa · Situações hipotéticas</p>
        <h2 id="post-activity-title">Você decide o próximo destino</h2>
        <div className={styles.activityHead}>
          <strong>{scenario.title}</strong>
          <span>CENÁRIO {scenarioIndex + 1} / {scenarios.length}</span>
        </div>
        <p className={styles.question}>{scenario.question}</p>
        <div className={styles.answers} role="group" aria-label="Escolha uma resposta">
          {scenario.options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`${styles.answer} ${answer === index ? styles.chosen : ""}`}
              aria-pressed={answer === index}
              onClick={() => setAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
        {answer !== null && (
          <div className={styles.feedback} aria-live="polite">
            <strong>{answer === scenario.correct ? "Boa análise." : "Vale reconsiderar."}</strong>
            <p>{scenario.explanation}</p>
            <button
              type="button"
              className={styles.next}
              onClick={() => {
                setScenarioIndex((scenarioIndex + 1) % scenarios.length);
                setAnswer(null);
              }}
            >
              {scenarioIndex === scenarios.length - 1 ? "Recomeçar atividade" : "Próximo cenário"}
            </button>
          </div>
        )}
        <p className={styles.activityNote}>As respostas não são coletadas nem enviadas. A atividade funciona no próprio navegador.</p>
      </section>
    </div>
  );
}
