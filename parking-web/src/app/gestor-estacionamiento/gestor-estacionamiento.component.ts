import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';
import AOS from 'aos'

@Component({
  selector: 'app-gestor-estacionamiento',
  templateUrl: './gestor-estacionamiento.component.html',
  styleUrls: ['./gestor-estacionamiento.component.css']
})
export class GestorEstacionamientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  AOS.init();

  }

  //Simula la base de datos
  listaEstacionamientos:Estacionamiento[] = []
  estacionamiento:any
  estacionamientoSelec:Estacionamiento = new Estacionamiento("", "", 0, 0, 0, 0, 0)
  isEditing:boolean = false
  isSelected:boolean = false


  agregarEstacionamiento(){



    if(this.isEditing){
      this.isEditing = false
    }

    else{
      this.estacionamiento = this.estacionamientoSelec

      this.listaEstacionamientos.push(this.estacionamiento)
      console.log(this.listaEstacionamientos)
      this.printEstacionamiento(this.estacionamiento)
    }
    this.estacionamientoSelec = new Estacionamiento("", "", 0, 0, 0, 0, 0)
    this.isSelected = false
  }

  eliminarEstacionamiento(){

    if(confirm('Estas seguro de que deseas eliminar ese estacionamiento?')){
      this.listaEstacionamientos = this.listaEstacionamientos.filter(x => x != this.estacionamientoSelec)
      this.estacionamientoSelec = new Estacionamiento("", "", 0, 0, 0, 0, 0)
      this.isEditing = false
      this.isSelected = false
    }

  }

  tipoPropio(){
    this.estacionamientoSelec.tipo = TEstacionamiento.CAMPUS
  }

  tipoSubcontratado(){
    this.estacionamientoSelec.tipo = TEstacionamiento.SUBCONTRATADO
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

  cargarEstacionamientoSelec(estacionamiento:Estacionamiento){
    this.isSelected = true
    this.estacionamientoSelec = estacionamiento;
    this.isEditing = true
  }
}
