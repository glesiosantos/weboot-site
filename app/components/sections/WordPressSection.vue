<script setup lang="ts">
import { Check, Wrench } from 'lucide-vue-next'
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const problems = ['Site lento', 'Layout quebrado', 'Erro em plugins', 'Página fora do ar', 'Problemas de segurança', 'Conteúdo desatualizado', 'Dificuldade para alterações', 'Falha em formulários', 'Falha em integrações']
const url = computed(() => createWhatsAppUrl('Olá! Preciso de manutenção ou suporte para um site WordPress.'))
</script>

<template>
  <section id="wordpress" class="section-space bg-white">
    <div class="page-container grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
      <div>
        <div class="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-700"><Wrench :size="24" /></div>
        <h2 class="section-title">Seu site WordPress precisa de manutenção?</h2>
        <p class="section-copy">Corrigimos problemas, atualizamos componentes, melhoramos o desempenho e ajudamos sua empresa a manter o site funcionando com segurança.</p>
        <UiBaseButton :href="url" external variant="whatsapp" class="mt-8" @click="trackWhatsAppClick('wordpress')">Falar com suporte WordPress</UiBaseButton>
      </div>
      <ul class="grid gap-x-7 gap-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2 sm:p-8">
        <li v-for="problem in problems" :key="problem" class="flex min-h-11 items-center gap-3 border-b border-slate-200 text-sm font-semibold text-slate-700"><Check :size="18" class="text-blue-600" />{{ problem }}</li>
      </ul>
    </div>
  </section>
</template>
