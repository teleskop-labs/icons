<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconVidFullScreenOn',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M6 18h3a1 1 0 0 1 0 2H6a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3zm12 2h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2zM6 4h3a1 1 0 1 1 0 2H6v3a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2zm12 2h-3a1 1 0 0 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0V6z"
      />
    </svg>
  </TIcon>
</template>
