<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconVideo',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="currentColor" rx="2" />
        <path
          fill="inherit"
          d="M16.37 14.954 14 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343"
        />
        <rect width="6" height="6" x="7" y="9" fill="inherit" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
