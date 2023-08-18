<script setup lang="ts">
import type { NIconProps } from '@nado/ui-kit-icon'
import { NIcon } from '@nado/ui-kit-icon'

defineOptions({
  name: 'NIconPresenceBusy',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        <path
          fill="inherit"
          d="M9.367 9.363a1.241 1.241 0 0 1 1.747-.008l3.527 3.527c.48.48.48 1.26-.008 1.747a1.241 1.241 0 0 1-1.747.008l-3.527-3.526c-.48-.48-.48-1.26.008-1.748z"
        />
      </g>
    </svg>
  </NIcon>
</template>
