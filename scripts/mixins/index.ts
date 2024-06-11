import applyMixins from "./applyMixins";


class Product {
    sell(amount: number): string{
        return `Was sold ${amount} itens of this product` 
    }

    buy(amount: number): string{
        return `Was bought ${amount} itens of this product`
    }
}


class Furniture{
    toSit(): string{
        return "you sat on the furniture";
    }

    push(meters: number): string{
        return `The furniture was pushed ${meters} metros`;
    }
}


class Couch {

    constructor(private _name: string){
    }

    get name(): string{
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

interface Couch extends Product, Furniture{
    
}


applyMixins(Couch, [Product, Furniture])

  const product = new Couch("My couch");

  console.log(product.sell(25));
  console.log(product.push(50));
  console.log(product.name);
  

