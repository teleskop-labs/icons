<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconKeyboard',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m5.836 6.95-3.825 9.97a.5.5 0 0 0 .467.68h1.208a.5.5 0 0 0 .47-.33l.683-1.877a.5.5 0 0 1 .47-.33H9.12a.5.5 0 0 1 .47.33l.683 1.878a.5.5 0 0 0 .47.329h1.272a.5.5 0 0 0 .468-.678L8.685 6.95a.7.7 0 0 0-.655-.45H6.49a.7.7 0 0 0-.654.45zm1.566 2.457 1.25 3.414a.2.2 0 0 1-.188.269H5.966a.2.2 0 0 1-.188-.269l1.249-3.414a.2.2 0 0 1 .375 0zm10.148 6.465c1.222 0 2.142-1.01 2.142-2.603 0-1.594-.902-2.532-2.142-2.532-1.256 0-2.178.938-2.178 2.532 0 1.575.904 2.603 2.178 2.603zm2.161.602c-.372.833-1.276 1.433-2.445 1.433-2.567 0-4.266-2-4.266-4.638 0-2.551 1.664-4.569 4.195-4.569 1.56 0 2.284.833 2.497 1.329v-.34c0-.247.007-.392.213-.576.137-.122.344-.177.62-.165h.764a.581.581 0 0 1 .496.165c.213.203.192.421.192.577v6.394c0 .227.008.526.023.899 0 .191-.041.336-.124.434a.628.628 0 0 1-.508.242h-.93c-.193 0-.45-.084-.533-.184-.083-.1-.165-.23-.183-.532a6.342 6.342 0 0 1-.01-.364v-.105z"
      />
    </svg>
  </TIcon>
</template>
