import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../servicios/funcionarios.service';
import AOS from 'aos'
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
@Component({
  selector: 'app-gestor-funcionarios',
  templateUrl: './gestor-funcionarios.component.html',
  styleUrls: ['./gestor-funcionarios.component.css']
})
export class GestorFuncionariosComponent implements OnInit {

  //Simula la base de datos
  listaFuncionarios:any = [] 
  funcionario:any
  funcionarioSelec:Funcionario = new Funcionario(0,"","","",false,"",TFuncionario.DOCENTE,[],TUsuario.COMUN,"","",TCampus.CARTAGO);
  isEditing:boolean = false
  isSelected:boolean = false
  addResult:any
  camposContrasenas:boolean=false;
  confirmar:string=""
  todobien: boolean = true;

  usuarioSelec:any = 0
  tipofuncionarioSelec:any = 0
  campusSelec:any = 0

  constructor(public _servicioFuncionario : FuncionariosService) { }

  ngOnInit(): void {
    AOS.init();
    this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
  }

  agregarFuncionario(){
    if(this.funcionarioSelec.contrasena != this.confirmar || this.funcionarioSelec.contrasena == ""){
      this.todobien = false
      return
    }
    this.todobien = true

    let body = {identificacion :      this.funcionarioSelec.identificacion,
                nombreCompleto :      this.funcionarioSelec.nombreCompleto,
                codigo :              this.funcionarioSelec.codigo,
                correoAlterno :       this.funcionarioSelec.correoAlterno,
                necesidadEspecial :   this.funcionarioSelec.necesidadEspecial,
                correoInstitucional : this.funcionarioSelec.correoInstitucional,
                contraseña :          this.funcionarioSelec.contrasena,
                tipoUsuario:          this.funcionarioSelec.tipoUsuario,
                campus :              this.funcionarioSelec.campus,
                tipo :                this.funcionarioSelec.tipo,
                celular :             this.funcionarioSelec.celular}

    this.addResult = this._servicioFuncionario.addFuncionario(body)
    this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
    window.alert("Funcionario Agregado!")
    this.tipofuncionarioSelec = 0
    this.usuarioSelec = 0
    this.campusSelec = 0
  }
  

  eliminarFuncionario(){
    if (confirm("¿Esta seguro que desea borrar?")){
      this._servicioFuncionario.deleteFuncionario(this.funcionarioSelec.identificacion)
      this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
    }
    this.tipofuncionarioSelec = 0
    this.usuarioSelec = 0
    this.campusSelec = 0
  }

  actualizarFuncionario(){
    if(this.funcionarioSelec.contrasena != this.confirmar){
      this.todobien = false
      return
    }
    this.todobien = true
    this.funcionarioSelec.contrasena = this.confirmar
    this._servicioFuncionario.updateFuncionario(this.funcionarioSelec)
    window.alert("Funcionario Actualizado!")
    
    this.tipofuncionarioSelec = 0
    this.usuarioSelec = 0
    this.campusSelec = 0
  }

  tipoFuncionario(tipo:any){

    this.tipofuncionarioSelec = tipo
    
    if(tipo == 1){
      this.funcionarioSelec.tipo = TFuncionario.ADMINISTRATIVO
    }
    else if(tipo == 2){
      this.funcionarioSelec.tipo = TFuncionario.DOCENTE
    }
    else if(tipo == 3){
      this.funcionarioSelec.tipo = TFuncionario.JEFATURA
    }
    else if(tipo == 4){
      this.funcionarioSelec.tipo = TFuncionario.VISITANTE
    }
  }

  tipoUsuario(tipo:any){

    this.usuarioSelec = tipo
    
    if(tipo == 1){
      this.funcionarioSelec.tipoUsuario = TUsuario.ADMIN
    }
    else if(tipo == 2){
      this.funcionarioSelec.tipoUsuario = TUsuario.COMUN
    }  
  }

  campusFuncionario(campus:any){

    this.campusSelec = campus

    if(campus == 1){
      this.funcionarioSelec.campus = TCampus.SAN_JOSE
    }
    else if(campus == 2){
      this.funcionarioSelec.campus = TCampus.CARTAGO
    }
    else if(campus == 3){
      this.funcionarioSelec.campus = TCampus.ALAJUELA
    }
    else if(campus == 4){
      this.funcionarioSelec.campus = TCampus.SAN_CARLOS
    } 
    else if(campus == 5){
      this.funcionarioSelec.campus = TCampus.LIMON
    } 
  }

  printFuncionario(funcionario:Funcionario){

    console.log("--Funcionario--" + funcionario.nombreCompleto)
    console.log(funcionario.identificacion)
    console.log("Campus: " + funcionario.campus)
    console.log("Celular: " + funcionario.celular)
    console.log("Codigo: " + funcionario.codigo)
    console.log("Correo Alterno: " + funcionario.correoAlterno)
    console.log("Correo Institucional: " + funcionario.correoInstitucional)
    console.log("Tipo: " + funcionario.tipo)
    console.log("Tipo de Usuario: " + funcionario.tipoUsuario)
    console.log("Necesidad Especial: " + funcionario.necesidadEspecial)
    console.log("Necesidad Especial: " + funcionario.vehiculos)
  }

  cargarFuncionarioSelec(funcionario:Funcionario){
    this.isSelected = true
    this.funcionarioSelec = funcionario;
    this.funcionarioSelec.contrasena =""
    this.isEditing = true
    this.camposContrasenas=true
  }

}
