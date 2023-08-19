<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconAlignImageCenter',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M6 17h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm4-8h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2z"
      />
    </svg>
  </NIcon>
</template>
