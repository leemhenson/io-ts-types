import * as t from 'io-ts'
import { toArray, some, every } from 'fp-ts/lib/Set'
import { Ord } from 'fp-ts/lib/Ord'
import { either } from 'fp-ts/lib/Either'

export class SetFromArrayType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
  readonly _tag: 'SetFromArrayType' = 'SetFromArrayType'
  constructor(
    name: string,
    is: SetFromArrayType<C, A, O, I>['is'],
    validate: SetFromArrayType<C, A, O, I>['validate'],
    serialize: SetFromArrayType<C, A, O, I>['encode'],
    readonly type: C,
    readonly ordA: Ord<t.TypeOf<C>>
  ) {
    super(name, is, validate, serialize)
  }
}

export interface SetFromArrayC<C extends t.Mixed>
  extends SetFromArrayType<C, Set<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {}

/**
 * @example
 * import * as t from 'io-ts'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 * import { createSetFromArray } from 'io-ts-types/lib/fp-ts/createSetFromArray'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = createSetFromArray(t.number, ordNumber)
 *
 * assert.deepStrictEqual(T.decode([1, 2, 3]), right(new Set([1, 2, 3])))
 */
export const createSetFromArray = <C extends t.Mixed>(
  codec: C,
  ordA: Ord<t.TypeOf<C>>,
  name: string = `Set<${codec.name}>`
): SetFromArrayC<C> => {
  const ArrayType = t.array(codec)
  const equals = ordA.equals
  const setToArray = toArray(ordA)
  return new SetFromArrayType(
    name,
    (m): m is Set<t.TypeOf<C>> => m instanceof Set && every(codec.is)(m),
    (m, c) => {
      return either.chain(ArrayType.validate(m, c), as => {
        const len = as.length
        const r = new Set<t.TypeOf<C>>()
        for (let i = 0; i < len; i++) {
          const a = as[i]
          if (!some(x => equals(x, a))(r)) {
            r.add(a)
          }
        }
        return r.size !== len ? t.failure(as, c) : t.success(r)
      })
    },
    s => ArrayType.encode(setToArray(s)),
    codec,
    ordA
  )
}
