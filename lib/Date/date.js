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
var DateType = /** @class */ (function (_super) {
    __extends(DateType, _super);
    function DateType() {
        var _this = _super.call(this, 'Date', function (u) { return u instanceof Date; }, function (u, c) { return (_this.is(u) ? t.success(u) : t.failure(u, c)); }, t.identity) || this;
        _this._tag = 'DateType';
        return _this;
    }
    return DateType;
}(t.Type));
exports.DateType = DateType;
/**
 * @example
 * import { date } from 'io-ts-types/lib/Date/date'
 * import { right } from 'fp-ts/lib/Either'
 *
 * const input = new Date(1973, 10, 30)
 * assert.deepStrictEqual(date.decode(input), right(input))
 */
exports.date = new DateType();
//# sourceMappingURL=date.js.map