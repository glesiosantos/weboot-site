<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary' | 'whatsapp'
  external?: boolean
  showArrow?: boolean
}>(), {
  variant: 'primary',
  external: false,
  showArrow: false
})
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-bold transition duration-200 hover:-translate-y-0.5 sm:px-6 sm:text-base"
    :class="{
      'bg-blue-600 text-white shadow-sm hover:bg-blue-700': variant === 'primary' || variant === 'whatsapp',
      'border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700': variant === 'secondary',
    }"
  >
    <slot />
    <ArrowRight v-if="showArrow" :size="18" aria-hidden="true" />
  </a>
</template>
