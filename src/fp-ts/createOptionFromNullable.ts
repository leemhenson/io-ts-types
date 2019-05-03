import { either } from 'fp-ts/lib/Either'
import { fromNullable, Option, option, toNullable } from 'fp-ts/lib/Option'
import * as t from 'io-ts'

const _None = t.type({
  _tag: t.literal('None')
})

const _Some = t.type({
  _tag: t.literal('Some'),
  value: t.unknown
})

export class OptionFromNullableType<C extends t.Any, A = any, O = A, I = unknown> extends t.Type<A, O, I> {
  readonly _tag: 'OptionFromNullableType' = 'OptionFromNullableType'
  constructor(
    name: string,
    is: OptionFromNullableType<C, A, O, I>['is'],
    validate: OptionFromNullableType<C, A, O, I>['validate'],
    serialize: OptionFromNullableType<C, A, O, I>['encode'],
    readonly type: C
  ) {
    super(name, is, validate, serialize)
  }
}

export interface OptionFromNullableC<C extends t.Mixed>
  extends OptionFromNullableType<C, Option<t.TypeOf<C>>, t.OutputOf<C> | null, unknown> {}

/**
 * @example
 * import * as t from 'io-ts'
 * import { createOptionFromNullable } from 'io-ts-types/lib/fp-ts/createOptionFromNullable'
 * import { right } from 'fp-ts/lib/Either'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * const T = createOptionFromNullable(t.number)
 * assert.deepStrictEqual(T.decode(null), right(none))
 * assert.deepStrictEqual(T.decode(undefined), right(none))
 * assert.deepStrictEqual(T.decode(1), right(some(1)))
 */
export const createOptionFromNullable = <C extends t.Mixed>(
  codec: C,
  name: string = `Option<${codec.name}>`
): OptionFromNullableC<C> => {
  const Nullable = t.union([codec, t.null, t.undefined])
  return new OptionFromNullableType(
    name,
    (m): m is Option<t.TypeOf<C>> => _None.is(m) || (_Some.is(m) && codec.is(m.value)),
    (s, c) => either.chain(Nullable.validate(s, c), value => t.success(fromNullable(value))),
    a => toNullable(option.map(a, codec.encode)),
    codec
  )
}
