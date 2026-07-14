<script setup lang="ts">
const { stats } = useLandingPage()
</script>

<template>
  <section aria-label="Indicadores da Weboot" class="border-y border-subtle bg-background-soft/80">
    <div class="page-container grid grid-cols-2 divide-x divide-y divide-subtle sm:divide-y-0 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.id" class="flex min-h-36 flex-col items-center justify-center px-3 py-7 text-center sm:min-h-40 sm:px-6">
        <component :is="stat.icon" :size="23" class="mb-3 text-brand-cyan" :stroke-width="1.8" aria-hidden="true" />
        <strong class="text-2xl font-bold text-white sm:text-3xl">{{ stat.value }}</strong>
        <span class="mt-1 text-sm text-muted-dark sm:text-base">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>
