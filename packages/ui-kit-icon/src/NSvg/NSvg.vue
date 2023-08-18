<script setup lang="ts">
import { computed } from 'vue'

import { sizes } from '../constants'
import { nSvgDefaultProps, type NSvgProps, type NSvgSlots } from './NSvg.model'

defineOptions({
  name: 'NSvg',
})

const props = withDefaults(defineProps<NSvgProps>(), nSvgDefaultProps)

defineSlots<NSvgSlots>()

const dimensions = computed(() => {
  const size = sizes[props.size]

  return {
    '--n-comp-svg-size-width': size,
    '--n-comp-svg-size-height': size,
  }
})
</script>

<template>
  <svg
    class="n-svg"
    viewBox="0 0 24 24"
    :style="{
      ...dimensions,
      '--n-comp-svg-primary-color': primaryColor,
      '--n-comp-svg-secondary-color': secondaryColor || 'var(--n-sys-elevation-surface)',
    }"
  >
    <slot />
  </svg>
</template>

<style>
@import url('./css/index.css');
</style>
