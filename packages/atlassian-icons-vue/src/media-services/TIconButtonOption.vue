<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconButtonOption',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m13.29 10.234-3.059 3.059c-.391.392-.264.71.285.71h2.988a.492.492 0 0 0 .496-.497v-2.988c0-.334-.118-.509-.299-.509-.116 0-.259.072-.411.225z"
      />
    </svg>
  </TIcon>
</template>
