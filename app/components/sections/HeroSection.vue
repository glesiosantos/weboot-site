<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const whatsappUrl = computed(() => createWhatsAppUrl('Olá! Conheci a Weboot pelo site e gostaria de solicitar um orçamento.'))
</script>

<template>
  <section id="inicio" class="overflow-hidden border-b border-slate-200 bg-white py-14 sm:py-20 lg:py-24">
    <div class="page-container grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
      <div>
        <p class="eyebrow">Sites • Projetos • Automações</p>
        <h1 class="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.45rem]">Sites, projetos sob medida e automações para empresas que querem crescer com tecnologia.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Desenvolvemos sites profissionais, lojas virtuais, sistemas personalizados e automações integradas ao WhatsApp, pagamentos e ferramentas da sua empresa.</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiBaseButton :href="whatsappUrl" external variant="whatsapp" class="w-full sm:w-auto" @click="trackWhatsAppClick('hero')"><MessageCircle :size="19" aria-hidden="true" /> Solicitar orçamento pelo WhatsApp</UiBaseButton>
          <UiBaseButton href="#cases" variant="secondary" class="w-full sm:w-auto">Conhecer nossos cases</UiBaseButton>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[620px] pb-10" aria-label="Prévia visual de projetos da Weboot">
        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,.15)]">
          <div class="flex h-10 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4" aria-hidden="true"><span class="size-2.5 rounded-full bg-red-400" /><span class="size-2.5 rounded-full bg-amber-400" /><span class="size-2.5 rounded-full bg-green-400" /><span class="ml-3 h-4 flex-1 rounded bg-slate-200" /></div>
          <NuxtImg src="/images/portfolio/api.svg" alt="Prévia visual do Augile, automação para oficinas" width="900" height="563" preload class="aspect-[16/10] w-full object-cover" />
        </div>
        <div class="absolute -bottom-1 right-3 w-[34%] overflow-hidden rounded-[1.35rem] border-[6px] border-slate-900 bg-white shadow-xl sm:right-7">
          <NuxtImg src="/images/portfolio/wordpress.svg" alt="Prévia visual do portal CREA-PI" width="360" height="600" preload class="aspect-[3/5] w-full object-cover" />
        </div>
        <!-- <p class="absolute bottom-1 left-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-lg sm:left-[-1.5rem]">Augile + CREA-PI</p> -->
      </div>
    </div>
  </section>
</template>
