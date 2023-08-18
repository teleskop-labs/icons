<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconVidBackward',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m13.02 13.857 6.273 3.858c.937.577 1.697.155 1.697-.955V7.212c0-1.103-.757-1.533-1.697-.955l-6.273 3.858V7.212c0-1.103-.757-1.533-1.697-.955l-7.62 4.686c-.936.576-.94 1.51 0 2.087l7.62 4.685c.937.577 1.697.155 1.697-.955v-2.903z"
      />
    </svg>
  </NIcon>
</template>
