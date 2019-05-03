"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lensesFromProps_1 = require("./lensesFromProps");
/**
 * Return a `Lens` for each prop
 *
 * @example
 * import * as t from 'io-ts'
 * import { lensesFromInterface } from 'io-ts-types/lib/monocle-ts/lensesFromInterface'
 *
 * const Person = t.type({
 *   name: t.string,
 *   age: t.number
 * })
 *
 * const lenses = lensesFromInterface(Person)
 * assert.strictEqual(lenses.age.get({ name: 'Giulio', age: 44 }), 44)
 */
// tslint:disable-next-line: deprecation
exports.lensesFromInterface = function (codec) {
    return lensesFromProps_1.lensesFromProps(codec.props);
};
//# sourceMappingURL=lensesFromInterface.js.map