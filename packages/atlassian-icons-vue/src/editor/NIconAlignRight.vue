<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconAlignRight',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 11h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm5 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zM7 7h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2z"
      />
    </svg>
  </NIcon>
</template>
