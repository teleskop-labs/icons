<script setup lang="ts">
import type { NIconProps } from '@icon/NIcon'
import { NIcon } from '@icon/NIcon'

defineOptions({
  name: 'NIconArrowUp',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m11.293 5.293-5.5 5.499a1.002 1.002 0 0 0 0 1.415.999.999 0 0 0 1.414 0L11 8.414V18a1 1 0 0 0 2 0V8.414l3.793 3.793a1 1 0 1 0 1.414-1.415l-5.5-5.499A.993.993 0 0 0 12 5a.993.993 0 0 0-.707.293z"
      />
    </svg>
  </NIcon>
</template>
