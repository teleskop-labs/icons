<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconCrossCircle',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path fill="inherit" d="m13.477 9.113-4.36 4.386a1 1 0 1 0 1.418 1.41l4.36-4.386a1 1 0 0 0-1.418-1.41z" />
        <path fill="inherit" d="m9.084 10.501 4.358 4.377a1 1 0 1 0 1.418-1.411L10.5 9.09a1 1 0 0 0-1.417 1.411z" />
      </g>
    </svg>
  </TIcon>
</template>
