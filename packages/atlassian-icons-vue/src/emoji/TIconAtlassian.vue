<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconAtlassian',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.703 11.475c-.237-.253-.61-.239-.767.087L4.05 19.33a.464.464 0 0 0 .415.672h5.412a.448.448 0 0 0 .415-.26c1.167-2.408.46-6.077-1.59-8.267zm2.851-7.065c-2.174 3.443-2.03 7.257-.598 10.12l2.608 5.217c.078.159.24.26.416.26h5.411a.464.464 0 0 0 .416-.671s-7.28-14.567-7.46-14.93c-.167-.325-.583-.332-.793.003z"
      />
    </svg>
  </TIcon>
</template>
