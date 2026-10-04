export type ContentSection = { title: string; text: string; points?: string[] };
export type PortalPage = { slug: string; navTitle: string; eyebrow: string; title: string; intro: string; learning: string[]; sections: ContentSection[]; reflection: string; references: { label: string; href: string }[]; interaction?: "cycle" | "comparison" | "plan" | "quiz" | "materials" | "glossary" | "video" };

export const references = {
  ods8: { label: "Nações Unidas Brasil. Objetivo de Desenvolvimento Sustentável 8.", href: "https://brasil.un.org/pt-br/sdgs/8" },
  ods12: { label: "Nações Unidas Brasil. Objetivo de Desenvolvimento Sustentável 12.", href: "https://brasil.un.org/pt-br/sdgs/12" },
  pnrs: { label: "Brasil. Lei nº 12.305, de 2 de agosto de 2010. Política Nacional de Resíduos Sólidos.", href: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm" },
};

export const bibliography = [
  { text: "NAÇÕES UNIDAS BRASIL. Objetivo de Desenvolvimento Sustentável 8: trabalho decente e crescimento econômico. Brasília, DF: Nações Unidas Brasil, [s. d.]. Disponível em: https://brasil.un.org/pt-br/sdgs/8. Acesso em: 3 out. 2026.", href: references.ods8.href },
  { text: "NAÇÕES UNIDAS BRASIL. Objetivo de Desenvolvimento Sustentável 12: consumo e produção responsáveis. Brasília, DF: Nações Unidas Brasil, [s. d.]. Disponível em: https://brasil.un.org/pt-br/sdgs/12. Acesso em: 3 out. 2026.", href: references.ods12.href },
  { text: "BRASIL. Lei nº 12.305, de 2 de agosto de 2010. Institui a Política Nacional de Resíduos Sólidos; altera a Lei nº 9.605, de 12 de fevereiro de 1998; e dá outras providências. Diário Oficial da União: Brasília, DF, 3 ago. 2010. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm. Acesso em: 3 out. 2026.", href: references.pnrs.href },
];

export type VideoItem = { title: string; description: string; author: string; source: string; theme: string; videoId: string };
export const videoCategories = ["ODS 8", "ODS 12", "Economia circular", "Produção cultural", "Gestão de materiais", "Ferramentas administrativas", "Produções do grupo acadêmico"];
export const videos: VideoItem[] = [];

export const pages: PortalPage[] = [
  {
    slug: "carnaval-alem-do-espetaculo", navTitle: "A cadeia produtiva", eyebrow: "01 / Cultura e produção", title: "O Carnaval também acontece nos bastidores.",
    intro: "Antes da avenida, existe uma cadeia de decisões, saberes e relações de trabalho. Observar esse percurso ajuda a entender como a produção cultural pode movimentar atividades econômicas locais.",
    learning: ["Reconhecer etapas e participantes de uma cadeia produtiva cultural.", "Relacionar planejamento e compras a oportunidades de trabalho e renda."],
    sections: [
      { title: "Uma produção feita por muitas mãos", text: "A preparação de um desfile pode reunir criação artística, planejamento, aquisição de insumos, serviços e montagem. A configuração muda conforme a escola, o território, os recursos disponíveis e o projeto de cada ano.", points: ["Criação e planejamento definem necessidades, cronograma e orçamento.", "Compras e contratação conectam a produção a fornecedores e prestadores de serviço.", "Costura, adereços e montagem combinam técnica, experiência e trabalho artesanal."] },
      { title: "Economia que se organiza em rede", text: "Costureiras, aderecistas, artesãos, profissionais de montagem e comerciantes são exemplos de participantes possíveis. Esses exemplos ilustram funções, não comprovam que uma escola específica as contrate nem informam quantas pessoas trabalham nesse setor.", points: ["Pequenos negócios podem fornecer materiais ou serviços especializados.", "Prazos e especificações influenciam como o trabalho é distribuído.", "Parcerias locais podem fortalecer capacidades, sem garantir por si só renda estável ou trabalho decente."] },
      { title: "Ler o processo com a Administração", text: "Mapear entradas, atividades, responsáveis, prazos e saídas permite localizar gargalos e planejar melhor. Um mapa de processo também ajuda a perguntar onde materiais se perdem e como os conhecimentos circulam." },
    ],
    reflection: "Que informações seriam necessárias para afirmar que uma produção fortaleceu a economia local? Quem deveria participar dessa análise?", references: [references.ods8], interaction: "cycle",
  },
  {
    slug: "ods-8-trabalho", navTitle: "ODS 8 · Trabalho", eyebrow: "02 / Trabalho e desenvolvimento", title: "Oportunidade econômica precisa vir acompanhada de dignidade.",
    intro: "A preparação do Carnaval pode movimentar diferentes atividades econômicas, desde a criação de fantasias até a prestação de serviços especializados. Costureiras, artesãos, aderecistas, fornecedores e pequenos empreendedores representam exemplos de profissionais e negócios que podem integrar essa cadeia produtiva. Mas gerar oportunidades não é suficiente. O ODS 8 também nos convida a refletir sobre remuneração, segurança, direitos e condições dignas de trabalho. Nesta página, exploramos essas relações, com atenção especial à Meta 8.3.",
    learning: ["Interpretar a Meta 8.3 em um contexto cultural.", "Distinguir geração de renda de condições efetivas de trabalho decente.", "Identificar informações necessárias para avaliar uma contratação hipotética."],
    sections: [
      { title: "Da atividade produtiva ao desenvolvimento", text: "A Meta 8.3 propõe promover políticas orientadas ao desenvolvimento que apoiem atividades produtivas, trabalho decente, empreendedorismo, criatividade, inovação e o crescimento de micro, pequenas e médias empresas. A produção de fantasias oferece situações hipotéticas para compreender essas relações.", points: ["Uma encomenda de fantasias pode envolver profissionais com diferentes especialidades.", "Um ateliê ou pequeno fornecedor pode prestar serviços e desenvolver conhecimentos ao longo do tempo.", "Essas possibilidades não comprovam, por si só, renda estável ou trabalho decente."] },
      { title: "Trabalhos diferentes, perguntas necessárias", text: "Imagine que uma costureira receba uma encomenda de fantasias para uma produção cultural, com prazo de entrega definido. Antes de considerar a oportunidade adequada, seria preciso compreender as condições da contratação. Trabalho remunerado, voluntariado e ocupações temporárias possuem características distintas; nenhuma dessas categorias, isoladamente, comprova condições dignas.", points: ["As atividades, a quantidade de peças e os critérios de entrega foram definidos de maneira clara?", "A remuneração, a forma de pagamento e o prazo foram acordados?", "Há previsão de materiais, equipamentos e tempo suficiente para executar o trabalho com segurança?", "Quais direitos, responsabilidades e possibilidades de diálogo se aplicam à situação?"] },
      { title: "O que observar", text: "Avaliar trabalho decente exige evidências e escuta das pessoas envolvidas. Além de identificar oportunidades, é necessário considerar remuneração, segurança, proteção social, igualdade e participação, de acordo com o contexto e as normas aplicáveis. A Administração pode contribuir com planejamento, especificações, cronogramas e processos transparentes." },
    ],
    reflection: "Como uma contratação pode valorizar o saber artesanal e, ao mesmo tempo, estabelecer com clareza atividades, prazo, remuneração e condições seguras?", references: [references.ods8],
  },
  {
    slug: "ods-12-consumo", navTitle: "ODS 12 · Materiais", eyebrow: "03 / Produção responsável", title: "Cada material começa com uma decisão de gestão.",
    intro: "Tecidos, aviamentos, pedrarias e outros materiais utilizados na confecção de fantasias representam escolhas que começam muito antes do desfile. Planejar quantidades, verificar estoques, evitar desperdícios e considerar possibilidades de reaproveitamento são decisões que podem contribuir para uma produção carnavalesca mais responsável. O ODS 12 propõe padrões sustentáveis de consumo e produção. Nesta página, exploramos especialmente a Meta 12.5, voltada à redução da geração de resíduos, e a Meta 12.8, relacionada à informação e à conscientização para o desenvolvimento sustentável.",
    learning: ["Aplicar a hierarquia de gestão de resíduos a materiais de fantasias.", "Reconhecer por que a reciclabilidade depende do material e da infraestrutura disponível.", "Identificar informações úteis para planejar compras, armazenar materiais e orientar reaproveitamento."],
    sections: [
      { title: "Antes de comprar, planejar", text: "Uma lista de materiais vinculada ao desenho, às medidas e ao cronograma pode ajudar a prever quantidades e sobras. Especificações claras também permitem comparar fornecedores e evitar compras incompatíveis com o uso previsto.", points: ["Conferir inventário e materiais que já podem ser usados.", "Escolher dimensões e acabamentos que facilitem manutenção e desmontagem.", "Prever armazenamento, identificação e destino antes da aquisição."] },
      { title: "Hierarquia: evitar antes de encaminhar", text: "A Política Nacional de Resíduos Sólidos estabelece a ordem: não geração, redução, reutilização, reciclagem, tratamento e disposição final ambientalmente adequada dos rejeitos. Alternativas concretas dependem do material, da segurança e das condições locais.", points: ["Prevenir: ajustar o projeto para evitar excedentes.", "Reduzir: usar apenas o necessário sem comprometer função e segurança.", "Reutilizar: aproveitar o item novamente sem transformá-lo em outro material.", "Reciclar: transformar o resíduo em insumo, quando houver processo viável."] },
      { title: "Material composto pede cautela", text: "Tecidos com misturas de fibras, colas, tintas, aviamentos e pedrarias podem dificultar separação e reciclagem. Não se deve classificar um componente como reciclável sem confirmar composição, contaminação, tecnologia e serviço de coleta disponíveis." },
    ],
    reflection: "Que informações de composição e destino deveriam acompanhar um material desde a compra?", references: [references.ods12],
  },
  {
    slug: "depois-da-avenida", navTitle: "Depois da avenida", eyebrow: "04 / O ciclo continua", title: "O destino se decide antes do último aplauso.",
    intro: "O ciclo de vida de uma fantasia não precisa terminar quando o desfile acaba. Planejar o recolhimento, identificar os materiais e avaliar seu estado de conservação pode abrir possibilidades de reparo, reutilização e outros aproveitamentos. Nesta página, vamos conhecer decisões administrativas que podem orientar o destino das fantasias e dos adereços após sua utilização, considerando os princípios da economia circular e as condições reais de cada organização.",
    learning: ["Identificar decisões administrativas no pós-uso de fantasias.", "Distinguir alternativas viáveis sem presumir práticas de uma agremiação específica.", "Utilizar informações simples de inventário para avaliar próximos usos."],
    sections: [
      { title: "Organizar o retorno", text: "Uma equipe pode planejar pontos de recolhimento, responsáveis, recipientes e registros. Separar peças inteiras de componentes soltos reduz a mistura e ajuda a decidir o próximo passo com informação.", points: ["Identificar peças, materiais e condição de uso.", "Desmontar apenas quando isso for seguro e fizer sentido.", "Registrar quantidades e local de armazenamento para apoiar decisões futuras."] },
      { title: "Escolher um caminho compatível", text: "Peças em boas condições podem ser avaliadas para novo uso, reparo ou empréstimo. Componentes podem voltar ao estoque. Resíduos podem ser encaminhados a recicladores quando houver compatibilidade técnica e coleta. O que não tiver alternativa viável precisa de destinação adequada conforme as regras locais.", points: ["Reutilização conserva o item em uso, sem transformá-lo em outro material.", "Reciclagem transforma material em insumo ou produto novo.", "A destinação depende da composição, do estado, dos custos e da infraestrutura disponível."] },
      { title: "Administração torna o ciclo visível", text: "Um inventário simples permite acompanhar peças e componentes: identificação, estado de conservação, composição, quantidade, localização, responsável e destino proposto. Esses registros ajudam a comparar alternativas de armazenamento, reparo, reutilização e encaminhamento, sem exigir a implantação de um sistema complexo.", points: ["Exemplo de registro: peça F-01; tecido e pedrarias; conservação boa; caixa A; possível reutilização a avaliar.", "A avaliação deve considerar espaço, demanda futura, custos, segurança e infraestrutura local."] },
    ],
    reflection: "Qual dado simples ajudaria a decidir se uma peça deve ser guardada, reparada, desmontada ou encaminhada?", references: [references.ods12, references.pnrs],
  },
  {
    slug: "economia-circular", navTitle: "Economia circular", eyebrow: "05 / Modelos de produção", title: "Manter materiais úteis em circulação exige projeto e coordenação.",
    intro: "Uma fantasia carnavalesca pode reunir tecidos, estruturas, pedrarias e diversos outros materiais. Quando seu uso termina, algumas peças podem apresentar possibilidades de reparo, adaptação ou reutilização, enquanto outras exigem avaliação para reciclagem ou destinação adequada. A economia circular propõe repensar essas decisões desde o planejamento, procurando evitar desperdícios e conservar o valor dos produtos e materiais por mais tempo. Nesta página, vamos conhecer seus principais conceitos e explorar como a Administração pode contribuir para organizar essas possibilidades.",
    learning: ["Comparar a lógica linear com estratégias circulares no contexto carnavalesco.", "Distinguir reutilização, reciclagem e logística reversa.", "Considerar composição, custos, conservação e demanda antes de escolher um destino."],
    sections: [
      { title: "Do fluxo linear aos ciclos de uso", text: "Um fluxo linear costuma seguir extração, produção, uso e descarte. Uma abordagem circular procura evitar perdas desde o projeto e organizar manutenção, reparo, reuso e, quando necessário e viável, reciclagem.", points: ["Projetar adereços desmontáveis pode facilitar reparo ou substituição de componentes.", "Catalogar peças pode apoiar empréstimo, adaptação ou uso em outra produção.", "São possibilidades hipotéticas, condicionadas à qualidade, demanda, custo e capacidade operacional."] },
      { title: "Três conceitos que não são sinônimos", text: "Reutilização é aproveitar um item novamente sem transformá-lo em outro material. Reciclagem transforma o resíduo em insumo ou produto. Logística reversa organiza o retorno de produtos e resíduos ao setor empresarial para reaproveitamento ou destinação adequada, conforme a Política Nacional de Resíduos Sólidos." },
      { title: "Valor precisa ser verificado", text: "Uma fantasia hipotética pode apresentar uma estrutura reutilizável, tecidos que precisam de reparo e adereços que podem ser separados e armazenados. Entretanto, cada possibilidade exige avaliação. Triagem, limpeza, desmontagem, transporte, profissionais e espaço de armazenamento podem gerar custos. A Administração ajuda a comparar esses fatores com benefícios ambientais, culturais e econômicos demonstráveis." },
    ],
    reflection: "Como decidir entre guardar uma fantasia completa, reparar seus componentes ou desmontá-la, considerando custos, espaço disponível, possibilidades de reutilização e impactos ambientais?", references: [references.ods12, references.pnrs], interaction: "comparison",
  },
  {
    slug: "administracao-na-pratica", navTitle: "Administração na prática", eyebrow: "06 / Ferramentas de gestão", title: "Planejar recursos também é cuidar do que já existe.",
    intro: "Por trás da produção de fantasias e adereços existem decisões sobre compras, estoques, prazos, pessoas e recursos financeiros. Uma gestão bem planejada pode contribuir para evitar desperdícios, organizar o trabalho e identificar possibilidades de reaproveitamento. Nesta página, você conhecerá quatro instrumentos da Administração — gestão de materiais, 5W2H, PDCA e logística reversa — e poderá experimentar a elaboração de um plano de ação para uma situação hipotética da produção carnavalesca.",
    learning: ["Relacionar gestão de materiais e planejamento de compras à prevenção de desperdícios.", "Compreender aplicações do 5W2H, do PDCA e da logística reversa.", "Elaborar um plano de ação educativo para um problema hipotético."],
    sections: [
      { title: "Módulo 1 · Gestão de materiais", text: "Inventariar o que existe, identificar características e condições dos itens, definir responsáveis e registrar entradas e saídas podem evitar compras desnecessárias. Exemplo hipotético: conferir os estoques de tecidos e adereços antes de uma nova aquisição.", points: ["Separar material disponível, reservado, danificado e sem identificação.", "Adotar unidades de medida e responsáveis por atualização.", "Rever excedentes antes de comprar outros materiais."] },
      { title: "Módulo 2 · 5W2H", text: "O 5W2H ajuda a organizar uma ação por meio de sete perguntas: o que será feito, por que, onde, quando, por quem, como e quanto custa. Exemplo: organizar sobras de tecidos definindo responsáveis, prazos e recursos necessários para a atividade." },
      { title: "Módulo 3 · PDCA", text: "Planejar define objetivo, método e indicador; Executar testa a ação; Verificar compara evidências com o esperado; Agir corrige ou padroniza. Exemplo: testar etiquetas nos tecidos, observar se o tempo de busca diminui e ajustar os procedimentos." },
      { title: "Módulo 4 · Logística reversa", text: "A logística reversa organiza fluxos de retorno de produtos e resíduos ao setor empresarial para reaproveitamento ou destinação adequada, quando aplicáveis. Guardar uma fantasia para reutilização interna não é, por si só, logística reversa." },
    ],
    reflection: "Que indicador permitiria verificar se um novo controle de estoque está ajudando, sem criar trabalho de registro desproporcional?", references: [references.pnrs],
  },
  {
    slug: "estudo-de-caso", navTitle: "O projeto", eyebrow: "07 / Projeto extensionista", title: "Conhecer antes de concluir.",
    intro: "O Além da Avenida foi desenvolvido como material educacional digital de uma atividade extensionista em Administração. A produção carnavalesca serve de contexto para explorar o ODS 8, relacionado a trabalho e atividade econômica, e o ODS 12, voltado ao consumo e à produção responsáveis. Além do portal, a proposta prevê uma atividade educativa presencial com uma comunidade, mediante contato, autorização e adequação às orientações da disciplina.",
    learning: ["Compreender a relação entre a produção do portal e a proposta extensionista.", "Conhecer a atividade educativa prevista e distinguir planejamento de resultados efetivamente obtidos."],
    sections: [
      { title: "Por que o Carnaval?", text: "A preparação de fantasias e adereços reúne decisões sobre trabalho, fornecedores, aquisição de materiais, produção e possibilidades de uso posterior. Essas situações oferecem exemplos educativos para discutir sustentabilidade e Administração. O conteúdo do portal não descreve práticas observadas em uma escola de samba específica." },
      { title: "O que o grupo desenvolveu", text: "O portal organiza explicações dos ODS 8 e 12, conceitos de economia circular e ferramentas de gestão, infográficos e atividades interativas. Sua construção constitui a etapa de elaboração do material educacional digital. A publicação do portal não deve ser confundida com a realização de uma oficina na comunidade." },
      { title: "Como o material poderá ser utilizado", text: "A proposta pedagógica prevê uma apresentação dialogada do site, seguida de uma atividade prática e de uma conversa para avaliar clareza, pertinência e possibilidades de melhoria. O formato, os participantes e o local dependem de organização e autorização; a realização precisa ser documentada para a apresentação acadêmica." },
    ],
    reflection: "Como construir uma atividade educativa útil à comunidade, registrando somente observações e resultados que realmente ocorreram?", references: [],
  },
  {
    slug: "videoteca", navTitle: "Videoteca", eyebrow: "08 / Aprendizagem audiovisual", title: "Vídeos para assistir com contexto.",
    intro: "O Carnaval reúne cultura, criatividade, trabalho e uma grande diversidade de materiais. Nesta videoteca, selecionamos conteúdos audiovisuais sobre os ODS 8 e 12 e a economia circular. Cada vídeo é acompanhado de uma pergunta para relacionar a aprendizagem à produção carnavalesca. Os conteúdos externos não descrevem práticas verificadas de uma escola de samba específica.",
    learning: ["Relacionar vídeos institucionais aos conceitos dos ODS 8 e 12.", "Identificar diferenças entre trabalho decente, consumo responsável e economia circular.", "Reconhecer autoria e distinguir informação educativa de resultados de pesquisa."],
    sections: [
      { title: "Uma seleção com propósito", text: "Os vídeos apresentam diferentes perspectivas sobre o desenvolvimento sustentável. A curadoria prioriza autores identificáveis e conteúdos que ajudem a interpretar os desafios de uma cadeia produtiva cultural." },
      { title: "Como aproveitar os vídeos", text: "Antes de assistir, escolha um tema. Durante a exibição, observe os conceitos mencionados. Depois, responda à pergunta educativa do cartão e explore as páginas do portal que aprofundam o assunto." },
      { title: "Produções do grupo", text: "A videoteca prevê a inclusão futura de vídeos produzidos pelo grupo acadêmico. Até que estejam gravados e publicados, nenhuma participação, visita ou resultado de campo será apresentado como realizado." },
    ],
    reflection: "Após assistir a um vídeo, que proposta educativa você considera útil para discutir com uma comunidade ligada à produção carnavalesca?", references: [references.ods8, references.ods12],
  },
  {
    slug: "aprenda-na-pratica", navTitle: "Aprenda na prática", eyebrow: "09 / Atividades", title: "Decidir, testar, aprender.",
    intro: "Experimente decisões sobre trabalho decente, gestão de materiais e sustentabilidade em situações hipotéticas da produção carnavalesca. Associe imagens e ações, resolva desafios de gestão, pratique com explicações e, se desejar, participe de um quiz com contagem regressiva. Não há ranking nem envio de respostas: tudo funciona no próprio navegador.",
    learning: ["Relacionar o ODS 8 e o ODS 12 a decisões concretas de gestão.", "Aplicar conhecimentos em situações hipotéticas e justificar escolhas.", "Avaliar o próprio aprendizado, com ou sem limite de tempo."],
    sections: [
      { title: "Associe imagens e decisões", text: "Arraste as ações para as imagens dos materiais ou selecione as respostas por toque e teclado. As associações estimulam a análise antes da compra, do reaproveitamento e da contratação." },
      { title: "Você é responsável pela produção", text: "Em três situações hipotéticas, escolha medidas que conciliem planejamento, valorização dos profissionais e prevenção de desperdícios." },
      { title: "Quiz dos ODS", text: "Resolva questões sem pressa e consulte explicações sobre consumo responsável, trabalho decente, economia circular e Administração." },
      { title: "Carnaval sustentável: contra o tempo", text: "Um desafio opcional de seis perguntas pode ser realizado em 60 segundos. Antes de começar, você recebe um aviso e também pode escolher o modo sem cronômetro." },
    ],
    reflection: "Depois das atividades, como conciliar planejamento, valorização do trabalho e redução de desperdícios na produção de fantasias carnavalescas?", references: [references.ods8, references.ods12, references.pnrs],
  },
  {
    slug: "glossario", navTitle: "Glossário", eyebrow: "10 / Consulta", title: "Palavras para compreender processos.",
    intro: "Consulte conceitos usados no portal e veja como se relacionam com a produção carnavalesca. As definições são introdutórias; referências oficiais são indicadas quando pertinentes.",
    learning: ["Reconhecer conceitos-chave de sustentabilidade e Administração.", "Usar termos próximos sem confundir seus significados."],
    sections: [{ title: "Busca de conceitos", text: "Digite uma palavra ou expressão. Os exemplos relacionados ao Carnaval são possibilidades didáticas, não relatos de uma organização específica." }],
    reflection: "Qual conceito você precisaria explicar primeiro para alguém participar de uma decisão sobre materiais?", references: [references.ods8, references.ods12, references.pnrs], interaction: "glossary",
  },
  {
    slug: "biblioteca-e-referencias", navTitle: "Biblioteca e referências", eyebrow: "11 / Fontes", title: "Conhecimento com origem identificável.",
    intro: "As fontes abaixo sustentam as definições institucionais e legais usadas no portal. A biblioteca distingue documentos oficiais, materiais acadêmicos e conteúdos audiovisuais, para que cada afirmação possa ser conferida.",
    learning: ["Localizar as fontes oficiais dos ODS 8 e 12.", "Identificar a base legal brasileira usada na hierarquia de gestão de resíduos."],
    sections: [
      { title: "Documentos oficiais", text: "Nações Unidas Brasil. Objetivo de Desenvolvimento Sustentável 8: Trabalho decente e crescimento econômico. Disponível na página oficial do ODS 8.", points: ["Nações Unidas Brasil. Objetivo de Desenvolvimento Sustentável 12: Consumo e produção responsáveis.", "Brasil. Lei nº 12.305, de 2 de agosto de 2010. Institui a Política Nacional de Resíduos Sólidos."] },
      { title: "Publicações acadêmicas", text: "Nenhuma publicação acadêmica específica foi adicionada sem verificação bibliográfica. Novas referências devem incluir autoria, título, periódico ou instituição, ano e endereço persistente, quando houver." },
      { title: "Materiais complementares e vídeos", text: "A videoteca permanece sem itens até que os links e metadados possam ser verificados. Materiais do grupo serão identificados como produção acadêmica e publicados somente após validação dos créditos e autorizações." },
    ],
    reflection: "Ao encontrar um dado quantitativo, você consegue localizar fonte, ano e população ou universo de referência?", references: [references.ods8, references.ods12, references.pnrs],
  },
  {
    slug: "sobre-o-projeto", navTitle: "Sobre o projeto", eyebrow: "12 / Contexto acadêmico", title: "Um material educativo para aprender com os processos.",
    intro: "Além da Avenida é um Material Educacional Digital sobre cultura, trabalho, Administração, consumo responsável e economia circular na produção carnavalesca. Conheça sua proposta acadêmica, os recursos educativos e os responsáveis pelo portal.",
    learning: ["Conhecer a proposta e a equipe responsável pelo portal.", "Compreender a finalidade educativa e os limites de representação institucional."],
    sections: [],
    reflection: "Como materiais educativos podem compartilhar conhecimento sem falar em nome das organizações que estudam?", references: [],
  },
];

export const glossaryEntries = [
  { term: "ODS", definition: "Objetivos de Desenvolvimento Sustentável: conjunto de objetivos e metas da Agenda 2030 das Nações Unidas.", example: "O ODS 8 orienta a conversa sobre trabalho e atividade produtiva no Carnaval." },
  { term: "Economia circular", definition: "Abordagem que busca evitar desperdícios e manter produtos e materiais em uso por mais tempo.", example: "Catalogar e reparar adereços pode ser uma possibilidade de prolongar seu uso." },
  { term: "Consumo consciente", definition: "Escolha informada que considera necessidade, impactos e consequências do consumo.", example: "Consultar o estoque antes de comprar tecido novo." },
  { term: "Reutilização", definition: "Aproveitamento de um resíduo ou item sem transformação física, nos termos da PNRS.", example: "Usar novamente uma peça conservada em outra composição." },
  { term: "Reciclagem", definition: "Transformação de resíduos em insumos ou novos produtos, observadas as condições e normas aplicáveis.", example: "Um tecido só deve ser indicado para reciclagem após verificar composição e serviço disponível." },
  { term: "Logística reversa", definition: "Ações para viabilizar a coleta e restituição de resíduos ao setor empresarial para reaproveitamento ou destinação adequada.", example: "Um fluxo formal de retorno de embalagens pode ser logística reversa." },
  { term: "Trabalho decente", definition: "Trabalho produtivo realizado com direitos, proteção, remuneração justa, segurança e possibilidade de diálogo.", example: "Uma encomenda deve ter escopo, prazo, pagamento e condições discutidos." },
  { term: "Empreendedorismo", definition: "Criação ou desenvolvimento de iniciativas que organizam recursos para oferecer produtos ou serviços.", example: "Um pequeno ateliê pode prestar serviços de costura para produções culturais." },
  { term: "Cadeia produtiva", definition: "Atividades e participantes conectados na criação, produção, circulação e uso de bens ou serviços.", example: "Do planejamento do figurino à aquisição, confecção e destino pós-desfile." },
  { term: "Gestão de materiais", definition: "Planejamento e controle da aquisição, armazenamento, movimentação e uso de materiais.", example: "Registrar metragem, localização, condição e reserva de tecidos." },
  { term: "5W2H", definition: "Ferramenta para estruturar uma ação respondendo o quê, por quê, onde, quando, quem, como e quanto custa.", example: "Planejar um teste de identificação das sobras de materiais." },
  { term: "PDCA", definition: "Ciclo de melhoria contínua: Planejar, Executar, Verificar e Agir para corrigir ou padronizar uma ação.", example: "Testar etiquetas no estoque, observar os resultados e ajustar o método." },
];

export const navigation = [{ href: "/", label: "Início" }, ...pages.map(({ slug, navTitle }) => ({ href: `/${slug}`, label: navTitle }))];