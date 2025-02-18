import * as assert from 'assert'
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'

export function assertStrictEqual<T>(result: t.Validation<T>, expected: any): void {
  if (result.isRight()) {
    assert.deepStrictEqual(result.value, expected)
  } else {
    throw new Error(`${result} is not a right`)
  }
}

export function assertSuccess<T>(result: t.Validation<T>, expected?: T): void {
  if (result.isRight()) {
    if (expected !== undefined) {
      assert.deepStrictEqual(result.value, expected)
    }
  } else {
    throw new Error(`${result} is not a right`)
  }
}

export function assertStrictSuccess<T>(result: t.Validation<T>, expected: T): void {
  if (result.isRight()) {
    if (expected !== undefined) {
      assert.strictEqual(result.value, expected)
    }
  } else {
    throw new Error(`${result} is not a right`)
  }
}

export function assertFailure(codec: t.Any, value: unknown, errors: Array<string>): void {
  const result = codec.decode(value)
  if (result.isLeft()) {
    assert.deepStrictEqual(PathReporter.report(result), errors)
  } else {
    throw new Error(`${result} is not a left`)
  }
}
