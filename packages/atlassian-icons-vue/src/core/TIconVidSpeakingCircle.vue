<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconVidSpeakingCircle',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" />
        <path
          fill="inherit"
          fill-rule="nonzero"
          d="M12.229 7.652c.04.048.124.16.238.33.198.294.398.631.584 1.006 1.138 2.288 1.243 4.648-.316 6.864a7.86 7.86 0 0 1-.377.492 1 1 0 0 0 .156 1.43 1.062 1.062 0 0 0 1.467-.152 9.55 9.55 0 0 0 .475-.62c2.045-2.907 1.907-6.017.472-8.901-.392-.788-.788-1.376-1.07-1.72a1.062 1.062 0 0 0-1.466-.158 1 1 0 0 0-.163 1.429z"
        />
        <path
          fill="inherit"
          fill-rule="nonzero"
          d="M9.213 9.619c.08.101.226.33.377.658.608 1.318.608 2.72-.404 4.141-.32.45-.217 1.074.23 1.395a.992.992 0 0 0 1.389-.231c1.476-2.073 1.476-4.226.591-6.146a5.494 5.494 0 0 0-.619-1.055.992.992 0 0 0-1.398-.166c-.431.341-.506.97-.166 1.404z"
        />
      </g>
    </svg>
  </TIcon>
</template>
