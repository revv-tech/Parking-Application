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

  constructor(public _servicioFuncionario : FuncionariosService) { }

  ngOnInit(): void {
    AOS.init();
    this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
  }

  agregarFuncionario(){


    let body = {identificacion :      this.funcionarioSelec.identificacion,
                nombreCompleto :      this.funcionarioSelec.nombreCompleto,
                codigo :              this.funcionarioSelec.codigo,
                correoAlterno :       this.funcionarioSelec.correoAlterno,
                necesidadEspecial :   this.funcionarioSelec.necesidadEspecial,
                correoInstitucional : this.funcionarioSelec.correoInstitucional,
                contraseña :          this.funcionarioSelec.contraseña,
                tipoUsuario:          this.funcionarioSelec.tipoUsuario,
                campus :              this.funcionarioSelec.campus,
                tipo :                this.funcionarioSelec.tipo,
                celular :             this.funcionarioSelec.celular}

    this.addResult = this._servicioFuncionario.addFuncionario(body)
    
  }
  

  eliminarEstacionamiento(){
    this._servicioFuncionario.deleteFuncionario(this.funcionarioSelec.identificacion)
  }

  actualizarEstacionamiento(){
    
  }

  tipoFuncionario(tipo:any){
    
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
    if(tipo == 1){
      this.funcionarioSelec.tipoUsuario = TUsuario.ADMIN
    }
    else if(tipo == 2){
      this.funcionarioSelec.tipoUsuario = TUsuario.COMUN
    }  
  }

  campusFuncionario(campus:any){
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
    this.isEditing = true
  }

}
