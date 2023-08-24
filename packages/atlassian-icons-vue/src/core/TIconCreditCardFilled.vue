<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconCreditCardFilled',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M3 10.988h18V17c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.012zM6.013 16h2v-2h-2v2zM21 8.993V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v1.993"
      />
    </svg>
  </TIcon>
</template>
