"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var noneC = t.strict({
    _tag: t.literal('None')
}, 'None');
/**
 * Given a codec representing a type `A`, returns a codec representing `Option<A>` that is able to deserialize
 * the JSON representation of an `Option`.
 *
 * @example
 * import { optionFromJSON } from 'io-ts-types/lib/optionFromJSON'
 * import { right } from 'fp-ts/lib/Either'
 * import { Option, none, some } from 'fp-ts/lib/Option'
 * import * as t from 'io-ts'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * const toJSON = <A>(ma: Option<A>): unknown => JSON.parse(JSON.stringify(ma))
 *
 * const T = optionFromJSON(t.number)
 *
 * assert.deepStrictEqual(T.decode(toJSON(none)), right(none))
 * assert.deepStrictEqual(T.decode(toJSON(some(1))), right(some(1)))
 * assert.deepStrictEqual(PathReporter.report(T.decode(some('a'))), ['Invalid value "a" supplied to : Option<number>/1: Some<number>/value: number'])
 *
 * @since 0.4.4
 */
function optionFromJSON(codec, name) {
    if (name === void 0) { name = "Option<" + codec.name + ">"; }
    var someC = t.strict({
        _tag: t.literal('Some'),
        value: codec
    }, "Some<" + codec.name + ">");
    return t.taggedUnion('_tag', [noneC, someC], name);
}
exports.optionFromJSON = optionFromJSON;
//# sourceMappingURL=optionFromJSON.js.map