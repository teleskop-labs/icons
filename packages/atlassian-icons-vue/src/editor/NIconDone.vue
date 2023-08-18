<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconDone',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.356 10.942a.497.497 0 0 0-.713 0l-.7.701a.501.501 0 0 0-.003.71l3.706 3.707a.501.501 0 0 0 .705.003l7.712-7.712a.493.493 0 0 0-.006-.708l-.7-.7a.504.504 0 0 0-.714 0l-6.286 6.286a.506.506 0 0 1-.713 0l-2.288-2.287z"
      />
    </svg>
  </NIcon>
</template>
