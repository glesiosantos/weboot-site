<script setup lang="ts">
import { X } from 'lucide-vue-next'
import type { NavigationItem } from '~/types/landing-page'

defineProps<{
  open: boolean
  items: NavigationItem[]
  ctaHref: string
}>()

const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-200"
    enter-from-class="opacity-0 -translate-y-2"
    leave-active-class="transition duration-150"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div v-if="open" id="mobile-navigation" class="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto border-t border-subtle bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
      <div class="page-container relative px-0">
        <button type="button" class="absolute right-0 top-0 grid size-11 place-items-center rounded-lg text-muted hover:bg-white/5 hover:text-white" aria-label="Fechar menu" @click="emit('close')">
          <X :size="22" aria-hidden="true" />
        </button>
        <nav aria-label="Navegação móvel" class="pr-14">
          <ul class="grid gap-1">
            <li v-for="item in items" :key="item.href">
              <a :href="item.href" class="flex min-h-12 items-center rounded-lg px-4 font-medium text-muted transition hover:bg-white/5 hover:text-white" @click="emit('close')">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
        <UiBaseButton :href="ctaHref" external class="mt-4 w-full" @click="emit('close')">
          Fale com um especialista
        </UiBaseButton>
      </div>
    </div>
  </Transition>
</template>
