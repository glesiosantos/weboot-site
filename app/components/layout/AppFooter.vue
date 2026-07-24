<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
const year = new Date().getFullYear()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const whatsappUrl = computed(() => createWhatsAppUrl('Olá! Conheci a Weboot pelo site e gostaria de solicitar um orçamento.'))
const solutions = [['Sites e lojas virtuais', '/#solucoes'], ['Projetos sob medida', '/#solucoes'], ['Automações e integrações', '/#solucoes']]
const company = [['Cases', '/#cases'], ['Como trabalhamos', '/#como-trabalhamos'], ['Conheça nossos treinamentos', '/treinamentos']]
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 text-white">
    <div class="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_1fr]">
      <div><NuxtImg src="/images/weboot_logo_pa.png" alt="Weboot" width="226" height="30" class="h-auto w-[116px] object-contain brightness-0 invert" loading="lazy" /><p class="mt-5 max-w-sm leading-7 text-slate-400">A Weboot desenvolve sites, sistemas e automações para ajudar empresas a vender, organizar processos e evoluir seus serviços digitais.</p></div>
      <div><h2 class="font-bold">Soluções</h2><ul class="mt-5 space-y-3 text-sm text-slate-400"><li v-for="[label, href] in solutions" :key="label"><a :href="href" class="hover:text-white">{{ label }}</a></li></ul></div>
      <div><h2 class="font-bold">Cases e empresa</h2><ul class="mt-5 space-y-3 text-sm text-slate-400"><li v-for="[label, href] in company" :key="label"><NuxtLink :to="href" class="hover:text-white">{{ label }}</NuxtLink></li></ul></div>
      <div><h2 class="font-bold">Contato</h2><p class="mt-5 text-sm leading-6 text-slate-400">Conte sua necessidade e fale diretamente com a Weboot.</p><UiBaseButton :href="whatsappUrl" external variant="whatsapp" class="mt-5 w-full" @click="trackWhatsAppClick('footer')"><MessageCircle :size="19" aria-hidden="true" /> WhatsApp</UiBaseButton></div>
    </div>
    <div class="border-t border-slate-800"><div class="page-container py-6 text-sm text-slate-500">© {{ year }} Weboot. Todos os direitos reservados.</div></div>
  </footer>
</template>
