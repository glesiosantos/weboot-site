<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { PortfolioProject } from '~/data/portfolio'
import { clampCarouselIndex } from '~/utils/portfolio'

const props = defineProps<{ projects: PortfolioProject[] }>()
const carouselRef = ref<HTMLElement>()
const activeIndex = ref(0)

const scroll = (direction: 1 | -1) => {
  const carousel = carouselRef.value
  if (!carousel) return
  carousel.scrollBy({ left: direction * carousel.clientWidth * 0.86, behavior: 'smooth' })
}

const updateIndex = () => {
  const carousel = carouselRef.value
  if (!carousel || !carousel.children.length) return
  const first = carousel.children[0] as HTMLElement
  activeIndex.value = clampCarouselIndex(Math.round(carousel.scrollLeft / (first.offsetWidth + 24)), props.projects.length)
}

const reset = async () => {
  await nextTick()
  carouselRef.value?.scrollTo({ left: 0, behavior: 'smooth' })
  activeIndex.value = 0
}

watch(() => props.projects, reset)
defineExpose({ reset })
</script>

<template>
  <div>
    <div class="mb-5 flex justify-end gap-2">
      <button type="button" class="grid size-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-700 disabled:opacity-40" aria-label="Projeto anterior" :disabled="activeIndex === 0" @click="scroll(-1)">
        <ChevronLeft :size="21" aria-hidden="true" />
      </button>
      <button type="button" class="grid size-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-700 disabled:opacity-40" aria-label="Próximo projeto" :disabled="activeIndex >= projects.length - 1" @click="scroll(1)">
        <ChevronRight :size="21" aria-hidden="true" />
      </button>
    </div>
    <div
      ref="carouselRef"
      class="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3"
      tabindex="0"
      aria-label="Projetos filtrados"
      @scroll.passive="updateIndex"
      @keydown.left.prevent="scroll(-1)"
      @keydown.right.prevent="scroll(1)"
    >
      <PortfolioCard v-for="project in projects" :key="project.id" :project="project" class="min-w-[88%] snap-start sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]" />
      <p v-if="!projects.length" class="w-full rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">Ainda não há projetos públicos nesta categoria.</p>
    </div>
    <div v-if="projects.length > 1" class="mt-5 flex justify-center gap-2" aria-label="Posição no carrossel">
      <span v-for="(_, index) in projects" :key="index" class="h-2 rounded-full transition-all" :class="index === activeIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'" />
    </div>
  </div>
</template>
