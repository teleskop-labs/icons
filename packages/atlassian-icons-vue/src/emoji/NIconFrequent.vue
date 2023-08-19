<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconFrequent',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 0 1 5.778 12 6.23 6.23 0 0 1 12 5.778 6.23 6.23 0 0 1 18.222 12 6.23 6.23 0 0 1 12 18.222zm.889-6.59V8.448c0-.489-.4-.889-.889-.889s-.889.4-.889.89v3.555c0 .248.103.471.268.633l2.195 2.194a.891.891 0 0 0 1.257 0 .891.891 0 0 0 0-1.256l-1.942-1.943z"
      />
    </svg>
  </NIcon>
</template>
