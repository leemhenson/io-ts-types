import * as t from 'io-ts';
export declare class DateFromISOStringType extends t.Type<Date, string, unknown> {
    readonly _tag: 'DateFromISOStringType';
    constructor();
}
export interface DateFromISOStringC extends DateFromISOStringType {
}
/**
 * @example
 * import { DateFromISOString } from 'io-ts-types/lib/Date/DateFromISOString'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.toISOString()
 * assert.deepStrictEqual(DateFromISOString.decode(input), right(date))
 */
export declare const DateFromISOString: DateFromISOStringC;
