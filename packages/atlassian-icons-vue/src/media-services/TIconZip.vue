<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconZip',
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
          d="M9 6.999C9 6.447 9.443 6 9.999 6H12v3H9.999A.996.996 0 0 1 9 8.001V6.999zM12 9h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 0 1-.999.999H12V9zm-3 3.999c0-.552.443-.999.999-.999H12v3H9.999A.996.996 0 0 1 9 14.001v-1.002zM12 15h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 0 1-.999.999H12v-3z"
        />
      </g>
    </svg>
  </TIcon>
</template>
