<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconMenuExpand',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6 12c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 12zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 16zm0-8c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 8z"
      />
    </svg>
  </TIcon>
</template>
