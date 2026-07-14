<script setup lang="ts">
import { ArrowUpRight, CheckCircle2, Code2, Database, Zap } from 'lucide-vue-next'

const { contactLinks } = useLandingPage()
</script>

<template>
  <section id="inicio" class="relative isolate flex min-h-[calc(100svh-1px)] items-center overflow-hidden bg-background pb-20 pt-28 sm:pt-32 lg:min-h-[780px] lg:pb-24 lg:pt-32">
    <div class="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_30%,rgba(37,99,235,.17),transparent_31%),radial-gradient(circle_at_20%_15%,rgba(124,58,237,.1),transparent_25%)]" />
    <div class="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.3)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

    <div class="page-container grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
      <div class="text-left">
        <div class="inline-flex items-center gap-2 rounded-full border border-brand-light/25 bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan sm:text-sm">
          <Zap :size="16" aria-hidden="true" /> Tecnologia que impulsiona resultados
        </div>
        <h1 class="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Soluções digitais que transformam <span class="text-gradient">o seu negócio.</span>
        </h1>
        <p class="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:max-w-xl">
          Desenvolvemos sites institucionais, sistemas web personalizados, APIs e automações que conectam sua empresa ao futuro.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <UiBaseButton :href="contactLinks.whatsapp" external show-arrow class="w-full sm:w-auto">Fale com um especialista</UiBaseButton>
          <UiBaseButton href="#services" variant="outline" class="w-full sm:w-auto">Conheça nossos serviços</UiBaseButton>
        </div>
        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-dark">
          <span class="inline-flex items-center gap-2"><CheckCircle2 :size="17" class="text-brand-cyan" aria-hidden="true" /> Atendimento próximo</span>
          <span class="inline-flex items-center gap-2"><CheckCircle2 :size="17" class="text-brand-cyan" aria-hidden="true" /> Soluções sob medida</span>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[620px] lg:ml-auto">
        <div class="absolute inset-[8%] -z-10 rounded-full bg-brand/20 blur-3xl" />
        <div class="relative rounded-[1.25rem] border border-white/15 bg-[#071126] p-2 shadow-2xl shadow-black/35 sm:p-3">
          <div class="overflow-hidden rounded-[1rem] border border-subtle bg-background-elevated sm:rounded-[1.25rem]">
            <div class="flex h-10 items-center gap-2 border-b border-subtle bg-surface/80 px-4">
              <span class="size-2.5 rounded-full bg-red-400/80" /><span class="size-2.5 rounded-full bg-amber-400/80" /><span class="size-2.5 rounded-full bg-green-400/80" />
              <div class="ml-3 h-5 flex-1 rounded-md bg-white/5" />
            </div>
            <div class="grid min-h-[330px] grid-cols-[58px_1fr] sm:min-h-[410px] sm:grid-cols-[86px_1fr]">
              <aside class="border-r border-subtle bg-background/60 p-3 sm:p-4" aria-label="Menu ilustrativo do dashboard">
                <div class="mx-auto mb-6 size-7 rounded-lg bg-brand-gradient sm:size-9" />
                <div class="space-y-3">
                  <div v-for="bar in 5" :key="bar" class="mx-auto h-2 rounded-full bg-white/10" :class="bar === 1 ? 'w-full bg-brand/50' : 'w-3/4'" />
                </div>
              </aside>
              <div class="p-4 sm:p-6">
                <div class="flex items-center justify-between gap-3">
                  <div><div class="h-3 w-20 rounded bg-white/20 sm:w-28" /><div class="mt-2 h-2 w-14 rounded bg-white/10 sm:w-20" /></div>
                  <div class="rounded-lg bg-brand px-2 py-1.5 text-[9px] font-semibold text-white sm:px-3 sm:text-xs">Novo projeto</div>
                </div>
                <div class="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  <div v-for="(metric, index) in ['12,4k', '98%', '24']" :key="metric" class="rounded-lg border border-subtle bg-surface/70 p-2.5 sm:rounded-xl sm:p-4">
                    <div class="text-base font-bold text-white sm:text-xl">{{ metric }}</div><div class="mt-1 h-1.5 rounded bg-white/10" :class="index === 1 ? 'w-2/3' : 'w-1/2'" />
                  </div>
                </div>
                <div class="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-[1.4fr_.8fr]">
                  <div class="rounded-xl border border-subtle bg-surface/60 p-3 sm:p-4">
                    <div class="mb-4 flex items-center justify-between"><span class="h-2 w-20 rounded bg-white/15" /><span class="size-2 rounded-full bg-brand-cyan" /></div>
                    <svg viewBox="0 0 320 130" class="w-full" role="img" aria-label="Gráfico ilustrativo de crescimento">
                      <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B82F6" stop-opacity=".45"/><stop offset="1" stop-color="#3B82F6" stop-opacity="0"/></linearGradient></defs>
                      <path d="M0 112 C40 104 50 78 89 88 S145 70 168 76 S220 30 250 45 S285 21 320 10 V130 H0Z" fill="url(#chartFill)"/>
                      <path d="M0 112 C40 104 50 78 89 88 S145 70 168 76 S220 30 250 45 S285 21 320 10" fill="none" stroke="#3B82F6" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="hidden rounded-xl border border-subtle bg-surface/60 p-4 sm:block">
                    <div class="mx-auto grid aspect-square w-24 place-items-center rounded-full bg-[conic-gradient(#06B6D4_0_68%,#2563EB_68%_86%,rgba(255,255,255,.08)_86%)]"><div class="grid size-16 place-items-center rounded-full bg-surface text-lg font-bold">86%</div></div>
                    <div class="mx-auto mt-5 h-2 w-3/4 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-10 right-2 w-32 animate-float rounded-[1.5rem] border border-white/20 bg-[#08152c] p-2 shadow-2xl shadow-black/40 sm:right-0 sm:w-40 lg:-right-8">
          <div class="rounded-[1.25rem] border border-subtle bg-background-elevated p-3">
            <div class="mx-auto mb-5 h-1 w-12 rounded bg-white/20" />
            <div class="grid size-10 place-items-center rounded-xl bg-brand/20 text-brand-cyan"><Code2 :size="21" aria-hidden="true" /></div>
            <div class="mt-5 h-2 w-full rounded bg-white/15" /><div class="mt-2 h-2 w-3/4 rounded bg-white/10" />
            <div class="mt-5 rounded-lg bg-brand/20 p-3"><div class="flex items-center gap-2 text-xs text-brand-cyan"><Database :size="14" /> API conectada</div></div>
          </div>
        </div>
        <div class="absolute -left-3 -top-8 hidden items-center gap-3 rounded-xl border border-subtle bg-surface/95 p-3 shadow-xl backdrop-blur sm:flex lg:-left-10">
          <span class="grid size-9 place-items-center rounded-lg bg-success/15 text-success"><ArrowUpRight :size="19" /></span>
          <span><strong class="block text-sm">Performance</strong><small class="text-muted-dark">Experiências rápidas</small></span>
        </div>
      </div>
    </div>
  </section>
</template>
