import * as t from 'io-ts'
import { NonEmptyArray, fromArray } from 'fp-ts/lib/NonEmptyArray'
import { either, Either } from 'fp-ts/lib/Either'
import { fold } from 'fp-ts/lib/Option'

export class NonEmptyArrayFromArrayType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
  readonly _tag: 'NonEmptyArrayFromArrayType' = 'NonEmptyArrayFromArrayType'
  constructor(
    name: string,
    is: NonEmptyArrayFromArrayType<C, A, O, I>['is'],
    validate: NonEmptyArrayFromArrayType<C, A, O, I>['validate'],
    serialize: NonEmptyArrayFromArrayType<C, A, O, I>['encode'],
    readonly type: C
  ) {
    super(name, is, validate, serialize)
  }
}

export interface NonEmptyArrayFromArrayC<C extends t.Mixed>
  extends NonEmptyArrayFromArrayType<C, NonEmptyArray<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {}

/**
 * @example
 * import * as t from 'io-ts'
 * import { createNonEmptyArrayFromArray } from 'io-ts-types/lib/fp-ts/createNonEmptyArrayFromArray'
 * import { right } from 'fp-ts/lib/Either'
 * import { make } from 'fp-ts/lib/NonEmptyArray'
 *
 * const T = createNonEmptyArrayFromArray(t.number)
 * assert.deepStrictEqual(T.decode([1, 2, 3]), right(make(1, [2, 3])))
 */
export const createNonEmptyArrayFromArray = <C extends t.Mixed>(
  codec: C,
  name: string = `NonEmptyArray<${codec.name}>`
): NonEmptyArrayFromArrayC<C> => {
  const ArrayType = t.array(codec)
  return new NonEmptyArrayFromArrayType(
    name,
    (m): m is NonEmptyArray<t.TypeOf<C>> => ArrayType.is(m) && m.length > 0,
    (m, c) =>
      either.chain(ArrayType.validate(m, c), as =>
        fold<NonEmptyArray<t.TypeOf<C>>, Either<t.Errors, NonEmptyArray<t.TypeOf<C>>>>(
          () => t.failure(as, c),
          t.success
        )(fromArray(as))
      ),
    a => ArrayType.encode(a),
    codec
  )
}
