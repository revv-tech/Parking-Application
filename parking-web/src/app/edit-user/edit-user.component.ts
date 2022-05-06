import { Component, OnInit } from '@angular/core';
import {Funcionario, TFuncionario, TUsuario, TCampus} from '../model/funcionario'
import { FuncionariosService } from '../servicios/funcionarios.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {

  constructor(private _servicioUsuario:FuncionariosService) { 
      this.setTipos();
  }

  ngOnInit(): void {
  }
  public tipoFuncionario = TFuncionario
  public nuevoVehiculo:string=""
  submitted = false;
  tiposFuncionarios:any[]=[]
  tiposUsuarios:any[]=[]
  TCampus:any[]=[]
  identificacion:number = 0
  nombreCompleto:string = ""
  codigo:string = ""
  correoAlterno:string =""
  necesidadEspecial:boolean = false
  correoInstitucional:string = ""
  tipo:TFuncionario = TFuncionario.VISITANTE
  vehiculos:string[] = []
  tipoUsuario:TUsuario = TUsuario.COMUN
  contrasena:string = ""
  celular:number = 0
  campus:TCampus = TCampus.CARTAGO
  funcionario:any= {}
  listaFuncionarios:Funcionario[] = []
  usuario:any;

  //Vista del usuario
  editarUsuario(){
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
        campus:this.campus
      }
      this._servicioUsuario.editarUsuario(body);
      console.log(body)
      this.submitted = true;
    }

  prueba(){
    this.usuario= this._servicioUsuario.prueba();
    console.log(this.usuario);
    this.identificacion = this.usuario["identificacion"]
    this.necesidadEspecial = this.usuario["necesidadEspecial"]
    this.correoAlterno = this.usuario["correoAlterno"],
    this.vehiculos = this.usuario["vehiculos"],
    this.contrasena = this.usuario["contraseña"],
    this.celular = this.usuario["celular"],
    this.tipoUsuario = this.usuario["tipoUsuario"],
    this.nombreCompleto = this.usuario["nombreCompleto"],
    this.tipo = this.usuario["tipo"],
    this.correoInstitucional = this.usuario["correoInstitucional"],
    this.campus = this.usuario["campus"]
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
  }

  quitarVehiculo(index:number){
    this.vehiculos.splice(index,1);
  }
}
