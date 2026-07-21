<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
const benefits = ['Atendimento direto', 'Escopo transparente', 'Código organizado', 'Design responsivo', 'Testes antes da publicação', 'Suporte após a entrega']
</script>

<template>
  <section class="section-space bg-blue-50">
    <div class="page-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div><p class="eyebrow">Compromissos da Weboot</p><h2 class="section-title">Confiança construída durante todo o projeto</h2><p class="section-copy">Enquanto não publicamos depoimentos autorizados, apresentamos os compromissos que orientam cada entrega.</p></div>
      <ul class="grid gap-3 sm:grid-cols-2">
        <li v-for="benefit in benefits" :key="benefit" class="flex min-h-14 items-center gap-3 rounded-lg bg-white px-4 py-3 font-semibold text-slate-700"><CheckCircle2 :size="20" class="shrink-0 text-blue-600" />{{ benefit }}</li>
      </ul>
    </div>
  </section>
</template>
