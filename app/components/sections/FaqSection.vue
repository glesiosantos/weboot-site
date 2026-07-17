<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
const { faqs } = useLandingPage()
const openItem = ref<string | null>(faqs[0]?.id ?? null)
</script>

<template>
  <section id="perguntas" class="section-space bg-white">
    <div class="page-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
      <UiSectionHeader label="Perguntas frequentes" title="Respostas diretas antes de começar" description="Se sua dúvida não estiver aqui, fale com a Weboot pelo WhatsApp." align="left" />
      <div class="divide-y divide-slate-200 border-y border-slate-200">
        <article v-for="faq in faqs" :key="faq.id">
          <h3>
            <button type="button" class="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left font-bold text-slate-900 hover:text-blue-700" :aria-expanded="openItem === faq.id" :aria-controls="`answer-${faq.id}`" @click="openItem = openItem === faq.id ? null : faq.id">
              <span>{{ faq.question }}</span><ChevronDown :size="20" class="shrink-0 transition-transform" :class="{ 'rotate-180': openItem === faq.id }" />
            </button>
          </h3>
          <div :id="`answer-${faq.id}`" class="grid transition-[grid-template-rows]" :class="openItem === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
            <div class="overflow-hidden"><p class="pb-6 leading-7 text-slate-600">{{ faq.answer }}</p></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
