"use strict";
/**
 * criando um array de string
 */
const filmesCategorias = ["comédia", "Drama", "Romance", "Aventura"];
filmesCategorias.push("Terror");
/**
 * Array da classe Array
 */
const filmesAnos = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesAnos);
//# sourceMappingURL=array.js.map