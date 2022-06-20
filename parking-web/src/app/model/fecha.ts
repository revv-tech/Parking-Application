export class Fecha {
    año: string
    mes: string
    dia: string
    hora: string
    anio!:string

    constructor(año:string,mes:string,dia:string,hora:string){
        this.año = año;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
    }
}