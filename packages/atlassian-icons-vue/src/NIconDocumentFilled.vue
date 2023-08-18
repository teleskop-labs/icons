<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconDocumentFilled',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m18.99 8.99.01 1.015V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.275c.469 0 .922.164 1.282.464L18.631 7.7c.227.19.359.471.359.768v.521zM12.02 5 12 8.192a.99.99 0 0 0 .994.991h4L12.02 5z"
      />
    </svg>
  </NIcon>
</template>
