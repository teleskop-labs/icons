<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconHorizontalRule',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <rect width="14" height="2" x="5" y="11" fill="currentColor" fill-rule="evenodd" rx="1" />
    </svg>
  </TIcon>
</template>
