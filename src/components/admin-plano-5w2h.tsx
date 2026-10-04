"use client";

import { useState } from "react";
import { Copy, Printer, Lightbulb } from "lucide-react";
import styles from "./admin-plano-5w2h.module.css";

const fields = [
  ["what", "O que será feito?"], ["why", "Por que será feito?"],
  ["where", "Onde?"], ["when", "Quando?"],
  ["who", "Por quem?"], ["how", "Como?"], ["cost", "Quanto custa?"],
] as const;
type Field = (typeof fields)[number][0];
type Plan = Record<Field, string>;
const empty: Plan = { what: "", why: "", where: "", when: "", who: "", how: "", cost: "" };
const example: Plan = {
  what: "Organizar as sobras de tecido ainda aproveitáveis",
  why: "Facilitar a localização e evitar aquisições desnecessárias",
  where: "No espaço de armazenamento definido pela equipe",
  when: "Durante uma semana piloto, após autorização",
  who: "Equipe responsável pela gestão dos materiais",
  how: "Identificar composição e dimensão, separar por categoria, etiquetar e registrar quantidades",
  cost: "Estimar etiquetas, recipientes e horas de trabalho antes da execução",
};

export function AdminPlano5W2H() {
  const [plan, setPlan] = useState<Plan>(empty);
  const [message, setMessage] = useState("");
  const [exampleLoaded, setExampleLoaded] = useState(false);
  const output = fields.map(([id, label]) => `${label} ${plan[id] || "(a definir)"}`).join("\n");
  function fillExample() {
    const hasInput = fields.some(([id]) => plan[id].trim().length > 0);
    if (hasInput && !window.confirm("Preencher o exemplo substituirá os campos já preenchidos. Deseja continuar?")) return;
    setPlan(example);
    setExampleLoaded(true);
    setMessage("Exemplo carregado. Você pode adaptar todas as respostas.");
  }
  async function copyPlan() {
    try { await navigator.clipboard.writeText(`Plano educativo 5W2H\n${output}`); setMessage("Plano copiado."); }
    catch { setMessage("Não foi possível copiar automaticamente. Selecione o texto do plano abaixo para copiá-lo."); }
  }
  return (
    <section className={styles.wrapper} aria-labelledby="admin-plan-title">
      <span className="eyebrow">Atividade interativa · 5W2H</span>
      <h2 id="admin-plan-title">Do problema a um plano de ação.</h2>
      <p>Utilize as sete perguntas para planejar uma ação hipotética de gestão de materiais. As informações preenchidas permanecem no seu navegador e não são enviadas ao portal.</p>
      <aside className={styles.challenge}>
        <strong>Desafio educativo</strong>
        <p>Após a confecção das fantasias, uma equipe encontra sobras de tecidos sem identificação e guardadas em locais diferentes. Como organizar esses materiais para avaliar possibilidades de reaproveitamento?</p>
        <button className={styles.exampleButton} type="button" onClick={fillExample}>
          <Lightbulb size={16} aria-hidden="true" /> {exampleLoaded ? "Recarregar exemplo" : "Preencher exemplo"}
        </button>
      </aside>
      <div className={styles.form}>
        {fields.map(([id, label]) => (
          <div className={styles.field} key={id}>
            <label htmlFor={`admin-${id}`}>{label}</label>
            {id === "how"
              ? <textarea id={`admin-${id}`} value={plan[id]} onChange={(e) => setPlan(prev => ({ ...prev, [id]: e.target.value }))} rows={3} />
              : <input id={`admin-${id}`} value={plan[id]} onChange={(e) => setPlan(prev => ({ ...prev, [id]: e.target.value }))} />}
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.primary} onClick={copyPlan}><Copy size={16} aria-hidden="true" /> Copiar plano</button>
        <button type="button" onClick={() => window.print()}><Printer size={16} aria-hidden="true" /> Imprimir</button>
      </div>
      <p className={styles.message} aria-live="polite">{message}</p>
      <div className={styles.output} aria-live="polite"><strong>Seu plano</strong>{"\n"}{output}</div>
      <p className={styles.disclaimer}>Exemplo fictício para aprendizagem. A execução de uma proposta real exige autorização e avaliação das condições da organização.</p>
    </section>
  );
}
