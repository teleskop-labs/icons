<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconDepartment',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11 5v2h2V5h-2zm0 6V9h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v2h5a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-2H7v2h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-3a1 1 0 0 1 1-1h5zm-6 6v2h2v-2H5zm12 0v2h2v-2h-2z"
      />
    </svg>
  </TIcon>
</template>
