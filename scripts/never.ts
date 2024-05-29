function showError(message: string): never{
    throw new Error(message);
}

function loopInfinito(): never{
    let n = 0;
    while(true){
        console.log(n++);
    }
}

loopInfinito();