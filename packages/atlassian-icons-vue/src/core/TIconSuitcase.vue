<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconSuitcase',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M17 14h2V9H5v5h2v-1a1 1 0 0 1 2 0v1h6v-1a1 1 0 0 1 2 0v1zm0 2v1a1 1 0 0 1-2 0v-1H9v1a1 1 0 0 1-2 0v-1H5v3h14v-3h-2zM9 7h6V6H9v1zM7 7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2z"
      />
    </svg>
  </TIcon>
</template>
