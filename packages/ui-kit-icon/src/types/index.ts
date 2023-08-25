export type Size = 'small' | 'medium' | 'large' | 'xlarge'

export interface GlyphColorProps {
  /**
   * Основной цвет для значка.
   * По умолчанию наследует текущий цвет шрифта.
   */
  readonly primaryColor?: string

  /**
   * Вторичный цвет для значка.
   * По умолчанию имеет цвет фона страницы для значка, поддерживающего два цвета.
   */
  readonly secondaryColor?: string
}

export interface GlyphSizeProps {
  /**
   * Существуют три размера значков – маленький (16px), средний (24px) и большой (32px).
   * Этот пиксельный размер относится к холсту, на котором находится значок,
   * а не к размеру самой формы значка.
   */
  readonly size?: Size
}

export interface OtherGlyphProps {
  /**
   * Текст, используемый для описания значка в контексте.
   * Метка необходима, когда рядом с значком нет видимого текста.
   * Пустая строка помечает значок только для презентации.
   */
  readonly label?: string

  /**
   * Предоставляется свойство testId для определенных элементов,
   * которое представляет собой уникальную строку, отображаемую в виде атрибута данных data-testid в отрендеренном коде,
   * служащую точкой зацепления для автоматизированных тестов.
   */
  readonly testId?: string
}
