import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';
import AOS from 'aos'
import { EstacionamientosService } from '../servicios/estacionamientos.service';

@Component({
  selector: 'app-gestor-estacionamiento',
  templateUrl: './gestor-estacionamiento.component.html',
  styleUrls: ['./gestor-estacionamiento.component.css']
})
export class GestorEstacionamientoComponent implements OnInit {


  //Simula la base de datos
  listaEstacionamientos:any = [] 
  estacionamiento:any
  estacionamientoSelec:Estacionamiento = new Estacionamiento(0, "", "", 0, 0, 0, 0, TEstacionamiento.CAMPUS)

  isEditing:boolean = false
  isSelected:boolean = false
  addResult:any

  constructor(private _servicioEstacionamiento:EstacionamientosService) { }

  ngOnInit(): void {
  AOS.init();
  this.listaEstacionamientos = this._servicioEstacionamiento.getParqueos()
  }

  agregarEstacionamiento(){

    var sumaEspaciosTotales = this.estacionamientoSelec.espaciosComunes + this.estacionamientoSelec.espaciosEspeciales 
                + this.estacionamientoSelec.espaciosOficiales

    let body = {nombre :              this.estacionamientoSelec.nombre,
                ubicacion :           this.estacionamientoSelec.ubicacion,
                espaciosTotal :       sumaEspaciosTotales,
                espaciosComunes :     this.estacionamientoSelec.espaciosComunes,
                espaciosEspeciales :  this.estacionamientoSelec.espaciosEspeciales,
                espaciosOficiales :   this.estacionamientoSelec.espaciosOficiales,
                tipo :                this.estacionamientoSelec.tipo}

    this.addResult = this._servicioEstacionamiento.addParking(body)
    console.log(this.addResult)
  }
  

  eliminarEstacionamiento(){
    this._servicioEstacionamiento.deleteParking(this.estacionamientoSelec.idEstacionamiento)
  }

  actualizarEstacionamiento(){
    this._servicioEstacionamiento.updateParking(this.estacionamientoSelec)
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
