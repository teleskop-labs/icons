<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconAudio',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 6.673V15.2a2.8 2.8 0 0 1-2.8 2.8h-.4a2.8 2.8 0 0 1-2.8-2.8v-.4a2.8 2.8 0 0 1 2.8-2.8h.4c.278 0 .547.04.8.116V8.242l-6 .621V16.2A2.8 2.8 0 0 1 8.2 19h-.4A2.8 2.8 0 0 1 5 16.2v-.4A2.8 2.8 0 0 1 7.8 13h.4c.278 0 .547.04.8.116V6.654c0-.38.31-.721.72-.764l8.56-.886c.398-.041.72.235.72.615v1.054z"
      />
    </svg>
  </TIcon>
</template>
