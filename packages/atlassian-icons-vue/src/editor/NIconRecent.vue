<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconRecent',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11.305 12.282c.037.09.091.175.165.248l2 2a.75.75 0 0 0 1.06-1.06l-1.78-1.78V9a.75.75 0 1 0-1.5 0v3c0 .104.021.202.059.292zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
      />
    </svg>
  </NIcon>
</template>
