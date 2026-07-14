import {
  Bot, Braces, ChartNoAxesCombined, Clock3,
  CloudCog, Code2, Compass, FileCode2, Gauge, Handshake, Headphones,
  Link2, MonitorSmartphone,
  Palette, Rocket, Search, ShieldCheck, Sparkles, Target
} from 'lucide-vue-next'
import type {
  Benefit, ContactLinks, FaqItem, NavigationItem, PortfolioProject,
  ProcessStep, Service, Stat, Testimonial
} from '~/types/landing-page'

const whatsappNumber = '55NUMERO' // Dado provisório: substituir pelo número oficial antes da publicação.
const whatsappMessage = 'Olá! Conheci a Weboot pelo site e gostaria de conversar sobre um projeto.'

export const useLandingPage = () => {
  const contactLinks: ContactLinks = {
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    email: 'mailto:contato@weboot.com.br',
    phoneDisplay: '(86) 00000-0000', // Dado provisório.
    location: 'Teresina - PI'
  }

  const navigation: NavigationItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' }
  ]

  // Conteúdo demonstrativo: substituir por dados reais antes da publicação.
  const stats: Stat[] = [
    { id: 'projects', value: '+200', label: 'projetos entregues', icon: Rocket },
    { id: 'satisfaction', value: '+98%', label: 'de satisfação', icon: ChartNoAxesCombined },
    { id: 'experience', value: '+15', label: 'anos transformando negócios', icon: Clock3 },
    { id: 'support', value: 'Ágil', label: 'suporte próximo', icon: Headphones }
  ]

  const services: Service[] = [
    { id: 'sites', title: 'Sites institucionais', description: 'Sites modernos, responsivos e otimizados para transmitir credibilidade e gerar oportunidades.', icon: MonitorSmartphone, href: '#contact' },
    { id: 'wordpress', title: 'Manutenção WordPress', description: 'Atualizações, segurança, backups, correções, desempenho e evolução contínua do seu site.', icon: ShieldCheck, href: '#contact' },
    { id: 'custom-web', title: 'Projetos web personalizados', description: 'Sistemas desenvolvidos sob medida para os processos e necessidades da sua empresa.', icon: Code2, href: '#contact' },
    { id: 'apis', title: 'APIs REST', description: 'APIs seguras, documentadas e escaláveis para conectar sistemas, clientes e plataformas.', icon: Braces, href: '#contact' },
    { id: 'automation', title: 'Automações inteligentes', description: 'Automatize tarefas, atendimento e fluxos operacionais utilizando n8n e inteligência artificial.', icon: Bot, href: '#contact' },
    { id: 'integration', title: 'Integração entre sistemas', description: 'Conecte aplicações, ERPs, CRMs, WhatsApp, meios de pagamento e serviços externos.', icon: Link2, href: '#contact' }
  ]

  const benefits: Benefit[] = [
    { id: 'technology', title: 'Tecnologia de ponta', description: 'Stack moderna e decisões técnicas preparadas para evoluir.', icon: Sparkles },
    { id: 'results', title: 'Foco em resultados', description: 'Soluções orientadas aos objetivos reais do seu negócio.', icon: Target },
    { id: 'security', title: 'Código limpo e seguro', description: 'Qualidade de engenharia do planejamento à entrega.', icon: ShieldCheck },
    { id: 'partnership', title: 'Atendimento próximo', description: 'Comunicação clara e parceria durante toda a jornada.', icon: Handshake },
    { id: 'agility', title: 'Entrega ágil', description: 'Processo enxuto com visibilidade e entregas incrementais.', icon: Gauge },
    { id: 'support', title: 'Suporte contínuo', description: 'Acompanhamento para manter sua solução saudável.', icon: Headphones }
  ]

  const processSteps: ProcessStep[] = [
    { id: 'discovery', number: '01', title: 'Descoberta', description: 'Entendemos objetivos, desafios e contexto do negócio.', icon: Search },
    { id: 'planning', number: '02', title: 'Planejamento', description: 'Definimos escopo, prioridades e um caminho claro.', icon: Compass },
    { id: 'design', number: '03', title: 'Design e arquitetura', description: 'Criamos experiência, interface e base técnica.', icon: Palette },
    { id: 'development', number: '04', title: 'Desenvolvimento', description: 'Construímos com qualidade, testes e transparência.', icon: FileCode2 },
    { id: 'delivery', number: '05', title: 'Entrega e suporte', description: 'Publicamos, acompanhamos e evoluímos a solução.', icon: CloudCog }
  ]

  // Cases demonstrativos: substituir por projetos reais e autorizados antes da publicação.
  const projects: PortfolioProject[] = [
    { id: 'management', title: 'Plataforma de gestão', category: 'Sistema web', description: 'Operação centralizada com indicadores e fluxos automatizados.', image: '/images/portfolio/management.svg', href: '#contact' },
    { id: 'clinic', title: 'Site institucional para clínica', category: 'Site institucional', description: 'Presença digital confiável, rápida e preparada para conversão.', image: '/images/portfolio/clinic.svg', href: '#contact' },
    { id: 'custom', title: 'Projeto web personalizado', category: 'Produto digital', description: 'Experiência sob medida para uma operação especializada.', image: '/images/portfolio/custom.svg', href: '#contact' },
    { id: 'api', title: 'Integração por API REST', category: 'Integração', description: 'Dados conectados com segurança entre plataformas críticas.', image: '/images/portfolio/api.svg', href: '#contact' }
  ]

  // Depoimentos demonstrativos: substituir por depoimentos reais antes da publicação.
  const testimonials: Testimonial[] = [
    { id: 'testimonial-1', quote: 'A equipe traduziu um desafio complexo em uma solução simples, rápida e muito bem construída.', name: 'Nome demonstrativo', role: 'Direção', company: 'Empresa demonstrativa', initials: 'ND' },
    { id: 'testimonial-2', quote: 'Tivemos clareza em todas as etapas e uma entrega que realmente melhorou nossa operação.', name: 'Nome demonstrativo', role: 'Operações', company: 'Empresa demonstrativa', initials: 'ND' },
    { id: 'testimonial-3', quote: 'O atendimento próximo e a qualidade técnica fizeram toda a diferença no projeto.', name: 'Nome demonstrativo', role: 'Marketing', company: 'Empresa demonstrativa', initials: 'ND' }
  ]

  const faqs: FaqItem[] = [
    { id: 'price', question: 'Quanto custa desenvolver um site institucional?', answer: 'O investimento depende do número de páginas, integrações, complexidade visual e necessidades de conteúdo. Após uma conversa inicial, enviamos uma proposta clara e adequada ao escopo.' },
    { id: 'deadline', question: 'Qual é o prazo médio de desenvolvimento?', answer: 'O prazo varia conforme o projeto. Um site institucional costuma exigir algumas semanas, enquanto sistemas e integrações são planejados em etapas. O cronograma é definido antes do início.' },
    { id: 'wordpress', question: 'Vocês trabalham com manutenção de WordPress?', answer: 'Sim. Atuamos com atualizações, segurança, backups, correções, performance e melhorias contínuas em sites WordPress.' },
    { id: 'integrations', question: 'É possível integrar o site com WhatsApp, CRM ou ERP?', answer: 'Sim. Avaliamos as APIs e regras de cada plataforma para criar integrações seguras com WhatsApp, CRMs, ERPs, pagamentos e outros serviços.' },
    { id: 'rest-api', question: 'A Weboot desenvolve APIs REST?', answer: 'Sim. Projetamos e desenvolvemos APIs REST documentadas, seguras e escaláveis, tanto para novos produtos quanto para integração de sistemas existentes.' },
    { id: 'ai', question: 'Vocês trabalham com automação e inteligência artificial?', answer: 'Sim. Criamos automações de processos, atendimento e integrações usando ferramentas como n8n e recursos de inteligência artificial quando fazem sentido para o negócio.' },
    { id: 'aftercare', question: 'O projeto terá suporte após a entrega?', answer: 'Sim. Podemos estruturar um plano de suporte, monitoramento e evolução contínua de acordo com a necessidade da solução.' },
    { id: 'responsive-seo', question: 'O site será responsivo e otimizado para Google?', answer: 'Sim. Desenvolvemos com foco em dispositivos móveis, performance, acessibilidade e fundamentos técnicos de SEO.' }
  ]

  return { contactLinks, navigation, stats, services, benefits, processSteps, projects, testimonials, faqs }
}
