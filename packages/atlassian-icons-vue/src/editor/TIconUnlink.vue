<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconUnlink',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5 10V9h2v1H5zm4-5h1v2H9V5zm7.646 12.354.708-.708 2 2-.708.708-2-2zM17 15v-1h2v1h-2zm-3 2h1v2h-1v-2zM7.354 6.646l-.708.708-2-2 .708-.708 2 2zm3.567 9.037 1.061-1.062a.75.75 0 1 1 1.06 1.061l-1.06 1.061a3.249 3.249 0 0 1-4.596 0 3.247 3.247 0 0 1 0-4.596l1.06-1.061.703-.703c.793-.63 1.773.35 1.06 1.06l-.702.703-1.06 1.062a1.747 1.747 0 0 0 0 2.474 1.749 1.749 0 0 0 2.474 0zm2.658-7.608-1.061 1.061a.75.75 0 0 1-1.06-1.06l1.06-1.062a3.249 3.249 0 0 1 4.596 0 3.247 3.247 0 0 1 0 4.596l-1.06 1.062-.703.702c-.565.565-1.581-.45-1.06-1.06l.702-.703 1.06-1.061a1.747 1.747 0 0 0 0-2.475 1.749 1.749 0 0 0-2.474 0z"
      />
    </svg>
  </TIcon>
</template>
