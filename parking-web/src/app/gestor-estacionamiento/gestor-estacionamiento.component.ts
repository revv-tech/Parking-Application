import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';
import AOS from 'aos'
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import { identifierName } from '@angular/compiler';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

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
  public archivo: any;
  photoSelected: string | ArrayBuffer | null= "";

  constructor(private _servicioEstacionamiento:EstacionamientosService) { }

  ngOnInit(): void {
  AOS.init();
  this.listaEstacionamientos = this._servicioEstacionamiento.getParqueos()
  }

  onPhotoSelected(evento:any):void{
    // console.log(evento)
    if (evento.target.files && evento.target.files[0]){
      this.archivo = <File>evento.target.files[0]
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.archivo)
    }
  }

  agregarEstacionamiento(){
    console.log("archivo a guardar")
    console.log(this.archivo)

    const file_data = this.archivo;
    const data = new FormData();
    data.append("file",file_data);
    data.append("upload_preset","angular_cloudinary")
    data.append("cloud_name",'dhoxfrbt2')

    var sumaEspaciosTotales = this.estacionamientoSelec.espaciosComunes + this.estacionamientoSelec.espaciosEspeciales 
                + this.estacionamientoSelec.espaciosOficiales

    let body = {nombre :              this.estacionamientoSelec.nombre,
                ubicacion :           this.estacionamientoSelec.ubicacion,
                espaciosTotal :       sumaEspaciosTotales,
                espaciosComunes :     this.estacionamientoSelec.espaciosComunes,
                espaciosEspeciales :  this.estacionamientoSelec.espaciosEspeciales,
                espaciosOficiales :   this.estacionamientoSelec.espaciosOficiales,
                tipo :                this.estacionamientoSelec.tipo}

    this.addResult = this._servicioEstacionamiento.addParking(body,data)
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
