import * as t from 'io-ts'
import { either } from 'fp-ts/lib/Either'

export class DateFromUnixTimeType extends t.Type<Date, number, unknown> {
  readonly _tag: 'DateFromUnixTimeType' = 'DateFromUnixTimeType'
  constructor() {
    super(
      'DateFromUnixTime',
      (u): u is Date => u instanceof Date,
      (u, c) => {
        // tslint:disable-next-line: deprecation
        return either.chain(t.Integer.validate(u, c), a => t.success(new Date(a * 1000)))
      },
      a => a.getTime() / 1000
    )
  }
}

export interface DateFromUnixTimeC extends DateFromUnixTimeType {}

/**
 * @example
 * import { DateFromUnixTime } from 'io-ts-types/lib/Date/DateFromUnixTime'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime() / 1000
 * assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
 */
export const DateFromUnixTime: DateFromUnixTimeC = new DateFromUnixTimeType()
