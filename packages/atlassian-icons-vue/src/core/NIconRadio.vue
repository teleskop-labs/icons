<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconRadio',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="6" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="inherit" />
      </g>
    </svg>
  </NIcon>
</template>
