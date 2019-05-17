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
/**
 * @file Use `io-ts-types/lib/optionFromJSON` instead.
 * @deprecated
 */
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
var OptionFromJSONType = /** @class */ (function (_super) {
    __extends(OptionFromJSONType, _super);
    function OptionFromJSONType(name, is, validate, serialize, type) {
        var _this = _super.call(this, name, is, validate, serialize) || this;
        _this.type = type;
        _this._tag = 'OptionFromJSONType';
        return _this;
    }
    return OptionFromJSONType;
}(t.Type));
exports.OptionFromJSONType = OptionFromJSONType;
/**
 * Use `io-ts-types/lib/optionFromJSON` instead.
 *
 * @example
 * import * as t from 'io-ts'
 * import { createOptionFromJSON } from 'io-ts-types/lib/fp-ts/createOptionFromJSON'
 * import { right } from 'fp-ts/lib/Either'
 * import { none, some } from 'fp-ts/lib/Option'
 *
 * const T = createOptionFromJSON(t.number)
 * assert.deepStrictEqual(T.decode({ type: 'Option', value: null }), right(none))
 * assert.deepStrictEqual(T.decode({ type: 'Option', value: undefined }), right(none))
 * assert.deepStrictEqual(T.decode({ type: 'Option', value: 1 }), right(some(1)))
 * @deprecated
 */
exports.createOptionFromJSON = function (codec, name) {
    if (name === void 0) { name = "Option<" + codec.name + ">"; }
    var JSONOption = t.type({
        type: t.literal('Option'),
        value: t.union([codec, t.null, t.undefined])
    });
    return new OptionFromJSONType(name, function (m) { return _None.is(m) || (_Some.is(m) && codec.is(m.value)); }, function (m, c) { return Either_1.either.chain(JSONOption.validate(m, c), function (value) { return t.success(Option_1.fromNullable(value.value)); }); }, function (a) {
        return Option_1.fold(function () { return ({ type: 'Option', value: null }); }, function (value) { return ({ type: 'Option', value: codec.encode(value) }); })(a);
    }, codec);
};
//# sourceMappingURL=createOptionFromJSON.js.map