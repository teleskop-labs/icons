<script setup lang="ts">
import { computed } from 'vue'

import { sizes } from '../constants'
import { TSvgDefaultProps, type TSvgProps, type TSvgSlots } from './TSvg.model'

defineOptions({
  name: 'TSvg',
})

const props = withDefaults(defineProps<TSvgProps>(), TSvgDefaultProps)

defineSlots<TSvgSlots>()

const dimensions = computed(() => {
  const size = sizes[props.size]

  return {
    '--t-comp-svg-size-width': size,
    '--t-comp-svg-size-height': size,
  }
})
</script>

<template>
  <svg
    class="t-svg"
    viewBox="0 0 24 24"
    :data-testid="testId"
    :role="label ? 'img' : 'presentation'"
    :aria-label="label"
    :style="{
      ...dimensions,
      '--t-comp-svg-primary-color': primaryColor,
      '--t-comp-svg-secondary-color': secondaryColor,
    }"
  >
    <slot />
  </svg>
</template>
