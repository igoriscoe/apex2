import { Boxes, ClipboardList, RefreshCw, Truck } from "lucide-react";
import styles from "./admin-ferramentas.module.css";

const tools = [
  { title: "Gestão de materiais", example: "Conferir os estoques de tecidos e adereços antes de comprar novos materiais.", Icon: Boxes },
  { title: "5W2H", example: "Definir responsáveis, prazos, locais e custos para organizar sobras.", Icon: ClipboardList },
  { title: "PDCA", example: "Testar uma melhoria no armazenamento, verificar o resultado e ajustar o procedimento.", Icon: RefreshCw },
  { title: "Logística reversa", example: "Avaliar fluxos organizados de retorno ao setor empresarial, quando aplicáveis.", Icon: Truck },
];

export function AdminFerramentas() {
  return (
    <section className={styles.wrapper} aria-labelledby="admin-tools-title">
      <header className={styles.heading}>
        <span className="eyebrow">Administração aplicada · exemplo educativo</span>
        <h2 id="admin-tools-title">Quatro instrumentos, diferentes aplicações.</h2>
        <p>Uma decisão de gestão pode envolver mais de uma ferramenta. Os exemplos abaixo não descrevem procedimentos de uma escola de samba específica.</p>
      </header>
      <div className={styles.grid}>
        {tools.map(({ title, example, Icon }) => (
          <article className={styles.card} key={title}>
            <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{example}</p>
          </article>
        ))}
      </div>
      <p className={styles.pdcaNote}><strong>PDCA em ação:</strong> planejar a identificação dos retalhos, testar etiquetas, verificar se o tempo de localização diminuiu e ajustar o procedimento conforme os resultados.</p>
    </section>
  );
}
