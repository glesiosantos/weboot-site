export type PortfolioCategory =
  | 'all'
  | 'institutional'
  | 'landing-page'
  | 'ecommerce'
  | 'wordpress'
  | 'system'
  | 'api'
  | 'automation'

export interface PortfolioProject {
  id: string
  slug: string
  title: string
  category: Exclude<PortfolioCategory, 'all'>
  categoryLabel: string
  summary: string
  image: string
  imageAlt: string
  technologies: string[]
  projectUrl?: string
  caseStudyUrl?: string
  status?: 'completed' | 'in-development' | 'private' | 'demonstrative'
  featured?: boolean
  context: string
  problem: string
  solution: string
  features: string[]
  gallery?: string[]
}

export const portfolioCategories: Array<{ value: PortfolioCategory, label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'institutional', label: 'Sites institucionais' },
  { value: 'landing-page', label: 'Landing Pages' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'wordpress', label: 'WordPress' },
  { value: 'system', label: 'Sistemas' },
  { value: 'api', label: 'APIs' },
  { value: 'automation', label: 'Automações' }
]

export const projects: PortfolioProject[] = [
  {
    id: 'qualmed',
    slug: 'qualmed',
    title: 'Qualmed',
    category: 'system',
    categoryLabel: 'Sistema',
    summary: 'Plataforma para busca de profissionais de saúde, consulta de horários, agendamento e automação de atendimento pelo WhatsApp.',
    image: '/images/portfolio/clinic.svg',
    imageAlt: 'Interface ilustrativa da plataforma Qualmed',
    technologies: ['Rails', 'PostgreSQL', 'Docker', 'n8n', 'WhatsApp', 'Asaas'],
    status: 'completed',
    featured: true,
    context: 'Uma plataforma digital para aproximar pacientes, profissionais de saúde e clínicas em uma jornada de atendimento organizada.',
    problem: 'Centralizar a descoberta de profissionais, horários e agendamentos, mantendo uma comunicação acessível pelo WhatsApp.',
    solution: 'A Weboot desenvolveu uma aplicação web com busca, agenda, área de gestão e automações de atendimento integradas.',
    features: ['Busca de profissionais', 'Consulta de horários', 'Agendamento', 'Painel administrativo', 'Atendimento via WhatsApp', 'Integração de pagamentos']
  },
  {
    id: 'tesporte',
    slug: 'tesporte',
    title: 'Tesporte',
    category: 'system',
    categoryLabel: 'Sistema',
    summary: 'Plataforma esportiva voltada à conexão entre atletas, comunidades e acompanhamento de atividades.',
    image: '/images/portfolio/management.svg',
    imageAlt: 'Interface ilustrativa da plataforma Tesporte',
    technologies: ['Nuxt', 'Vue', 'Tailwind CSS', 'Go', 'PostgreSQL', 'PWA'],
    status: 'in-development',
    featured: true,
    context: 'Produto digital criado para reunir experiências esportivas e fortalecer a conexão entre atletas e comunidades.',
    problem: 'Organizar atividades, perfis e interações esportivas em uma experiência que funcione bem também no celular.',
    solution: 'Uma plataforma responsiva e instalável, com arquitetura preparada para evoluir junto às necessidades do produto.',
    features: ['Perfis de atletas', 'Comunidades', 'Atividades esportivas', 'Experiência PWA', 'Gestão de conteúdo']
  },
  {
    id: 'weboot',
    slug: 'weboot',
    title: 'Weboot',
    category: 'institutional',
    categoryLabel: 'Site institucional',
    summary: 'Site institucional desenvolvido para apresentar serviços, projetos e direcionar oportunidades comerciais para o WhatsApp.',
    image: '/images/portfolio/custom.svg',
    imageAlt: 'Mockup do site institucional da Weboot',
    technologies: ['Nuxt', 'Vue', 'Tailwind CSS', 'TypeScript'],
    status: 'completed',
    context: 'A presença institucional e comercial da própria Weboot.',
    problem: 'Explicar uma oferta ampla de serviços com clareza, sem perder leveza visual ou foco comercial.',
    solution: 'Uma experiência editorial responsiva, com conteúdo objetivo, portfólio filtrável e contato contextual pelo WhatsApp.',
    features: ['Design responsivo', 'SEO técnico', 'Portfólio filtrável', 'Carrossel acessível', 'CTAs contextuais']
  },
  {
    id: 'automation',
    slug: 'automacao-de-atendimento',
    title: 'Automação de atendimento',
    category: 'automation',
    categoryLabel: 'Automação',
    summary: 'Fluxo de atendimento com identificação da necessidade do cliente, consulta de dados e encaminhamento para o setor responsável.',
    image: '/images/portfolio/custom.svg',
    imageAlt: 'Fluxo ilustrativo de automação de atendimento',
    technologies: ['n8n', 'WhatsApp', 'OpenAI', 'API REST', 'PostgreSQL'],
    status: 'private',
    context: 'Automação criada para organizar o primeiro contato e encaminhar cada solicitação com contexto.',
    problem: 'Reduzir tarefas manuais no atendimento inicial sem tornar a conversa impessoal.',
    solution: 'Um fluxo integrado que identifica a necessidade, consulta dados autorizados e encaminha o contato ao setor adequado.',
    features: ['Triagem inicial', 'Consulta de dados', 'Integração com WhatsApp', 'Encaminhamento por setor', 'Registro do fluxo']
  },
  {
    id: 'integration-api',
    slug: 'api-de-integracao',
    title: 'API de integração',
    category: 'api',
    categoryLabel: 'API',
    summary: 'API desenvolvida para centralizar dados e integrar sistemas, serviços externos e aplicações clientes.',
    image: '/images/portfolio/api.svg',
    imageAlt: 'Documentação ilustrativa de uma API de integração',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'Swagger'],
    status: 'private',
    context: 'Uma camada de integração para centralizar regras e comunicação entre aplicações.',
    problem: 'Evitar integrações frágeis e dados dispersos entre diferentes serviços.',
    solution: 'API documentada com autenticação, persistência e contratos claros para aplicações clientes.',
    features: ['Autenticação', 'Documentação Swagger', 'Integrações externas', 'Persistência de dados', 'Testes automatizados']
  },
  {
    id: 'launch-landing',
    slug: 'landing-page-de-lancamento',
    title: 'Landing page de lançamento',
    category: 'landing-page',
    categoryLabel: 'Landing Page',
    summary: 'Conceito de página de alta conversão para apresentar uma oferta, destacar diferenciais e captar contatos qualificados.',
    image: '/images/portfolio/landing-page.svg',
    imageAlt: 'Conceito demonstrativo de landing page para lançamento',
    technologies: ['Nuxt', 'Vue', 'Tailwind CSS', 'SEO'],
    status: 'demonstrative',
    context: 'Projeto conceitual criado para demonstrar como uma campanha de lançamento pode ganhar uma presença digital clara e persuasiva.',
    problem: 'Concentrar argumentos, provas e chamadas para ação em uma experiência rápida, responsiva e fácil de medir.',
    solution: 'Uma landing page orientada à conversão, com hierarquia visual forte, seções modulares e contato direto pelo WhatsApp.',
    features: ['Hero de campanha', 'Prova social', 'Benefícios', 'FAQ', 'CTA para WhatsApp', 'SEO técnico']
  },
  {
    id: 'store-concept',
    slug: 'loja-virtual-conceito',
    title: 'Loja virtual',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    summary: 'Conceito de e-commerce responsivo com catálogo organizado, busca de produtos e uma jornada de compra objetiva.',
    image: '/images/portfolio/ecommerce.svg',
    imageAlt: 'Conceito demonstrativo de uma loja virtual',
    technologies: ['Vue', 'TypeScript', 'API REST', 'Pagamentos'],
    status: 'demonstrative',
    context: 'Projeto conceitual para demonstrar uma experiência de compra moderna em desktop e dispositivos móveis.',
    problem: 'Apresentar produtos com clareza e reduzir atritos entre a descoberta, o carrinho e a finalização da compra.',
    solution: 'Uma interface modular com catálogo filtrável, páginas de produto completas e checkout preparado para integrações.',
    features: ['Catálogo filtrável', 'Busca', 'Carrinho', 'Checkout', 'Área do cliente', 'Integração de pagamentos']
  },
  {
    id: 'content-portal',
    slug: 'portal-wordpress-conceito',
    title: 'Portal de conteúdo',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    summary: 'Conceito de portal institucional com gestão simples de páginas, notícias e materiais para download.',
    image: '/images/portfolio/wordpress.svg',
    imageAlt: 'Conceito demonstrativo de portal desenvolvido em WordPress',
    technologies: ['WordPress', 'PHP', 'Gutenberg', 'SEO'],
    status: 'demonstrative',
    context: 'Projeto conceitual voltado a equipes que precisam publicar e atualizar conteúdo com autonomia.',
    problem: 'Organizar um volume crescente de informações sem depender de desenvolvimento para cada nova publicação.',
    solution: 'Um portal WordPress com blocos editoriais reutilizáveis, estrutura de conteúdo consistente e navegação responsiva.',
    features: ['Editor por blocos', 'Notícias', 'Biblioteca de arquivos', 'Busca', 'SEO', 'Treinamento editorial']
  }
]

export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug)
