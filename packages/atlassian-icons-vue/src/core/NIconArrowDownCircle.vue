<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconArrowDownCircle',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="10" fill="currentColor" fill-rule="nonzero" />
        <path
          fill="inherit"
          d="M10.994 8v5.586l-1.279-1.272a1.01 1.01 0 0 0-1.421 0 .998.998 0 0 0 0 1.416l2.994 2.977a1.01 1.01 0 0 0 1.423 0l2.994-2.977a.998.998 0 0 0 0-1.416 1.01 1.01 0 0 0-1.421 0l-1.279 1.272V8c0-.552-.45-1-1.005-1-.555 0-1.006.448-1.006 1z"
        />
      </g>
    </svg>
  </NIcon>
</template>
