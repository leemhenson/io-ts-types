import * as t from 'io-ts';
export interface RegExpC extends t.Type<RegExp, RegExp, unknown> {
}
/**
 * @example
 * import { regexp } from 'io-ts-types/lib/regexp'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const input1 = /\w+/
 * const input2 = new RegExp('\\w+')
 * assert.deepStrictEqual(regexp.decode(input1), right(input1))
 * assert.deepStrictEqual(regexp.decode(input2), right(input2))
 *
 * @since 0.4.4
 */
export declare const regexp: RegExpC;
