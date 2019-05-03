/**
 * @file Use `io-ts-types/lib/eitherFromJSON` instead.
 * @deprecated
 */
import { Either, either, fold, left, right } from 'fp-ts/lib/Either'
import * as t from 'io-ts'

const _Right = t.type({
  _tag: t.literal('Right'),
  right: t.unknown
})

const _Left = t.type({
  _tag: t.literal('Left'),
  left: t.unknown
})

export interface JSONLeft<L> {
  type: 'Left'
  value: L
}

export interface JSONRight<A> {
  type: 'Right'
  value: A
}

export type JSONEither<L, A> = JSONLeft<L> | JSONRight<A>

export class EitherFromJSONType<L extends t.Any, R extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
  readonly _tag: 'EitherFromJSONType' = 'EitherFromJSONType'
  constructor(
    name: string,
    is: EitherFromJSONType<L, R, A, O, I>['is'],
    validate: EitherFromJSONType<L, R, A, O, I>['validate'],
    serialize: EitherFromJSONType<L, R, A, O, I>['encode'],
    readonly left: L,
    readonly right: R
  ) {
    super(name, is, validate, serialize)
  }
}

export interface EitherFromJSONC<L extends t.Mixed, R extends t.Mixed>
  extends EitherFromJSONType<
    L,
    R,
    Either<t.TypeOf<L>, t.TypeOf<R>>,
    JSONEither<t.OutputOf<L>, t.OutputOf<R>>,
    unknown
  > {}

/**
 * Use `io-ts-types/lib/eitherFromJSON` instead.
 *
 * @example
 * import * as t from 'io-ts'
 * import { createEitherFromJSON } from 'io-ts-types/lib/fp-ts/createEitherFromJSON'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * const T = createEitherFromJSON(t.string, t.number)
 * assert.deepStrictEqual(T.decode({ type: 'Left', value: 's' }), right(left('s')))
 * assert.deepStrictEqual(T.decode({ type: 'Right', value: 1 }), right(right(1)))
 * @deprecated
 */
export const createEitherFromJSON = <L extends t.Mixed, R extends t.Mixed>(
  leftCodec: L,
  rightCodec: R,
  name: string = `Either<${leftCodec.name}, ${rightCodec.name}>`
): EitherFromJSONC<L, R> => {
  const JSONLeft = t.type({
    type: t.literal('Left'),
    value: leftCodec
  })
  const JSONRight = t.type({
    type: t.literal('Right'),
    value: rightCodec
  })
  const JSONEither = t.taggedUnion('type', [JSONLeft, JSONRight])
  return new EitherFromJSONType(
    name,
    (m): m is Either<t.TypeOf<L>, t.TypeOf<R>> =>
      (_Right.is(m) && rightCodec.is(m.right)) || (_Left.is(m) && leftCodec.is(m.left)),
    (m, c) =>
      either.chain(
        JSONEither.validate(m, c),
        (e): Either<t.TypeOf<L>, t.TypeOf<R>> => {
          switch (e.type) {
            case 'Left':
              return t.success(left(e.value))
            case 'Right':
              return t.success(right(e.value))
          }
        }
      ),
    a =>
      fold<t.TypeOf<L>, t.TypeOf<R>, JSONEither<t.OutputOf<L>, t.OutputOf<R>>>(
        a,
        l => ({ type: 'Left', value: leftCodec.encode(l) }),
        a => ({ type: 'Right', value: rightCodec.encode(a) })
      ),
    leftCodec,
    rightCodec
  )
}
