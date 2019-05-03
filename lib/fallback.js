"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var withValidate_1 = require("./withValidate");
var Either_1 = require("fp-ts/lib/Either");
/**
 * Returns a clone of the given codec that always succeed using the given value `a` if the original codec fails
 *
 * @example
 * import { fallback } from 'io-ts-types/lib/fallback'
 * import * as t from 'io-ts'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = fallback(t.number)(-1)
 *
 * assert.deepStrictEqual(T.decode(1), right(1))
 * assert.deepStrictEqual(T.decode('a'), right(-1))
 */
exports.fallback = function (codec) { return function (a, name) {
    if (name === void 0) { name = "fallback(" + codec.name + ")"; }
    var isFallbackValid = codec.is(a);
    return withValidate_1.withValidate(codec, function (u, c) { return Either_1.orElse(codec.validate(u, c), function (e) { return (isFallbackValid ? t.success(a) : Either_1.left(e)); }); }, name);
}; };
//# sourceMappingURL=fallback.js.map