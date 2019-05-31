import * as t from 'io-ts';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
export declare class NonEmptyArrayFromArrayType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
    readonly type: C;
    readonly _tag: 'NonEmptyArrayFromArrayType';
    constructor(name: string, is: NonEmptyArrayFromArrayType<C, A, O, I>['is'], validate: NonEmptyArrayFromArrayType<C, A, O, I>['validate'], serialize: NonEmptyArrayFromArrayType<C, A, O, I>['encode'], type: C);
}
export interface NonEmptyArrayFromArrayC<C extends t.Mixed> extends NonEmptyArrayFromArrayType<C, NonEmptyArray<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
}
/**
 * @example
 * import * as t from 'io-ts'
 * import { createNonEmptyArrayFromArray } from 'io-ts-types/lib/fp-ts/createNonEmptyArrayFromArray'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = createNonEmptyArrayFromArray(t.number)
 * assert.deepStrictEqual(T.decode([1, 2, 3]), right([1, 2, 3]))
 */
export declare const createNonEmptyArrayFromArray: <C extends t.Mixed>(codec: C, name?: string) => NonEmptyArrayFromArrayC<C>;
