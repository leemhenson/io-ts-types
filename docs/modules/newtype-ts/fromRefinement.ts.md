---
title: newtype-ts/fromRefinement.ts
nav_order: 23
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
) => ...
```
