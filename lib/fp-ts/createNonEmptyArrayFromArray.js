"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var NonEmptyArray_1 = require("fp-ts/lib/NonEmptyArray");
var Either_1 = require("fp-ts/lib/Either");
var Option_1 = require("fp-ts/lib/Option");
var NonEmptyArrayFromArrayType = /** @class */ (function (_super) {
    __extends(NonEmptyArrayFromArrayType, _super);
    function NonEmptyArrayFromArrayType(name, is, validate, serialize, type) {
        var _this = _super.call(this, name, is, validate, serialize) || this;
        _this.type = type;
        _this._tag = 'NonEmptyArrayFromArrayType';
        return _this;
    }
    return NonEmptyArrayFromArrayType;
}(t.Type));
exports.NonEmptyArrayFromArrayType = NonEmptyArrayFromArrayType;
/**
 * @example
 * import * as t from 'io-ts'
 * import { createNonEmptyArrayFromArray } from 'io-ts-types/lib/fp-ts/createNonEmptyArrayFromArray'
 * import { right } from 'fp-ts/lib/Either'
 * import { make } from 'fp-ts/lib/NonEmptyArray'
 *
 * const T = createNonEmptyArrayFromArray(t.number)
 * assert.deepStrictEqual(T.decode([1, 2, 3]), right(make(1, [2, 3])))
 */
exports.createNonEmptyArrayFromArray = function (codec, name) {
    if (name === void 0) { name = "NonEmptyArray<" + codec.name + ">"; }
    var ArrayType = t.array(codec);
    return new NonEmptyArrayFromArrayType(name, function (m) { return ArrayType.is(m) && m.length > 0; }, function (m, c) { return Either_1.either.chain(ArrayType.validate(m, c), function (as) { return Option_1.fold(NonEmptyArray_1.fromArray(as), function () { return t.failure(as, c); }, t.success); }); }, function (a) { return ArrayType.encode(a); }, codec);
};
//# sourceMappingURL=createNonEmptyArrayFromArray.js.map