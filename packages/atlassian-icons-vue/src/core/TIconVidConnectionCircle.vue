<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconVidConnectionCircle',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <rect width="2" height="8" x="14" y="8" fill="inherit" rx="1" />
        <rect width="2" height="6" x="11" y="10" fill="inherit" rx="1" />
        <rect width="2" height="3" x="8" y="13" fill="inherit" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
