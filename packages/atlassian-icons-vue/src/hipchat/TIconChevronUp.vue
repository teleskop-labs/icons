<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconChevronUp',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M11.294 8.708l-.001.001-4.549 4.559a1.051 1.051 0 101.486 1.488l.001-.001 3.77-3.776 3.768 3.776a1.05 1.05 0 001.486.001h.001a1.054 1.054 0 00.001-1.489l-4.548-4.558a1 1 0 00-1.415-.001z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  </TIcon>
</template>
