import * as t from 'io-ts';
export declare type JSONObject = {
    [key: string]: JSONType;
};
export interface JSONArray extends Array<JSONType> {
}
export declare type JSONType = null | string | number | boolean | JSONArray | JSONObject;
export interface JSONTypeC extends t.RecursiveType<t.Type<JSONType>> {
}
/**
 * @example
 * import { JSONTypeRT } from 'io-ts-types/lib/JSON/JSONTypeRT'
 * import { right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(JSONTypeRT.decode({ name: 'Giulio' }), right({ name: 'Giulio' }))
 */
export declare const JSONTypeRT: JSONTypeC;
