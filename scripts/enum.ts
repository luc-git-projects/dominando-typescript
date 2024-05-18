enum Permission{
    ADMIN = 1,
    USER = "USER",
    READONLY = "READONLY",
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);

/**
 * aCESSANDO VIA INDICE
 */
console.log(Permission[1]);
console.log(Permission["USER"]);