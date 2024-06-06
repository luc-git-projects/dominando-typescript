"use strict";
class Pedido {
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2023-06-21"));
console.log(meuPedido);
//# sourceMappingURL=classe_construtor_simplificado.js.map