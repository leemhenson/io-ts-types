import { Type } from 'io-ts';
import { Prism } from 'monocle-ts';
import { AnyNewtype, CarrierOf } from 'newtype-ts';
export declare const fromRefinement: <S extends AnyNewtype = never>() => <O>(carrier: Type<CarrierOf<S>, O, unknown>, prism: Prism<CarrierOf<S>, S>, name?: string) => Type<S, O, unknown>;
