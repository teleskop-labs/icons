<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconOval',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 20c-4.943 0-9-3.55-9-8s4.057-8 9-8 9 3.55 9 8-4.057 8-9 8zm0-2c3.893 0 7-2.718 7-6s-3.107-6-7-6-7 2.718-7 6 3.107 6 7 6z"
      />
    </svg>
  </TIcon>
</template>
