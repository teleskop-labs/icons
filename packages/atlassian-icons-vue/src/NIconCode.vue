<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconCode',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M14.155 4.055a1 1 0 0 0-1.271.62l-4.83 14.046a1 1 0 0 0 1.891.65l4.83-14.045a1 1 0 0 0-.62-1.271m-6.138 8.21-2.58-2.501L8.236 7.05a.999.999 0 1 0-1.392-1.436l-3.54 3.432a1 1 0 0 0 0 1.436l3.32 3.219a1 1 0 1 0 1.393-1.436m12.219 1.568-3.32-3.22a.999.999 0 1 0-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 1 0 1.392 1.436l3.54-3.432a1 1 0 0 0 0-1.436"
      />
    </svg>
  </NIcon>
</template>
