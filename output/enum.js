"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission["USER"] = "USER";
    Permission["READONLY"] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
/**
 * aCESSANDO VIA INDICE
 */
console.log(Permission[1]);
console.log(Permission["USER"]);
//# sourceMappingURL=enum.js.map