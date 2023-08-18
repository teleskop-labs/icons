<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconMoreVertical',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <circle cx="12" cy="19" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="5" r="2" />
      </g>
    </svg>
  </NIcon>
</template>
