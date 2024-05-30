interface ISoma {

    (numero1: number, numero2: number): number;
}

const primeiraSoma: ISoma = function(a, b){
    return a + b;
};
    


let segundaSoma = (numero1: number, numero2: number) =>{
    return numero1 + numero2;
}


const resultadoPrimeiraSoma: number = primeiraSoma(7, 8);
console.log(resultadoPrimeiraSoma);


const resultadoSegundSoma = segundaSoma(16, 12);
console.log(resultadoSegundSoma);


interface ICalculos{
    somar(a: number, b: number): number;
    subtrair(a:number, b: number): number; 
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;


calculadora = {
    somar(a, b){
        return a + b;
    },

    subtrair: function(a, b){
        return a - b;
    },
    
    multiplicar:(a, b) => a * b,
        
    dividir:(a, b) => {
        return a / b;
    }

}