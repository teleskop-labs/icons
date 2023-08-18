export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

export function isStringNumber(val: string): boolean {
  if (!isString(val)) {
    return false
  }

  return !Number.isNaN(Number(val))
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}
