<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconPreferences',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M3 7h3v2H3zm0 8h11v2H3zm7-8h11v2H10zm8 8h3v2h-3z" />
        <path
          d="M11 8a3 3 0 1 1-5.999.001A3 3 0 0 1 11 8zM9 8a1 1 0 1 0-1.999-.001A1 1 0 0 0 9 8zm10 8a3 3 0 1 1-5.999.001A3 3 0 0 1 19 16zm-2 0a1 1 0 1 0-1.999-.001A1 1 0 0 0 17 16z"
        />
      </g>
    </svg>
  </TIcon>
</template>
