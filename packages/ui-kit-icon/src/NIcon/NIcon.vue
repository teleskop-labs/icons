<script setup lang="ts">
import { useIcon } from './hooks'
import type { NIconSlots, NInternalIconProps } from './NIcon.model'
import { NInternalIconDefaultProps } from './NIcon.model'

defineOptions({
  name: 'NIcon',
})

const props = withDefaults(defineProps<NInternalIconProps>(), NInternalIconDefaultProps)

defineSlots<NIconSlots>()

const { sizeVars } = useIcon(props)
</script>

<template>
  <span
    class="n-icon"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : true"
    :data-testid="testId"
    :style="{
      ...sizeVars,
      '--n-comp-icon-primary-color': primaryColor,
      '--n-comp-icon-secondary-color': secondaryColor,
    }"
  >
    <slot></slot>
  </span>
</template>
