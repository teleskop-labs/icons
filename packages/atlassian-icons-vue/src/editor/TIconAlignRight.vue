<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconAlignRight',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 11h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm5 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zM7 7h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2z"
      />
    </svg>
  </TIcon>
</template>
