<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconImage',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
        <circle cx="8.667" cy="8.667" r="2" fill="inherit" />
        <path fill="inherit" d="m6.667 17.333 2.666-2.666L12 17.333z" />
        <path fill="inherit" d="m14.667 12 2.666 2.933v2.4h-8z" />
      </g>
    </svg>
  </NIcon>
</template>
