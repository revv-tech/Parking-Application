import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';

@Component({
  selector: 'app-gestor-estacionamiento',
  templateUrl: './gestor-estacionamiento.component.html',
  styleUrls: ['./gestor-estacionamiento.component.css']
})
export class GestorEstacionamientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Simula la base de datos
  listaEstacionamientos:Estacionamiento[] = []

  nombreEstacionamiento:any
  ubicacion:any
  espaciosTotales:any
  espaciosComunes:any
  espaciosEspeciales:any
  espaciosOficiales:any
  tipo:any
  estacionamiento:any


  agregarEstacionamiento(){

    this.estacionamiento = new Estacionamiento(this.nombreEstacionamiento, this.ubicacion, this.espaciosTotales, 
    this.espaciosEspeciales, this.espaciosOficiales, this.espaciosComunes, this.tipo)

    this.listaEstacionamientos.push(this.estacionamiento)
    console.log(this.listaEstacionamientos)
    this.printEstacionamiento(this.estacionamiento)

    this.nombreEstacionamiento= ""
    this.ubicacion = ""
    this.espaciosTotales = ""
    this.espaciosComunes = ""
    this.espaciosEspeciales = ""
    this.espaciosOficiales = ""
    this.tipo = ""
  }

  tipoPropio(){
    this.tipo = TEstacionamiento.CAMPUS
  }

  tipoSubcontratado(){
    this.tipo = TEstacionamiento.SUBCONTRATADO
  }

  printEstacionamiento(estacionamiento:Estacionamiento){

    console.log("--ESTACIONAMIENTO--" + estacionamiento.nombre)
    console.log(estacionamiento.ubicacion)
    console.log("Espacios totales: " + estacionamiento.espaciosTotales)
    console.log("Espacios comunes: " + estacionamiento.espaciosComunes)
    console.log("Espacios especiales: " + estacionamiento.espaciosEspeciales)
    console.log("Espacios oficiales: " + estacionamiento.espaciosOficiales)
    console.log("Tipo: " + estacionamiento.tipo)
  }
}
