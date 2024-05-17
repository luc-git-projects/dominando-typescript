console.log("Hello world!");

console.log("==============");

const nome = "João";

console.log("Olá " + nome + " seja bem vindo!");

console.log("============")

class Produto{

    produtoNome: string;
    produtoValor: number

    constructor(produtoNome: string, produtoValor: number){
        this.produtoNome = produtoNome;
        this.produtoValor = produtoValor;
    }
}

const playstation5 = new Produto("Playstation 5", 5000);