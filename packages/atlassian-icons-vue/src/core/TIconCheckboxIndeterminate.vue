<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconCheckboxIndeterminate',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="12" height="12" x="6" y="6" fill="currentColor" rx="2" />
        <rect width="8" height="2" x="8" y="11" fill="inherit" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
