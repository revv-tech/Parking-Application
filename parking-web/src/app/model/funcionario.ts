export class Funcionario {
    identificacion:number
    nombreCompleto:string
    codigo:string
    correoAlterno:string
    necesidadEspecial:boolean
    correoInstitucional:string
    tipo:TFuncionario
    vehiculos:string[]
    tipoUsuario:TUsuario
    contraseña:string
    celular:number
    campus:TCampus

    constructor(_identificacion:number,_nombreCompleto:string,_codigo:string,_correoAlterno:string,_necesidadEspecial:boolean,
        _correoInstitucional:string,_tipo:TFuncionario,_vehiculos:string[],_tipoUsuario:TUsuario,_contraseña:string,_celular:number,_campus:TCampus){
            this.identificacion = _identificacion,
            this.nombreCompleto = _nombreCompleto,
            this.codigo = _codigo,
            this.correoAlterno = _correoAlterno,
            this.necesidadEspecial = _necesidadEspecial,
            this.correoInstitucional = _correoInstitucional,
            this.tipo = _tipo,
            this.vehiculos = _vehiculos,
            this.tipoUsuario = _tipoUsuario,
            this.contraseña = _contraseña,
            this.celular = _celular,
            this.campus = _campus
        }

}

export enum TFuncionario {DOCENTE,ADMINISTRATIVO,JEFATURA,VISITANTE}
export enum TUsuario {COMUN, ADMIN}
export enum TCampus {SAN_JOSE, CARTAGO, ALAJUELA, LIMON, SAN_CARLOS}
