interface IProcessamento<T>{

    valor: T;

    realizarProcessamento(arg: T): T
}

const texto: IProcessamento<string> = {
    
    valor: "Luciano",
    realizarProcessamento(argumento: string): string{
        return argumento.toUpperCase();
    }
}

console.log(texto.valor);
console.log(texto.realizarProcessamento("Oliveira"));

const numero: IProcessamento<number> = {
    valor: 7,

    realizarProcessamento(valor: number): number{
        return valor * valor;
    }
}

console.log(numero.valor);
console.log(numero.realizarProcessamento(numero.valor));

