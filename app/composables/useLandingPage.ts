import {
  Bot, Braces, Code2, Database, GraduationCap, LayoutTemplate,
  MessageSquareMore, MonitorSmartphone, Search, ShieldCheck, ShoppingBag,
  Wrench
} from 'lucide-vue-next'
import type { FaqItem, NavigationItem, Service, Training } from '~/types/landing-page'

export const useLandingPage = () => {
  const navigation: NavigationItem[] = [
    { label: 'Início', href: '/#inicio' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Treinamentos', href: '/#treinamentos' },
    { label: 'Sobre', href: '/#como-trabalhamos' },
    { label: 'Contato', href: '/#contato' }
  ]

  const services: Service[] = [
    {
      id: 'sites', title: 'Sites institucionais',
      description: 'Sites profissionais para apresentar sua empresa, seus serviços e facilitar o contato com novos clientes.',
      benefits: ['Design responsivo', 'Carregamento rápido', 'SEO técnico', 'Integração com WhatsApp', 'Estrutura para conversão'],
      cta: 'Quero criar meu site',
      message: 'Olá! Gostaria de conversar sobre a criação de um site institucional para minha empresa.',
      icon: MonitorSmartphone
    },
    {
      id: 'landing-pages', title: 'Landing Pages',
      description: 'Páginas para campanhas, lançamentos, anúncios, captação de contatos e venda de produtos ou serviços.',
      benefits: ['Foco em uma oferta', 'CTAs estratégicos', 'Integração com campanhas', 'Medição de conversões', 'Experiência mobile'],
      cta: 'Criar uma landing page',
      message: 'Olá! Preciso de uma landing page para divulgar um produto, serviço ou campanha.',
      icon: LayoutTemplate
    },
    {
      id: 'ecommerce', title: 'E-commerce',
      description: 'Lojas virtuais preparadas para apresentar produtos, receber pedidos e integrar pagamentos.',
      benefits: ['Catálogo de produtos', 'Carrinho de compras', 'Pagamentos', 'Integração com WhatsApp', 'Gestão de pedidos'],
      cta: 'Criar minha loja virtual',
      message: 'Olá! Gostaria de criar uma loja virtual para vender meus produtos.',
      icon: ShoppingBag
    },
    {
      id: 'wordpress', title: 'Manutenção WordPress',
      description: 'Suporte técnico para manter seu site atualizado, seguro, rápido e funcionando corretamente.',
      benefits: ['Correções e atualizações', 'Backups', 'Desempenho', 'Ajustes de layout', 'Manutenção preventiva'],
      cta: 'Preciso de manutenção',
      message: 'Olá! Preciso de manutenção ou suporte para um site WordPress.',
      icon: Wrench
    },
    {
      id: 'custom', title: 'Projetos personalizados',
      description: 'Soluções sob medida para digitalizar processos específicos da sua empresa.',
      benefits: ['Sistemas administrativos', 'Portais e plataformas', 'Dashboards', 'Controle de processos', 'Integrações'],
      cta: 'Conversar sobre meu projeto',
      message: 'Olá! Tenho uma necessidade específica e gostaria de conversar sobre o desenvolvimento de um sistema personalizado.',
      icon: Code2
    },
    {
      id: 'api', title: 'APIs REST',
      description: 'APIs seguras e documentadas para conectar sistemas, aplicativos, pagamentos, sites e serviços externos.',
      benefits: ['Autenticação', 'Documentação', 'Integração com terceiros', 'Segurança', 'Testes automatizados'],
      cta: 'Solicitar desenvolvimento de API',
      message: 'Olá! Preciso desenvolver uma API REST ou integrar dois sistemas.',
      icon: Braces
    },
    {
      id: 'automation', title: 'Automação com n8n',
      description: 'Automatizamos tarefas repetitivas e fluxos de atendimento para reduzir operações manuais.',
      benefits: ['Atendimento pelo WhatsApp', 'Qualificação de contatos', 'Agendamentos', 'Integração com CRM', 'Notificações'],
      cta: 'Automatizar meu atendimento',
      message: 'Olá! Gostaria de automatizar o atendimento ou algum processo da minha empresa utilizando n8n.',
      icon: Bot
    }
  ]

  const trainings: Training[] = [
    { id: 'sql', title: 'SQL e banco de dados', summary: 'Fundamentos e prática com consultas, relacionamentos e PostgreSQL.', topics: ['SQL', 'Relacionamentos', 'PostgreSQL'], modality: 'Online ou in company', audience: 'Estudantes, profissionais e equipes' },
    { id: 'apis', title: 'Desenvolvimento de APIs REST', summary: 'Arquitetura, rotas, autenticação, banco de dados, documentação e testes.', topics: ['Arquitetura', 'Autenticação', 'Testes'], modality: 'Online ou in company', audience: 'Desenvolvedores e equipes técnicas' },
    { id: 'docker', title: 'Docker para desenvolvimento', summary: 'Containers, imagens, volumes, redes e Docker Compose na prática.', topics: ['Containers', 'Volumes', 'Compose'], modality: 'Online ou in company', audience: 'Desenvolvedores e times de produto' },
    { id: 'n8n', title: 'Automação com n8n', summary: 'Criação de fluxos, APIs, WhatsApp, webhooks e automação de processos.', topics: ['Fluxos', 'Webhooks', 'WhatsApp'], modality: 'Online ou in company', audience: 'Profissionais e empresas' }
  ]

  const faqs: FaqItem[] = [
    { id: 'price', question: 'Quanto custa um site?', answer: 'O valor depende do número de páginas, funcionalidades, integrações e do nível de personalização. Após uma conversa inicial, apresentamos uma proposta adequada ao projeto.' },
    { id: 'deadline', question: 'Quanto tempo leva para desenvolver?', answer: 'O prazo varia conforme o escopo. Sites mais simples podem ser entregues em poucas semanas, enquanto sistemas e integrações exigem um planejamento maior.' },
    { id: 'wordpress', question: 'Vocês trabalham com WordPress?', answer: 'Sim. Trabalhamos com criação, ajustes, correções, atualização, segurança e manutenção de sites WordPress.' },
    { id: 'maintenance', question: 'Posso contratar apenas manutenção?', answer: 'Sim. A manutenção pode ser contratada para correções pontuais ou acompanhamento recorrente.' },
    { id: 'ecommerce', question: 'Vocês desenvolvem loja virtual?', answer: 'Sim. Desenvolvemos e-commerce com catálogo, carrinho, pagamentos, pedidos e integrações necessárias para a operação.' },
    { id: 'integrations', question: 'Vocês integram sistemas?', answer: 'Sim. Desenvolvemos APIs e integrações entre sites, sistemas internos, pagamentos, WhatsApp, CRMs e serviços externos.' },
    { id: 'start', question: 'Como inicio um projeto?', answer: 'Entre em contato pelo WhatsApp, explique sua necessidade e agendaremos uma conversa inicial.' }
  ]

  const trustItems = [
    { label: 'Projetos personalizados', icon: Code2 },
    { label: 'Atendimento próximo', icon: MessageSquareMore },
    { label: 'Tecnologias modernas', icon: Database },
    { label: 'Suporte especializado', icon: ShieldCheck }
  ]

  return { navigation, services, trainings, faqs, trustItems, Search, GraduationCap }
}
