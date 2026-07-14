<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { Service } from '~/types/landing-page'

defineProps<{ service: Service }>()
</script>

<template>
  <article class="group flex h-full min-h-[20rem] flex-col rounded-2xl border border-subtle bg-gradient-to-br from-surface-light/80 to-surface/40 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-brand-light/40 hover:shadow-xl hover:shadow-brand/10 sm:p-7">
    <div class="mb-6 grid size-12 place-items-center rounded-xl border border-brand-light/20 bg-brand/10 text-brand-cyan transition group-hover:bg-brand/20">
      <component :is="service.icon" :size="24" :stroke-width="1.8" aria-hidden="true" />
    </div>
    <h3 class="text-xl font-semibold text-white">{{ service.title }}</h3>
    <p class="mt-3 flex-1 leading-7 text-muted-dark">{{ service.description }}</p>
    <a :href="service.href" class="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-brand-light transition hover:text-brand-cyan">
      Saiba mais <ArrowUpRight :size="17" aria-hidden="true" />
    </a>
  </article>
</template>
