import { Funcionario } from "./funcionario"

// Clase que representa los estacionamientos
export class Estacionamiento {

    idEstacionamiento:      number
    nombre:                 string
    ubicacion:              string
    espaciosTotales:        number
    espaciosEspeciales:     number
    espaciosOficiales:      number
    espaciosComunes:        number
    tipo:                   TEstacionamiento
    imagen:                 string
    horarios:               any[]
    encargado:              any

    constructor(_id:number, _nombre:string, _ubicacion:string, _espaciosTotales:number,
        _espaciosEspeciales:number, _espaciosOficiales:number, _espaciosComunes:number, _tipo:TEstacionamiento,_horarios:any[],_encargado:any){

        this.idEstacionamiento      = _id
        this.nombre                 = _nombre
        this.ubicacion              = _ubicacion
        this.espaciosTotales        = _espaciosTotales
        this.espaciosEspeciales     = _espaciosEspeciales
        this.espaciosOficiales      = _espaciosOficiales
        this.espaciosComunes        = _espaciosComunes
        this.tipo                   = _tipo
        this.imagen                 = ""
        this.horarios               = _horarios
        this.encargado              = _encargado
    }

}

//Enumerable para definir el tipo del estacionamiento
export enum TEstacionamiento  {CAMPUS="PROPIO", SUBCONTRATADO="SUBCONTRATADO"} 
