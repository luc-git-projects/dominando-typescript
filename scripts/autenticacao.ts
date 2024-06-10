/// <reference path="./autenticacao/index.ts" />

const novoRegistro = new Autenticacao.LoginRegistro();

const cadastro: Autenticacao.ICadastro = {
    nome: "Luciano",
    email: "luciano@hcode.com.br",
    senha: "123",
    dataNascimento: new Date("1995-02-20")
}

const novoCadastro:Autenticacao.IUsuario = novoRegistro.registro(cadastro);

console.log(novoCadastro);