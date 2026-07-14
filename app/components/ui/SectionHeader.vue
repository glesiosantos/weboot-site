<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>(), { label: '', description: '', align: 'center' })
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'">
    <p v-if="label" class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
      {{ label }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-5 text-base leading-7 text-muted sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
