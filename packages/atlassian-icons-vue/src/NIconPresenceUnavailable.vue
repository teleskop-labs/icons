<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconPresenceUnavailable',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="inherit" d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" />
      <path fill="currentColor" d="M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-9 0a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" />
    </svg>
  </NIcon>
</template>
