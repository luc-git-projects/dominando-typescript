"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha matéria é ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, nota) => total + nota, 0);
        return notasTotal / notas.length;
    }
}
const gluacio = new Professor("Glaucio Daniel", 45, "DBA");
console.log(gluacio.seApresentar());
const joaoRangel = new Professor("João Rangel", 25, "typeSccript");
console.log(joaoRangel.seApresentar());
console.log(joaoRangel.dizerNotas(8, 10, 5.5, 7.7));
//# sourceMappingURL=classe_metodo.js.map