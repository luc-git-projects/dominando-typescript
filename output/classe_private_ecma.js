"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Documento_numero, _CNPJ_numero;
class Documento {
    constructor() {
        this.valor = "123654789-01"; // TS
        /**
         * o # é o private no ECMAScript
         */
        _Documento_numero.set(this, 35); //ECMAScript
    }
    mostrarDocumento() {
        return __classPrivateFieldGet(this, _Documento_numero, "f");
    }
}
_Documento_numero = new WeakMap();
class CNPJ extends Documento {
    constructor() {
        /**
         * Não permite sobrescrever o private do TypeScript
         */
        //private valor: string = "25684512125-01;"
        super(...arguments);
        /**
         * Permite sobrescrever o private do ECMAScript
         */
        _CNPJ_numero.set(this, 50);
    }
    mostrarCNPJ() {
        return __classPrivateFieldGet(this, _CNPJ_numero, "f");
    }
}
_CNPJ_numero = new WeakMap();
const rg = new Documento();
console.log(rg.mostrarDocumento());
const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());
/**
 * Acessa o private do TypeScript de qualquer jeito
 */
//,
//console.log(rg.valor);
/**
 * Não acessao private do ECMAScript da erro
 */
//console.log(rg.#numero);
//# sourceMappingURL=classe_private_ecma.js.map