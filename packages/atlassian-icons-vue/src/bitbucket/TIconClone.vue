<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconClone',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          fill-rule="nonzero"
          d="M8 3.998H4.995A2.003 2.003 0 0 0 3 6.008v7.983c0 1.107.893 2.008 1.995 2.008h14.01A2.001 2.001 0 0 0 21 13.991V6.007a2.004 2.004 0 0 0-1.995-2.008H16v2h3v8H5v-8h3v-2z"
        />
        <path d="M10 16.998h4v3h-4z" />
        <path
          d="M9 19.998a1 1 0 0 1 .99-1h4.02c.546 0 .99.444.99 1v1H9v-1zm.292-11.707a1.004 1.004 0 0 0 0 1.415l1.997 1.996c.197.197.453.298.712.298.254 0 .511-.099.711-.298l1.995-1.996a1 1 0 1 0-1.414-1.415L12 9.585l-1.294-1.294a1 1 0 0 0-1.414 0z"
        />
        <rect width="2" height="7" x="11" y="2.998" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
