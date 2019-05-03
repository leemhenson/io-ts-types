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
var DateFromISOStringType = /** @class */ (function (_super) {
    __extends(DateFromISOStringType, _super);
    function DateFromISOStringType() {
        var _this = _super.call(this, 'DateFromISOString', function (u) { return u instanceof Date; }, function (u, c) {
            return Either_1.either.chain(t.string.validate(u, c), function (s) {
                var d = new Date(s);
                return isNaN(d.getTime()) ? t.failure(s, c) : t.success(d);
            });
        }, function (a) { return a.toISOString(); }) || this;
        _this._tag = 'DateFromISOStringType';
        return _this;
    }
    return DateFromISOStringType;
}(t.Type));
exports.DateFromISOStringType = DateFromISOStringType;
/**
 * @example
 * import { DateFromISOString } from 'io-ts-types/lib/Date/DateFromISOString'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.toISOString()
 * assert.deepStrictEqual(DateFromISOString.decode(input), right(date))
 */
exports.DateFromISOString = new DateFromISOStringType();
//# sourceMappingURL=DateFromISOString.js.map