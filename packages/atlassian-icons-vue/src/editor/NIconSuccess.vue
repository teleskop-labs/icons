<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconSuccess',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1.364-10.964-2.152 4.11-1.543-1.39a1 1 0 1 0-1.338 1.487l2.5 2.25a1 1 0 0 0 1.555-.279l2.75-5.25a1 1 0 0 0-1.772-.928z"
      />
    </svg>
  </NIcon>
</template>
