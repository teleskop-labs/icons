<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconScreen',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          fill-rule="nonzero"
          d="M3 6.009C3 4.899 3.893 4 4.995 4h14.01C20.107 4 21 4.902 21 6.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 0 1 3 13.991V6.01zM5 14h14V6H5v8z"
        />
        <path d="M10 17h4v3h-4zm-1 3.5a.5.5 0 0 1 .491-.5h5.018a.5.5 0 0 1 .491.5v.5H9v-.5z" />
      </g>
    </svg>
  </TIcon>
</template>
