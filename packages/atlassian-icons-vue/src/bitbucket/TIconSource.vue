<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconSource',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m8.852 6.743-4.558 4.548a1 1 0 0 0-.001 1.415v.001l4.559 4.549a1.052 1.052 0 0 0 1.489-1.486l-.001-.001-3.775-3.77 3.775-3.768a1.051 1.051 0 0 0 .002-1.486l-.001-.001a1.052 1.052 0 0 0-1.489-.001zm4.806.001a1.05 1.05 0 0 0 0 1.486v.001L17.435 12l-3.776 3.769a1.05 1.05 0 0 0 0 1.487 1.052 1.052 0 0 0 1.488 0l4.558-4.547a1 1 0 0 0 .001-1.414v-.002l-4.559-4.55a1.05 1.05 0 0 0-.744-.307 1.05 1.05 0 0 0-.745.308z"
      />
    </svg>
  </TIcon>
</template>
