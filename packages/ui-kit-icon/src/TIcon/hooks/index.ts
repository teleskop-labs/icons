import { computed } from 'vue'

import { dimensions } from '../../constants'
import { addUnit } from '../../utils'
import type { TInternalIconProps } from '../TIcon.model'

export function useIcon(props: TInternalIconProps) {
  const sizeVars = getIconSizeVars(props)

  return {
    sizeVars,
  }
}

function getIconSizeVars(props: TInternalIconProps) {
  return computed<Record<string, string>>(() => {
    const size = getSizeRaw(props)

    if (!size) {
      return {} as Record<string, string>
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
