<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconArrowLeftCircle',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        fill="inherit"
        d="M16 10.995h-5.586l1.272-1.279a1.01 1.01 0 0 0 0-1.421.996.996 0 0 0-1.415 0l-2.978 2.994a1.01 1.01 0 0 0 0 1.423l2.978 2.993a.999.999 0 0 0 1.415 0 1.01 1.01 0 0 0 0-1.421l-1.272-1.279H16c.552 0 1-.45 1-1.005 0-.555-.448-1.005-1-1.005"
      />
    </svg>
  </NIcon>
</template>
