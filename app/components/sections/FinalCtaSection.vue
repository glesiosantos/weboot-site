<script setup lang="ts">
import { MessageCircleMore } from 'lucide-vue-next'

const { contactLinks } = useLandingPage()
</script>

<template>
  <section class="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="relative mx-auto max-w-7xl overflow-hidden rounded-[1.25rem] border border-white/15 bg-gradient-to-br from-brand/90 via-brand-light/80 to-brand-purple/90 px-5 py-14 text-center shadow-2xl shadow-brand/15 sm:px-10 sm:py-16 lg:py-20">
      <div class="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div class="absolute -left-20 -top-28 size-80 rounded-full bg-brand-cyan/30 blur-3xl" /><div class="absolute -bottom-32 -right-20 size-80 rounded-full bg-brand-purple/45 blur-3xl" />
      <div class="relative mx-auto max-w-3xl reveal">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Tecnologia que impulsiona o futuro da sua empresa</p>
        <h2 class="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Pronto para transformar seu negócio com tecnologia?</h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Converse com a Weboot e descubra a melhor solução digital para alcançar os objetivos da sua empresa.</p>
        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <UiBaseButton href="#contact" variant="outline" class="border-white/35 bg-background/25 hover:bg-background/40">Fale com um especialista</UiBaseButton>
          <UiBaseButton :href="contactLinks.whatsapp" variant="whatsapp" external><MessageCircleMore :size="19" aria-hidden="true" /> Falar no WhatsApp</UiBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
