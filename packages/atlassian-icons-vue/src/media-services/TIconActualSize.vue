<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconActualSize',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M16.587 6.003H15A1 1 0 0 1 15 4h3.9l.047.001a.975.975 0 0 1 .736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 1 1-2 0V7.411l-3.309 3.308a.977.977 0 0 1-1.374-.005l-.032-.032a.976.976 0 0 1-.005-1.374l3.307-3.305zM7.413 17.997H9A1 1 0 0 1 9 20H5.1l-.047-.001a.975.975 0 0 1-.736-.285l-.032-.032A.977.977 0 0 1 4 18.946a1.12 1.12 0 0 1 0-.048v-3.896a1 1 0 1 1 2 0v1.587l3.309-3.308a.977.977 0 0 1 1.374.005l.032.032a.976.976 0 0 1 .005 1.374l-3.307 3.305z"
      />
    </svg>
  </TIcon>
</template>
