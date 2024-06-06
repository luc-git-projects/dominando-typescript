let resultado: unknown

resultado = {
    sucesso: true
}

resultado = "Deu tudo certo.Ok!"
resultado = 200;

console.log("==========")

const informacao: any = 150;
const informacaodesconhecida: unknown = 250;

const primeiroNumero: number = informacao;

/**
 * não pde atribuir o unknown a outro tipo diferente do any
 */
//const segundoNumero: number = informacaodesconhecida;