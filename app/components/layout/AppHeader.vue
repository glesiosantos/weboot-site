<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const { navigation, contactLinks } = useLandingPage()
const isScrolled = ref(false)
const menuOpen = ref(false)

const updateScrollState = () => { isScrolled.value = globalThis.scrollY > 20 }
const closeMenu = () => { menuOpen.value = false }
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}
const handleResize = () => {
  if (globalThis.innerWidth >= 1024) closeMenu()
}

watch(menuOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  updateScrollState()
  globalThis.addEventListener('scroll', updateScrollState, { passive: true })
  globalThis.addEventListener('keydown', handleKeydown)
  globalThis.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  globalThis.removeEventListener('scroll', updateScrollState)
  globalThis.removeEventListener('keydown', handleKeydown)
  globalThis.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b transition duration-300" :class="isScrolled ? 'border-subtle bg-background/90 shadow-lg shadow-black/10 backdrop-blur-xl' : 'border-transparent bg-background/45 backdrop-blur-md'">
    <a href="#main-content" class="absolute left-4 top-2 z-[60] -translate-y-20 rounded-lg bg-white px-4 py-2 font-semibold text-background transition focus:translate-y-0">Pular para o conteúdo</a>
    <div class="page-container flex h-[4.5rem] items-center justify-between gap-6">
      <a href="#inicio" class="shrink-0" aria-label="Weboot — ir para o início">
        <NuxtImg src="/images/logo-weboot-white.svg" alt="Weboot" width="140" height="36" class="h-8 w-auto" preload />
      </a>

      <nav class="hidden lg:block" aria-label="Navegação principal">
        <ul class="flex items-center gap-1 xl:gap-2">
          <li v-for="item in navigation" :key="item.href">
            <a :href="item.href" class="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-white">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <UiBaseButton :href="contactLinks.whatsapp" external class="hidden xl:inline-flex">
        Fale com um especialista
      </UiBaseButton>

      <button
        type="button"
        class="grid size-12 place-items-center rounded-xl border border-subtle text-white transition hover:bg-white/5 lg:hidden"
        aria-label="Abrir menu"
        aria-controls="mobile-navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <component :is="menuOpen ? X : Menu" :size="23" aria-hidden="true" />
      </button>
    </div>
    <UiMobileMenu :open="menuOpen" :items="navigation" :cta-href="contactLinks.whatsapp" @close="menuOpen = false" />
  </header>
</template>
