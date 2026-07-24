<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const url = computed(() => createWhatsAppUrl('Olá! Conheci a Weboot pelo site e gostaria de solicitar um orçamento.'))
</script>

<template>
  <section id="contato" class="bg-white px-4 pb-16 sm:px-6 sm:pb-20">
    <div class="mx-auto max-w-7xl rounded-2xl bg-blue-700 px-6 py-14 text-center text-white sm:px-10 sm:py-16">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Vamos transformar sua necessidade em uma solução digital?</h2>
      <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Conte o que sua empresa precisa e converse diretamente com a Weboot pelo WhatsApp.</p>
      <UiBaseButton :href="url" external variant="whatsapp" class="mt-8" @click="trackWhatsAppClick('footer', 'final-cta')"><MessageCircle :size="19" />Solicitar orçamento pelo WhatsApp</UiBaseButton>
      <p class="mt-4 text-sm text-blue-100">Atendimento direto, sem formulário e sem compromisso.</p>
    </div>
  </section>
</template>
