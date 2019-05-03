"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Use `io-ts-types/lib/UUID` instead.
 * @deprecated
 */
var t = require("io-ts");
var regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/**
 * @example
 * import { uuid } from 'io-ts-types/lib/string/uuid'
 *
 * uuid.decode('6e9c5587-a342-4b63-a901-87b31fa2ffa3') // right('6e9c5587-a342-4b63-a901-87b31fa2ffa3')
 */
// tslint:disable-next-line: deprecation
exports.uuid = t.refinement(t.string, function (uuid) { return regex.test(uuid); }, 'UUID');
//# sourceMappingURL=uuid.js.map