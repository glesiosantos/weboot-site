<script setup lang="ts">
const { services } = useLandingPage()
</script>

<template>
  <section id="services" class="section-space bg-background-soft">
    <div class="page-container">
      <UiSectionHeader label="Nossas soluções" title="Tecnologia completa para cada desafio" description="Oferecemos soluções sob medida para impulsionar sua presença digital, automatizar processos e conectar sistemas." class="reveal" />
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <UiServiceCard v-for="service in services" :key="service.id" :service="service" class="reveal" />
      </div>
    </div>
  </section>
</template>
