import * as t from 'io-ts';
import { JSONType } from './JSONTypeRT';
export declare type JSONType = JSONType;
export declare class JSONFromStringType extends t.Type<JSONType> {
    readonly _tag: 'JSONFromStringType';
    constructor();
}
export interface JSONFromStringC extends JSONFromStringType {
}
/**
 * @example
 * import { JSONFromString } from 'io-ts-types/lib/JSON/JSONFromString'
 * import { right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(JSONFromString.decode('{"name":"Giulio"}'), right({ name: 'Giulio' }))
 */
export declare const JSONFromString: JSONFromStringC;
