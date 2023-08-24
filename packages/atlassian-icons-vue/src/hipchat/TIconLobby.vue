<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconLobby',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M5 14a7.002 7.002 0 0113.858 0H5z" />
        <rect x="4" y="15" width="16" height="2" rx="1" />
        <path d="M11 7h2v3h-2z" />
        <rect x="10" y="6" width="4" height="1" rx=".5" />
      </g>
    </svg>
  </TIcon>
</template>
