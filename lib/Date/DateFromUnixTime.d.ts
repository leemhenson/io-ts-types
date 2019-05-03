import * as t from 'io-ts';
export declare class DateFromUnixTimeType extends t.Type<Date, number, unknown> {
    readonly _tag: 'DateFromUnixTimeType';
    constructor();
}
export interface DateFromUnixTimeC extends DateFromUnixTimeType {
}
/**
 * @example
 * import { DateFromUnixTime } from 'io-ts-types/lib/Date/DateFromUnixTime'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime() / 1000
 * assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
 */
export declare const DateFromUnixTime: DateFromUnixTimeC;
