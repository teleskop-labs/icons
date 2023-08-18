<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconHint',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M14 16h-4s0-.5-1-2-2.5-3-2.5-5S7 4 12 4s5.5 3 5.5 5-1.5 3.5-2.5 5-1 2-1 2zm-4 1h4v1l-1.5 2h-1L10 18v-1z"
      />
    </svg>
  </NIcon>
</template>
