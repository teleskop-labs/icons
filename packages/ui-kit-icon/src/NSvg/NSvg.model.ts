import { defintDefaultProps, type NPropsWithDefaults } from '../utils'
import type { VNode } from 'vue'

import type { GlyphColorProps, GlyphSizeProps, OtherGlyphProps } from '../types'

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
