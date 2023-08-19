<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconFile',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 6.5c0-.276.228-.5.491-.5H13l4 4v7.5c0 .276-.228.5-.51.5H7.51a.508.508 0 0 1-.51-.5v-11zm5 1v2.999c0 .271.225.501.501.501H15.5L12 7.5z"
      />
    </svg>
  </NIcon>
</template>
