"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
/**
 * Changes the output type of the given runtime type
 *
 * @example
 * import * as t from 'io-ts'
 * import { mapOutput } from 'io-ts-types/lib/mapOutput'
 * import { createOptionFromNullable } from 'io-ts-types/lib/fp-ts/createOptionFromNullable'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * // Input: t.Type<Option<number>, number | null, t.mixed>
 * const Input = createOptionFromNullable(t.number)
 *
 * const toUndefined = <A>(x: A | null): A | undefined => (x === null ? undefined : x)
 *
 * // Output: t.Type<Option<number>, number | undefined, t.mixed>
 * const Output = mapOutput(Input, toUndefined)
 *
 * assert.strictEqual(Output.encode(none), undefined)
 * assert.strictEqual(Output.encode(some(1)), 1)
 */
function mapOutput(codec, f, name) {
    if (name === void 0) { name = codec.name; }
    return new t.Type(name, codec.is, codec.validate, function (a) { return f(codec.encode(a)); });
}
exports.mapOutput = mapOutput;
//# sourceMappingURL=mapOutput.js.map