<script setup lang="ts">
import type { PortfolioProject } from '~/data/portfolio'
defineProps<{ status?: PortfolioProject['status'] }>()
const labels = {
  completed: 'Concluído',
  'in-development': 'Em desenvolvimento',
  inactive: 'Inativo no momento',
  private: 'Projeto privado',
  demonstrative: 'Projeto demonstrativo'
}
</script>

<template>
  <span v-if="status" class="inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
    {{ labels[status] }}
  </span>
</template>
