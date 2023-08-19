<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconArchive',
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
        d="M19 3H4.85A2 2 0 0 0 3 5v4h1v10.45A1.67 1.67 0 0 0 5.77 21h12.46A1.67 1.67 0 0 0 20 19.45V9h1V5a2 2 0 0 0-2-2zm-1 16H6V9h12v10zm1-12H5V5h14v2zm-4 7H9v-2h6v2z"
        clip-rule="evenodd"
      />
    </svg>
  </NIcon>
</template>
