<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { PortfolioProject } from '~/types/landing-page'

defineProps<{ project: PortfolioProject }>()
</script>

<template>
  <article class="group overflow-hidden rounded-2xl border border-subtle bg-surface/70">
    <div class="relative aspect-[16/10] overflow-hidden bg-background-elevated">
      <NuxtImg
        :src="project.image"
        :alt="`Composição demonstrativa do projeto ${project.title}`"
        width="720"
        height="450"
        loading="lazy"
        class="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />
      <div class="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/20 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <a :href="project.href" class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-background">
          Ver projeto <ArrowUpRight :size="17" aria-hidden="true" />
        </a>
      </div>
    </div>
    <div class="p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">{{ project.category }}</p>
      <h3 class="mt-3 text-xl font-semibold text-white">{{ project.title }}</h3>
      <p class="mt-2 leading-7 text-muted-dark">{{ project.description }}</p>
      <a :href="project.href" class="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-light sm:hidden">
        Ver projeto <ArrowUpRight :size="17" aria-hidden="true" />
      </a>
    </div>
  </article>
</template>
