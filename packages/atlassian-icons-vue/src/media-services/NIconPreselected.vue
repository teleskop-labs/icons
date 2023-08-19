<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconPreselected',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
    </svg>
  </NIcon>
</template>
