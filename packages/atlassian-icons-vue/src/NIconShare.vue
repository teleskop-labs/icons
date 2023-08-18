<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconShare',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          fill-rule="nonzero"
          d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
        <path d="m7 13.562 8.66 5 1-1.732-8.66-5z" />
        <path d="m7 10.83 1 1.732 8.66-5-1-1.732z" />
      </g>
    </svg>
  </NIcon>
</template>
