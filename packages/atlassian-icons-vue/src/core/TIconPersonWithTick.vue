<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconPersonWithTick',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11.94 12a6.478 6.478 0 0 0-1.81 4.5c0 1.626.597 3.112 1.583 4.252C8.161 21.448 3 20.68 3 18.446V14c0-1.105.902-2 2.009-2h6.93zM9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.5 11a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm-1.892-5.808a.825.825 0 0 0-1.166 1.166l1.65 1.65a.825.825 0 0 0 1.166 0l3.3-3.3a.825.825 0 0 0-1.166-1.166l-2.717 2.716-1.067-1.066z"
      />
    </svg>
  </TIcon>
</template>
