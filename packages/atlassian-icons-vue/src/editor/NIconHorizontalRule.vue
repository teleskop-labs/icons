<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconHorizontalRule',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <rect width="14" height="2" x="5" y="11" fill="currentColor" fill-rule="evenodd" rx="1" />
    </svg>
  </NIcon>
</template>
