class Documento{
    private valor: string = "123654789-01"; // TS

    /**
     * o # é o private no ECMAScript
     */
    #numero: number = 35; //ECMAScript

    mostrarDocumento(): number{
        return this.#numero;
    }
}

class CNPJ extends Documento{

    /**
     * Não permite sobrescrever o private do TypeScript
     */
    //private valor: string = "25684512125-01;"


    /**
     * Permite sobrescrever o private do ECMAScript
     */
    #numero: number = 50;

    mostrarCNPJ(): number{
        return this.#numero;
    }
}

const rg = new Documento();
console.log(rg.mostrarDocumento());

const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());


/**
 * Acessa o private do TypeScript de qualquer jeito
 */
//console.log(rg.valor);

/**
 * Não acessao private do ECMAScript da erro 
 */
//console.log(rg.#numero);