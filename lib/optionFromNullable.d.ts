import { Option } from 'fp-ts/lib/Option';
import * as t from 'io-ts';
/**
 * @since 0.5.0
 */
export interface OptionFromNullableC<C extends t.Mixed> extends t.Type<Option<t.TypeOf<C>>, t.OutputOf<C> | null, unknown> {
}
/**
 * @since 0.5.0
 */
export declare function optionFromNullable<C extends t.Mixed>(codec: C, name?: string): OptionFromNullableC<C>;
