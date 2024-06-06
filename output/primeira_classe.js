"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}`;
    }
}
const ronaldo = new Pessoa("Ronaldo Braz", 30, 1.85);
const marcus = new Pessoa("Marcus Ribeiro", 19, 1.76);
console.log(ronaldo.nome);
ronaldo.nome = "Ronaldo";
console.log(ronaldo);
console.log(marcus);
//# sourceMappingURL=primeira_classe.js.map