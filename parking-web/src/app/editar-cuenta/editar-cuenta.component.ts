import { Component, OnInit } from '@angular/core';
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
import { FuncionariosService } from '../servicios/funcionarios.service';
import {Horario, THorario, TDia} from '../model/horario';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent implements OnInit {

  public tUsuario = TUsuario
  public tFuncionario = TFuncionario
  public usuarioLoggeado;
  public nuevoVehiculo:string=""
  submitted = false;
  submitted1 = false;
  tiposFuncionarios:any[]=[]
  tiposUsuarios:any[]=[]
  tiposCampus:any[]=[]
  identificacion:number = 0
  nombreCompleto:string = ""
  codigo:string = ""
  correoAlterno:string =""
  necesidadEspecial:boolean = false
  correoInstitucional:string = ""
  tipo:TFuncionario = TFuncionario.ADMINISTRATIVO
  vehiculos:string[] = []
  tipoUsuario:TUsuario = TUsuario.COMUN
  contrasena:string = ""
  celular:number = 0
  campus:TCampus = TCampus.CARTAGO
  funcionario:any= {}
  listaFuncionarios:Funcionario[] = []
  usuario:any;
  tipo2:any;
  campus2: TCampus;
  horarios: Horario[] = [];
  horarioDia: TDia = TDia.DOMINGO;
  horarioInicio: number=12;
  horarioFin: number=12;
  dias: any[];
  horas: any[];
  esJefatura:boolean=true;
  inicioTiempo:String="am";
  finTiempo:String="pm";
  tipoHoras:any[]=["am","pm"]


  constructor(private _servicioUsuario:FuncionariosService) {
      this.setTipos();
      this.usuarioLoggeado = _servicioUsuario.getUsuarioLoggeado()
      this.tiposFuncionarios = Object.values(TFuncionario);
      this.tiposUsuarios = Object.values(TUsuario)
      this.tiposCampus = Object.values(TCampus)
      this.identificacion = this.usuarioLoggeado["identificacion"]
      this.nombreCompleto = this.usuarioLoggeado["nombreCompleto"]
      this.codigo = this.usuarioLoggeado["codigo"]
      this.correoAlterno = this.usuarioLoggeado["correoAlterno"]
      this.necesidadEspecial = this.usuarioLoggeado["necesidadEspecial"]
      this.correoInstitucional = this.usuarioLoggeado["correoInstitucional"]
      this.tipo = this.usuarioLoggeado["tipo"]
      this.vehiculos = this.usuarioLoggeado["vehiculos"]
      this.tipoUsuario = this.usuarioLoggeado["tipoUsuario"]
      this.contrasena = this.usuarioLoggeado["contraseña"]
      this.celular = this.usuarioLoggeado["celular"]
      this.campus = this.usuarioLoggeado["campus"]
      this.funcionario = this.usuarioLoggeado["funcionario"]
      this.esJefatura = this.usuarioLoggeado["esJefatura"]
      this.horarios = this.usuarioLoggeado["horarios"]
      console.log(this.usuarioLoggeado["horarios"])
      this.tiposFuncionarios = this.tiposFuncionarios.filter(value=>value != this.tipo)
      this.tiposCampus = this.tiposCampus.filter(value=>value != this.campus)
      this.tipo2 = this.tipo
      this.campus2 = this.campus
      this.dias = [TDia.DOMINGO, TDia.LUNES, TDia.MARTES, TDia.MIERCOLES, TDia.JUEVES, TDia.VIERNES, TDia.SABADO]
      this.horas = [1,2,3,4,5,6,7,8,9,10,11,12]
      // this.listaFuncionarios = this.usuarioLoggeado[""]
      // this.usuario = this.usuarioLoggeado[""]
   }

  ngOnInit(): void {
  }

  
  //Vista del usuario
  editarUsuario = async () => {
    let body = {
      identificacion:this.identificacion,
      nombreCompleto:this.nombreCompleto,
      codigo:this.codigo,
      correoAlterno:this.correoAlterno,
      necesidadEspecial:this.necesidadEspecial,
      correoInstitucional:this.correoInstitucional,
      tipo:this.tipo,
      vehiculos:this.vehiculos,
      tipoUsuario:this.tipoUsuario,
      contrasena:this.contrasena,
      celular:this.celular,
      campus:this.campus,
      horarios: this.horarios,
      esJefatura: this.esJefatura
    }
    await this._servicioUsuario.editarUsuario(body)
    await this._servicioUsuario.setUsuarioLoggeado(body)
    this.submitted = true;
    this.submitted1 = true

  }


setTipos(){
  this.tiposFuncionarios.push(TFuncionario.ADMINISTRATIVO)
  this.tiposFuncionarios.push(TFuncionario.DOCENTE)
  console.log(this.tiposFuncionarios)
  console.log("no")
};

agregarVehiculo(){
  if(this.nuevoVehiculo!=""){
    this.vehiculos.push(this.nuevoVehiculo)
  }
  this.submitted1 = false
}

quitarVehiculo(index:number){
  this.vehiculos.splice(index,1);
  this.submitted1 = false
}

agregarHorario(){
  if (this.horarioInicio >= this.horarioFin && this.inicioTiempo=="pm"){
    window.alert("El horario de inicio debe ser antes que el final")
  }
  else{
    let horario:Horario = {
      dia: this.horarioDia, inicio: this.horarioInicio, fin:this.horarioFin
    };
    if(this.horarios.filter(e => (e.dia == horario.dia && e.inicio == horario.inicio && e.fin == horario.fin)).length > 0){
      window.alert("El horario ya está agregado")
    }
    else{
      this.horarios.push(horario)
      this.submitted1 = false
    }
    
  }
}

eliminarHorario(i:number){
  this.horarios.splice(i,1);
  this.submitted1 = false
}

}
