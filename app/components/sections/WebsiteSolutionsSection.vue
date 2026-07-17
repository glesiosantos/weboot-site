<script setup lang="ts">
import { BadgeCheck, MousePointerClick, PanelsTopLeft } from 'lucide-vue-next'
const items = [
  { title: 'Apresente sua empresa', text: 'Mostre seus serviços, diferenciais, equipe e informações importantes.', icon: PanelsTopLeft },
  { title: 'Gere oportunidades', text: 'Utilize chamadas estratégicas para direcionar visitantes ao WhatsApp ou à compra.', icon: MousePointerClick },
  { title: 'Transmita confiança', text: 'Tenha uma apresentação profissional, moderna e consistente com a identidade da sua empresa.', icon: BadgeCheck }
]
</script>

<template>
  <section class="section-space overflow-hidden bg-slate-50">
    <div class="page-container">
      <div class="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div>
          <p class="eyebrow">Sites que ajudam a decidir</p>
          <h2 class="section-title">Seu site deve explicar, transmitir confiança e facilitar a decisão do cliente</h2>
          <p class="section-copy">Um site profissional não precisa ser carregado de efeitos. Ele precisa apresentar seu negócio de forma clara, funcionar bem em todos os dispositivos e conduzir o visitante até o contato.</p>
        </div>
        <div class="grid gap-6 sm:grid-cols-3">
          <article v-for="item in items" :key="item.title" class="border-l-2 border-blue-200 pl-5">
            <component :is="item.icon" :size="24" class="text-blue-600" aria-hidden="true" />
            <h3 class="mt-4 font-bold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.text }}</p>
          </article>
        </div>
      </div>
      <div class="mt-12 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
        <div class="flex h-9 items-center gap-2 rounded-t-xl border-b border-slate-200 bg-slate-50 px-4"><span class="size-2.5 rounded-full bg-red-400" /><span class="size-2.5 rounded-full bg-amber-400" /><span class="size-2.5 rounded-full bg-green-400" /></div>
        <div class="grid min-h-72 gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div><div class="h-3 w-28 rounded bg-blue-600" /><div class="mt-7 h-8 max-w-md rounded bg-slate-900" /><div class="mt-3 h-8 max-w-sm rounded bg-slate-900" /><div class="mt-6 h-3 max-w-lg rounded bg-slate-200" /><div class="mt-3 h-3 max-w-md rounded bg-slate-200" /><div class="mt-7 h-11 w-40 rounded-lg bg-blue-600" /></div>
          <div class="h-56 rounded-xl bg-gradient-to-br from-blue-100 via-slate-100 to-white" />
        </div>
      </div>
    </div>
  </section>
</template>
