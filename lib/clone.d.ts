import * as t from 'io-ts';
/**
 * Returns a clone of the given codec
 *
 * @example
 * import { clone } from 'io-ts-types/lib/clone'
 * import * as t from 'io-ts'
 *
 * assert.deepStrictEqual(clone(t.string), t.string)
 *
 * @since 0.4.3
 */
export declare function clone<C extends t.Any>(t: C): C;
