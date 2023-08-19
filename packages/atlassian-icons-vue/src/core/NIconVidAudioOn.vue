<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconVidAudioOn',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <rect width="6" height="12" x="9" y="3" rx="3" />
        <path
          fill-rule="nonzero"
          d="M13 17.917c2.833-.476 5-2.941 5-5.91V9a1 1 0 0 0-2 0v3.006A4.001 4.001 0 0 1 12 16c-2.205 0-4-1.795-4-3.994V9a1 1 0 1 0-2 0v3.006c0 2.96 2.162 5.433 5 5.91v2.075a1 1 0 1 0 2 0v-2.074z"
        />
      </g>
    </svg>
  </NIcon>
</template>
