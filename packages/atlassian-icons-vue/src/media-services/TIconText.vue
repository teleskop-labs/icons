<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconText',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M11 7h2v11h-2zM6 5h12v2H6z" />
        <path d="M5 5h2v3H5zm5 13h4v2h-4zm7-13h2v3h-2z" />
      </g>
    </svg>
  </TIcon>
</template>
