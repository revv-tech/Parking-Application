import { Component, OnInit } from '@angular/core';
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

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
  campus2: TCampus;
  tipo2: TFuncionario;
  
  
  constructor(private _servicioUsuario:FuncionariosService) {
    this.usuarioLoggeado = this._servicioUsuario.getUsuarioLoggeado();
    this.tiposFuncionarios = this.tiposFuncionarios.filter(value=>value != this.tipo)
    this.tiposCampus = this.tiposCampus.filter(value=>value != this.campus)
    this.campus2 = this.campus;
    this.tipo2 = this.tipo;
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
    this._servicioUsuario.editarUsuario(body);
    console.log(body)
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
