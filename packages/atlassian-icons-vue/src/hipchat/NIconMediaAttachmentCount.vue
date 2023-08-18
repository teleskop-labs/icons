<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconMediaAttachmentCount',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" fill="currentColor" fill-rule="evenodd" />
    </svg>
  </NIcon>
</template>
