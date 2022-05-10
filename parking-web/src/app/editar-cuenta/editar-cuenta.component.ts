import { Component, OnInit } from '@angular/core';
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
import { FuncionariosService } from '../servicios/funcionarios.service';

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
  tiposFuncionarios:any[]=[]
  tiposUsuarios:any[]=[]
  tiposCampus:any[]=[]
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
  tipo2:any;
  campus2: TCampus;

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
      this.tiposFuncionarios = this.tiposFuncionarios.filter(value=>value != this.tipo)
      this.tiposCampus = this.tiposCampus.filter(value=>value != this.campus)
      this.tipo2 = this.tipo
      this.campus2 = this.campus
      // this.listaFuncionarios = this.usuarioLoggeado[""]
      // this.usuario = this.usuarioLoggeado[""]
   }

  ngOnInit(): void {
  }

  
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
    this._servicioUsuario.editarUsuario(body)
    .then( () => {
      this.usuarioLoggeado = this._servicioUsuario.getOneUserLog(this.usuarioLoggeado["identificacion"])
      }
    );
    this.submitted = true;

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
