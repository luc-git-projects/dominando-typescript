
/**
 * criando um array de string
 */
const filmesCategorias: string[] = ["comédia", "Drama", "Romance", "Aventura"];

/**
 * Array de string ou numeros
 * const filmesCategorias2: (string | number)[] = ["comédia", 15, "Romance", "Aventura", 23];
 */

filmesCategorias.push("Terror");


/**
 * Array da classe Array
 */

const filmesAnos: Array<number> = [];

for(let ano = 2000; ano <= new Date().getFullYear(); ano++){
    filmesAnos.push(ano);
}

console.log(filmesAnos);

/**
 * Array da de string ou numeros
 * const filmesAnos2: Array<string | number> = [];
 */


