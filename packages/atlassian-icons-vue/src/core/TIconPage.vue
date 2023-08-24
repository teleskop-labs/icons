<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconPage',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <rect width="8" height="2" x="8" y="6" rx="1" />
        <rect width="8" height="2" x="8" y="9" rx="1" />
        <rect width="4" height="2" x="8" y="12" rx="1" />
        <path
          fill-rule="nonzero"
          d="M7 4v16h10V4H7zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 0 1 5 20.01V3.99z"
        />
      </g>
    </svg>
  </TIcon>
</template>
