import type { VNode } from 'vue'

import type { GlyphColorProps, GlyphSizeProps, OtherGlyphProps } from '../types'
import { defintDefaultProps, type NPropsWithDefaults } from '../utils'

// Props

export interface NSvgProps extends OtherGlyphProps, GlyphSizeProps, GlyphColorProps {}

export const NSvgDefaultProps = defintDefaultProps<NSvgProps>()({
  size: 'medium',
  primaryColor: 'currentColor',
  secondaryColor: 'var(--n-sys-elevation-surface)',
})

export type NSvgPropsWithDefaults = NPropsWithDefaults<NSvgProps, typeof NSvgDefaultProps>

// Slots

export interface NSvgSlots {
  readonly default: () => VNode[]
}
