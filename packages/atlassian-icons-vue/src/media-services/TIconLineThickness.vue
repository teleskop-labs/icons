<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconLineThickness',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4 4.495C4 4.222 4.226 4 4.496 4h15.008c.274 0 .496.216.496.495v2.01a.498.498 0 0 1-.496.495H4.496A.492.492 0 0 1 4 6.505v-2.01zm0 8.01c0-.279.226-.505.496-.505h15.008c.274 0 .496.214.496.505v.99a.503.503 0 0 1-.496.505H4.496A.493.493 0 0 1 4 13.495v-.99zm0 6.747c0-.139.102-.252.251-.252H19.75c.138 0 .251.107.251.252v.496a.245.245 0 0 1-.251.252H4.25a.248.248 0 0 1-.25-.252v-.496z"
      />
    </svg>
  </TIcon>
</template>
