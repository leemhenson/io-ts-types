import { Ord } from 'fp-ts/lib/Ord';
import * as t from 'io-ts';
export interface SetFromArrayC<C extends t.Mixed> extends t.Type<Set<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
}
export declare function setFromArray<C extends t.Mixed>(codec: C, O: Ord<t.TypeOf<C>>, name?: string): SetFromArrayC<C>;
