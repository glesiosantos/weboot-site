<script setup lang="ts">
import { ArrowLeft, Check, MessageCircle } from 'lucide-vue-next'
import { getProjectBySlug } from '~/data/portfolio'

const route = useRoute()
const project = computed(() => getProjectBySlug(String(route.params.slug)))
if (!project.value) throw createError({ statusCode: 404, message: 'Projeto não encontrado' })

const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const message = computed(() => `Olá! Vi o projeto ${project.value?.title} no site da Weboot e gostaria de conversar sobre uma solução semelhante.`)
const whatsappUrl = computed(() => createWhatsAppUrl(message.value))

useSeoMeta({
  title: () => `${project.value?.title} | Projetos Weboot`,
  description: () => project.value?.summary,
  ogTitle: () => `${project.value?.title} | Weboot`,
  ogDescription: () => project.value?.summary,
  ogImage: () => project.value?.image,
  ogType: 'article'
})
</script>

<template>
  <div v-if="project">
    <LayoutAppHeader />
    <main id="main-content">
      <section class="border-b border-slate-200 bg-slate-50 py-14 sm:py-20">
        <div class="page-container">
          <NuxtLink to="/#projetos" class="inline-flex min-h-11 items-center gap-2 font-bold text-blue-700"><ArrowLeft :size="18" />Voltar aos projetos</NuxtLink>
          <div class="mt-8 grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
            <div>
              <div class="flex flex-wrap items-center gap-3"><span class="eyebrow">{{ project.categoryLabel }}</span><PortfolioStatusBadge :status="project.status" /></div>
              <h1 class="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{{ project.title }}</h1>
              <p class="mt-6 text-lg leading-8 text-slate-600">{{ project.summary }}</p>
              <div class="mt-6 flex flex-wrap gap-2"><span v-for="technology in project.technologies" :key="technology" class="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-600">{{ technology }}</span></div>
            </div>
            <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"><NuxtImg :src="project.image" :alt="project.imageAlt" width="900" height="563" preload class="aspect-[16/10] size-full object-cover" /></div>
          </div>
        </div>
      </section>

      <section class="section-space bg-white">
        <div class="page-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div><p class="eyebrow">Contexto</p><h2 class="section-title">Sobre o projeto</h2></div>
          <div class="space-y-10">
            <div><h3 class="text-xl font-bold text-slate-950">Contexto do projeto</h3><p class="mt-3 leading-7 text-slate-600">{{ project.context }}</p></div>
            <div><h3 class="text-xl font-bold text-slate-950">Problema</h3><p class="mt-3 leading-7 text-slate-600">{{ project.problem }}</p></div>
            <div><h3 class="text-xl font-bold text-slate-950">Solução</h3><p class="mt-3 leading-7 text-slate-600">{{ project.solution }}</p></div>
            <div><h3 class="text-xl font-bold text-slate-950">Funcionalidades</h3><ul class="mt-4 grid gap-3 sm:grid-cols-2"><li v-for="feature in project.features" :key="feature" class="flex gap-2 text-slate-600"><Check :size="18" class="mt-0.5 shrink-0 text-blue-600" />{{ feature }}</li></ul></div>
          </div>
        </div>
      </section>

      <section class="bg-white px-4 pb-16 sm:px-6 sm:pb-20">
        <div class="mx-auto max-w-7xl rounded-2xl bg-blue-700 p-8 text-center text-white sm:p-12">
          <h2 class="text-3xl font-bold">Precisa de uma solução semelhante?</h2>
          <p class="mx-auto mt-4 max-w-2xl text-blue-100">Conte o contexto da sua empresa para avaliarmos o melhor caminho.</p>
          <UiBaseButton :href="whatsappUrl" external variant="whatsapp" class="mt-7" @click="trackWhatsAppClick('portfolio', project.slug)"><MessageCircle :size="19" />Solicitar projeto semelhante</UiBaseButton>
        </div>
      </section>
    </main>
    <LayoutAppFooter />
    <WhatsappWhatsAppFloatingButton />
  </div>
</template>
