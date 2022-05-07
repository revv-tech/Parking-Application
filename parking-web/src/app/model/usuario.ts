
// Clase que representa un usuario de la aplicacion web
export class Usuario {

    usuario:        string
    contraseña:     string
    tipoUsuario:    TUsuario

    constructor(_usuario:string, _contraseña:string, _tipoUsuario:TUsuario){

        this.usuario        = _usuario
        this.contraseña     = _contraseña
        this.tipoUsuario    = _tipoUsuario
    }
}

//Enumerable para definir el tipo de usuario
export enum TUsuario {COMUN="comun", ADMIN="administrador"}
