<script setup lang="ts">
useSeoMeta({
  title: 'Weboot | Desenvolvimento de Sites, Sistemas e Automações',
  description: 'Desenvolvimento de sites profissionais, lojas virtuais, sistemas personalizados e automações com WhatsApp, n8n e APIs.',
  ogTitle: 'Weboot | Desenvolvimento de Sites, Sistemas e Automações',
  ogDescription: 'Desenvolvimento de sites profissionais, lojas virtuais, sistemas personalizados e automações com WhatsApp, n8n e APIs.',
  ogType: 'website',
  ogImage: 'https://weboot.com.br/images/og-weboot.svg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Weboot — Sites, projetos e automações',
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
      <SectionsFeaturedCase />
      <SectionsPortfolioSection />
      <SectionsProcessSection />
      <SectionsBenefitsSection />
      <SectionsFaqSection />
      <SectionsFinalCtaSection />
    </main>
    <LayoutAppFooter />
    <WhatsappWhatsAppFloatingButton />
  </div>
</template>
