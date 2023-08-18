<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconEdit',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M15.148 6.852a.502.502 0 0 1 .708.004l2.288 2.288a.5.5 0 0 1 .004.708L11 17l-3-3 7.148-7.148zM7 15l3 3-3.51.877c-.27.068-.436-.092-.367-.367L7 15z"
      />
    </svg>
  </NIcon>
</template>
