<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconHistogram',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 1024 1024">
      <path fill="currentColor" d="M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z" />
    </svg>
  </NIcon>
</template>
