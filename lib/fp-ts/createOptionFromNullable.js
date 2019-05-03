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
var Either_1 = require("fp-ts/lib/Either");
var Option_1 = require("fp-ts/lib/Option");
var t = require("io-ts");
var _None = t.type({
    _tag: t.literal('None')
});
var _Some = t.type({
    _tag: t.literal('Some'),
    value: t.unknown
});
var OptionFromNullableType = /** @class */ (function (_super) {
    __extends(OptionFromNullableType, _super);
    function OptionFromNullableType(name, is, validate, serialize, type) {
        var _this = _super.call(this, name, is, validate, serialize) || this;
        _this.type = type;
        _this._tag = 'OptionFromNullableType';
        return _this;
    }
    return OptionFromNullableType;
}(t.Type));
exports.OptionFromNullableType = OptionFromNullableType;
/**
 * @example
 * import * as t from 'io-ts'
 * import { createOptionFromNullable } from 'io-ts-types/lib/fp-ts/createOptionFromNullable'
 * import { right } from 'fp-ts/lib/Either'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * const T = createOptionFromNullable(t.number)
 * assert.deepStrictEqual(T.decode(null), right(none))
 * assert.deepStrictEqual(T.decode(undefined), right(none))
 * assert.deepStrictEqual(T.decode(1), right(some(1)))
 */
exports.createOptionFromNullable = function (codec, name) {
    if (name === void 0) { name = "Option<" + codec.name + ">"; }
    var Nullable = t.union([codec, t.null, t.undefined]);
    return new OptionFromNullableType(name, function (m) { return _None.is(m) || (_Some.is(m) && codec.is(m.value)); }, function (s, c) { return Either_1.either.chain(Nullable.validate(s, c), function (value) { return t.success(Option_1.fromNullable(value)); }); }, function (a) { return Option_1.toNullable(Option_1.option.map(a, codec.encode)); }, codec);
};
//# sourceMappingURL=createOptionFromNullable.js.map