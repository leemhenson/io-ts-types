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
var TrueOrFalse = t.keyof({
    true: null,
    false: null
});
var BooleanFromStringType = /** @class */ (function (_super) {
    __extends(BooleanFromStringType, _super);
    function BooleanFromStringType() {
        var _this = _super.call(this, 'BooleanFromString', t.boolean.is, function (u, c) { return Either_1.either.map(TrueOrFalse.validate(u, c), function (tof) { return tof === 'true'; }); }, String) || this;
        _this._tag = 'BooleanFromStringType';
        return _this;
    }
    return BooleanFromStringType;
}(t.Type));
exports.BooleanFromStringType = BooleanFromStringType;
exports.BooleanFromString = new BooleanFromStringType();
//# sourceMappingURL=BooleanFromString.js.map