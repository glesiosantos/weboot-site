export type PortfolioCategory =
  | 'all'
  | 'sites'
  | 'system'
  | 'automation'
  | 'own-product'
  | 'demonstrative'

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
  status?: 'completed' | 'in-development' | 'inactive' | 'private' | 'demonstrative'
  featured?: boolean
  context: string
  problem: string
  solution: string
  features: string[]
  results: string[]
  gallery?: string[]
  testimonial?: { quote: string, name: string, role: string, company: string }
}

export const portfolioCategories: Array<{ value: PortfolioCategory, label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'sites', label: 'Sites' },
  { value: 'system', label: 'Sistemas' },
  { value: 'automation', label: 'Automações' },
  { value: 'own-product', label: 'Produtos próprios' },
  { value: 'demonstrative', label: 'Projetos demonstrativos' }
]

export const projects: PortfolioProject[] = [
  {
    id: 'augile',
    slug: 'augile',
    title: 'Augile',
    category: 'automation',
    categoryLabel: 'Automação para oficinas',
    summary: 'Plataforma de gestão e automação criada para conectar o atendimento, a operação e o financeiro de oficinas em um único fluxo.',
    image: '/images/portfolio/augile_site.png',
    imageAlt: 'Interface ilustrativa da plataforma Augile para oficinas',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'WhatsApp', 'Asaas'],
    projectUrl: "https://augile.com.br",
    status: 'in-development',
    featured: true,
    context: 'Uma solução digital em evolução para apoiar oficinas na organização da rotina e no relacionamento com seus clientes.',
    problem: 'Centralizar informações de clientes, veículos, ordens de serviço e pagamentos, reduzindo tarefas manuais e falhas de comunicação.',
    solution: 'A Weboot desenvolve uma plataforma integrada para automatizar etapas do atendimento e oferecer mais visibilidade sobre a operação da oficina.',
    features: ['Gestão de clientes e veículos', 'Ordens de serviço', 'Automação de atendimento', 'Integração com WhatsApp', 'Controle de pagamentos', 'Arquitetura multiempresa'],
    results: ['Operação centralizada', 'Atendimento mais organizado', 'Redução de tarefas manuais', 'Base preparada para evolução do negócio']
  },
  {
    id: 'crea-pi',
    slug: 'crea-pi',
    title: 'CREA-PI',
    category: 'sites',
    categoryLabel: 'Portal WordPress',
    summary: 'Portal institucional do Conselho Regional de Engenharia e Agronomia do Piauí, com serviços, notícias e informações para profissionais e empresas.',
    image: '/images/portfolio/creapi.png',
    imageAlt: 'Representação do portal institucional do CREA-PI',
    technologies: ['WordPress', 'PHP', 'SEO', 'Design responsivo'],
    projectUrl: 'https://crea-pi.org.br/',
    status: 'completed',
    featured: true,
    context: 'Portal institucional voltado ao acesso público a serviços, notícias, orientações e informações do conselho.',
    problem: 'Organizar um grande volume de conteúdo e facilitar o acesso de profissionais, empresas e sociedade aos principais serviços do CREA-PI.',
    solution: 'Um portal WordPress responsivo, com estrutura editorial para publicação de notícias e organização clara dos serviços institucionais.',
    features: ['Gestão de conteúdo', 'Notícias', 'Portal de serviços', 'Busca', 'Navegação responsiva', 'SEO'],
    results: ['Conteúdo institucional centralizado', 'Publicação editorial simplificada', 'Serviços organizados por público', 'Acesso responsivo']
  },
  // {
  //   id: 'qualmed',
  //   slug: 'qualmed',
  //   title: 'Qualmed',
  //   category: 'own-product',
  //   categoryLabel: 'Produto próprio',
  //   summary: 'Plataforma criada para conectar pacientes, profissionais de saúde e clínicas em uma jornada digital de busca, pagamento e agendamento.',
  //   image: '/images/portfolio/clinic.svg',
  //   imageAlt: 'Interface ilustrativa da plataforma Qualmed',
  //   technologies: ['Rails', 'PostgreSQL', 'Docker', 'n8n', 'WhatsApp', 'Asaas'],
  //   status: 'inactive',
  //   context: 'Uma plataforma digital para aproximar pacientes, profissionais de saúde e clínicas em uma jornada de atendimento organizada.',
  //   problem: 'Organizar a descoberta de profissionais, consulta de horários, pagamentos e agendamentos em um fluxo acessível pelo site e pelo WhatsApp.',
  //   solution: 'A Weboot desenvolveu uma plataforma web com busca de profissionais, agenda, pagamentos, área administrativa e automação de atendimento integrada ao WhatsApp.',
  //   features: ['Busca de profissionais', 'Consulta de horários', 'Agendamento', 'Painel administrativo', 'Atendimento via WhatsApp', 'Integração de pagamentos'],
  //   results: ['Centralização dos agendamentos', 'Consulta digital de profissionais e horários', 'Atendimento integrado ao WhatsApp', 'Organização dos pagamentos', 'Estrutura preparada para clínicas e profissionais']
  // },
  // {
  //   id: 'tesporte',
  //   slug: 'tesporte',
  //   title: 'Tesporte',
  //   category: 'own-product',
  //   categoryLabel: 'Produto próprio',
  //   summary: 'Plataforma esportiva voltada à conexão entre atletas, comunidades e acompanhamento de atividades.',
  //   image: '/images/portfolio/management.svg',
  //   imageAlt: 'Interface ilustrativa da plataforma Tesporte',
  //   technologies: ['Nuxt', 'Vue', 'Tailwind CSS', 'Go', 'PostgreSQL', 'PWA'],
  //   status: 'inactive',
  //   context: 'Produto digital criado para reunir experiências esportivas e fortalecer a conexão entre atletas e comunidades.',
  //   problem: 'Organizar atividades, perfis e interações esportivas em uma experiência que funcione bem também no celular.',
  //   solution: 'Uma plataforma responsiva e instalável, com arquitetura preparada para evoluir junto às necessidades do produto.',
  //   features: ['Perfis de atletas', 'Comunidades', 'Atividades esportivas', 'Experiência PWA', 'Gestão de conteúdo'],
  //   results: ['Experiência responsiva', 'Processos esportivos centralizados', 'Estrutura preparada para evolução do produto']
  // },
  {
    id: 'weboot',
    slug: 'weboot',
    title: 'Weboot',
    category: 'sites',
    categoryLabel: 'Site institucional',
    summary: 'Site institucional desenvolvido para apresentar serviços, projetos e direcionar oportunidades comerciais para o WhatsApp.',
    image: '/images/portfolio/weboot.png',
    imageAlt: 'Mockup do site institucional da Weboot',
    technologies: ['Nuxt', 'Vue', 'Tailwind CSS', 'TypeScript'],
    status: 'completed',
    context: 'A presença institucional e comercial da própria Weboot.',
    problem: 'Explicar uma oferta ampla de serviços com clareza, sem perder leveza visual ou foco comercial.',
    solution: 'Uma experiência editorial responsiva, com conteúdo objetivo, portfólio filtrável e contato contextual pelo WhatsApp.',
    features: ['Design responsivo', 'SEO técnico', 'Portfólio filtrável', 'Carrossel acessível', 'CTAs contextuais'],
    results: ['Oferta de serviços organizada', 'Contato centralizado pelo WhatsApp', 'Navegação responsiva']
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
    features: ['Triagem inicial', 'Consulta de dados', 'Integração com WhatsApp', 'Encaminhamento por setor', 'Registro do fluxo'],
    results: ['Atendimento automatizado', 'Redução de etapas manuais', 'Encaminhamento organizado entre setores']
  },
  // {
  //   id: 'integration-api',
  //   slug: 'api-de-integracao',
  //   title: 'API de integração',
  //   category: 'system',
  //   categoryLabel: 'Sistema privado',
  //   summary: 'API desenvolvida para centralizar dados e integrar sistemas, serviços externos e aplicações clientes.',
  //   image: '/images/portfolio/api.svg',
  //   imageAlt: 'Documentação ilustrativa de uma API de integração',
  //   technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'Swagger'],
  //   status: 'private',
  //   context: 'Uma camada de integração para centralizar regras e comunicação entre aplicações.',
  //   problem: 'Evitar integrações frágeis e dados dispersos entre diferentes serviços.',
  //   solution: 'API documentada com autenticação, persistência e contratos claros para aplicações clientes.',
  //   features: ['Autenticação', 'Documentação Swagger', 'Integrações externas', 'Persistência de dados', 'Testes automatizados'],
  //   results: ['Integração entre sistemas', 'Contratos de API documentados', 'Dados centralizados']
  // },
  // {
  //   id: 'launch-landing',
  //   slug: 'landing-page-de-lancamento',
  //   title: 'Landing page de lançamento',
  //   category: 'demonstrative',
  //   categoryLabel: 'Projeto demonstrativo',
  //   summary: 'Conceito de página de alta conversão para apresentar uma oferta, destacar diferenciais e captar contatos qualificados.',
  //   image: '/images/portfolio/landing-page.svg',
  //   imageAlt: 'Conceito demonstrativo de landing page para lançamento',
  //   technologies: ['Nuxt', 'Vue', 'Tailwind CSS', 'SEO'],
  //   status: 'demonstrative',
  //   context: 'Projeto conceitual criado para demonstrar como uma campanha de lançamento pode ganhar uma presença digital clara e persuasiva.',
  //   problem: 'Concentrar argumentos, provas e chamadas para ação em uma experiência rápida, responsiva e fácil de medir.',
  //   solution: 'Uma landing page orientada à conversão, com hierarquia visual forte, seções modulares e contato direto pelo WhatsApp.',
  //   features: ['Hero de campanha', 'Prova social', 'Benefícios', 'FAQ', 'CTA para WhatsApp', 'SEO técnico'],
  //   results: ['Hierarquia de conteúdo demonstrada', 'Experiência responsiva', 'Fluxo de conversão estruturado']
  // },
  // {
  //   id: 'store-concept',
  //   slug: 'loja-virtual-conceito',
  //   title: 'Loja virtual',
  //   category: 'demonstrative',
  //   categoryLabel: 'Projeto demonstrativo',
  //   summary: 'Conceito de e-commerce responsivo com catálogo organizado, busca de produtos e uma jornada de compra objetiva.',
  //   image: '/images/portfolio/ecommerce.svg',
  //   imageAlt: 'Conceito demonstrativo de uma loja virtual',
  //   technologies: ['Vue', 'TypeScript', 'API REST', 'Pagamentos'],
  //   status: 'demonstrative',
  //   context: 'Projeto conceitual para demonstrar uma experiência de compra moderna em desktop e dispositivos móveis.',
  //   problem: 'Apresentar produtos com clareza e reduzir atritos entre a descoberta, o carrinho e a finalização da compra.',
  //   solution: 'Uma interface modular com catálogo filtrável, páginas de produto completas e checkout preparado para integrações.',
  //   features: ['Catálogo filtrável', 'Busca', 'Carrinho', 'Checkout', 'Área do cliente', 'Integração de pagamentos'],
  //   results: ['Jornada de compra demonstrada', 'Catálogo responsivo', 'Fluxo preparado para pagamentos']
  // },
  // {
  //   id: 'content-portal',
  //   slug: 'portal-wordpress-conceito',
  //   title: 'Portal de conteúdo',
  //   category: 'demonstrative',
  //   categoryLabel: 'Projeto demonstrativo',
  //   summary: 'Conceito de portal institucional com gestão simples de páginas, notícias e materiais para download.',
  //   image: '/images/portfolio/wordpress.svg',
  //   imageAlt: 'Conceito demonstrativo de portal desenvolvido em WordPress',
  //   technologies: ['WordPress', 'PHP', 'Gutenberg', 'SEO'],
  //   status: 'demonstrative',
  //   context: 'Projeto conceitual voltado a equipes que precisam publicar e atualizar conteúdo com autonomia.',
  //   problem: 'Organizar um volume crescente de informações sem depender de desenvolvimento para cada nova publicação.',
  //   solution: 'Um portal WordPress com blocos editoriais reutilizáveis, estrutura de conteúdo consistente e navegação responsiva.',
  //   features: ['Editor por blocos', 'Notícias', 'Biblioteca de arquivos', 'Busca', 'SEO', 'Treinamento editorial'],
  //   results: ['Estrutura editorial demonstrada', 'Conteúdo organizado', 'Experiência responsiva']
  // }
]

export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug)
