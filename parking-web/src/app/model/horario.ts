export class Horario {
    dia: TDia
    inicio: string
    fin: string

    constructor(dia:TDia, inicio:string, fin:string){
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