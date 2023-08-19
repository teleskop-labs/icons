<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconLine',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4.36 17.904 17.904 4.36a1.228 1.228 0 1 1 1.736 1.736L6.096 19.64a1.228 1.228 0 1 1-1.736-1.736z"
      />
    </svg>
  </NIcon>
</template>
