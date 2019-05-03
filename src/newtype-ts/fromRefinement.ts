import { AnyNewtype, CarrierOf } from 'newtype-ts'
import { Prism } from 'monocle-ts'
import { Type, success, failure } from 'io-ts'
import { either } from 'fp-ts/lib/Either'
import { isSome, fold } from 'fp-ts/lib/Option'

export const fromRefinement: <S extends AnyNewtype = never>() => <O>(
  carrier: Type<CarrierOf<S>, O, unknown>,
  prism: Prism<CarrierOf<S>, S>,
  name?: string
) => Type<S, O, unknown> = <S extends AnyNewtype = never>() => <O>(
  carrier: Type<CarrierOf<S>, O, unknown>,
  prism: Prism<CarrierOf<S>, S>,
  name: string = `Refinement<${carrier.name}>`
) =>
  new Type(
    name,
    (u): u is S => carrier.is(u) && isSome(prism.getOption(u)),
    (u, c) => either.chain(carrier.validate(u, c), s => fold(prism.getOption(s), () => failure(s, c), success)),
    a => carrier.encode(a)
  )
