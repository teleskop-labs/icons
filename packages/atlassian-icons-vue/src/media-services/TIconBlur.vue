<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconBlur',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor">
        <path d="M4.889 4H12v8H4V4.889C4 4.398 4.398 4 4.889 4z" />
        <path d="M4 12h8v8H4.889A.889.889 0 0 1 4 19.111V12z" opacity=".4" />
        <path d="M12 4h7.111c.491 0 .889.398.889.889V12h-8V4z" opacity=".55" />
        <path d="M12 12h8v7.111a.889.889 0 0 1-.889.889H12v-8z" opacity=".75" />
      </g>
    </svg>
  </TIcon>
</template>
