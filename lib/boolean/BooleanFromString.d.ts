import * as t from 'io-ts';
export declare class BooleanFromStringType extends t.Type<boolean, string, unknown> {
    readonly _tag: 'BooleanFromStringType';
    constructor();
}
export interface BooleanFromStringC extends BooleanFromStringType {
}
export declare const BooleanFromString: BooleanFromStringC;
