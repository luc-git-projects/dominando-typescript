
/**
 * o tipo null  é usado com Union Type
 * Null é ausencia de valor
 */
//const meuElemento: HTMLHeadingElement | null = document.querySelector("h2");

let db: string | null = "mysql, 127.0.1, password";
db = null;


/**
 * O tipo Undefined tambem ś usado com Union Type
 * Undefined é quando não tem valor ainda definido
 */

let minhaVariavel: string | undefined;

if(new Date().getDate() === 15){
    minhaVariavel = "Hoje é o dia 15";
}

console.log(minhaVariavel);