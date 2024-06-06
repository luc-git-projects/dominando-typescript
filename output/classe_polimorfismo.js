"use strict";
class Empresa {
    prestarServico() {
        return "Empresa prestando servico";
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return "Padaria vendendo pão";
    }
}
class Mercearia extends Empresa {
    prestarServico() {
        return "Vendendo alimentos e bebida";
    }
}
const empresa1 = new Empresa();
console.log(empresa1.prestarServico());
const empresa2 = new Padaria();
console.log(empresa2.prestarServico());
const empresa3 = new Mercearia();
console.log(empresa3.prestarServico());
//# sourceMappingURL=classe_polimorfismo.js.map