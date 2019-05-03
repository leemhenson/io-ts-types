import * as t from 'io-ts';
import { Lens } from 'monocle-ts';
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
export declare const lensesFromInterface: <C extends t.InterfaceType<any, any, any, unknown> | t.StrictType<any, any, any, unknown>>(codec: C) => { [K in keyof C["props"]]: Lens<C["_A"], t.TypeOfProps<C["props"]>[K]>; };
