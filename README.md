# Além da Avenida

Portal educativo sobre trabalho, cultura, economia circular e sustentabilidade no Carnaval. Projeto Next.js com App Router, TypeScript e Tailwind CSS, preparado para geração estática e publicação na Vercel.

## Requisitos

- Node.js 20.9 ou superior.
- npm incluído na instalação do Node.js.

## Instalação e execução local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Os comandos de verificação são:

```bash
npm run lint
npm run typecheck
npm run build
```

## Estrutura

- `src/app/`: página inicial, rota estática de conteúdo, metadados, sitemap e robots.
- `src/components/`: navegação, rodapé, infográficos e atividades interativas.
- `src/lib/content.ts`: páginas, objetivos de aprendizagem, referências, glossário e catálogo de vídeos.
- `public/`: recursos locais autorizados. Não foram incluídos logotipos ou fotografias sem autorização/licença.

As páginas internas são geradas estaticamente a partir do array `pages` em `src/lib/content.ts`. A navegação também é derivada dessa lista. Para acrescentar uma página, inclua seus dados e um slug único.

## Atualização dos conteúdos

Edite `pages` em `src/lib/content.ts`. Cada página recebe título, introdução, objetivos de aprendizagem, seções, pergunta para reflexão e referências. Exemplos sobre processos são didáticos e devem permanecer identificados como hipotéticos quando não houver evidência autorizada.

As referências oficiais estão centralizadas nesse mesmo arquivo. A biblioteca apresenta as três fontes verificadas em formato ABNT. Ao incluir dados quantitativos, informe fonte, ano e população ou universo de referência.

## Inclusão de vídeos

O catálogo tipado fica no array `videos`, em `src/lib/content.ts`. Antes de incluir um item, confirme título, descrição, autoria, fonte, tema e o ID real do YouTube; obtenha também autorização quando necessária. O componente `YouTubeEmbed` valida o formato do ID e usa o domínio de privacidade aprimorada do YouTube. A lista começa vazia porque nenhum vídeo foi fornecido e verificado. Os temas disponíveis ficam em `videoCategories`.

## Atualização do estudo de caso

A página `/estudo-de-caso` apresenta metodologia prevista, não resultados. Só acrescente informações de campo após contato e autorização formais; registre contexto, data, fonte e limites, e obtenha autorização específica para imagens e depoimentos. Não atribua parceria nem conclusões ao GRES Consulado sem comprovação. O portal pode referenciar outra escola mediante as mesmas salvaguardas, sem alterar sua arquitetura.

## Publicação na Vercel

1. Envie o projeto para um repositório Git autorizado.
2. Importe o repositório em [vercel.com](https://vercel.com/) e mantenha o preset Next.js.
3. A Vercel executa o build pelo script `npm run build`.
4. Se usar domínio próprio, defina `NEXT_PUBLIC_SITE_URL` com a URL canônica, incluindo `https://`. A Vercel também fornece `VERCEL_PROJECT_PRODUCTION_URL` e `VERCEL_URL` para compor o sitemap.

O portal não requer banco de dados, autenticação, serviços pagos nem APIs externas para as funções educativas. A incorporação de um vídeo só carrega conteúdo externo quando um item verificado for adicionado.

## Contexto acadêmico

Material Educacional Digital desenvolvido como atividade extensionista de APEX II, no programa Educando para a Cidadania. Tem finalidade educativa e não representa publicação oficial da Faculdade Unyleya ou de qualquer escola de samba.