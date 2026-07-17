<script setup lang="ts">
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const whatsappUrl = computed(() => createWhatsAppUrl('Olá! Conheci a Weboot pelo site e gostaria de conversar sobre um projeto.'))
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com a Weboot pelo WhatsApp"
    class="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-[#1fba59] focus-visible:ring-green-300 md:h-auto md:w-auto md:gap-3 md:px-5 md:py-3"
    style="bottom: calc(1.25rem + env(safe-area-inset-bottom)); right: calc(1.25rem + env(safe-area-inset-right));"
    @click="trackWhatsAppClick('floating-button')"
  >
    <svg viewBox="0 0 32 32" class="size-7 fill-current" aria-hidden="true">
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.66 1.83-1.29.23-.64.23-1.2.16-1.29-.07-.11-.25-.18-.52-.32M16.04 27.46h-.01a11.4 11.4 0 0 1-5.81-1.59l-.42-.25-4.32 1.13 1.15-4.21-.27-.43a11.42 11.42 0 1 1 9.68 5.35m9.72-21.13A13.65 13.65 0 0 0 16.03 2.3 13.68 13.68 0 0 0 4.19 22.82L2.25 29.9l7.25-1.9a13.68 13.68 0 0 0 6.53 1.66h.01A13.69 13.69 0 0 0 25.76 6.33"/>
    </svg>
    <span class="hidden text-sm font-bold md:inline">Fale pelo WhatsApp</span>
  </a>
</template>
