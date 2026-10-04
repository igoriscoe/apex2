import { BookOpen, Handshake, MonitorPlay, MessageCircle, ClipboardCheck, ShieldCheck } from "lucide-react";
import styles from "./projeto-extensionista.module.css";

const etapas = [
  { Icon: BookOpen, title: "Pesquisa e planejamento", description: "Consulta aos ODS 8 e 12, fundamentação teórica e preparação dos conteúdos e do roteiro de aproximação com a comunidade." },
  { Icon: Handshake, title: "Contato e autorização", description: "Apresentação da proposta à organização e definição do público, do encontro e dos registros permitidos." },
  { Icon: MonitorPlay, title: "Material educacional digital", description: "Desenvolvimento do portal Além da Avenida, com conteúdos acessíveis, infográficos e atividades práticas." },
  { Icon: MessageCircle, title: "Ação educativa presencial", description: "Apresentação dialogada do portal e realização de uma atividade, com espaço para perguntas e contribuições dos participantes." },
  { Icon: ClipboardCheck, title: "Avaliação e revisão", description: "Coleta de impressões dos participantes, avaliação da equipe e atualização do material quando pertinente." },
];

export function ProjetoExtensionista() {
  return (
    <section className={styles.section} aria-labelledby="etapas-extensionista-title">
      <header className={styles.header}>
        <span className="eyebrow">Percurso extensionista · etapas previstas</span>
        <h2 id="etapas-extensionista-title">Da pesquisa ao diálogo com a comunidade.</h2>
        <p>O site é o recurso pedagógico da proposta. A atividade extensionista envolve também sua apresentação, a escuta dos participantes e a avaliação da experiência.</p>
      </header>
      <ol className={styles.timeline}>
        {etapas.map(({ Icon, title, description }, index) => (
          <li className={styles.step} key={title}>
            <div className={styles.marker} aria-hidden="true"><Icon size={23} strokeWidth={1.6}/></div>
            <div className={styles.content}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={styles.note}>As etapas representam o planejamento acadêmico e não devem ser interpretadas como atividades presenciais já realizadas.</p>
      <div className={styles.practice}>
        <div>
          <span className="eyebrow">Proposta de encontro educativo</span>
          <h3>Uma oficina breve, com participação real.</h3>
          <p>Formato sugerido de 30 a 45 minutos, sujeito à autorização da organização e às orientações da disciplina.</p>
        </div>
        <ol>
          <li><strong>5 minutos:</strong> apresentação do tema e dos ODS.</li>
          <li><strong>10 minutos:</strong> navegação orientada pelos conteúdos do portal.</li>
          <li><strong>15 minutos:</strong> Desafio dos Materiais ou planejamento 5W2H.</li>
          <li><strong>10 minutos:</strong> conversa, avaliação e sugestões de melhoria.</li>
        </ol>
      </div>
      <div className={styles.ethics}>
        <ShieldCheck size={26} strokeWidth={1.6} aria-hidden="true" />
        <div>
          <h3>Transparência e responsabilidade</h3>
          <p>O portal apresenta conteúdos educativos e situações hipotéticas. Observações, imagens, depoimentos e avaliações de participantes só serão divulgados quando efetivamente obtidos e autorizados. A publicação do site, por si só, não comprova a realização da atividade presencial.</p>
        </div>
      </div>
    </section>
  );
}
