import type { VNode } from 'vue'

import type { GlyphColorProps, GlyphSizeProps, OtherGlyphProps } from '../types'
import { defintDefaultProps, type NPropsWithDefaults } from '../utils'

export interface NIconProps extends OtherGlyphProps, GlyphSizeProps, GlyphColorProps {}

/**
 * Мы скрываем эти свойства от пользователей, так как они используются для
 * обхода размеров иконок, специфически для icon-file-type.
 */
export interface NInternalIconProps extends NIconProps {
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

export const NInternalIconDefaultProps = defintDefaultProps<NInternalIconProps>()({
  primaryColor: 'currentColor',
})

export type NInternalIconPropsWithDefaults = NPropsWithDefaults<NInternalIconProps, typeof NInternalIconDefaultProps>

// Slots

export interface NIconSlots {
  readonly default?: () => VNode[]
}
