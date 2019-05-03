import * as t from 'io-ts'
import { either } from 'fp-ts/lib/Either'

const TrueOrFalse = t.keyof({
  true: null,
  false: null
})

export class BooleanFromStringType extends t.Type<boolean, string, unknown> {
  readonly _tag: 'BooleanFromStringType' = 'BooleanFromStringType'
  constructor() {
    super(
      'BooleanFromString',
      t.boolean.is,
      (u, c) => either.map(TrueOrFalse.validate(u, c), tof => tof === 'true'),
      String
    )
  }
}

export interface BooleanFromStringC extends BooleanFromStringType {}

export const BooleanFromString: BooleanFromStringC = new BooleanFromStringType()
