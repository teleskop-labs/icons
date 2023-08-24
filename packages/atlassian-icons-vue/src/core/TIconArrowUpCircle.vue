<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconArrowUpCircle',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="10" fill="currentColor" fill-rule="nonzero" />
        <path
          fill="inherit"
          d="M11.288 7.293 8.294 10.27a1.002 1.002 0 0 0 0 1.416 1.01 1.01 0 0 0 1.421 0l1.279-1.272V16c0 .552.451 1 1.006 1 .555 0 1.005-.448 1.005-1v-5.586l1.279 1.272a1.01 1.01 0 0 0 1.421 0 .998.998 0 0 0 0-1.416l-2.994-2.977a1.01 1.01 0 0 0-1.423 0z"
        />
      </g>
    </svg>
  </TIcon>
</template>
