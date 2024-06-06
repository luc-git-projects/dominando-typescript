"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
    tocarInterfone() {
        return "Interfone tocado!";
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Oi, quem é?");
    }
}
const casaDoHomer = new Casa("Rosa", { cidade: "Springfiled" });
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map