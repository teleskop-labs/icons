<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconArrowDown',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11 6v9.586l-3.793-3.793a.999.999 0 0 0-1.414 0c-.39.39-.39 1.024 0 1.415l5.5 5.499A.993.993 0 0 0 12 19a.993.993 0 0 0 .707-.293l5.5-5.499a1 1 0 1 0-1.414-1.415L13 15.586V6a1 1 0 0 0-2 0z"
      />
    </svg>
  </TIcon>
</template>
