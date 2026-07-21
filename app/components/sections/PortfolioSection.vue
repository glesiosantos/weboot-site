<script setup lang="ts">
import { projects, type PortfolioCategory } from '~/data/portfolio'
import { filterProjects } from '~/utils/portfolio'
const activeCategory = ref<PortfolioCategory>('all')
const filteredProjects = computed(() => filterProjects(projects, activeCategory.value))
</script>

<template>
  <section id="projetos" class="section-space bg-slate-50">
    <div class="page-container">
      <UiSectionHeader label="Portfólio" title="Projetos reais, produtos próprios e estudos demonstrativos" description="Cada item informa com clareza sua categoria e situação atual." align="left" />
      <PortfolioTabs v-model="activeCategory" class="mt-10" />
      <PortfolioCarousel :projects="filteredProjects" class="mt-6" />
    </div>
  </section>
</template>
