<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconMobile',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="#fff" fill-opacity=".01" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7zm10 2H7v13h10V4zm-3 15h-4v1h4v-1z"
        clip-rule="evenodd"
      />
    </svg>
  </NIcon>
</template>
