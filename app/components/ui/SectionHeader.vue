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
    <p v-if="label" class="eyebrow">{{ label }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="section-copy">{{ description }}</p>
  </div>
</template>
