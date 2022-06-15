import { Component, OnInit } from '@angular/core';
import { Estacionamiento, TEstacionamiento } from '../model/estacionamiento';
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
import { FuncionariosService } from '../servicios/funcionarios.service';
import AOS from 'aos'
import { EstacionamientosService } from '../servicios/estacionamientos.service';
import { identifierName } from '@angular/compiler';
import { Horario, TDia, THorario } from '../model/horario';

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
  listaFuncionarios:any = [] 
  estacionamiento:any
  
  funcionarioSelec:Funcionario = new Funcionario(0,"","","",false,"",TFuncionario.DOCENTE,[],TUsuario.COMUN,"","",TCampus.CARTAGO,[]);
  estacionamientoSelec:Estacionamiento = new Estacionamiento(0, "", "", 0, 0, 0, 0, TEstacionamiento.CAMPUS, [], this.funcionarioSelec)
  departamentos: any[] = []

  isEditing:boolean = false
  isSelected:boolean = false
  addResult:any
  public archivo: any;
  photoSelected: string | ArrayBuffer | null= "";
  departamentoSelect:String="";
  camposContrasenas:boolean=false;
  tipoSelec:any = 0
  
  horarios: any = {lunes: {dia: TDia.LUNES,inicio:"00:00",fin:"00:00"}, martes:{dia: TDia.MARTES,inicio:"00:00",fin:"00:00"},miercoles:{dia: TDia.MIERCOLES,inicio:"00:00",fin:"00:00"},jueves:{dia: TDia.JUEVES,inicio:"00:00",fin:"00:00"},viernes:{dia: TDia.VIERNES,inicio:"00:00",fin:"00:00"},sabado:{dia: TDia.SABADO,inicio:"00:00",fin:"00:00"},domingo:{dia: TDia.DOMINGO,inicio:"00:00",fin:"00:00"}}
  constructor(private _servicioEstacionamiento:EstacionamientosService, public _servicioFuncionario : FuncionariosService) { 
    this.listaEstacionamientos = this._servicioEstacionamiento.getParqueos()
    this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
    this.departamentos = this._servicioFuncionario.getDepartamentos()["lista"];
  }


  ngOnInit(): void {
    AOS.init();
   
  }

  onPhotoSelected(evento:any):void{
    if (evento.target.files && evento.target.files[0]){
      this.archivo = <File>evento.target.files[0]
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.archivo)
    }
  }

  agregarEstacionamiento(){
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
                tipo :                this.estacionamientoSelec.tipo,
                encargado :           this.estacionamientoSelec.encargado,
                horarios: [this.horarios.lunes,this.horarios.martes,this.horarios.miercoles,this.horarios.jueves,this.horarios.viernes,this.horarios.sabado,this.horarios.domingo]}

    this.addResult = this._servicioEstacionamiento.addParking(body,data)
    this.listaEstacionamientos = this._servicioEstacionamiento.getParqueos()
    window.alert("Estacionamiento Agregado!")
    this.tipoSelec = 0
  }
  

  eliminarEstacionamiento(){
    if (confirm("¿Esta seguro que desea borrar?")){
      this._servicioEstacionamiento.deleteParking(this.estacionamientoSelec.idEstacionamiento)
      this.listaEstacionamientos = this._servicioEstacionamiento.getParqueos()
      this.funcionarioSelec = new Funcionario(0,"","","",false,"",TFuncionario.DOCENTE,[],TUsuario.COMUN,"","",TCampus.CARTAGO,[]);
      this.estacionamientoSelec = new Estacionamiento(0, "", "", 0, 0, 0, 0, TEstacionamiento.CAMPUS,[], this.funcionarioSelec)
      this.photoSelected = null;
      this.horarios = {lunes:new Horario(TDia.LUNES,"00:00","00:00"), martes:new Horario(TDia.MARTES,"00:00","00:00"),miercoles:new Horario(TDia.MIERCOLES,"00:00","00:00"),jueves:new Horario(TDia.JUEVES,"00:00","00:00"),viernes:new Horario(TDia.VIERNES,"00:00","00:00"),sabado:new Horario(TDia.SABADO,"00:00","00:00"),domingo:new Horario(TDia.DOMINGO,"00:00","00:00")}
    }
    this.tipoSelec = 0
  }

  actualizarEstacionamiento(){
    this.estacionamientoSelec.horarios = [this.horarios.lunes,this.horarios.martes,this.horarios.miercoles,this.horarios.jueves,this.horarios.viernes,this.horarios.sabado,this.horarios.domingo]
    this._servicioEstacionamiento.updateParking(this.estacionamientoSelec)
    this.listaEstacionamientos = this._servicioEstacionamiento.getParqueos()
    this.tipoSelec = 0
  }

  tipoPropio(){
    this.estacionamientoSelec.tipo = TEstacionamiento.CAMPUS
    this.tipoSelec = 1
  }

  tipoSubcontratado(){
    this.estacionamientoSelec.tipo = TEstacionamiento.SUBCONTRATADO
    this.tipoSelec = 2
  }

  getDepartamento(codigo:any):any{
    return this.departamentos.filter(dep => dep["codigo"] == codigo)[0]["descripcion"]
  }

  cargarEstacionamientoSelec(estacionamiento:Estacionamiento){
    this.isSelected = true
    this.estacionamientoSelec = estacionamiento;
    this.horarios.lunes = estacionamiento.horarios.filter((horario) => horario.dia == TDia.LUNES)[0]
    this.horarios.martes = estacionamiento.horarios.filter((horario) => horario.dia == TDia.MARTES)[0]
    this.horarios.miercoles = estacionamiento.horarios.filter((horario) => horario.dia == TDia.MIERCOLES)[0]
    this.horarios.jueves = estacionamiento.horarios.filter((horario) => horario.dia == TDia.JUEVES)[0]
    this.horarios.viernes = estacionamiento.horarios.filter((horario) => horario.dia == TDia.VIERNES)[0]
    this.horarios.sabado = estacionamiento.horarios.filter((horario) => horario.dia == TDia.SABADO)[0]
    this.horarios.domingo = estacionamiento.horarios.filter((horario) => horario.dia == TDia.DOMINGO)[0]
    this.isEditing = true
    this.photoSelected = this.estacionamientoSelec["imagen"];
    this.funcionarioSelec = this.estacionamientoSelec.encargado
  }

  cargarFuncionarioSelec(funcionario:Funcionario){
    this.isSelected = true
    
    this.funcionarioSelec = funcionario;
    this.funcionarioSelec.contrasena =""
    this.isEditing = true
    this.camposContrasenas=true
    this.funcionarioSelec.codigo = this.getDepartamento(funcionario.codigo);
    this.departamentoSelect = this.funcionarioSelec.codigo
    this.horarios = this.funcionarioSelec.horarios
    
  }
}
