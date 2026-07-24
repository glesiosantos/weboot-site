<script setup lang="ts">
import { Menu } from 'lucide-vue-next'

const { navigation } = useLandingPage()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const menuOpen = ref(false)
const whatsappUrl = computed(() => createWhatsAppUrl('Olá! Conheci a Weboot pelo site e gostaria de solicitar um orçamento.'))

const closeMenu = () => { menuOpen.value = false }
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => globalThis.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  globalThis.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white">
    <a href="#main-content" class="absolute left-4 top-2 z-[60] -translate-y-20 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition focus:translate-y-0">
      Pular para o conteúdo
    </a>
    <div class="page-container flex h-[4.75rem] items-center justify-between gap-5">
      <NuxtLink to="/#inicio" class="shrink-0" aria-label="Weboot — ir para o início">
        <NuxtImg src="/images/weboot_logo.png" alt="Weboot" width="226" height="30" class="h-auto w-[168px] object-contain sm:w-[190px]" preload />
      </NuxtLink>

      <nav class="hidden lg:block" aria-label="Navegação principal">
        <ul class="flex items-center gap-1">
          <li v-for="item in navigation" :key="item.href">
            <a :href="item.href" class="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-blue-700">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <UiBaseButton
        :href="whatsappUrl"
        external
        variant="whatsapp"
        class="hidden xl:inline-flex"
        @click="trackWhatsAppClick('header')"
      >
        Falar no WhatsApp
      </UiBaseButton>

      <button
        type="button"
        class="grid size-12 place-items-center rounded-lg border border-slate-300 text-slate-800 transition hover:bg-slate-50 lg:hidden"
        aria-label="Abrir menu"
        aria-controls="mobile-navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = true"
      >
        <Menu :size="24" aria-hidden="true" />
      </button>
    </div>
    <UiMobileMenu :open="menuOpen" :items="navigation" :cta-href="whatsappUrl" @close="closeMenu" />
  </header>
</template>
