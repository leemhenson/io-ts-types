import * as t from 'io-ts';
export declare class DateFromNumberType extends t.Type<Date, number, unknown> {
    readonly _tag: 'DateFromNumberType';
    constructor();
}
export interface DateFromNumberC extends DateFromNumberType {
}
/**
 * @example
 * import { DateFromNumber } from 'io-ts-types/lib/Date/DateFromNumber'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime()
 * assert.deepStrictEqual(DateFromNumber.decode(input), right(date))
 */
export declare const DateFromNumber: DateFromNumberC;
