import { computed } from 'vue'

import { dimensions } from '../constants'
import { addUnit } from '../utils'
import type { TInternalIconProps } from './TIcon.model'

export function getIconSize(props: TInternalIconProps) {
  return computed(() => {
    const size = getSizeRaw(props)

    if (!size) {
      return undefined
    }

    return {
      '--t-comp-icon-size-width': addUnit(size.width),
      '--t-comp-icon-size-height': addUnit(size.height),
    }
  })
}

function getSizeRaw({ width, height, size }: TInternalIconProps) {
  if (width && height) {
    return { width, height }
  }

  if (size) {
    return dimensions[size]
  }

  return undefined
}
