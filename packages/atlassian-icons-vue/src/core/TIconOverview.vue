<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconOverview',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M8.01 18c.546 0 .99-.444.99-1a1 1 0 0 0-.99-1H3.99A.993.993 0 0 0 3 17a1 1 0 0 0 .99 1h4.02zM3 7c0 .552.445 1 .993 1h16.014A.994.994 0 0 0 21 7c0-.552-.445-1-.993-1H3.993A.994.994 0 0 0 3 7zm10.998 6A.999.999 0 0 0 15 12c0-.552-.456-1-1.002-1H4.002A.999.999 0 0 0 3 12c0 .552.456 1 1.002 1h9.996z"
      />
    </svg>
  </TIcon>
</template>
