import { computed } from 'vue'

import { dimensions } from '../constants'
import { addUnit } from '../utils'
import type { NInternalIconProps } from './NIcon.model'

export function getIconSize(props: NInternalIconProps) {
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

function getSizeRaw({ width, height, size }: NInternalIconProps) {
  if (width && height) {
    return { width, height }
  }

  if (size) {
    return dimensions[size]
  }

  return undefined
}
