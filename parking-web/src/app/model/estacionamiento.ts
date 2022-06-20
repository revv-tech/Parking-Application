import { Espacio } from "./espacio"
import { Funcionario } from "./funcionario"

// Clase que representa los estacionamientos
export class Estacionamiento {

    idEstacionamiento:      number
    nombre:                 string
    ubicacion:              string
    espaciosTotal:        number
    espaciosEspeciales:     number
    espaciosOficiales:      number
    espaciosJefatura:       number
    espaciosComunes:        number
    tipo:                   TEstacionamiento
    imagen:                 string
    horarios:               any[]
    encargado:              any
    espaciosDisponibles!:   number
    seleccionado!:          boolean
    espacios!:              Espacio[]

    constructor(_id:number, _nombre:string, _ubicacion:string, _espaciosTotales:number,
        _espaciosEspeciales:number, _espaciosOficiales:number, _espaciosComunes:number, _tipo:TEstacionamiento,_horarios:any[],_encargado:any, _espaciosJefatura:number){

        this.idEstacionamiento      = _id
        this.nombre                 = _nombre
        this.ubicacion              = _ubicacion
        this.espaciosTotal        = _espaciosTotales
        this.espaciosEspeciales     = _espaciosEspeciales
        this.espaciosOficiales      = _espaciosOficiales
        this.espaciosComunes        = _espaciosComunes
        this.tipo                   = _tipo
        this.imagen                 = ""
        this.horarios               = _horarios
        this.encargado              = _encargado
        this.espaciosJefatura       =_espaciosJefatura
    }

}

//Enumerable para definir el tipo del estacionamiento
export enum TEstacionamiento  {CAMPUS="PROPIO", SUBCONTRATADO="SUBCONTRATADO"} 
