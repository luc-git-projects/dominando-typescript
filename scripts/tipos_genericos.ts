function obterPrimeiraPosicao<T>(meuArray: Array<T>): T{
    return meuArray[0];
}

const primeiro = obterPrimeiraPosicao(["Glaucio", "João", "Rafael", "Ronaldo"]);
console.log(primeiro);

const arrayNumber: number[] = [3, 8, 9, 7, 6];
const segundo = obterPrimeiraPosicao(arrayNumber);
console.log(segundo);