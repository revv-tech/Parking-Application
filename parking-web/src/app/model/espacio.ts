export class Espacio {
    numeroCampo!: number
    tipo!: TEspacio
    reservado!: any
    placaReserva!: any

    constructor(){
    }
    
}

export enum TEspacio {
    COMUN ="espacioComún",
    ESPECIAL="espacioEspecial",
    OFICIAL="espacioOficial",
    JEFATURA="espacioJefatura"
}