<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconCode',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
      <path
        fill="inherit"
        d="m15.652 12.014-1.367-1.367a.98.98 0 0 1 .005-1.38.973.973 0 0 1 1.38-.005l2.02 2.022a.953.953 0 0 1 .219.339.97.97 0 0 1-.193 1.096l-2.02 2.02a.98.98 0 0 1-1.378-.006.973.973 0 0 1-.006-1.379l1.34-1.34zm-9.56-.391a.953.953 0 0 1 .217-.34l2.022-2.02a.973.973 0 0 1 1.38.004.98.98 0 0 1 .004 1.38l-1.367 1.367 1.34 1.34a.98.98 0 0 1-1.384 1.384l-2.02-2.02a.97.97 0 0 1-.193-1.095zm7.19-3.572c.546.177.844.763.667 1.308l-1.924 5.923a1.038 1.038 0 1 1-1.974-.641l1.924-5.923a1.038 1.038 0 0 1 1.308-.667z"
      />
    </svg>
  </TIcon>
</template>
