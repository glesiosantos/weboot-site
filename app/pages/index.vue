<script setup lang="ts">
useSeoMeta({
  title: 'Weboot | Sites, E-commerce, Sistemas, APIs e Automações',
  description: 'Criação de sites institucionais, landing pages, e-commerce, manutenção WordPress, sistemas personalizados, APIs REST, automações com n8n e treinamentos.',
  ogTitle: 'Weboot | Sites, E-commerce, Sistemas, APIs e Automações',
  ogDescription: 'Sites, lojas virtuais, sistemas, APIs e automações desenvolvidos sob medida para empresas.',
  ogType: 'website',
  ogImage: 'https://weboot.com.br/images/weboot_logo.png',
  ogImageAlt: 'Weboot — desenvolvimento web sob medida',
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
      description: 'Desenvolvimento de sites, e-commerce, sistemas, APIs REST, integrações e automações.',
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
      <SectionsTrustBar />
      <SectionsServicesSection />
      <SectionsWebsiteSolutionsSection />
      <SectionsWordPressSection />
      <SectionsCustomSolutionsSection />
      <SectionsProcessSection />
      <SectionsPortfolioSection />
      <SectionsTrainingSection />
      <SectionsBenefitsSection />
      <SectionsFaqSection />
      <SectionsFinalCtaSection />
    </main>
    <LayoutAppFooter />
    <WhatsappWhatsAppFloatingButton />
  </div>
</template>
