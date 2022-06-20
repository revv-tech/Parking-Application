import { Fecha } from "./fecha";

export class Reserva {
    horarioFin: Fecha
    horarioInicio: Fecha
    usuario!: any
    estacionamiento!: any
    estado!:EReserva
    campoReservado!:number

    constructor(_horarioInicio:Fecha,_horarioFin:Fecha,usuario:any,parqueo:any){
        this.horarioInicio = _horarioInicio;
        this.horarioFin = _horarioFin;
        this.usuario = usuario;
        this.estacionamiento = parqueo
    }
    
}

export enum EReserva {
    VENCIDA=1,
    SIN_EMPEZAR=2,
    VIGENTE=3
}