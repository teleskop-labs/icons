<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconDCaret',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 1024 1024">
      <path fill="currentColor" d="m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z" />
    </svg>
  </NIcon>
</template>
