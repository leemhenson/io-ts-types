"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Given
 *
 * ```ts
 * import { Newtype, iso } from 'newtype-ts'
 *
 * type Age = Newtype<'Age', number>
 * ```
 *
 * I want to define a runtime type whose derived type is
 *
 * ```ts
 * type Person = {
 *   name: string
 *   age: Age
 * }
 * ```
 *
 * Solution
 *
 * ```ts
 * import * as t from 'io-ts'
 * import { fromNewtype } from 'io-ts-types/lib/newtype-ts/fromNewtype'
 *
 * const Person = t.type({
 *   name: t.string,
 *   age: fromNewtype<Age>(t.Integer)
 * })
 * ```
 *
 * Usage example
 *
 * ```ts
 * import { iso } from 'newtype-ts'
 * import { Lens } from 'monocle-ts'
 * import { right } from 'fp-ts/lib/Either'
 *
 * type Person = t.TypeOf<typeof Person>
 *
 * const ageLens = Lens.fromProp<Person, 'age'>('age').composeIso(iso<Age>())
 *
 * const sum = (a: number) => (b: number) => a + b
 *
 * assert.deepStrictEqual(Person.decode({ name: 'Giulio', age: 44 }).map(ageLens.modify(sum(1)))), right({ name: 'Giulio', age: 44 }))
 * ```
 */
exports.fromNewtype = function (type) { return type; };
exports.fromNewtypeCurried = function () { return function (type) { return type; }; };
//# sourceMappingURL=fromNewtype.js.map