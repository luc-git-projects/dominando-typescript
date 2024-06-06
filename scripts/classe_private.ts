class Banco{

    private cofreQtd: number = 10_000;

    private debitarCofre(quantidade: number): number | string{

        if(this.cofreQtd >= quantidade){
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }else{
            return "O cofre não possui a quantidade requisitada";
        }
    }

    protected sacarDoCaixa(quantidade: number): number | string{
        return this.debitarCofre(quantidade);
    }

    public sacarDoCaixaEletronico(quantidade: number): number | string{
        return this.debitarCofre(quantidade);
    }
}

class Banco24Horas extends Banco{

    public sacar(qtd: number): number | string{
        return this.sacarDoCaixa(qtd);
    }
}

const nubank = new Banco();
const banco24Horas = new Banco24Horas();
banco24Horas.sacar(2500);