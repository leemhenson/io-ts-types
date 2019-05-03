import * as t from 'io-ts';
export interface UUIDBrand {
    readonly UUID: unique symbol;
}
export declare type UUID = t.Branded<string, UUIDBrand>;
export interface UUIDC extends t.Type<UUID, string, unknown> {
}
/**
 * @example
 * import { UUID } from 'io-ts-types/lib/UUID'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(UUID.decode('00000000-0000-0000-0000-000000000000'), right('00000000-0000-0000-0000-000000000000'))
 * assert.deepStrictEqual(PathReporter.report(UUID.decode('not a uuid')), ['Invalid value "not a uuid" supplied to : UUID'])
 *
 * @since 0.4.6
 */
export declare const UUID: UUIDC;
