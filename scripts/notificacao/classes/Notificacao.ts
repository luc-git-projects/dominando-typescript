import { IUsuario } from "../interfaces/IUsuario";


export default abstract class Notificacao{
    
    abstract enviar(usuario: IUsuario): boolean;
}