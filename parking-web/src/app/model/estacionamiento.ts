
// Clase que representa los estacionamientos
export class Estacionamiento {

    nombre:                 string
    ubicacion:              string
    espaciosTotales:        number
    espaciosEspeciales:     number
    espaciosOficiales:      number
    espaciosComunes:        number
    tipo:                   TEstacionamiento

    constructor(_nombre:string, _ubicacion:string, _espaciosTotales:number,
        _espaciosEspeciales:number, _espaciosOficiales:number, _espaciosComunes:number, _tipo:TEstacionamiento){

        this.nombre                 = _nombre
        this.ubicacion              = _ubicacion
        this.espaciosTotales        = _espaciosTotales
        this.espaciosEspeciales     = _espaciosEspeciales
        this.espaciosOficiales      = _espaciosOficiales
        this.espaciosComunes        = _espaciosComunes
        this.tipo                   = _tipo
    }

}

//Enumerable para definir el tipo del estacionamiento
export enum TEstacionamiento  {CAMPUS="PROPIO", SUBCONTRATADO="SUBCONTRATADO"} 
