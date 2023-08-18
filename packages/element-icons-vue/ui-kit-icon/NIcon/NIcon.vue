<script setup lang="ts">
import { toRef } from 'vue'

import type { NIconSlots, NInternalIconProps } from './NIcon.model'
import { NInternalIconDefaultProps } from './NIcon.model'
import { getIconSize } from './utils'

defineOptions({
  name: 'NIcon',
})

const props = withDefaults(defineProps<NInternalIconProps>(), NInternalIconDefaultProps)

defineSlots<NIconSlots>()

const dimensions = getIconSize({
  width: toRef(props, 'width'),
  height: toRef(props, 'height'),
  size: toRef(props, 'size'),
})
</script>

<template>
  <span
    class="n-icon"
    :role="label ? 'img' : undefined"
    :aria-label="label ? label : undefined"
    :aria-hidden="label ? undefined : true"
    :style="{
      ...dimensions,
      '--n-comp-icon-primary-color': primaryColor,
      '--n-comp-icon-secondary-color': secondaryColor || 'var(--n-sys-elevation-surface)',
    }"
  >
    <slot></slot>
  </span>
</template>

<style>
@import url('./style/index.css');
</style>
