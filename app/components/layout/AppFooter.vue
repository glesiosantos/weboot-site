<script setup lang="ts">
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-vue-next'

const { navigation, contactLinks } = useLandingPage()
const year = new Date().getFullYear()
const serviceLinks = [
  { label: 'Sites institucionais', href: '#services' },
  { label: 'Sistemas personalizados', href: '#services' },
  { label: 'APIs REST', href: '#services' },
  { label: 'Automações e IA', href: '#services' },
  { label: 'Consultoria', href: '#contact' }
]
</script>

<template>
  <footer class="border-t border-subtle bg-background-soft pt-16">
    <div class="page-container grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1.15fr]">
      <div>
        <NuxtImg src="/images/logo-weboot-white.svg" alt="Weboot" width="148" height="38" class="h-9 w-auto" loading="lazy" />
        <p class="mt-5 max-w-sm leading-7 text-muted-dark">Engenharia de software, sites, integrações e automações para empresas que querem evoluir com segurança.</p>
        <div class="mt-6 flex gap-2">
          <a href="#" aria-label="Instagram da Weboot" class="grid size-11 place-items-center rounded-lg border border-subtle text-muted transition hover:border-brand-light/50 hover:text-white"><Instagram :size="19" aria-hidden="true" /></a>
          <a href="#" aria-label="LinkedIn da Weboot" class="grid size-11 place-items-center rounded-lg border border-subtle text-muted transition hover:border-brand-light/50 hover:text-white"><Linkedin :size="19" aria-hidden="true" /></a>
          <a href="#" aria-label="GitHub da Weboot" class="grid size-11 place-items-center rounded-lg border border-subtle text-muted transition hover:border-brand-light/50 hover:text-white"><Github :size="19" aria-hidden="true" /></a>
        </div>
      </div>
      <div>
        <h2 class="font-semibold text-white">Navegação</h2>
        <ul class="mt-5 space-y-3">
          <li v-for="item in navigation.slice(0, 6)" :key="item.href"><a :href="item.href" class="text-muted-dark transition hover:text-brand-cyan">{{ item.label }}</a></li>
        </ul>
      </div>
      <div>
        <h2 class="font-semibold text-white">Serviços</h2>
        <ul class="mt-5 space-y-3">
          <li v-for="item in serviceLinks" :key="item.label"><a :href="item.href" class="text-muted-dark transition hover:text-brand-cyan">{{ item.label }}</a></li>
        </ul>
      </div>
      <div>
        <h2 class="font-semibold text-white">Contato</h2>
        <ul class="mt-5 space-y-4 text-muted-dark">
          <li class="flex gap-3"><MapPin :size="19" class="mt-0.5 shrink-0 text-brand-cyan" aria-hidden="true" /> {{ contactLinks.location }}</li>
          <li><a :href="contactLinks.email" class="flex gap-3 break-all transition hover:text-white"><Mail :size="19" class="mt-0.5 shrink-0 text-brand-cyan" aria-hidden="true" /> contato@weboot.com.br</a></li>
          <li><a :href="contactLinks.whatsapp" target="_blank" rel="noopener noreferrer" class="flex gap-3 transition hover:text-white"><Phone :size="19" class="mt-0.5 shrink-0 text-brand-cyan" aria-hidden="true" /> {{ contactLinks.phoneDisplay }}</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-subtle">
      <div class="page-container flex flex-col gap-4 py-6 text-sm text-muted-dark sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Weboot. Todos os direitos reservados.</p>
        <nav aria-label="Links legais" class="flex flex-wrap gap-x-5 gap-y-2">
          <a href="#" class="hover:text-white">Política de Privacidade</a>
          <a href="#" class="hover:text-white">Termos de Uso</a>
          <a href="#" class="hover:text-white">LGPD</a>
        </nav>
      </div>
    </div>
  </footer>
</template>
