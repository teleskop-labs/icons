import type { VNode } from 'vue'

import type { GlyphColorProps, GlyphSizeProps, OtherGlyphProps } from '../types'
import { defintDefaultProps, type TPropsWithDefaults } from '../utils'

// Props

export interface TIconProps extends OtherGlyphProps, GlyphSizeProps, GlyphColorProps {}

/**
 * Мы скрываем эти свойства от пользователей, так как они используются для
 * обхода размеров иконок, специфически для icon-file-type.
 */
export interface TInternalIconProps extends TIconProps {
  /**
   * @internal НЕ ДЛЯ ПУБЛИЧНОГО ИСПОЛЬЗОВАНИЯ.
   * Задает ширину иконки.
   * Это используется только для иконок с пользовательским размером в `@atlaskit/icon-file-type`.
   */
  readonly width?: number | string

  /**
   * @internal НЕ ДЛЯ ПУБЛИЧНОГО ИСПОЛЬЗОВАНИЯ.
   * Задает высоту иконки.
   * Это используется только для иконок с пользовательским размером в `@atlaskit/icon-file-type`.
   */
  readonly height?: number | string
}

export const TInternalIconDefaultProps = defintDefaultProps<TInternalIconProps>()({
  primaryColor: 'currentColor',
  secondaryColor: 'var(--t-sys-elevation-surface)',
})

export type TInternalIconPropsWithDefaults = TPropsWithDefaults<TInternalIconProps, typeof TInternalIconDefaultProps>

// Slots

export interface TIconSlots {
  readonly default?: () => VNode[]
}
