<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconVidForward',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m10.97 13.87-6.273 3.858C3.76 18.305 3 17.883 3 16.773V7.226c0-1.104.757-1.533 1.697-.956l6.273 3.858V7.226c0-1.104.757-1.533 1.697-.956l7.62 4.686c.936.576.939 1.509 0 2.087l-7.62 4.685c-.937.577-1.697.155-1.697-.955V13.87z"
      />
    </svg>
  </NIcon>
</template>
