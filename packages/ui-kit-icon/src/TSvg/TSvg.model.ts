import type { VNode } from 'vue'

import type { GlyphColorProps, GlyphSizeProps, OtherGlyphProps } from '../types'
import { defintDefaultProps, type TPropsWithDefaults } from '../utils'

// Props

export interface TSvgProps extends OtherGlyphProps, GlyphSizeProps, GlyphColorProps {}

export const TSvgDefaultProps = defintDefaultProps<TSvgProps>()({
  size: 'medium',
  primaryColor: 'currentColor',
  secondaryColor: 'var(--t-sys-elevation-surface)',
})

export type TSvgPropsWithDefaults = TPropsWithDefaults<TSvgProps, typeof TSvgDefaultProps>

// Slots

export interface TSvgSlots {
  readonly default?: () => VNode[]
}
