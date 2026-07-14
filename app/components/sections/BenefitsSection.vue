<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

const { benefits } = useLandingPage()
</script>

<template>
  <section id="benefits" class="section-space relative overflow-hidden bg-background">
    <div class="absolute right-0 top-1/3 size-96 rounded-full bg-brand-purple/[0.06] blur-3xl" />
    <div class="page-container relative grid gap-12 rounded-[1.25rem] border border-subtle bg-surface/35 p-6 shadow-2xl shadow-black/10 sm:p-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16 lg:p-14">
      <div class="reveal lg:sticky lg:top-28">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">Engenharia que gera valor</p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Por que escolher a Weboot?</h2>
        <p class="mt-6 text-lg leading-8 text-muted">Mais do que entregar código, conectamos tecnologia, estratégia e experiência para construir soluções duradouras.</p>
        <ul class="mt-7 space-y-3 text-muted">
          <li class="flex gap-3"><CheckCircle2 :size="20" class="mt-0.5 shrink-0 text-brand-cyan" /> Decisões técnicas com visão de negócio</li>
          <li class="flex gap-3"><CheckCircle2 :size="20" class="mt-0.5 shrink-0 text-brand-cyan" /> Comunicação clara em todas as etapas</li>
          <li class="flex gap-3"><CheckCircle2 :size="20" class="mt-0.5 shrink-0 text-brand-cyan" /> Produtos preparados para crescer</li>
        </ul>
        <UiBaseButton href="#contact" show-arrow class="mt-9">Solicitar uma avaliação</UiBaseButton>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <article v-for="benefit in benefits" :key="benefit.id" class="reveal rounded-2xl border border-subtle bg-surface/55 p-6 transition hover:border-brand-light/35 hover:bg-surface/80">
          <div class="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand-cyan"><component :is="benefit.icon" :size="22" :stroke-width="1.8" aria-hidden="true" /></div>
          <h3 class="mt-5 text-lg font-semibold text-white">{{ benefit.title }}</h3>
          <p class="mt-2 leading-7 text-muted-dark">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
