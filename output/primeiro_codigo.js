"use strict";
console.log("Hello world!");
console.log("==============");
var nome = "João";
console.log("Olá " + nome + " seja bem vindo!");
console.log("============");
var Produto = /** @class */ (function () {
    function Produto(produtoNome, produtoValor) {
        this.produtoNome = produtoNome;
        this.produtoValor = produtoValor;
    }
    return Produto;
}());
var playstation5 = new Produto("Playstation 5", 5000);
//# sourceMappingURL=primeiro_codigo.js.map