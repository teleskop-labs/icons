<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconDiscoverFilled',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-1.101-10.78c-.248.127-.55.427-.678.678L8.24 14.797c-.55 1.084-.118 1.514.965.963l3.898-1.98c.248-.127.55-.427.677-.678l1.981-3.899c.552-1.083.12-1.514-.964-.964L10.9 10.221zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      />
    </svg>
  </TIcon>
</template>
