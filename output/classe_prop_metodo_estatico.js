"use strict";
const BancoDeDados = require("./classes/BancoDeDados");
const conexaoBanco = BancoDeDados.factory({
    ip: BancoDeDados.TIPO_MYSQL,
    usuario: "root",
    senha: "123",
    tipoBanco: BancoDeDados.TIPO_MYSQL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map