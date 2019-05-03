"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Use `io-ts-types/lib/IntFromString` instead.
 * @deprecated
 */
var t = require("io-ts");
var NumberFromString_1 = require("./NumberFromString");
/**
 * Use `io-ts-types/lib/IntFromString` instead.
 *
 * @example
 * import { IntegerFromString } from 'io-ts-types/lib/number/IntegerFromString'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(IntegerFromString.decode('1'), right(1))
 * assert.deepStrictEqual(PathReporter.report(IntegerFromString.decode('1.1')), ['Invalid value 1.1 supplied to : IntegerFromString'])
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.IntegerFromString = t.refinement(NumberFromString_1.NumberFromString, 
// tslint:disable-next-line: deprecation
t.Integer.predicate, 'IntegerFromString');
//# sourceMappingURL=IntegerFromString.js.map