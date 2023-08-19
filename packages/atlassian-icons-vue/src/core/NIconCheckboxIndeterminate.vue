<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconCheckboxIndeterminate',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="12" height="12" x="6" y="6" fill="currentColor" rx="2" />
        <rect width="8" height="2" x="8" y="11" fill="inherit" rx="1" />
      </g>
    </svg>
  </NIcon>
</template>
