<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import type { Testimonial } from '~/types/landing-page'

defineProps<{ testimonial: Testimonial }>()
</script>

<template>
  <article class="grid min-h-52 rounded-2xl border border-subtle bg-surface/60 p-6 shadow-lg shadow-black/10 sm:grid-cols-[14rem_1fr] sm:items-center sm:gap-8 sm:p-8">
    <footer class="flex items-center gap-4 sm:border-r sm:border-subtle sm:pr-8">
      <div class="grid size-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white" aria-hidden="true">
        {{ testimonial.initials }}
      </div>
      <div>
        <cite class="not-italic font-semibold text-white">{{ testimonial.name }}</cite>
        <p class="text-sm text-muted-dark">{{ testimonial.role }} · {{ testimonial.company }}</p>
      </div>
    </footer>
    <div class="mt-6 border-t border-subtle pt-6 sm:mt-0 sm:border-0 sm:pt-0">
      <div class="flex gap-1 text-amber-400" aria-label="5 de 5 estrelas">
        <Star v-for="star in 5" :key="star" :size="17" fill="currentColor" aria-hidden="true" />
      </div>
      <blockquote class="mt-4 text-lg leading-8 text-muted">“{{ testimonial.quote }}”</blockquote>
    </div>
  </article>
</template>
