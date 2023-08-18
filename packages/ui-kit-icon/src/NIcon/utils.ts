import { addUnit } from '@nado/ui-kit-utils'
import { computed } from 'vue'
import type { Ref } from 'vue'

import { dimensions } from '../constants'
// TODO: можно, наверное, экспортировать из компонента interface пропросов и остальное, если надо
import type { NInternalIconProps } from './NIcon.model'

interface Props {
  readonly size: Ref<NInternalIconProps['size']>
  readonly width: Ref<NInternalIconProps['width']>
  readonly height: Ref<NInternalIconProps['height']>
}

export function getIconSize(props: Props) {
  return computed(() => {
    const size = getSizeRaw(props)

    if (!size) {
      return undefined
    }

    return {
      '--n-comp-icon-size-width': addUnit(size.width),
      '--n-comp-icon-size-height': addUnit(size.height),
    }
  })
}

function getSizeRaw({ width, height, size }: Props) {
  if (width.value && height.value) {
    return { width: width.value, height: height.value }
  }

  if (size.value) {
    return dimensions[size.value]
  }

  return undefined
}
