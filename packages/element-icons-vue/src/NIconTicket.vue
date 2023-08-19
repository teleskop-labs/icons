<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconTicket',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 1024 1024">
      <path
        fill="currentColor"
        d="M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
      />
    </svg>
  </NIcon>
</template>
