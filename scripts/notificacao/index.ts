import { Email, SMS, Android } from "./classes/MeiosDeNotificacao";

const notificacao1 = new Email();
notificacao1.enviar({
    nome: "Luciano",
    email: "luciano@hcode.com.br",
    telefone: "983839421"
});

const notificacao2 = new SMS();
notificacao2.enviar({
    nome: "Otávia",
    email: "otavia@hcode.com.br",
    telefone: "98426584526"
});

new Android().enviar({
    nome: "Ivan",
    email: "ivam@hcode.com.br",
    telefone: "95893247"
});