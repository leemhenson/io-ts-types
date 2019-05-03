/**
 * @file Use `io-ts-types/lib/eitherFromJSON` instead.
 * @deprecated
 */
import { Either } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
export interface JSONLeft<L> {
    type: 'Left';
    value: L;
}
export interface JSONRight<A> {
    type: 'Right';
    value: A;
}
export declare type JSONEither<L, A> = JSONLeft<L> | JSONRight<A>;
export declare class EitherFromJSONType<L extends t.Any, R extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
    readonly left: L;
    readonly right: R;
    readonly _tag: 'EitherFromJSONType';
    constructor(name: string, is: EitherFromJSONType<L, R, A, O, I>['is'], validate: EitherFromJSONType<L, R, A, O, I>['validate'], serialize: EitherFromJSONType<L, R, A, O, I>['encode'], left: L, right: R);
}
export interface EitherFromJSONC<L extends t.Mixed, R extends t.Mixed> extends EitherFromJSONType<L, R, Either<t.TypeOf<L>, t.TypeOf<R>>, JSONEither<t.OutputOf<L>, t.OutputOf<R>>, unknown> {
}
/**
 * Use `io-ts-types/lib/eitherFromJSON` instead.
 *
 * @example
 * import * as t from 'io-ts'
 * import { createEitherFromJSON } from 'io-ts-types/lib/fp-ts/createEitherFromJSON'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * const T = createEitherFromJSON(t.string, t.number)
 * assert.deepStrictEqual(T.decode({ type: 'Left', value: 's' }), right(left('s')))
 * assert.deepStrictEqual(T.decode({ type: 'Right', value: 1 }), right(right(1)))
 * @deprecated
 */
export declare const createEitherFromJSON: <L extends t.Mixed, R extends t.Mixed>(leftCodec: L, rightCodec: R, name?: string) => EitherFromJSONC<L, R>;
