<script setup lang="ts">
import { X } from 'lucide-vue-next'
import type { NavigationItem } from '~/types/landing-page'

defineProps<{ open: boolean, items: NavigationItem[], ctaHref: string }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0" leave-active-class="transition duration-150" leave-to-class="opacity-0">
    <div v-if="open" id="mobile-navigation" class="fixed inset-0 z-[70] bg-slate-950/30 lg:hidden" @click.self="emit('close')">
      <div class="ml-auto flex h-full w-[min(88vw,24rem)] flex-col bg-white p-5 shadow-2xl" role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <div class="flex items-center justify-between border-b border-slate-200 pb-5">
          <NuxtImg src="/images/weboot_logo_pa.png" alt="Weboot" width="210" height="28" class="h-7 w-auto object-contain" />
          <button type="button" class="grid size-11 place-items-center rounded-lg text-slate-700 hover:bg-slate-100" aria-label="Fechar menu" @click="emit('close')">
            <X :size="23" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegação móvel" class="mt-5">
          <ul class="grid gap-1">
            <li v-for="item in items" :key="item.href">
              <a :href="item.href" class="flex min-h-12 items-center rounded-lg px-4 font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700" @click="emit('close')">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
        <UiBaseButton :href="ctaHref" external variant="whatsapp" class="mt-auto w-full" @click="emit('close')">
          Falar no WhatsApp
        </UiBaseButton>
      </div>
    </div>
  </Transition>
</template>
