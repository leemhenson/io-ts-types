import * as t from 'io-ts';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
/**
 * @since 0.5.0
 */
export interface NonEmptyArrayC<C extends t.Mixed> extends t.Type<NonEmptyArray<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
}
/**
 * @since 0.5.0
 */
export declare function nonEmptyArray<C extends t.Mixed>(codec: C, name?: string): NonEmptyArrayC<C>;
