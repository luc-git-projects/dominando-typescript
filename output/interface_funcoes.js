"use strict";
const primeiraSoma = function (a, b) {
    return a + b;
};
let segundaSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
const resultadoPrimeiraSoma = primeiraSoma(7, 8);
console.log(resultadoPrimeiraSoma);
const resultadoSegundSoma = segundaSoma(16, 12);
console.log(resultadoSegundSoma);
let calculadora;
calculadora = {
    somar(a, b) {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        return a / b;
    }
};
//# sourceMappingURL=interface_funcoes.js.map