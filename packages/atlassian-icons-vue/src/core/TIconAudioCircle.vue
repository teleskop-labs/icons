<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconAudioCircle',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        fill="inherit"
        d="M16 9.283V13.6h-.003A1.5 1.5 0 1 1 14.5 12c.175 0 .344.03.5.085v-2.08l-4 .431V14.6h-.003A1.5 1.5 0 0 1 8 14.5a1.5 1.5 0 0 1 2-1.415V9.034c0-.238.186-.451.432-.478l5.136-.553a.38.38 0 0 1 .432.384v.896z"
      />
    </svg>
  </TIcon>
</template>
