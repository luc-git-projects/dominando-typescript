let admin: boolean = true;

admin = false;

/**
 * convertendo 1 ou 0 respectivamente para true ou false
 */

admin = Boolean("1");
console.log(admin);

admin = Boolean(0);
console.log(admin);

admin = Boolean("2");
console.log(admin);

admin = Boolean("");
console.log(admin);

admin = Boolean(null);
console.log(admin);

admin = Boolean(undefined);
console.log(admin);