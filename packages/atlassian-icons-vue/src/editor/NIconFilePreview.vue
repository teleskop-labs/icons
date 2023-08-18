<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconFilePreview',
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
        d="M6 18h3a1 1 0 0 1 0 2H6a2 2 0 0 1-2-2v-3a1 1 0 1 1 2 0v3zm12 2h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2zM6 4h3a1 1 0 0 1 0 2H6v3a1 1 0 0 1-2 0V6a2 2 0 0 1 2-2zm12 2h-3a1 1 0 1 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0V6z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.55 12.061-1.873.337a.998.998 0 0 1-.718-1.713 1 1 0 0 1 .718-.287h3.7c.316-.08.686.021.957.293.272.271.373.641.293.957v3.7a1 1 0 0 1-2 0l.337-1.873-2.602 2.603c-.345.344-.94.306-1.33-.084-.391-.39-.429-.986-.084-1.33l2.602-2.603z"
      />
    </svg>
  </NIcon>
</template>
