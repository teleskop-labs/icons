<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconImageResize',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="18" height="18" x="3" y="3" fill="currentColor" rx="2" />
        <path fill="inherit" d="M5 14v3.89a1.1 1.1 0 0 0 1.1 1.1H10a1 1 0 1 0 0-2H7V14a1 1 0 1 0-2 0z" />
        <path
          fill="inherit"
          d="M5.707 18.121c.39.39 1.027.388 1.41.004L18.125 7.117a.995.995 0 0 0-.004-1.41 1.001 1.001 0 0 0-1.41-.004L5.703 16.711a.995.995 0 0 0 .004 1.41z"
        />
        <path fill="inherit" d="M17 7v2.99a1 1 0 0 0 2 0V6.1A1.1 1.1 0 0 0 17.9 5H14a1 1 0 0 0 0 2h3z" />
      </g>
    </svg>
  </TIcon>
</template>
