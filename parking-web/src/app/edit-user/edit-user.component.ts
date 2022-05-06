import { Component, OnInit } from '@angular/core';
import {Funcionario, TFuncionario, TUsuario, TCampus} from '../model/funcionario'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiposFuncionarios:any[]=[]
  tiposUsuarios:any[]=[]
  TCampus:any[]=[]
  identificacion:number = 0
  nombreCompleto:string = ""
  codigo:string = ""
  correoAlterno:string =""
  necesidadEspecial:boolean = true
  correoInstitucional:string = ""
  tipo:TFuncionario = TFuncionario.DOCENTE
  vehiculos:string[] = []
  tipoUsuario:TUsuario = TUsuario.COMUN
  contrasena:string = ""
  celular:number = 0
  campus:TCampus = TCampus.SAN_JOSE
  funcionario:any= {}
  listaFuncionarios:Funcionario[] = []

  //Vista del usuario
  editarUsuario(_identificacion:number,_correoAlterno:string,_vehiculos:string[],_contraseña:string,_celular:number){
        this.identificacion = _identificacion,
        this.correoAlterno = _correoAlterno,
        this.vehiculos = _vehiculos,
        this.contrasena = _contraseña,
        this.celular = _celular
        this.setTipos();
    }

  setTipos(){
    this.tiposFuncionarios.push(TFuncionario.ADMINISTRATIVO)
    this.tiposFuncionarios.push(TFuncionario.DOCENTE)
    this.tiposFuncionarios.push(TFuncionario.JEFATURA)
  };

}
