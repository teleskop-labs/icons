<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconLocation',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 21c-2.28 0-6-8.686-6-12a6 6 0 1 1 12 0c0 3.314-3.72 12-6 12zm0-9a2.912 2.912 0 1 0 0-5.824A2.912 2.912 0 0 0 12 12z"
      />
    </svg>
  </TIcon>
</template>
