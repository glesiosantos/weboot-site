import {
  Bot, Code2, Eye, GraduationCap, Headphones, MessageSquareMore,
  MonitorSmartphone, Search
} from 'lucide-vue-next'
import type { FaqItem, NavigationItem, Service, Training } from '~/types/landing-page'

export const useLandingPage = () => {
  const navigation: NavigationItem[] = [
    { label: 'Início', href: '/#inicio' },
    { label: 'Soluções', href: '/#solucoes' },
    { label: 'Cases', href: '/#cases' },
    { label: 'Como trabalhamos', href: '/#como-trabalhamos' },
    { label: 'Contato', href: '/#contato' }
  ]

  const services: Service[] = [
    {
      id: 'sites', title: 'Sites e lojas virtuais',
      description: 'Criamos experiências digitais profissionais para apresentar sua empresa, gerar oportunidades e vender pela internet.',
      benefits: ['Sites institucionais', 'Landing pages', 'E-commerce', 'Integração com WhatsApp', 'SEO técnico', 'Manutenção WordPress'],
      cta: 'Quero desenvolver um site',
      message: 'Olá! Gostaria de conversar sobre o desenvolvimento de um site para minha empresa.',
      icon: MonitorSmartphone
    },
    {
      id: 'custom', title: 'Projetos sob medida',
      description: 'Desenvolvemos plataformas e sistemas alinhados aos processos e necessidades reais da sua empresa.',
      benefits: ['Sistemas administrativos', 'Portais e plataformas', 'Dashboards', 'APIs REST', 'Gestão de processos', 'Integrações externas'],
      cta: 'Conversar sobre meu projeto',
      message: 'Olá! Preciso desenvolver um sistema ou projeto personalizado.',
      icon: Code2
    },
    {
      id: 'automation', title: 'Automação e integrações',
      description: 'Automatizamos atendimentos e tarefas repetitivas para reduzir processos manuais e melhorar a operação.',
      benefits: ['Automação com n8n', 'Atendimento pelo WhatsApp', 'Integração com CRM', 'Agendamentos', 'Pagamentos', 'Webhooks e notificações', 'Fluxos assistidos por IA'],
      cta: 'Quero automatizar um processo',
      message: 'Olá! Gostaria de automatizar um atendimento ou processo da minha empresa.',
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
    { id: 'price', question: 'Quanto custa desenvolver um site?', answer: 'O valor depende do número de páginas, funcionalidades, integrações e do nível de personalização. Após uma conversa inicial, apresentamos uma proposta adequada ao projeto.' },
    { id: 'deadline', question: 'Quanto tempo leva para desenvolver?', answer: 'O prazo varia conforme o escopo. Sites mais simples podem ser entregues em poucas semanas, enquanto sistemas e integrações exigem um planejamento maior.' },
    { id: 'custom', question: 'A Weboot desenvolve projetos personalizados?', answer: 'Sim. Desenvolvemos sistemas, plataformas, dashboards e APIs de acordo com os processos e objetivos de cada empresa.' },
    { id: 'integrations', question: 'É possível integrar WhatsApp e outros sistemas?', answer: 'Sim. Criamos integrações com WhatsApp, pagamentos, CRMs, APIs e outras ferramentas utilizadas pela empresa.' },
    { id: 'start', question: 'Como solicitar um orçamento?', answer: 'Fale diretamente pelo WhatsApp, conte sua necessidade e faremos as perguntas iniciais para preparar o próximo passo.' }
  ]

  const trustItems = [
    { label: 'Atendimento direto', icon: MessageSquareMore },
    { label: 'Projeto sob medida', icon: Code2 },
    { label: 'Processo transparente', icon: Eye },
    { label: 'Suporte após a entrega', icon: Headphones }
  ]

  return { navigation, services, trainings, faqs, trustItems, Search, GraduationCap }
}
