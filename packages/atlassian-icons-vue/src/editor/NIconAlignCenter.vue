<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconAlignCenter',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 11h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm2.5 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2z"
      />
    </svg>
  </NIcon>
</template>
