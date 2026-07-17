<script setup lang="ts">
import { portfolioCategories, type PortfolioCategory } from '~/data/portfolio'
defineProps<{ modelValue: PortfolioCategory }>()
const emit = defineEmits<{ 'update:modelValue': [value: PortfolioCategory] }>()
</script>

<template>
  <div role="tablist" aria-label="Filtrar projetos por categoria" class="hide-scrollbar flex gap-2 overflow-x-auto pb-2">
    <button
      v-for="category in portfolioCategories"
      :key="category.value"
      type="button"
      role="tab"
      :aria-selected="modelValue === category.value"
      :tabindex="modelValue === category.value ? 0 : -1"
      class="min-h-11 shrink-0 rounded-full border px-4 text-sm font-bold transition"
      :class="modelValue === category.value ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'"
      @click="emit('update:modelValue', category.value)"
    >
      {{ category.label }}
    </button>
  </div>
</template>
