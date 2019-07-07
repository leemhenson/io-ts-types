import * as t from 'io-ts';
/**
 * @since 0.5.0
 */
export interface DateFromUnixTimeC extends t.Type<Date, number, unknown> {
}
/**
 * @example
 * import { DateFromUnixTime } from 'io-ts-types/lib/DateFromUnixTime'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime() / 1000
 * assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
 *
 * @since 0.5.0
 */
export declare const DateFromUnixTime: DateFromUnixTimeC;
