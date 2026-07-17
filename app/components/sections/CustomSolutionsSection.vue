<script setup lang="ts">
import { ArrowUpRight, Bot, Braces, PanelsTopLeft } from 'lucide-vue-next'
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const solutions = [
  { id: 'systems', title: 'Sistemas personalizados', text: 'Soluções desenvolvidas de acordo com o processo real da sua empresa.', examples: ['Sistemas administrativos', 'Portais e dashboards', 'Controle de processos'], icon: PanelsTopLeft, message: 'Olá! Tenho uma necessidade específica e gostaria de conversar sobre o desenvolvimento de um sistema personalizado.' },
  { id: 'apis', title: 'APIs e integrações', text: 'Conectamos sistemas e serviços para facilitar o fluxo de informações.', examples: ['Pagamentos e ERPs', 'Aplicativos e sites', 'Serviços externos'], icon: Braces, message: 'Olá! Preciso desenvolver uma API REST ou integrar dois sistemas.' },
  { id: 'automation', title: 'Automação com n8n', text: 'Automatizamos atendimento, notificações, agendamentos e tarefas administrativas.', examples: ['WhatsApp e CRM', 'Webhooks e notificações', 'Fluxos com IA'], icon: Bot, message: 'Olá! Gostaria de automatizar o atendimento ou algum processo da minha empresa utilizando n8n.' }
]
</script>

<template>
  <section id="solucoes-personalizadas" class="section-space bg-slate-950 text-white">
    <div class="page-container">
      <UiSectionHeader label="Software sob medida" title="Projetos personalizados, APIs e automações" description="Tecnologia aplicada ao processo real da sua empresa, com escopo claro e possibilidade de evolução." class="[&_h2]:!text-white [&_p]:!text-slate-300" />
      <div class="mt-14 grid gap-8 lg:grid-cols-3">
        <article v-for="solution in solutions" :key="solution.id" class="border-t border-slate-700 pt-7">
          <component :is="solution.icon" :size="28" class="text-blue-400" aria-hidden="true" />
          <h3 class="mt-5 text-2xl font-bold">{{ solution.title }}</h3>
          <p class="mt-4 leading-7 text-slate-300">{{ solution.text }}</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-400"><li v-for="example in solution.examples" :key="example">— {{ example }}</li></ul>
          <a :href="createWhatsAppUrl(solution.message)" target="_blank" rel="noopener noreferrer" class="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-blue-400 hover:text-blue-300" @click="trackWhatsAppClick('service', solution.id)">
            Conversar sobre esta solução <ArrowUpRight :size="17" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
