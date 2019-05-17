"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var Either_1 = require("fp-ts/lib/Either");
var Option_1 = require("fp-ts/lib/Option");
var function_1 = require("fp-ts/lib/function");
exports.fromRefinement = function () { return function (carrier, prism, name) {
    if (name === void 0) { name = "Refinement<" + carrier.name + ">"; }
    return new io_ts_1.Type(name, function (u) { return carrier.is(u) && Option_1.isSome(prism.getOption(u)); }, function (u, c) {
        return Either_1.either.chain(carrier.validate(u, c), function (s) {
            return function_1.pipeOp(prism.getOption(s), Option_1.fold(function () { return io_ts_1.failure(s, c); }, io_ts_1.success));
        });
    }, function (a) { return carrier.encode(a); });
}; };
//# sourceMappingURL=fromRefinement.js.map