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
var Set_1 = require("fp-ts/lib/Set");
var Either_1 = require("fp-ts/lib/Either");
var SetFromArrayType = /** @class */ (function (_super) {
    __extends(SetFromArrayType, _super);
    function SetFromArrayType(name, is, validate, serialize, type, ordA) {
        var _this = _super.call(this, name, is, validate, serialize) || this;
        _this.type = type;
        _this.ordA = ordA;
        _this._tag = 'SetFromArrayType';
        return _this;
    }
    return SetFromArrayType;
}(t.Type));
exports.SetFromArrayType = SetFromArrayType;
/**
 * @example
 * import * as t from 'io-ts'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 * import { createSetFromArray } from 'io-ts-types/lib/fp-ts/createSetFromArray'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const T = createSetFromArray(t.number, ordNumber)
 *
 * assert.deepStrictEqual(T.decode([1, 2, 3]), right(new Set([1, 2, 3])))
 */
exports.createSetFromArray = function (codec, ordA, name) {
    if (name === void 0) { name = "Set<" + codec.name + ">"; }
    var ArrayType = t.array(codec);
    var equals = ordA.equals;
    var setToArray = Set_1.toArray(ordA);
    return new SetFromArrayType(name, function (m) { return m instanceof Set && Set_1.every(codec.is)(m); }, function (m, c) {
        return Either_1.either.chain(ArrayType.validate(m, c), function (as) {
            var len = as.length;
            var r = new Set();
            var _loop_1 = function (i) {
                var a = as[i];
                if (!Set_1.some(function (x) { return equals(x, a); })(r)) {
                    r.add(a);
                }
            };
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
            return r.size !== len ? t.failure(as, c) : t.success(r);
        });
    }, function (s) { return ArrayType.encode(setToArray(s)); }, codec, ordA);
};
//# sourceMappingURL=createSetFromArray.js.map