<script setup lang="ts">
import { ArrowUpRight, MessageCircle } from 'lucide-vue-next'
import type { PortfolioProject } from '~/data/portfolio'
const props = defineProps<{ project: PortfolioProject }>()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const message = computed(() => `Olá! Vi o projeto ${props.project.title} no site da Weboot e gostaria de conversar sobre uma solução semelhante.`)
</script>

<template>
  <article class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
    <NuxtLink :to="`/projetos/${project.slug}`" class="group block aspect-[16/10] overflow-hidden bg-slate-100">
      <NuxtImg :src="project.image" :alt="project.imageAlt" width="720" height="450" loading="lazy" class="size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
    </NuxtLink>
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="text-sm font-bold text-blue-600">{{ project.categoryLabel }}</span>
        <PortfolioStatusBadge :status="project.status" />
      </div>
      <h3 class="mt-3 text-xl font-bold text-slate-950">{{ project.title }}</h3>
      <p class="mt-3 line-clamp-3 leading-7 text-slate-600">{{ project.summary }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="technology in project.technologies.slice(0, 4)" :key="technology" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{{ technology }}</span>
      </div>
      <div class="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
        <NuxtLink :to="`/projetos/${project.slug}`" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-700">
          Ver case <ArrowUpRight :size="16" aria-hidden="true" />
        </NuxtLink>
        <a :href="createWhatsAppUrl(message)" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 text-center text-sm font-bold text-white hover:bg-blue-700" @click="trackWhatsAppClick('portfolio', project.slug)">
          <MessageCircle :size="16" aria-hidden="true" /> Projeto semelhante
        </a>
      </div>
    </div>
  </article>
</template>
