<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/icon'
import { NIcon } from '@teleskop-labs/icon'

defineOptions({
  name: 'NIconSymbols',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m12 9.44 1.76-1.744a2.505 2.505 0 0 1 3.52 0 2.451 2.451 0 0 1 0 3.488L12 16.417l-5.28-5.232a2.451 2.451 0 0 1 0-3.49 2.505 2.505 0 0 1 3.52 0v.001L12 9.44zm-6.684 3.143.003.004 6.322 6.266a.508.508 0 0 0 .718 0l6.322-6.266.003-.004.004-.003a4.412 4.412 0 0 0 0-6.28 4.509 4.509 0 0 0-6.336 0l-.003.004-.004.003L12 6.65l-.345-.342-.004-.003-.003-.003a4.509 4.509 0 0 0-6.336 0 4.412 4.412 0 0 0 0 6.279l.004.003z"
      />
    </svg>
  </NIcon>
</template>
