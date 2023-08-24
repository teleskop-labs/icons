<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconPresentation',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
        <rect width="2" height="3" x="8" y="12" fill="inherit" rx="1" />
        <rect width="2" height="5" x="11" y="10" fill="inherit" rx="1" />
        <rect width="2" height="7" x="14" y="8" fill="inherit" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
