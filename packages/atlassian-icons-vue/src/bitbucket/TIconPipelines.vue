<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconPipelines',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          d="M7.293 5.293a.999.999 0 0 0 0 1.414L8.586 8 7.293 9.293a1 1 0 1 0 1.415 1.414l1.995-1.995a1 1 0 0 0 0-1.423L8.708 5.293a.997.997 0 0 0-1.415 0z"
        />
        <path
          d="M16.473 7c-2.861.01-5.093 2.063-5.392 4.847L10.973 13a3.509 3.509 0 0 1-4.243 2.917 3.481 3.481 0 0 1-2.634-2.593 3.506 3.506 0 0 1 3.806-4.302c.582.066 1.105-.347 1.105-.934v-.102a.948.948 0 0 0-.82-.944 5.71 5.71 0 0 0-1.866.081c-2.08.433-3.764 2.113-4.198 4.194A5.508 5.508 0 0 0 7.505 18a5.503 5.503 0 0 0 5.482-5l.105-1.265c.228-1.645 2.057-3.087 4.148-2.659a3.491 3.491 0 0 1 2.68 2.677 3.506 3.506 0 0 1-2.246 4.044 1.012 1.012 0 0 0-.691.946c0 .683.673 1.178 1.317.954a5.505 5.505 0 0 0 3.61-6.204C21.452 8.908 19.096 6.991 16.473 7"
        />
      </g>
    </svg>
  </TIcon>
</template>
