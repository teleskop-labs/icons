import { computed } from 'vue'

import { dimensions } from '../../constants'
import { addUnit } from '../../utils'
import type { NInternalIconProps } from '../NIcon.model'

export function useIcon(props: NInternalIconProps) {
  const sizeVars = getIconSizeVars(props)

  return {
    sizeVars,
  }
}

function getIconSizeVars(props: NInternalIconProps) {
  return computed<Record<string, string>>(() => {
    const size = getSizeRaw(props)

    if (!size) {
      return {} as Record<string, string>
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
