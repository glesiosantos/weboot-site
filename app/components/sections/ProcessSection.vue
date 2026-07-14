<script setup lang="ts">
const { processSteps } = useLandingPage()
</script>

<template>
  <section id="about" class="section-space border-y border-subtle bg-background-elevated/65">
    <div class="page-container">
      <UiSectionHeader label="Como trabalhamos" title="Um processo claro, do desafio ao resultado" description="Estratégia, design e engenharia trabalhando juntos em cada etapa." class="reveal" />
      <ol class="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-4">
        <div class="absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-brand/20 via-brand-cyan/70 to-brand-purple/20 lg:block" aria-hidden="true" />
        <li v-for="step in processSteps" :key="step.id" class="reveal relative grid grid-cols-[4.5rem_1fr] gap-5 lg:block lg:text-center">
          <div class="relative z-10 grid size-[4.5rem] place-items-center rounded-2xl border border-brand-light/30 bg-background-elevated text-brand-cyan shadow-lg shadow-brand/10 lg:mx-auto">
            <component :is="step.icon" :size="25" :stroke-width="1.7" aria-hidden="true" />
            <span class="absolute -right-2 -top-2 rounded-full bg-brand px-2 py-1 text-[10px] font-bold text-white">{{ step.number }}</span>
          </div>
          <div class="pb-3 lg:mt-6 lg:px-2">
            <h3 class="text-lg font-semibold text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-muted-dark">{{ step.description }}</p>
          </div>
          <div class="absolute bottom-[-2rem] left-9 top-[4.5rem] w-px bg-brand-light/25 lg:hidden" aria-hidden="true" />
        </li>
      </ol>
    </div>
  </section>
</template>
