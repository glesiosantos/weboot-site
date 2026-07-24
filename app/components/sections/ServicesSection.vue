<script setup lang="ts">
import { ArrowUpRight, Check, Wrench } from 'lucide-vue-next'

const { services } = useLandingPage()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const wordpressMessage = 'Olá! Preciso de manutenção ou suporte para um site WordPress.'
</script>

<template>
  <section id="solucoes" class="section-space bg-white">
    <div class="page-container">
      <UiSectionHeader label="Soluções" title="Tecnologia aplicada ao que sua empresa precisa resolver" description="Três frentes objetivas, conduzidas de forma próxima e adaptadas à realidade da sua operação." align="left" />
      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article v-for="service in services" :key="service.id" class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,.05)] sm:p-7">
          <div class="grid size-12 place-items-center rounded-xl bg-blue-50 text-blue-700"><component :is="service.icon" :size="23" aria-hidden="true" /></div>
          <h3 class="mt-6 text-2xl font-bold text-slate-950">{{ service.title }}</h3>
          <p class="mt-4 leading-7 text-slate-600">{{ service.description }}</p>
          <ul class="mt-6 space-y-3">
            <li v-for="benefit in service.benefits" :key="benefit" class="flex gap-3 text-sm text-slate-700"><Check :size="17" class="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />{{ benefit }}</li>
          </ul>
          <a :href="createWhatsAppUrl(service.message)" target="_blank" rel="noopener noreferrer" class="mt-auto inline-flex min-h-12 items-center gap-2 pt-7 font-bold text-blue-700 hover:text-blue-900" @click="trackWhatsAppClick('service', service.id)">
            {{ service.cta }} <ArrowUpRight :size="18" aria-hidden="true" />
          </a>
        </article>
      </div>

      <aside class="mt-6 flex flex-col gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex gap-4">
          <Wrench :size="24" class="mt-1 shrink-0 text-blue-700" aria-hidden="true" />
          <div><h3 class="text-lg font-bold text-slate-950">Seu site WordPress precisa de manutenção?</h3><p class="mt-1 leading-7 text-slate-600">Realizamos correções, atualizações, backups, melhorias de desempenho, segurança e ajustes de layout.</p></div>
        </div>
        <a :href="createWhatsAppUrl(wordpressMessage)" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 shrink-0 items-center font-bold text-blue-700 hover:text-blue-900" @click="trackWhatsAppClick('wordpress')">Solicitar suporte WordPress <ArrowUpRight :size="18" class="ml-2" aria-hidden="true" /></a>
      </aside>
    </div>
  </section>
</template>
