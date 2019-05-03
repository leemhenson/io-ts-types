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
var DateFromUnixTimeType = /** @class */ (function (_super) {
    __extends(DateFromUnixTimeType, _super);
    function DateFromUnixTimeType() {
        var _this = _super.call(this, 'DateFromUnixTime', function (u) { return u instanceof Date; }, function (u, c) {
            // tslint:disable-next-line: deprecation
            return Either_1.either.chain(t.Integer.validate(u, c), function (a) { return t.success(new Date(a * 1000)); });
        }, function (a) { return a.getTime() / 1000; }) || this;
        _this._tag = 'DateFromUnixTimeType';
        return _this;
    }
    return DateFromUnixTimeType;
}(t.Type));
exports.DateFromUnixTimeType = DateFromUnixTimeType;
/**
 * @example
 * import { DateFromUnixTime } from 'io-ts-types/lib/Date/DateFromUnixTime'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const date = new Date(1973, 10, 30)
 * const input = date.getTime() / 1000
 * assert.deepStrictEqual(DateFromUnixTime.decode(input), right(date))
 */
exports.DateFromUnixTime = new DateFromUnixTimeType();
//# sourceMappingURL=DateFromUnixTime.js.map