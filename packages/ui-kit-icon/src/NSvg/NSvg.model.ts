import type { VNode } from 'vue'

import type { GlyphColorProps, GlyphSizeProps, OtherGlyphProps } from '../types'
import { defintDefaultProps, type NPropsWithDefaults } from '../utils'

// Props

export interface NSvgProps extends OtherGlyphProps, GlyphSizeProps, GlyphColorProps {}

export const nSvgDefaultProps = defintDefaultProps<NSvgProps>()({
  size: 'medium',
  primaryColor: 'currentColor',
})

export type NSvgPropsWithDefaults = NPropsWithDefaults<NSvgProps, typeof nSvgDefaultProps>

// Slots

export interface NSvgSlots {
  readonly default: () => VNode[]
}
