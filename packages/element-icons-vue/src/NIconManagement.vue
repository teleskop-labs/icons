<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconManagement',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 1024 1024">
      <path fill="currentColor" d="M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z" />
    </svg>
  </NIcon>
</template>
