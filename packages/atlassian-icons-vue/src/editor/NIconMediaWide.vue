<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconMediaWide',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 5h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm0 12h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zM4 9h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
      />
    </svg>
  </NIcon>
</template>
