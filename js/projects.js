/**
 * Dados editáveis do site.
 *
 * Novo projeto:
 * 1. Crie a pasta projetos/<slug>/ com a capa e os arquivos.
 * 2. Copie um objeto da lista `projects`, cole no final e ajuste.
 * 3. Use caminhos relativos à raiz do site (a partir do index.html),
 *    sem "http" e sem barra no início.
 *    Exemplo: "projetos/meu-projeto/relatorio.pdf"
 *
 * links[].kind
 *   "demo"  → botão "Ver demo" (abre o HTML no navegador)
 *   "pdf"   → botão "Ver PDF" (abre no navegador)
 *   "sheet" → botão "Baixar planilha"
 *   label   → opcional; se existir, substitui o texto do botão
 *
 * demonstrative: true exibe a etiqueta "Projeto demonstrativo".
 * A ordem do array é a ordem dos cartões.
 *
 * Contato: cole a URL completa em workana e linkedin.
 * Deixe "" para o link não aparecer na página.
 * O GitHub também está no HTML (funciona sem JavaScript);
 * se mudar o endereço, atualize os dois.
 */
window.siteData = {
  contact: {
    github: "https://github.com/caaz95",
    workana: "",
    linkedin: "",
  },

  projects: [
    {
      slug: "contagem-pf-clinica",
      title: "Contagem de PF — Sistema de Agendamentos de Clínica",
      description:
        "Contagem de Pontos de Função (IFPUG CPM 4.3.1, alinhada ao SISP) do Sistema de Gestão de Agendamentos da Clínica Vida Plena, organização fictícia criada para este portfólio. O trabalho entrega a memória de cálculo em planilha — com ALI, AIE, EE, SE e CE, complexidades calculadas pelas tabelas oficiais e estimativa ilustrativa de esforço e custo — e um relatório de três páginas com o resultado de 168 PF não ajustados. Trata-se de um projeto demonstrativo, com dados e marca fictícios.",
      cover: "projetos/contagem-pf-clinica/capa.png",
      coverAlt:
        "Capa da contagem de pontos de função do sistema de agendamentos da Clínica Vida Plena, com o resultado de 168 PF.",
      demonstrative: true,
      links: [
        {
          kind: "pdf",
          href: "projetos/contagem-pf-clinica/Relatorio_Contagem_PF_Clinica_Vida_Plena.pdf",
        },
        {
          kind: "sheet",
          href: "projetos/contagem-pf-clinica/Contagem_PF_Clinica_Vida_Plena.xlsx",
        },
      ],
    },
    {
      slug: "plano-testes-levaai",
      title: "Plano e casos de teste — App de delivery LevaAí",
      description:
        "Plano de testes da jornada do consumidor no aplicativo fictício LevaAí Entregas, com escopo, estratégia, critérios de entrada, saída, suspensão e retomada. Inclui 15 casos de teste executáveis (identificador, cenário, pré-condição, passos, resultado esperado e prioridade) e a matriz de rastreabilidade dos 10 requisitos cobertos. Projeto demonstrativo — a marca, os estabelecimentos e os dados de teste são fictícios.",
      cover: "projetos/plano-testes-levaai/capa.png",
      coverAlt:
        "Capa do plano de testes do aplicativo LevaAí Entregas, com 15 casos de teste e 10 requisitos.",
      demonstrative: true,
      links: [
        {
          kind: "pdf",
          href: "projetos/plano-testes-levaai/Plano_e_Casos_de_Teste_LevaAi.pdf",
        },
      ],
    },
    {
      slug: "dashboard-aurora",
      title: "Dashboard de indicadores — Distribuidora Aurora",
      description:
        "Painel gerencial interativo da Distribuidora Aurora, empresa fictícia, com indicadores de janeiro a outubro de 2026: faturamento versus meta, margem bruta, ticket médio, pedidos, inadimplência e NPS. Gráficos e tabela de principais clientes, em um único arquivo HTML, pronto para abrir no navegador. Projeto demonstrativo, com dados e razões sociais inventados.",
      cover: "projetos/dashboard-aurora/capa.png",
      coverAlt:
        "Capa do dashboard de indicadores da Distribuidora Aurora, com faturamento, margem, gráficos e clientes.",
      demonstrative: true,
      links: [
        {
          kind: "demo",
          href: "projetos/dashboard-aurora/dashboard-indicadores-aurora.html",
        },
      ],
    },
    {
      slug: "landing-clinica-vida-plena",
      title: "Landing page responsiva — Clínica Vida Plena",
      description:
        "Site institucional de uma página para a Clínica Vida Plena, marca fictícia, com apresentação, serviços, equipe, depoimentos e pedido de agenda. Layout contemporâneo e responsivo, em um único arquivo HTML, sem dependência de servidor. Projeto demonstrativo — profissionais, depoimentos e endereço são exemplos, e o formulário não envia dados.",
      cover: "projetos/landing-clinica-vida-plena/capa.png",
      coverAlt:
        "Capa da landing page da Clínica Vida Plena, com o título Cuidado próximo, medicina de verdade.",
      demonstrative: true,
      links: [
        {
          kind: "demo",
          href: "projetos/landing-clinica-vida-plena/landing-clinica-vida-plena.html",
        },
      ],
    },
  ],
};
