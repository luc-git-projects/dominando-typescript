"use strict";
let ano;
let ano2;
ano = 2021;
/**
 * Dá erro porque esta atribuindo a classe wrapper Number ao primitivo number
 * ano2 = new Number("2010");
 */
/**
 * Esta converte Onjeto Number em primitivo number
 * Funciona porque usa a classe Number como função e não como instancia
 */
ano2 = Number("4000");
/**
 * maneira alternativa de criar um Objeto do tipo Number
 * ano2 = +"4000";
 */
/**
 * Vai converter para um inteiro
 * ano2 = parseInt("4000.65")
 * o valor vai ficar 4000
 */
/**
 * Vai converter para um inteiro
 * ano2 = parseFloat("4000.65")
 * o valor vai ficar 4000.65
 */
console.log(ano + ano2);
const numeroGigante = 50n;
console.log(numeroGigante);
//# sourceMappingURL=number.js.map