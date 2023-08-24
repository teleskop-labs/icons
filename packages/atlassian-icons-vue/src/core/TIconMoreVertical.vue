<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconMoreVertical',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <circle cx="12" cy="19" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="5" r="2" />
      </g>
    </svg>
  </TIcon>
</template>
