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
var DateFromNumberType = /** @class */ (function (_super) {
    __extends(DateFromNumberType, _super);
    function DateFromNumberType() {
        var _this = _super.call(this, 'DateFromNumber', function (u) { return u instanceof Date; }, function (u, c) {
            return Either_1.either.chain(t.number.validate(u, c), function (n) {
                var d = new Date(n);
                return isNaN(d.getTime()) ? t.failure(n, c) : t.success(d);
            });
        }, function (a) { return a.getTime(); }) || this;
        _this._tag = 'DateFromNumberType';
        return _this;
    }
    return DateFromNumberType;
}(t.Type));
exports.DateFromNumberType = DateFromNumberType;
/**
 * @example
 * import { DateFromNumber } from 'io-ts-types/lib/Date/DateFromNumber'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime()
 * assert.deepStrictEqual(DateFromNumber.decode(input), right(date))
 */
exports.DateFromNumber = new DateFromNumberType();
//# sourceMappingURL=DateFromNumber.js.map