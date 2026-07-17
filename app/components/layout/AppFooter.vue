<script setup lang="ts">
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-vue-next'

const year = new Date().getFullYear()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const whatsappUrl = computed(() => createWhatsAppUrl('Olá! Gostaria de conversar sobre um projeto com a Weboot.'))
const services = [
  ['Sites', '/#servicos'], ['Landing Pages', '/#servicos'], ['E-commerce', '/#servicos'],
  ['WordPress', '/#wordpress'], ['Sistemas', '/#solucoes-personalizadas'], ['APIs', '/#solucoes-personalizadas'], ['Automações', '/#solucoes-personalizadas']
]
const company = [['Projetos', '/#projetos'], ['Treinamentos', '/#treinamentos'], ['Sobre', '/#como-trabalhamos'], ['Contato', '/#contato']]
</script>

<template>
  <footer class="border-t border-slate-200 bg-slate-950 text-white">
    <div class="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_1fr]">
      <div>
        <NuxtImg src="/images/weboot_logo_pa.png" alt="Weboot" width="226" height="30" class="h-8 w-auto object-contain brightness-0 invert" loading="lazy" />
        <p class="mt-5 max-w-sm leading-7 text-slate-400">Sites, sistemas, APIs e automações desenvolvidos com clareza para necessidades reais de empresas.</p>
        <div class="mt-6 flex gap-2">
          <span aria-label="LinkedIn da Weboot — endereço pendente" class="grid size-11 place-items-center rounded-lg border border-slate-800 text-slate-600"><Linkedin :size="19" /></span>
          <span aria-label="Instagram da Weboot — endereço pendente" class="grid size-11 place-items-center rounded-lg border border-slate-800 text-slate-600"><Instagram :size="19" /></span>
          <span aria-label="GitHub da Weboot — endereço pendente" class="grid size-11 place-items-center rounded-lg border border-slate-800 text-slate-600"><Github :size="19" /></span>
        </div>
      </div>
      <div>
        <h2 class="font-bold">Serviços</h2>
        <ul class="mt-5 space-y-3 text-sm text-slate-400">
          <li v-for="[label, href] in services" :key="label"><a :href="href" class="hover:text-white">{{ label }}</a></li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold">Empresa</h2>
        <ul class="mt-5 space-y-3 text-sm text-slate-400">
          <li v-for="[label, href] in company" :key="label"><a :href="href" class="hover:text-white">{{ label }}</a></li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold">Vamos conversar</h2>
        <p class="mt-5 text-sm leading-6 text-slate-400">Conte sua necessidade e fale diretamente com a equipe.</p>
        <UiBaseButton :href="whatsappUrl" external variant="whatsapp" class="mt-5 w-full" @click="trackWhatsAppClick('footer')">
          <MessageCircle :size="19" aria-hidden="true" /> WhatsApp
        </UiBaseButton>
      </div>
    </div>
    <div class="border-t border-slate-800">
      <div class="page-container py-6 text-sm text-slate-500">© {{ year }} Weboot. Todos os direitos reservados.</div>
    </div>
  </footer>
</template>
