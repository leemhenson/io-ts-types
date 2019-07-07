import * as t from 'io-ts';
export interface NonEmptyStringBrand {
    readonly NonEmptyString: unique symbol;
}
export declare type NonEmptyString = t.Branded<string, NonEmptyStringBrand>;
export interface NonEmptyStringC extends t.Type<NonEmptyString, string, unknown> {
}
/**
 * A codec that succeeds if a string is not empty
 *
 * @example
 * import { NonEmptyString } from 'io-ts-types/lib/NonEmptyString'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(NonEmptyString.decode('a'), right('a'))
 * assert.deepStrictEqual(PathReporter.report(NonEmptyString.decode('')), ['Invalid value "" supplied to : NonEmptyString'])
 *
 * @since 0.4.5
 */
export declare const NonEmptyString: NonEmptyStringC;
