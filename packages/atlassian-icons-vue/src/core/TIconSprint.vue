<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconSprint',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m17.717 17.137-1.436-1.438a1.003 1.003 0 0 1 1.418-1.418l3.007 3.01a1.002 1.002 0 0 1 0 1.417l-3.007 3.01a1.003 1.003 0 0 1-1.417-1.42l1.3-1.3-6.072-.003A8 8 0 0 1 4 11.01C4 6.587 7.582 3 12 3s8 3.587 8 8.01a7.982 7.982 0 0 1-.789 3.451l-1.438-1.44a6.11 6.11 0 0 0 .345-2.01A6.121 6.121 0 0 0 12 4.884a6.121 6.121 0 0 0-6.118 6.125 6.119 6.119 0 0 0 5.647 6.102l6.188.025zm-12.163-.119c.561.759 1.456 1.49 2.457 1.981L3.937 19C3.42 19 3 18.552 3 18s.42-1 .937-1l1.614.005.003.013z"
      />
    </svg>
  </TIcon>
</template>
