<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconAppAccess',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <path
          fill="currentColor"
          d="M12.682 12H5.01A2.006 2.006 0 0 0 3 14v4.446c0 2.162 4.836 2.951 8.368 2.368A5.975 5.975 0 0 1 10 17a5.994 5.994 0 0 1 2.682-5z"
        />
        <circle cx="9" cy="7" r="4" fill="currentColor" />
        <circle cx="16" cy="17" r="5" fill="currentColor" />
        <path
          fill="inherit"
          d="M14.674 19.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 0 0-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 0 0-1.3 1.3l1.406 1.405z"
        />
      </g>
    </svg>
  </TIcon>
</template>
