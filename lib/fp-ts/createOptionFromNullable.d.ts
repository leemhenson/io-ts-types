import { Option } from 'fp-ts/lib/Option';
import * as t from 'io-ts';
export declare class OptionFromNullableType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
    readonly type: C;
    readonly _tag: 'OptionFromNullableType';
    constructor(name: string, is: OptionFromNullableType<C, A, O, I>['is'], validate: OptionFromNullableType<C, A, O, I>['validate'], serialize: OptionFromNullableType<C, A, O, I>['encode'], type: C);
}
export interface OptionFromNullableC<C extends t.Mixed> extends OptionFromNullableType<C, Option<t.TypeOf<C>>, t.OutputOf<C> | null, unknown> {
}
/**
 * @example
 * import * as t from 'io-ts'
 * import { createOptionFromNullable } from 'io-ts-types/lib/fp-ts/createOptionFromNullable'
 * import { right } from 'fp-ts/lib/Either'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * const T = createOptionFromNullable(t.number)
 * assert.deepStrictEqual(T.decode(null), right(none))
 * assert.deepStrictEqual(T.decode(undefined), right(none))
 * assert.deepStrictEqual(T.decode(1), right(some(1)))
 */
export declare const createOptionFromNullable: <C extends t.Mixed>(codec: C, name?: string) => OptionFromNullableC<C>;
