export class Horario {
    dia: TDia
    inicio: number
    fin: number

    constructor(dia:TDia, inicio:number, fin:number){
        this.dia = dia;
        this.inicio = inicio;
        this.fin = fin
    }
}

export enum THorario {
    PARQUEO, RESERVA, FUNCIONARIO
}

export enum TDia {
    LUNES="Lunes",
    MARTES="Martes",
    MIERCOLES="Miércoles",
    JUEVES="Jueves",
    VIERNES="Viernes",
    SABADO="Sábado",
    DOMINGO="Domingo",
}