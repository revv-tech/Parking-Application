import { Estacionamiento, TEstacionamiento } from "./estacionamiento";

// Clase que representa los estacionamientos
export class EstacionamientoFactory {



    constructor(){

    }

    createEstacionamiento(id:number, nombre:string, ubicacion:string, espaciosTotales:number, espaciosEspeciales:number, espaciosOficiales:number,
        espaciosComunes:number, tipo:TEstacionamiento, horarios:any, encargado:any){
            return new Estacionamiento(id, nombre, ubicacion, espaciosTotales, espaciosEspeciales, espaciosOficiales, espaciosComunes, tipo,
                horarios, encargado)
    }
}



