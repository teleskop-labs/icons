<script setup lang="ts">
import type { TIconProps } from '@teleskop-labs/ui-kit-icon'
import { TIcon } from '@teleskop-labs/ui-kit-icon'

defineOptions({
  name: 'TIconScheduleFilled',
})

const props = defineProps<TIconProps>()
</script>

<template>
  <TIcon v-bind="props">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-rule="evenodd">
        <path
          d="M19 10.341V6.745C19 5.783 18.206 5 17.227 5H17v1c0 1.105-.888 2-2 2-1.105 0-2-.888-2-2V5H9v1c0 1.105-.888 2-2 2-1.105 0-2-.888-2-2V5h-.227C3.793 5 3 5.781 3 6.745v10.51C3 18.218 3.794 19 4.773 19h7.03A6 6 0 0 1 19 10.341z"
        />
        <path
          d="M14 6V5h2v1a1 1 0 0 1-2 0zm0-2a1 1 0 0 1 2 0v1h-2V4zM6 4a1 1 0 0 1 2 0v1H6V4zm0 2V5h2v1a1 1 0 0 1-2 0zm12 9v-1.01a1 1 0 0 0-1-.99c-.556 0-1 .444-1 .99V15h-1.01a1 1 0 0 0-.99 1c0 .556.444 1 .99 1H16v1.01a1 1 0 0 0 1 .99c.556 0 1-.444 1-.99V17h1.01a1 1 0 0 0 .99-1c0-.556-.444-1-.99-1H18zm-1 6a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
        />
      </g>
    </svg>
  </TIcon>
</template>
