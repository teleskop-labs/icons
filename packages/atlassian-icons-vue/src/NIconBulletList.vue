<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconBulletList',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <rect width="8" height="2" x="10" y="15" rx="1" />
        <rect width="2" height="2" x="6" y="15" rx="1" />
        <rect width="8" height="2" x="10" y="11" rx="1" />
        <rect width="2" height="2" x="6" y="11" rx="1" />
        <rect width="8" height="2" x="10" y="7" rx="1" />
        <rect width="2" height="2" x="6" y="7" rx="1" />
      </g>
    </svg>
  </NIcon>
</template>
