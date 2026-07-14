<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'outline' | 'whatsapp'
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
    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:px-6 sm:text-base"
    :class="{
      'bg-brand-gradient text-white shadow-lg shadow-brand/20 hover:brightness-110': variant === 'primary',
      'border border-white/20 bg-white/[0.03] text-white hover:border-brand-light/60 hover:bg-white/[0.07]': variant === 'outline',
      'bg-success text-white shadow-lg shadow-success/15 hover:bg-green-500': variant === 'whatsapp'
    }"
  >
    <slot />
    <ArrowRight v-if="showArrow" :size="18" aria-hidden="true" />
  </a>
</template>
