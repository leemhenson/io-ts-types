"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var Either_1 = require("fp-ts/lib/Either");
/**
 * @since 0.5.0
 */
exports.BooleanFromString = new t.Type('BooleanFromString', t.boolean.is, function (u, c) {
    return Either_1.either.chain(t.string.validate(u, c), function (s) {
        return s === 'true' ? t.success(true) : s === 'false' ? t.success(false) : t.failure(u, c);
    });
}, String);
//# sourceMappingURL=BooleanFromString.js.map