<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconMenu',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" fill-rule="evenodd" d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z" />
    </svg>
  </TIcon>
</template>
