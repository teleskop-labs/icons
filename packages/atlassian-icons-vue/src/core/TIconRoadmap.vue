<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconRoadmap',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M6 2h10a3 3 0 0 1 0 6H6a3 3 0 1 1 0-6zm0 2a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H6zm4 5h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6zm0 2a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8zm-4 5h6a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H6z"
      />
    </svg>
  </TIcon>
</template>
