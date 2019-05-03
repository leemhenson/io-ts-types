"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monocle_ts_1 = require("monocle-ts");
var t = require("io-ts");
var Option_1 = require("fp-ts/lib/Option");
/**
 * @example
 * import { get } from 'io-ts-types/lib/monocle-ts/TypePrismIso'
 * import { NumberFromString } from 'io-ts-types/lib/number/NumberFromString'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * const prism = get(NumberFromString)
 * assert.deepStrictEqual(prism.getOption('1'), some(1))
 * assert.deepStrictEqual(prism.getOption('a'), none)
 */
function get(codec) {
    return new monocle_ts_1.Prism(function (s) { return Option_1.fromEither(codec.decode(s)); }, codec.encode);
}
exports.get = get;
/**
 * @example
 * import * as t from 'io-ts'
 * import { Prism } from 'monocle-ts'
 * import { none, some } from 'fp-ts/lib/Option'
 * import { reverseGet } from 'io-ts-types/lib/monocle-ts/TypePrismIso'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const numberFromStringPrism = new Prism<string, number>(s => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? none : some(n)
 * }, String)
 *
 * const MyNumberFromString = reverseGet('MyNumberFromString', numberFromStringPrism, t.number.is)
 *
 * assert.deepStrictEqual(MyNumberFromString.decode('1'), right(1))
 */
function reverseGet(name, prism, is) {
    return new t.Type(name, is, function (s, c) { return Option_1.fold(prism.getOption(s), function () { return t.failure(s, c); }, t.success); }, prism.reverseGet);
}
exports.reverseGet = reverseGet;
//# sourceMappingURL=TypePrismIso.js.map