<script setup lang="ts">
import { projects, type PortfolioCategory } from '~/data/portfolio'
const activeCategory = ref<PortfolioCategory>('all')
const filteredProjects = computed(() => activeCategory.value === 'all' ? projects : projects.filter(project => project.category === activeCategory.value))
</script>

<template>
  <section id="projetos" class="section-space bg-slate-50">
    <div class="page-container">
      <UiSectionHeader label="Portfólio" title="Trabalhos e projetos realizados" description="Conheça alguns dos sites, sistemas, APIs e automações desenvolvidos pela Weboot." />
      <PortfolioTabs v-model="activeCategory" class="mt-10" />
      <PortfolioCarousel :projects="filteredProjects" class="mt-6" />
    </div>
  </section>
</template>
