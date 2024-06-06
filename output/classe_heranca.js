"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
    toString() {
        return `Nome: ${this.nome}, Nascimento: ${this.nascimento}`;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
    toString() {
        return `${super.toString()}, Email: ${this.email}, Empresa: ${this.empresa}`;
    }
}
const clienteJoao = new Cliente("João", new Date("2000-01-01"), "joao@hcode.com.br", "Hcode");
console.log(clienteJoao.toString());
//# sourceMappingURL=classe_heranca.js.map