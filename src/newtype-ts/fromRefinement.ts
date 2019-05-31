import { either } from 'fp-ts/lib/Either'
import { pipeOp } from 'fp-ts/lib/function'
import { fold, isSome } from 'fp-ts/lib/Option'
import { failure, success, Type } from 'io-ts'
import { Prism } from 'monocle-ts'
import { AnyNewtype, CarrierOf } from 'newtype-ts'

export const fromRefinement: <S extends AnyNewtype = never>() => <O>(
  carrier: Type<CarrierOf<S>, O, unknown>,
  prism: Prism<CarrierOf<S>, S>,
  name?: string
) => Type<S, O, unknown> = <S extends AnyNewtype = never>() => <O>(
  carrier: Type<CarrierOf<S>, O, unknown>,
  prism: Prism<CarrierOf<S>, S>,
  name: string = `Refinement<${carrier.name}>`
) => {
  return new Type(
    name,
    (u): u is S => carrier.is(u) && isSome(prism.getOption(u)),
    (u, c) => either.chain(carrier.validate(u, c), s => pipeOp(prism.getOption(s), fold(() => failure(s, c), success))),
    a => carrier.encode(a)
  )
}
