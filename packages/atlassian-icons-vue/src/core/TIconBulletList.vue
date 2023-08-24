<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconBulletList',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <rect width="8" height="2" x="10" y="15" rx="1" />
        <rect width="2" height="2" x="6" y="15" rx="1" />
        <rect width="8" height="2" x="10" y="11" rx="1" />
        <rect width="2" height="2" x="6" y="11" rx="1" />
        <rect width="8" height="2" x="10" y="7" rx="1" />
        <rect width="2" height="2" x="6" y="7" rx="1" />
      </g>
    </svg>
  </TIcon>
</template>
