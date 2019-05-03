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
var Either_1 = require("fp-ts/lib/Either");
var NumberFromStringType = /** @class */ (function (_super) {
    __extends(NumberFromStringType, _super);
    function NumberFromStringType() {
        var _this = _super.call(this, 'NumberFromString', t.number.is, function (u, c) {
            return Either_1.either.chain(t.string.validate(u, c), function (s) {
                var n = +s;
                return isNaN(n) ? t.failure(s, c) : t.success(n);
            });
        }, String) || this;
        _this._tag = 'NumberFromStringType';
        return _this;
    }
    return NumberFromStringType;
}(t.Type));
exports.NumberFromStringType = NumberFromStringType;
/**
 * @example
 * import { NumberFromString } from 'io-ts-types/lib/number/NumberFromString'
 *
 * NumberFromString.decode('1') // right(1)
 * NumberFromString.decode('1.1') // right(1.1)
 */
exports.NumberFromString = new NumberFromStringType();
//# sourceMappingURL=NumberFromString.js.map