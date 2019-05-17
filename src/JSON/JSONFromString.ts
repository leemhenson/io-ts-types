import * as t from 'io-ts'
import { JSONType, JSONTypeRT } from './JSONTypeRT'
import { tryCatch, either, toError, fold, Either } from 'fp-ts/lib/Either'

export type JSONType = JSONType

export class JSONFromStringType extends t.Type<JSONType> {
  readonly _tag: 'JSONFromStringType' = 'JSONFromStringType'
  constructor() {
    super(
      'JSONFromString',
      JSONTypeRT.is,
      (m, c) =>
        either.chain(t.string.validate(m, c), s =>
          fold<Error, unknown, Either<t.Errors, any>>(() => t.failure(s, c), t.success)(
            tryCatch(() => JSON.parse(s), toError)
          )
        ),
      JSON.stringify
    )
  }
}

export interface JSONFromStringC extends JSONFromStringType {}

/**
 * @example
 * import { JSONFromString } from 'io-ts-types/lib/JSON/JSONFromString'
 * import { right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(JSONFromString.decode('{"name":"Giulio"}'), right({ name: 'Giulio' }))
 */
export const JSONFromString: JSONFromStringC = new JSONFromStringType()
