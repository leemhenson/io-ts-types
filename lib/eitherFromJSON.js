"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
/**
 * Given a codec representing a type `L` and a codec representing a type `A`, returns a codec representing `Either<L, A>` that is able to deserialize
 * the JSON representation of an `Either`.
 *
 * @example
 * import { eitherFromJSON } from 'io-ts-types/lib/eitherFromJSON'
 * import { Either, left, right } from 'fp-ts/lib/Either'
 * import * as t from 'io-ts'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * const toJSON = <L, A>(ma: Either<L, A>): unknown => JSON.parse(JSON.stringify(ma))
 *
 * const T = eitherFromJSON(t.string, t.number)
 *
 * assert.deepStrictEqual(T.decode(toJSON(right(1))), right(right(1)))
 * assert.deepStrictEqual(T.decode(toJSON(left('a'))), right(left('a')))
 * assert.deepStrictEqual(PathReporter.report(T.decode(right('a'))), ['Invalid value "a" supplied to : Either<string, number>/1: Right<number>/right: number'])
 *
 * @since 0.4.4
 */
function eitherFromJSON(leftCodec, rightCodec, name) {
    if (name === void 0) { name = "Either<" + leftCodec.name + ", " + rightCodec.name + ">"; }
    var leftC = t.strict({
        _tag: t.literal('Left'),
        left: leftCodec
    }, "Left<" + leftCodec.name + ">");
    var rightC = t.strict({
        _tag: t.literal('Right'),
        right: rightCodec
    }, "Right<" + rightCodec.name + ">");
    return t.taggedUnion('_tag', [leftC, rightC], name);
}
exports.eitherFromJSON = eitherFromJSON;
//# sourceMappingURL=eitherFromJSON.js.map