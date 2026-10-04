import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import { EducationalDiagram, InteractiveLab, PracticalActivities } from "@/components/interactive-lab";
import { bibliography, pages } from "@/lib/content";

export function generateStaticParams() { return pages.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = pages.find((item) => item.slug === slug);
    return page ? { title: page.navTitle, description: page.intro } : {};
  });
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <article className="topic-page">
    <header className="topic-hero content-wrap"><div className="section-index">{page.eyebrow}</div><h1>{page.title}</h1><p className="topic-intro">{page.intro}</p><div className="learning-box"><BookOpenCheck size={20} aria-hidden="true" /><div><span className="eyebrow">Ao final, você poderá</span><ul>{page.learning.map((goal) => <li key={goal}>{goal}</li>)}</ul></div></div></header>
    <div className="topic-body content-wrap"><div className="topic-prose">{page.sections.map((section, index) => <section className="prose-section" key={section.title}><div className="prose-index">{String(index + 1).padStart(2, "0")}</div><div><h2>{section.title}</h2><p>{section.text}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</div></section>)}</div>
      <EducationalDiagram slug={page.slug} />
      {page.slug === "aprenda-na-pratica" ? <PracticalActivities /> : page.interaction && <InteractiveLab kind={page.interaction} />}
      <aside className="reflection"><span className="eyebrow">Para refletir</span><p>{page.reflection}</p></aside>
      {page.slug === "biblioteca-e-referencias" && <section className="bibliography"><span className="eyebrow">Referências em formato ABNT</span><ol>{bibliography.map((item) => <li key={item.href}><Link href={item.href} target="_blank" rel="noreferrer">{item.text}<ArrowUpRight size={14} aria-hidden="true" /></Link></li>)}</ol></section>}
      <section className="reference-list"><div><span className="eyebrow">Referências desta página</span>{page.references.length === 0 && <p>Conteúdo metodológico do projeto; sem dados externos apresentados.</p>}{page.references.map((reference) => <Link href={reference.href} target="_blank" rel="noreferrer" key={reference.href}>{reference.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}</div></section>
    </div>
  </article>;
}