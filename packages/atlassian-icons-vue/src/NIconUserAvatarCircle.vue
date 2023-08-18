<script setup lang="ts">
import type { NIconProps } from '@teleskop-labs/ui-kit-icon'
import { NIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'NIconUserAvatarCircle',
})

const props = defineProps<NIconProps>()
</script>

<template>
  <NIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill-rule="evenodd">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <circle cx="12" cy="9" r="3" fill="inherit" />
        <path
          fill="inherit"
          fill-rule="nonzero"
          d="M7 18.245A7.966 7.966 0 0 0 12 20c1.892 0 3.63-.657 5-1.755V15c0-1.115-.895-2-2-2H9c-1.113 0-2 .895-2 2v3.245z"
        />
      </g>
    </svg>
  </NIcon>
</template>
