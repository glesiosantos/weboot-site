<script setup lang="ts">
useSeoMeta({
  title: 'Treinamentos | Weboot',
  description: 'Treinamentos práticos da Weboot em SQL, APIs REST, Docker e automação com n8n.',
  ogTitle: 'Treinamentos | Weboot',
  ogDescription: 'Treinamentos práticos em desenvolvimento e automação.',
  ogImage: 'https://weboot.com.br/images/og-weboot.svg'
})
useHead({ link: [{ rel: 'canonical', href: 'https://weboot.com.br/treinamentos' }] })
</script>

<template>
  <div>
    <LayoutAppHeader />
    <main id="main-content">
      <section class="border-b border-slate-200 bg-slate-50 py-14 sm:py-20"><div class="page-container"><p class="eyebrow">Conhecimento aplicado</p><h1 class="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Treinamentos práticos em desenvolvimento e tecnologia</h1><p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Conteúdos para estudantes, profissionais e equipes que desejam aplicar tecnologia no dia a dia.</p></div></section>
      <SectionsTrainingSection />
    </main>
    <LayoutAppFooter />
    <WhatsappWhatsAppFloatingButton />
  </div>
</template>
