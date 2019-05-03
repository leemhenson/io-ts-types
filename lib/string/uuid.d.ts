/**
 * @file Use `io-ts-types/lib/UUID` instead.
 * @deprecated
 */
import * as t from 'io-ts';
export interface uuidC extends t.RefinementType<t.StringType, string, string, unknown> {
}
/**
 * @example
 * import { uuid } from 'io-ts-types/lib/string/uuid'
 *
 * uuid.decode('6e9c5587-a342-4b63-a901-87b31fa2ffa3') // right('6e9c5587-a342-4b63-a901-87b31fa2ffa3')
 */
export declare const uuid: uuidC;
