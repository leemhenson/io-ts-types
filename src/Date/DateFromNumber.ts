import * as t from 'io-ts'
import { either } from 'fp-ts/lib/Either'

export class DateFromNumberType extends t.Type<Date, number, unknown> {
  readonly _tag: 'DateFromNumberType' = 'DateFromNumberType'
  constructor() {
    super(
      'DateFromNumber',
      (u): u is Date => u instanceof Date,
      (u, c) =>
        either.chain(t.number.validate(u, c), n => {
          const d = new Date(n)
          return isNaN(d.getTime()) ? t.failure(n, c) : t.success(d)
        }),
      a => a.getTime()
    )
  }
}

export interface DateFromNumberC extends DateFromNumberType {}

/**
 * @example
 * import { DateFromNumber } from 'io-ts-types/lib/Date/DateFromNumber'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime()
 * assert.deepStrictEqual(DateFromNumber.decode(input), right(date))
 */
export const DateFromNumber: DateFromNumberC = new DateFromNumberType()
