<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconMediaCenter',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M6 5h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 12h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-8h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
      />
    </svg>
  </TIcon>
</template>
