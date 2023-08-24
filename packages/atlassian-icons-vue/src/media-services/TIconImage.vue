<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconImage',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
        <circle cx="8.667" cy="8.667" r="2" fill="inherit" />
        <path fill="inherit" d="m6.667 17.333 2.666-2.666L12 17.333z" />
        <path fill="inherit" d="m14.667 12 2.666 2.933v2.4h-8z" />
      </g>
    </svg>
  </TIcon>
</template>
