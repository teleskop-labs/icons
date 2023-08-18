<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconLayoutThreeWithSidebars',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5 5a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm4 0h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"
      />
    </svg>
  </NIcon>
</template>
