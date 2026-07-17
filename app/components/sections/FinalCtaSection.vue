<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const url = computed(() => createWhatsAppUrl('Olá! Gostaria de conversar com um especialista sobre um projeto para minha empresa.'))
</script>

<template>
  <section id="contato" class="bg-white px-4 pb-16 sm:px-6 sm:pb-20">
    <div class="mx-auto max-w-7xl rounded-2xl bg-blue-700 px-6 py-14 text-center text-white sm:px-10 sm:py-16">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar sobre o seu projeto?</h2>
      <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Conte o que sua empresa precisa. Podemos ajudar desde a criação de um site até o desenvolvimento de uma solução personalizada.</p>
      <UiBaseButton :href="url" external variant="whatsapp" class="mt-8" @click="trackWhatsAppClick('footer', 'final-cta')"><MessageCircle :size="19" />Falar com um especialista pelo WhatsApp</UiBaseButton>
      <p class="mt-4 text-sm text-blue-100">Atendimento direto, sem formulário e sem compromisso.</p>
    </div>
  </section>
</template>
