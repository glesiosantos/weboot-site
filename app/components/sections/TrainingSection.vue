<script setup lang="ts">
import { ArrowUpRight, GraduationCap } from 'lucide-vue-next'
const { trainings } = useLandingPage()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const message = 'Olá! Gostaria de receber informações sobre os treinamentos da Weboot.'
</script>

<template>
  <section id="treinamentos" class="section-space bg-white" aria-labelledby="training-title">
    <div class="page-container">
      <h2 id="training-title" class="sr-only">Treinamentos disponíveis</h2>
      <div class="mt-14 grid gap-5 md:grid-cols-2">
        <article v-for="training in trainings" :key="training.id" class="grid gap-5 rounded-2xl border border-slate-200 p-6 sm:grid-cols-[auto_1fr]">
          <div class="grid size-11 place-items-center rounded-lg bg-blue-50 text-blue-700"><GraduationCap :size="22" /></div>
          <div>
            <h3 class="text-xl font-bold text-slate-950">{{ training.title }}</h3>
            <p class="mt-3 leading-7 text-slate-600">{{ training.summary }}</p>
            <div class="mt-4 flex flex-wrap gap-2"><span v-for="topic in training.topics" :key="topic" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{{ topic }}</span></div>
            <dl class="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2"><div><dt class="font-bold text-slate-800">Modalidade</dt><dd>{{ training.modality }}</dd></div><div><dt class="font-bold text-slate-800">Público</dt><dd>{{ training.audience }}</dd></div></dl>
            <a :href="createWhatsAppUrl(message)" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-blue-700" @click="trackWhatsAppClick('training', training.id)">Receber informações <ArrowUpRight :size="17" /></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
