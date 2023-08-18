<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconGrid',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <rect width="8" height="8" x="3" y="3" rx="1" />
        <rect width="8" height="8" x="3" y="13" rx="1" />
        <rect width="8" height="8" x="13" y="3" rx="1" />
        <rect width="8" height="8" x="13" y="13" rx="1" />
      </g>
    </svg>
  </NIcon>
</template>
