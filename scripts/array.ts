
/**
 * criando um array de string
 */
const filmesCategorias: string[] = ["comédia", "Drama", "Romance", "Aventura"];

filmesCategorias.push("Terror");


/**
 * Array da classe Array
 */

const filmesAnos: Array<number> = [];

for(let ano = 2000; ano <= new Date().getFullYear(); ano++){
    filmesAnos.push(ano);
}

console.log(filmesAnos);
