"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
/**
 * @example
 * import { JSONTypeRT } from 'io-ts-types/lib/JSON/JSONTypeRT'
 * import { right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(JSONTypeRT.decode({ name: 'Giulio' }), right({ name: 'Giulio' }))
 */
exports.JSONTypeRT = t.recursion('JSONType', function (Self) {
    return t.union([t.null, t.string, t.number, t.boolean, t.array(Self), t.record(t.string, Self)]);
});
//# sourceMappingURL=JSONTypeRT.js.map