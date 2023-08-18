import { isString } from './shared'

class TelskopError extends Error {
  public constructor(m: string) {
    super(m)
    this.name = 'TelskopError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new TelskopError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope) ? new TelskopError(`[${scope}] ${message}`) : scope

    console.warn(error)
  }
}
