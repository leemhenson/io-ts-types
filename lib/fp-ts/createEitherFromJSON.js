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
 * @file Use `io-ts-types/lib/eitherFromJSON` instead.
 * @deprecated
 */
var Either_1 = require("fp-ts/lib/Either");
var t = require("io-ts");
var _Right = t.type({
    _tag: t.literal('Right'),
    right: t.unknown
});
var _Left = t.type({
    _tag: t.literal('Left'),
    left: t.unknown
});
var EitherFromJSONType = /** @class */ (function (_super) {
    __extends(EitherFromJSONType, _super);
    function EitherFromJSONType(name, is, validate, serialize, left, right) {
        var _this = _super.call(this, name, is, validate, serialize) || this;
        _this.left = left;
        _this.right = right;
        _this._tag = 'EitherFromJSONType';
        return _this;
    }
    return EitherFromJSONType;
}(t.Type));
exports.EitherFromJSONType = EitherFromJSONType;
/**
 * Use `io-ts-types/lib/eitherFromJSON` instead.
 *
 * @example
 * import * as t from 'io-ts'
 * import { createEitherFromJSON } from 'io-ts-types/lib/fp-ts/createEitherFromJSON'
 * import { right, left } from 'fp-ts/lib/Either'
 *
 * const T = createEitherFromJSON(t.string, t.number)
 * assert.deepStrictEqual(T.decode({ type: 'Left', value: 's' }), right(left('s')))
 * assert.deepStrictEqual(T.decode({ type: 'Right', value: 1 }), right(right(1)))
 * @deprecated
 */
exports.createEitherFromJSON = function (leftCodec, rightCodec, name) {
    if (name === void 0) { name = "Either<" + leftCodec.name + ", " + rightCodec.name + ">"; }
    var JSONLeft = t.type({
        type: t.literal('Left'),
        value: leftCodec
    });
    var JSONRight = t.type({
        type: t.literal('Right'),
        value: rightCodec
    });
    var JSONEither = t.taggedUnion('type', [JSONLeft, JSONRight]);
    return new EitherFromJSONType(name, function (m) {
        return (_Right.is(m) && rightCodec.is(m.right)) || (_Left.is(m) && leftCodec.is(m.left));
    }, function (m, c) {
        return Either_1.either.chain(JSONEither.validate(m, c), function (e) {
            switch (e.type) {
                case 'Left':
                    return t.success(Either_1.left(e.value));
                case 'Right':
                    return t.success(Either_1.right(e.value));
            }
        });
    }, function (a) {
        return Either_1.fold(a, function (l) { return ({ type: 'Left', value: leftCodec.encode(l) }); }, function (a) { return ({ type: 'Right', value: rightCodec.encode(a) }); });
    }, leftCodec, rightCodec);
};
//# sourceMappingURL=createEitherFromJSON.js.map