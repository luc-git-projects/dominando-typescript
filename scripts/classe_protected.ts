class Domicilio{
     public cor: string;
     public endereco: object;

     constructor(cor: string, endereco: object){
         this.cor = cor;
         this.endereco = endereco;
     }


    protected atenderInterfone(mensagem: string): string{
        return mensagem;
    }

     public tocarInterfone(): string{
        return "Interfone tocado!";
     }
}

class Casa extends Domicilio{

    public entrarNaCasa(): string{
        return this.atenderInterfone("Oi, quem é?");
    }

   
}

const casaDoHomer = new Casa("Rosa", {cidade: "Springfiled"});


console.log(casaDoHomer.tocarInterfone());

console.log(casaDoHomer.entrarNaCasa());

