import { Option } from 'fp-ts/lib/Option';
import * as t from 'io-ts';
export interface JSONOption<A> {
    type: 'Option';
    value: A | null | undefined;
}
export declare class OptionFromJSONType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
    readonly type: C;
    readonly _tag: 'OptionFromJSONType';
    constructor(name: string, is: OptionFromJSONType<C, A, O, I>['is'], validate: OptionFromJSONType<C, A, O, I>['validate'], serialize: OptionFromJSONType<C, A, O, I>['encode'], type: C);
}
export interface OptionFromJSONC<C extends t.Mixed> extends OptionFromJSONType<C, Option<t.TypeOf<C>>, JSONOption<t.OutputOf<C>>, unknown> {
}
/**
 * Use `io-ts-types/lib/optionFromJSON` instead.
 *
 * @example
 * import * as t from 'io-ts'
 * import { createOptionFromJSON } from 'io-ts-types/lib/fp-ts/createOptionFromJSON'
 * import { right } from 'fp-ts/lib/Either'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * const T = createOptionFromJSON(t.number)
 * assert.deepStrictEqual(T.decode({ type: 'Option', value: null }), right(none))
 * assert.deepStrictEqual(T.decode({ type: 'Option', value: undefined }), right(none))
 * assert.deepStrictEqual(T.decode({ type: 'Option', value: 1 }), right(some(1)))
 * @deprecated
 */
export declare const createOptionFromJSON: <C extends t.Mixed>(codec: C, name?: string) => OptionFromJSONC<C>;
