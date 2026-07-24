<script setup lang="ts">
import { ArrowUpRight, Check, MessageCircle } from 'lucide-vue-next'
import { getProjectBySlug } from '~/data/portfolio'
const project = getProjectBySlug('augile')!
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const message = `Olá! Vi o projeto ${project.title} no site da Weboot e gostaria de conversar sobre uma solução semelhante.`
</script>

<template>
  <section id="cases" class="section-space bg-slate-950 text-white">
    <div class="page-container grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
      <div class="overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl"><NuxtImg :src="project.image" :alt="project.imageAlt" width="900" height="563" loading="lazy" class="aspect-[16/10] w-full object-cover" /></div>
      <div>
        <div class="flex flex-wrap gap-3"><span class="text-sm font-bold uppercase tracking-[.15em] text-blue-300">Produto próprio</span><PortfolioStatusBadge :status="project.status" /></div>
        <h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Augile — automação para oficinas</h2>
        <p class="mt-5 leading-7 text-slate-300">{{ project.summary }}</p>
        <div class="mt-7 grid gap-5 sm:grid-cols-2"><div><h3 class="font-bold">Desafio</h3><p class="mt-2 text-sm leading-6 text-slate-400">{{ project.problem }}</p></div><div><h3 class="font-bold">Solução</h3><p class="mt-2 text-sm leading-6 text-slate-400">{{ project.solution }}</p></div></div>
        <ul class="mt-7 grid gap-3 sm:grid-cols-2"><li v-for="result in project.results" :key="result" class="flex gap-2 text-sm text-slate-300"><Check :size="17" class="mt-0.5 shrink-0 text-blue-300" aria-hidden="true" />{{ result }}</li></ul>
        <div class="mt-7 flex flex-wrap gap-2"><span v-for="technology in project.technologies" :key="technology" class="rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300">{{ technology }}</span></div>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row"><UiBaseButton href="/projetos/augile" variant="secondary">Ver detalhes do projeto <ArrowUpRight :size="17" aria-hidden="true" /></UiBaseButton><UiBaseButton :href="createWhatsAppUrl(message)" external variant="whatsapp" @click="trackWhatsAppClick('featured-case', project.slug)"><MessageCircle :size="18" aria-hidden="true" /> Quero uma solução semelhante</UiBaseButton></div>
      </div>
    </div>
  </section>
</template>
