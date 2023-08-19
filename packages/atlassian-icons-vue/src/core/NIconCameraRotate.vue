<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconCameraRotate',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="20" height="16" x="2" y="5" fill="currentColor" rx="2" />
        <path fill="currentColor" d="M8 4c0-.552.453-1 .997-1h6.006c.55 0 .997.444.997 1v1H8V4z" />
        <circle cx="12" cy="17" r="1" fill="inherit" />
        <path fill="inherit" fill-rule="nonzero" d="M16.9 14a5 5 0 1 0-4.9 4v-2a3 3 0 1 1 2.83-2h2.07z" />
        <path
          fill="inherit"
          d="M13.292 12.291a1.004 1.004 0 0 0 0 1.415l1.997 1.996c.197.197.453.298.712.298.254 0 .511-.099.711-.298l1.995-1.996a1 1 0 1 0-1.414-1.415L16 13.585l-1.294-1.294a1 1 0 0 0-1.414 0z"
        />
      </g>
    </svg>
  </NIcon>
</template>
