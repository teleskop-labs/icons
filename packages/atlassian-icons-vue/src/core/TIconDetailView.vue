<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconDetailView',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M14 17h6c.003 0 0-9.994 0-9.994C20 7 14 7 14 7v10zM12 5h8c1.105 0 2 .897 2 2.006v9.988A1.998 1.998 0 0 1 20 19h-8V5zM2 7h8V5H2.997A.996.996 0 0 0 2 6v1zm0 4h8V9H2zm0 7c0 .552.453 1 .997 1H10v-2H2v1zm0-3h8v-2H2z"
      />
    </svg>
  </TIcon>
</template>
