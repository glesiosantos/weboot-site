<script setup lang="ts">
const { testimonials } = useLandingPage()
</script>

<template>
  <section id="testimonials" class="section-space bg-background">
    <div class="page-container">
      <UiSectionHeader label="Experiências" title="Parcerias construídas com confiança" description="Amostras de conteúdo para demonstrar como histórias reais de clientes serão apresentadas." class="reveal" />
      <div class="mx-auto mt-12 grid max-w-5xl gap-5 lg:mt-16">
        <UiTestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" class="reveal" />
      </div>
      <p class="mt-5 text-center text-xs text-muted-dark">Depoimentos demonstrativos — substituir por relatos reais e autorizados antes da publicação.</p>
    </div>
  </section>
</template>
