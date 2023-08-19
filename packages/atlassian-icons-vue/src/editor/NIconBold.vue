<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconBold',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M8 6h4.832C13.908 6 16 6.5 16 9c0 1.333-.333 2.167-1 2.5 1.333.333 2 1.333 2 3 0 .5 0 3.5-4 3.5H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 10h3.5c1 0 2-.25 2-1.5s-1.104-1.5-2-1.5H9v3zm0-4.975h3c.504 0 2 0 2-1.525S12 8 12 8H9v3.025z"
      />
    </svg>
  </NIcon>
</template>
