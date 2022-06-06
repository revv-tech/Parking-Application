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
  listaFuncionarios2:any = [] 
  funcionario:any
  funcionarioSelec:Funcionario = new Funcionario(0,"","","",false,"",TFuncionario.DOCENTE,[],TUsuario.COMUN,"","",TCampus.CARTAGO,[]);
  isEditing:boolean = false
  isSelected:boolean = false
  addResult:any
  camposContrasenas:boolean=false;
  confirmar:string=""
  todobien: boolean = true;
  departamentos: any[] = []
  usuarioSelec:any = 0
  tipofuncionarioSelec:any = 0
  campusSelec:any = 0
  departamentoSelect:String="";
  departamentoSelect2:String="Cualquiera";
  cuentaFuncionarios:any=0

  constructor(public _servicioFuncionario : FuncionariosService) { 
  }

  ngOnInit(): void {
    AOS.init();
    this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
    this.listaFuncionarios2 = this.listaFuncionarios
    this.departamentos = this._servicioFuncionario.getDepartamentos()["lista"];
    this.cuentaFuncionarios = this.listaFuncionarios.length
  }

  agregarFuncionario(){
    if(this.funcionarioSelec.contrasena != this.confirmar || this.funcionarioSelec.contrasena == ""){
      this.todobien = false
      alert("Contraseñas")
      return
    }
    if(this.departamentoSelect == ""){
      this.todobien = false
      alert("departamento no elegido")
      return
    }
    this.todobien = true

    let body = {identificacion :      this.funcionarioSelec.identificacion,
                nombreCompleto :      this.funcionarioSelec.nombreCompleto,
                codigo :              this.getCodigo(this.departamentoSelect),
                correoAlterno :       this.funcionarioSelec.correoAlterno,
                necesidadEspecial :   this.funcionarioSelec.necesidadEspecial,
                correoInstitucional : this.funcionarioSelec.correoInstitucional,
                contraseña :          this.funcionarioSelec.contrasena,
                tipoUsuario:          this.funcionarioSelec.tipoUsuario,
                campus :              TCampus.SAN_JOSE,
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
    this.funcionarioSelec.codigo = this.getCodigo(this.departamentoSelect)
    this.funcionarioSelec.campus = TCampus.SAN_JOSE
    this._servicioFuncionario.updateFuncionario(this.funcionarioSelec)
    window.alert("Funcionario Actualizado!")
    this.listaFuncionarios= this._servicioFuncionario.getFuncionarios()
    this.tipofuncionarioSelec = 0
    this.usuarioSelec = 0
    this.campusSelec = 0
  }

  filtrarFuncionarios(departamento:any){
    if(departamento=="Cualquiera"){
      this.listaFuncionarios = this.listaFuncionarios2
      this.cuentaFuncionarios = this.listaFuncionarios.length
  }
    else{
      this.listaFuncionarios = this.listaFuncionarios2.filter((funcionario:Funcionario) => funcionario.codigo == this.getCodigo(this.departamentoSelect2))
      this.cuentaFuncionarios = this.listaFuncionarios.length
    }
  }

  tipoFuncionario(tipo:any){

    this.tipofuncionarioSelec = tipo
    
    if(tipo == 1){
      this.funcionarioSelec.tipo = TFuncionario.ADMINISTRATIVO
    }
    else if(tipo == 2){
      this.funcionarioSelec.tipo = TFuncionario.DOCENTE
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

  cargarFuncionarioSelec(funcionario:Funcionario){
    this.isSelected = true
    this.funcionarioSelec = funcionario;
    this.funcionarioSelec.contrasena =""
    this.isEditing = true
    this.camposContrasenas=true
    this.funcionarioSelec.codigo = this.getDepartamento(funcionario.codigo);
    this.departamentoSelect = this.funcionarioSelec.codigo
    
  }

  getDepartamento(codigo:any):any{
    return this.departamentos.filter(dep => dep["codigo"] == codigo)[0]["descripcion"]
  }

  getCodigo(departamentoSelect: any): any {
    return this.departamentos.filter(dep => dep["descripcion"] == departamentoSelect)[0]["codigo"]
  }

}


