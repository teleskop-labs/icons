<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconCirclePlusFilled',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
      />
    </svg>
  </NIcon>
</template>
