import * as t from 'io-ts';
/**
 * Returns a codec from a refinement
 *
 * @since 0.4.4
 */
export declare function fromRefinement<A>(name: string, is: (u: unknown) => u is A): t.Type<A, A, unknown>;
