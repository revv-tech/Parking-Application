import {Estacionamiento, TEstacionamiento} from '../model/estacionamiento' 

export class DTOEstacionamiento {

    nombre:                 string
    ubicacion:              string
    espaciosTotal:          number
    espaciosDisponibles:    number
    espaciosEspeciales:     number
    espaciosOficiales:      number
    espaciosComunes:        number
    tipo:                   TEstacionamiento
    estacionamientoReserva: Estacionamiento

    constructor(_nombre:string, _ubicacion:string, _espaciosTotal:number, _espaciosDisponibles:number,
        _espaciosEspeciales:number, _espaciosOficiales:number, _espaciosComunes:number, _tipo:TEstacionamiento, _estacionamientoReserva:Estacionamiento){

        this.nombre                 = _nombre
        this.ubicacion              = _ubicacion
        this.espaciosTotal          = _espaciosTotal
        this.espaciosDisponibles    = _espaciosDisponibles
        this.espaciosEspeciales     = _espaciosEspeciales
        this.espaciosOficiales      = _espaciosOficiales
        this.espaciosComunes        = _espaciosComunes
        this.tipo                   = _tipo
        this.estacionamientoReserva = _estacionamientoReserva
    }  
}


