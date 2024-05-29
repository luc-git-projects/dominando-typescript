"use strict";
/*

function somarRenda(mes1: number, mes2: number, mes3: number): number{
    return mes1 + mes2 + mes3;
}

let renda = somarRenda(250, 780, 2000);
console.log(renda);
*/
/**
 * Rest parameter
 */
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
let renda = somarRenda(250, 780, 695, 2000, 6500);
console.log(renda);
//# sourceMappingURL=rest_parameters.js.map