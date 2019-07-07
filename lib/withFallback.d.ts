import * as t from 'io-ts';
/**
 * Returns a clone of the given codec that always succeed using the given value `a` if the original codec fails
 *
 * @example
 * import { withFallback } from 'io-ts-types/lib/withFallback'
 * import * as t from 'io-ts'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = withFallback(t.number, -1)
 *
 * assert.deepStrictEqual(T.decode(1), right(1))
 * assert.deepStrictEqual(T.decode('a'), right(-1))
 *
 * @since 0.5.0
 */
export declare function withFallback<C extends t.Any>(codec: C, a: t.TypeOf<C>, name?: string): C;
