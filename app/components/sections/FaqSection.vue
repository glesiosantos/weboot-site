<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const { faqs } = useLandingPage()
const openItem = ref<string | null>(faqs[0]?.id ?? null)
</script>

<template>
  <section class="section-space border-y border-subtle bg-background-elevated/55">
    <div class="page-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
      <UiSectionHeader label="Perguntas frequentes" title="Tire suas dúvidas" description="Respostas diretas sobre nossos serviços, processo e suporte." align="left" class="reveal" />
      <div class="reveal divide-y divide-subtle overflow-hidden rounded-2xl border border-subtle bg-surface/55">
        <article v-for="faq in faqs" :key="faq.id">
          <h3>
            <button
              type="button"
              class="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left font-semibold text-white transition hover:bg-white/[0.03] sm:px-6"
              :aria-expanded="openItem === faq.id"
              :aria-controls="`answer-${faq.id}`"
              @click="openItem = openItem === faq.id ? null : faq.id"
            >
              <span>{{ faq.question }}</span>
              <ChevronDown :size="20" class="shrink-0 text-brand-cyan transition-transform duration-300" :class="openItem === faq.id ? 'rotate-180' : ''" aria-hidden="true" />
            </button>
          </h3>
          <div :id="`answer-${faq.id}`" class="grid transition-[grid-template-rows] duration-300" :class="openItem === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
            <div class="overflow-hidden">
              <p class="px-5 pb-5 leading-7 text-muted-dark sm:px-6 sm:pb-6">{{ faq.answer }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
