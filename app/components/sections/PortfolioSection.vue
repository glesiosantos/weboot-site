<script setup lang="ts">
const { projects } = useLandingPage()
</script>

<template>
  <section id="portfolio" class="section-space bg-background-soft">
    <div class="page-container">
      <UiSectionHeader label="Projetos que geram impacto" title="Cases de sucesso" description="Soluções que transformam empresas e impulsionam resultados." class="reveal" />
      <p class="mx-auto mt-4 max-w-xl text-center text-xs text-muted-dark">Conteúdo visual demonstrativo — os projetos reais serão incluídos antes da publicação.</p>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
        <UiPortfolioCard v-for="project in projects" :key="project.id" :project="project" class="reveal" />
      </div>
    </div>
  </section>
</template>
