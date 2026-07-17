<script setup lang="ts">
import { Check, MessageCircle } from 'lucide-vue-next'

const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const whatsappUrl = computed(() => createWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para um projeto digital.'))
</script>

<template>
  <section id="inicio" class="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
    <div class="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,.09),transparent_38%)]" />
    <div class="page-container grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
      <div>
        <p class="eyebrow">Desenvolvimento web sob medida</p>
        <h1 class="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
          Sites profissionais e soluções digitais desenvolvidas para o seu negócio
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Criamos sites institucionais, landing pages, lojas virtuais, sistemas personalizados, APIs e automações para empresas que precisam vender, organizar processos e atender melhor seus clientes.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiBaseButton :href="whatsappUrl" external variant="whatsapp" class="w-full sm:w-auto" @click="trackWhatsAppClick('hero')">
            <MessageCircle :size="19" aria-hidden="true" /> Solicitar orçamento pelo WhatsApp
          </UiBaseButton>
          <UiBaseButton href="#projetos" variant="secondary" class="w-full sm:w-auto">Conhecer nossos trabalhos</UiBaseButton>
        </div>
        <p class="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
          <span v-for="item in ['Atendimento personalizado', 'Projeto sob medida', 'Suporte após a entrega']" :key="item" class="inline-flex items-center gap-2">
            <Check :size="16" class="text-blue-600" aria-hidden="true" /> {{ item }}
          </span>
        </p>
      </div>

      <div class="relative mx-auto w-full max-w-[620px]" aria-label="Composição de projetos digitais da Weboot">
        <div class="rounded-2xl border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-300/50 sm:p-3">
          <div class="overflow-hidden rounded-xl bg-white">
            <div class="flex h-9 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4">
              <span v-for="color in ['bg-red-400','bg-amber-400','bg-green-400']" :key="color" class="size-2.5 rounded-full" :class="color" />
              <span class="ml-3 h-4 flex-1 rounded bg-slate-200" />
            </div>
            <div class="grid min-h-[320px] grid-cols-[1fr_.72fr] gap-4 p-5 sm:min-h-[390px] sm:p-7">
              <div>
                <div class="h-3 w-24 rounded bg-blue-600" />
                <div class="mt-6 h-7 w-full rounded bg-slate-900" />
                <div class="mt-3 h-7 w-4/5 rounded bg-slate-900" />
                <div class="mt-5 space-y-2"><div class="h-2.5 rounded bg-slate-200" /><div class="h-2.5 w-5/6 rounded bg-slate-200" /></div>
                <div class="mt-6 h-10 w-36 rounded-lg bg-blue-600" />
                <div class="mt-8 grid grid-cols-2 gap-3"><div class="h-20 rounded-xl bg-blue-50" /><div class="h-20 rounded-xl bg-slate-100" /></div>
              </div>
              <div class="overflow-hidden rounded-xl bg-blue-50 p-3"><div class="h-full rounded-lg bg-gradient-to-br from-blue-100 to-white" /></div>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-7 right-2 w-28 rounded-[1.25rem] border-[5px] border-slate-950 bg-white p-2 shadow-xl sm:right-5 sm:w-36">
          <div class="h-3 w-10 rounded bg-slate-200" /><div class="mt-5 h-16 rounded-lg bg-green-50" /><div class="mt-3 h-2 rounded bg-slate-200" /><div class="mt-2 h-8 rounded-lg bg-[#25D366]" />
        </div>
        <div class="absolute -left-2 bottom-7 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-6">
          <strong class="block text-sm text-slate-900">Site + loja + sistema</strong><span class="text-xs text-slate-500">Experiências responsivas</span>
        </div>
      </div>
    </div>
  </section>
</template>
