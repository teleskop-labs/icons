<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconSpreadsheet',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
        <rect width="4" height="2" x="7" y="8" fill="inherit" rx="1" />
        <rect width="4" height="2" x="7" y="11" fill="inherit" rx="1" />
        <rect width="4" height="2" x="13" y="11" fill="inherit" rx="1" />
        <rect width="4" height="2" x="7" y="14" fill="inherit" rx="1" />
        <rect width="4" height="2" x="13" y="14" fill="inherit" rx="1" />
        <rect width="4" height="2" x="13" y="8" fill="inherit" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
