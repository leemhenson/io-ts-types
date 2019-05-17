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
var JSONTypeRT_1 = require("./JSONTypeRT");
var Either_1 = require("fp-ts/lib/Either");
var JSONFromStringType = /** @class */ (function (_super) {
    __extends(JSONFromStringType, _super);
    function JSONFromStringType() {
        var _this = _super.call(this, 'JSONFromString', JSONTypeRT_1.JSONTypeRT.is, function (m, c) {
            return Either_1.either.chain(t.string.validate(m, c), function (s) {
                return Either_1.fold(function () { return t.failure(s, c); }, t.success)(Either_1.tryCatch(function () { return JSON.parse(s); }, Either_1.toError));
            });
        }, JSON.stringify) || this;
        _this._tag = 'JSONFromStringType';
        return _this;
    }
    return JSONFromStringType;
}(t.Type));
exports.JSONFromStringType = JSONFromStringType;
/**
 * @example
 * import { JSONFromString } from 'io-ts-types/lib/JSON/JSONFromString'
 * import { right } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(JSONFromString.decode('{"name":"Giulio"}'), right({ name: 'Giulio' }))
 */
exports.JSONFromString = new JSONFromStringType();
//# sourceMappingURL=JSONFromString.js.map