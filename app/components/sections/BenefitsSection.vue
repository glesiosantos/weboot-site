<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
const benefits = ['Atendimento direto', 'Linguagem clara', 'Projeto pensado para o objetivo da empresa', 'Design responsivo', 'Código organizado', 'Acompanhamento durante o desenvolvimento', 'Suporte após a entrega', 'Possibilidade de evolução do projeto']
</script>

<template>
  <section class="section-space bg-blue-50">
    <div class="page-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div><p class="eyebrow">Uma parceria próxima</p><h2 class="section-title">O que você pode esperar ao trabalhar com a Weboot</h2><p class="section-copy">Decisões explicadas com clareza, acompanhamento durante o projeto e uma solução construída para o contexto da sua empresa.</p></div>
      <ul class="grid gap-3 sm:grid-cols-2">
        <li v-for="benefit in benefits" :key="benefit" class="flex min-h-14 items-center gap-3 rounded-lg bg-white px-4 py-3 font-semibold text-slate-700"><CheckCircle2 :size="20" class="shrink-0 text-blue-600" />{{ benefit }}</li>
      </ul>
    </div>
  </section>
</template>
