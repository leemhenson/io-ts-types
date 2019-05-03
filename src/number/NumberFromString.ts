import * as t from 'io-ts'
import { either } from 'fp-ts/lib/Either'

export class NumberFromStringType extends t.Type<number, string> {
  readonly _tag: 'NumberFromStringType' = 'NumberFromStringType'
  constructor() {
    super(
      'NumberFromString',
      t.number.is,
      (u, c) =>
        either.chain(t.string.validate(u, c), s => {
          const n = +s
          return isNaN(n) ? t.failure(s, c) : t.success(n)
        }),
      String
    )
  }
}

export interface NumberFromStringC extends NumberFromStringType {}

/**
 * @example
 * import { NumberFromString } from 'io-ts-types/lib/number/NumberFromString'
 *
 * NumberFromString.decode('1') // right(1)
 * NumberFromString.decode('1.1') // right(1.1)
 */
export const NumberFromString: NumberFromStringC = new NumberFromStringType()
