"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
/**
 * Returns a codec from a refinement
 * @since 0.4.4
 */
function fromRefinement(name, is) {
    return new t.Type(name, is, function (u, c) { return (is(u) ? t.success(u) : t.failure(u, c)); }, t.identity);
}
exports.fromRefinement = fromRefinement;
//# sourceMappingURL=fromRefinement.js.map