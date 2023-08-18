<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconItalic',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M10 6h6a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2zM8 16h6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm4-8h2l-2 8h-2l2-8z"
      />
    </svg>
  </NIcon>
</template>
