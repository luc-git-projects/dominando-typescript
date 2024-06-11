interface IHcode{
    length: number;
}

function mostrarquantidadeTotal<T extends IHcode>(valor: T){
    console.log(`total: ${valor.length}`);
    return valor;
}



console.log(mostrarquantidadeTotal([10, 20]));
console.log(mostrarquantidadeTotal({nome: "Luciano", length: 12})); 