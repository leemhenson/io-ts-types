import * as t from 'io-ts';
export declare class NumberFromStringType extends t.Type<number, string> {
    readonly _tag: 'NumberFromStringType';
    constructor();
}
export interface NumberFromStringC extends NumberFromStringType {
}
/**
 * @example
 * import { NumberFromString } from 'io-ts-types/lib/number/NumberFromString'
 *
 * NumberFromString.decode('1') // right(1)
 * NumberFromString.decode('1.1') // right(1.1)
 */
export declare const NumberFromString: NumberFromStringC;
