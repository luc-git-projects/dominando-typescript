class Veiculo{
    public cor: string;

    constructor(cor: string){
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean{
        return false;
    }
}

const carro = new Veiculo("Branca");
console.log(carro.cor)

carro.cor = "Preta";
console.log(carro.cor);

console.log(carro.tentarAbrirPorta());