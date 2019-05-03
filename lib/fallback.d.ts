import * as t from 'io-ts';
/**
 * Returns a clone of the given codec that always succeed using the given value `a` if the original codec fails
 *
 * @example
 * import { fallback } from 'io-ts-types/lib/fallback'
 * import * as t from 'io-ts'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = fallback(t.number)(-1)
 *
 * assert.deepStrictEqual(T.decode(1), right(1))
 * assert.deepStrictEqual(T.decode('a'), right(-1))
 */
export declare const fallback: <A, O, I>(codec: t.Type<A, O, I>) => (a: A, name?: string) => t.Type<A, O, I>;
