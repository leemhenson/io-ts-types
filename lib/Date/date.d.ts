import * as t from 'io-ts';
export declare class DateType extends t.Type<Date, Date, unknown> {
    readonly _tag: 'DateType';
    constructor();
}
export interface DateC extends DateType {
}
/**
 * @example
 * import { date } from 'io-ts-types/lib/Date/date'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const input = new Date(1973, 10, 30)
 * assert.deepStrictEqual(date.decode(input), right(input))
 */
export declare const date: DateC;
