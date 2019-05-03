import * as t from 'io-ts';
import { Ord } from 'fp-ts/lib/Ord';
export declare class SetFromArrayType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
    readonly type: C;
    readonly ordA: Ord<t.TypeOf<C>>;
    readonly _tag: 'SetFromArrayType';
    constructor(name: string, is: SetFromArrayType<C, A, O, I>['is'], validate: SetFromArrayType<C, A, O, I>['validate'], serialize: SetFromArrayType<C, A, O, I>['encode'], type: C, ordA: Ord<t.TypeOf<C>>);
}
export interface SetFromArrayC<C extends t.Mixed> extends SetFromArrayType<C, Set<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
}
/**
 * @example
 * import * as t from 'io-ts'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 * import { createSetFromArray } from 'io-ts-types/lib/fp-ts/createSetFromArray'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = createSetFromArray(t.number, ordNumber)
 *
 * assert.deepStrictEqual(T.decode([1, 2, 3]), right(new Set([1, 2, 3])))
 */
export declare const createSetFromArray: <C extends t.Mixed>(codec: C, ordA: Ord<C["_A"]>, name?: string) => SetFromArrayC<C>;
