<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconUnlockCircle',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          fill="inherit"
          d="M11 9.99V11h-1V9.98A1.98 1.98 0 0 1 11.98 8h.04A1.98 1.98 0 0 1 14 9.98V11h-1V9.99a.99.99 0 0 0-.99-.99h-.02a.99.99 0 0 0-.99.99zm2 .51v.5h1v-.5h-1z"
        />
        <path
          fill="inherit"
          d="M10 10h1v2h-1zm-1 5.001a1 1 0 0 0 .99.999h4.02c.546 0 .99-.443.99-.999V13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.001z"
        />
        <rect width="1" height="1" x="13" y="10" fill="inherit" rx=".5" />
      </g>
    </svg>
  </TIcon>
</template>
