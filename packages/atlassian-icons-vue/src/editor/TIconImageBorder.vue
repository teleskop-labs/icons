<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconImageBorder',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M17 9h1v3h-1V9zm0 4h1v2h-1v-2zM6 9h1v2H6V9zm0 3h1v3H6v-3zm3 5h2v1H9v-1zm3 0h3v1h-3v-1zM9 6h3v1H9V6zm4 0h2v1h-2V6zm-7 .505C6 6.226 6.214 6 6.505 6H8v1H7v1H6V6.505zm12 0V8h-1V7h-1V6h1.495c.291 0 .505.226.505.505zM6 17.495V16h1v1h1v1H6.505A.497.497 0 0 1 6 17.495zm12 0a.497.497 0 0 1-.505.505H16v-1h1v-1h1v1.495z"
      />
    </svg>
  </TIcon>
</template>
