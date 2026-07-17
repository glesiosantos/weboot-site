<script setup lang="ts">
const { trustItems } = useLandingPage()
</script>

<template>
  <section aria-label="Diferenciais da Weboot" class="border-b border-slate-200 bg-slate-50">
    <div class="page-container grid grid-cols-2 py-6 lg:grid-cols-4">
      <div v-for="(item, index) in trustItems" :key="item.label" class="flex min-h-16 items-center gap-3 px-3 py-3 sm:px-5 lg:border-r lg:last:border-r-0" :class="{ 'border-r border-slate-200': index % 2 === 0 }">
        <component :is="item.icon" :size="21" class="shrink-0 text-blue-600" :stroke-width="1.8" aria-hidden="true" />
        <span class="text-sm font-semibold leading-5 text-slate-700">{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>
