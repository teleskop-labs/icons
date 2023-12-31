import { debugWarn } from './error'
import { isNumber, isString, isStringNumber } from './shared'

const SCOPE = '@teleskop-labs/atlassian-icons-vue: utils/dom/style'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) {
    return ''
  }

  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`
  }

  if (isString(value)) {
    return value
  }

  debugWarn(SCOPE, 'binding value must be a string or number')

  return ''
}
