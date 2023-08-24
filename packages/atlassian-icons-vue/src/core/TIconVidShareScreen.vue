<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconVidShareScreen',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          fill-rule="nonzero"
          d="M13 4H4.995C3.893 4 3 4.9 3 6.009v7.982C3 15.098 3.893 16 4.995 16h14.01C20.107 16 21 15.1 21 13.991V7.5 11h-2v3H5V6h8V4z"
        />
        <path d="M10 17h4v3h-4z" />
        <path d="M9 20a1 1 0 0 1 .99-1h4.02c.546 0 .99.444.99 1v1H9v-1z" />
        <path fill-rule="nonzero" d="M19 5v3a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h3z" />
        <path fill-rule="nonzero" d="m19 3.586-6.707 6.707a1 1 0 0 0 1.414 1.414L20.414 5H19V3.586z" />
      </g>
    </svg>
  </TIcon>
</template>
