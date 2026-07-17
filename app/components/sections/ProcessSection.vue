<script setup lang="ts">
const steps = [
  ['01', 'Entendimento', 'Conversamos para conhecer a empresa, o público e o objetivo do projeto.'],
  ['02', 'Planejamento', 'Definimos escopo, estrutura, tecnologia, prazo e prioridades.'],
  ['03', 'Design', 'Criamos a experiência visual e validamos a organização das páginas.'],
  ['04', 'Desenvolvimento', 'Construímos, integramos e testamos a solução.'],
  ['05', 'Entrega e suporte', 'Publicamos o projeto, orientamos sua equipe e acompanhamos os próximos passos.']
]
</script>

<template>
  <section id="como-trabalhamos" class="section-space bg-white">
    <div class="page-container">
      <UiSectionHeader label="Como trabalhamos" title="Um processo claro do primeiro contato até a entrega" />
      <ol class="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        <li v-for="[number, title, text] in steps" :key="number" class="relative border-t border-slate-300 pt-6">
          <span class="text-4xl font-bold text-blue-100">{{ number }}</span>
          <h3 class="mt-4 text-lg font-bold text-slate-950">{{ title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
