<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconAudio',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
      <path
        fill="inherit"
        d="M16 9.283V13.6h-.003A1.5 1.5 0 1 1 14.5 12c.175 0 .344.03.5.085v-2.08l-4 .431V14.6h-.003A1.5 1.5 0 0 1 8 14.5a1.5 1.5 0 0 1 2-1.415V9.034c0-.238.186-.451.432-.478l5.136-.553a.38.38 0 0 1 .432.384v.896z"
      />
    </svg>
  </NIcon>
</template>
