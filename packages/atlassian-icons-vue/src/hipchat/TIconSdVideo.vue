<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconSdVideo',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M21 7c.523 0 1 .395 1 .94v8.12c0 .545-.477.94-1 .94-.157 0-.318-.035-.47-.112L17 15.118V8.873l3.531-1.763c.152-.075.312-.11.469-.11zM3.998 6H14a2 2 0 012 2.003v7.995A2 2 0 0114.001 18H4a2 2 0 01-2-2.002V8.003A2 2 0 013.999 6z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  </TIcon>
</template>
