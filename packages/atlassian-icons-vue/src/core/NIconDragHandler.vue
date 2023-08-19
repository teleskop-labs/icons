<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconDragHandler',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <circle cx="10" cy="8" r="1" />
        <circle cx="14" cy="8" r="1" />
        <circle cx="10" cy="16" r="1" />
        <circle cx="14" cy="16" r="1" />
        <circle cx="10" cy="12" r="1" />
        <circle cx="14" cy="12" r="1" />
      </g>
    </svg>
  </NIcon>
</template>
