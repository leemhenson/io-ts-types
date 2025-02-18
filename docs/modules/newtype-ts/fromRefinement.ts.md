---
title: newtype-ts/fromRefinement.ts
nav_order: 24
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [fromRefinement (function)](#fromrefinement-function)

---

# fromRefinement (function)

**Signature**

```ts
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
    (u): u is S => carrier.is(u) && prism.getOption(u).isSome(),
    (u, c) => carrier.validate(u, c).chain(s => prism.getOption(s).foldL(() => failure(s, c), success)),
    a => ...
```
