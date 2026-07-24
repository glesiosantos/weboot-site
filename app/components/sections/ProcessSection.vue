<script setup lang="ts">
const steps = [
  ['01', 'Entendimento', 'Conhecemos o negócio, o público e o objetivo do projeto.'],
  ['02', 'Planejamento e design', 'Organizamos escopo, experiência, prioridades, prazo e tecnologia.'],
  ['03', 'Desenvolvimento', 'Construímos, integramos e testamos a solução.'],
  ['04', 'Publicação e suporte', 'Publicamos o projeto, orientamos a equipe e acompanhamos sua evolução.']
]
</script>

<template>
  <section id="como-trabalhamos" class="section-space bg-white">
    <div class="page-container">
      <UiSectionHeader label="Como trabalhamos" title="Um processo claro do primeiro contato ao suporte" align="left" />
      <ol class="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <li v-for="[number, title, text] in steps" :key="number" class="relative border-t border-slate-300 pt-6">
          <span class="text-4xl font-bold text-blue-100">{{ number }}</span>
          <h3 class="mt-4 text-lg font-bold text-slate-950">{{ title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
