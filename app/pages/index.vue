<script setup lang="ts">
useSeoMeta({
  title: 'Weboot | Sites, Sistemas, APIs e Automações',
  description: 'A Weboot desenvolve sites institucionais, projetos web personalizados, APIs REST, manutenção WordPress e automações inteligentes para empresas.',
  ogTitle: 'Weboot | Sites, Sistemas, APIs e Automações',
  ogDescription: 'Tecnologia que impulsiona o futuro da sua empresa. Sites, sistemas, APIs, integrações e automações sob medida.',
  ogType: 'website',
  ogImage: 'https://weboot.com.br/images/og-weboot.svg',
  ogImageAlt: 'Weboot — Tecnologia que impulsiona o futuro da sua empresa',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://weboot.com.br/' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Weboot',
      url: 'https://weboot.com.br/',
      email: 'contato@weboot.com.br',
      description: 'Desenvolvimento de sites, sistemas web, APIs REST, integrações e automações.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Teresina',
        addressRegion: 'PI',
        addressCountry: 'BR'
      },
      areaServed: 'BR'
    })
  }]
})

useScrollReveal()
</script>

<template>
  <div>
    <LayoutAppHeader />
    <main id="main-content">
      <SectionsHeroSection />
      <SectionsStatsSection />
      <SectionsServicesSection />
      <SectionsBenefitsSection />
      <SectionsProcessSection />
      <SectionsPortfolioSection />
      <SectionsTestimonialsSection />
      <SectionsFaqSection />
      <SectionsContactSection />
      <SectionsFinalCtaSection />
    </main>
    <LayoutAppFooter />
  </div>
</template>
