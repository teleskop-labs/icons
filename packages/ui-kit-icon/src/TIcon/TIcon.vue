<script setup lang="ts">
import { useIcon } from './hooks'
import type { TIconSlots, TInternalIconProps } from './TIcon.model'
import { TInternalIconDefaultProps } from './TIcon.model'

defineOptions({
  name: 'TIcon',
})

const props = withDefaults(defineProps<TInternalIconProps>(), TInternalIconDefaultProps)

defineSlots<TIconSlots>()

const { sizeVars } = useIcon(props)
</script>

<template>
  <span
    class="t-icon"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : true"
    :data-testid="testId"
    :style="{
      ...sizeVars,
      '--t-comp-icon-primary-color': primaryColor,
      '--t-comp-icon-secondary-color': secondaryColor,
    }"
  >
    <slot></slot>
  </span>
</template>
