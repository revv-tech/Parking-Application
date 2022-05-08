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
  funcionarioSelec:Funcionario = new Funcionario(0,"","","",false,"",TFuncionario.DOCENTE,[],TUsuario.COMUN,"",0,TCampus.CARTAGO);
  isEditing:boolean = false
  isSelected:boolean = false
  addResult:any

  constructor(public funcionarioService : FuncionariosService) { }

  ngOnInit(): void {
  }

  agregarFuncionario(){

    
  }
  

  eliminarEstacionamiento(){
    
  }

  actualizarEstacionamiento(){
    
  }

  tipoFuncionario(){
    
  }

  tipoUsuario(){
    
  }

  campusFuncionario(){
    
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
