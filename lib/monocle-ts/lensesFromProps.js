"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monocle_ts_1 = require("monocle-ts");
/**
 * Return a `Lens` for each prop
 *
 * @example
 * import * as t from 'io-ts'
 * import { lensesFromProps } from 'io-ts-types/lib/monocle-ts/lensesFromProps'
 *
 * const lenses = lensesFromProps({
 *   name: t.string,
 *   age: t.number
 * })
 *
 * assert.strictEqual(lenses.age.get({ name: 'Giulio', age: 44 }), 44)
 */
exports.lensesFromProps = function (props) {
    var r = {};
    for (var k in props) {
        r[k] = monocle_ts_1.Lens.fromProp(k);
    }
    return r;
};
//# sourceMappingURL=lensesFromProps.js.map