<script setup lang="ts">
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-vue-next'

const { services } = useLandingPage()
const { createWhatsAppUrl, trackWhatsAppClick } = useWhatsApp()
const carouselRef = ref<HTMLElement | null>(null)

function scrollPrevious(): void {
  carouselRef.value?.scrollBy({
    left: -(carouselRef.value.clientWidth * 0.85),
    behavior: 'smooth'
  })
}

function scrollNext(): void {
  carouselRef.value?.scrollBy({
    left: carouselRef.value.clientWidth * 0.85,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section id="servicos" class="section-space bg-white">
    <div class="page-container">
      <div class="flex items-end justify-between gap-6">
        <UiSectionHeader label="Serviços" title="Soluções digitais para diferentes momentos do seu negócio" description="Desde a criação de uma presença profissional na internet até o desenvolvimento de sistemas e automações específicas." />
        <div class="hidden shrink-0 gap-3 sm:flex">
          <button type="button" aria-label="Ver serviços anteriores" class="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-blue-600 hover:text-blue-700" @click="scrollPrevious">
            <ArrowLeft :size="20" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Ver próximos serviços" class="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-blue-600 hover:text-blue-700" @click="scrollNext">
            <ArrowRight :size="20" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div ref="carouselRef" class="services-carousel mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 lg:mt-16">
        <article v-for="service in services" :key="service.id" class="group min-w-[86%] shrink-0 snap-start border-t-2 border-slate-200 pt-6 transition hover:border-blue-600 sm:min-w-[45%] lg:min-w-[30%]">
          <div class="flex items-center gap-4">
            <div class="grid size-11 place-items-center rounded-lg bg-blue-50 text-blue-700"><component :is="service.icon" :size="22" aria-hidden="true" /></div>
            <h3 class="text-xl font-bold text-slate-950">{{ service.title }}</h3>
          </div>
          <p class="mt-5 leading-7 text-slate-600">{{ service.description }}</p>
          <ul class="mt-5 space-y-2">
            <li v-for="benefit in service.benefits" :key="benefit" class="flex gap-2 text-sm text-slate-600"><Check :size="16" class="mt-0.5 shrink-0 text-blue-600" />{{ benefit }}</li>
          </ul>
          <a :href="createWhatsAppUrl(service.message)" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-blue-700 hover:text-blue-800" @click="trackWhatsAppClick('service', service.id)">
            {{ service.cta }} <ArrowUpRight :size="17" aria-hidden="true" />
          </a>
        </article>
      </div>

      <div class="mt-5 flex justify-center gap-3 sm:hidden">
        <button type="button" aria-label="Ver serviços anteriores" class="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-blue-600 hover:text-blue-700" @click="scrollPrevious">
          <ArrowLeft :size="20" aria-hidden="true" />
        </button>
        <button type="button" aria-label="Ver próximos serviços" class="grid size-11 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-blue-600 hover:text-blue-700" @click="scrollNext">
          <ArrowRight :size="20" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-carousel {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.services-carousel::-webkit-scrollbar {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .services-carousel {
    scroll-behavior: auto;
  }
}
</style>
