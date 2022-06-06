import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Funcionario, TCampus, TFuncionario, TUsuario } from '../model/funcionario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {


  private baseUrl:string = 'http://localhost:8080/api/funcionarios'
  // Usuario obtenido del Login
  public usuarioLoggeado: any;
  mail: any;
  password: any;
  isLoggedInBool = false;
  failedPassword = false;
  isAdmin = false;
  exito:any;
  funcionarios:any=[]
  funcionario: any= {}
  funcionarioSelect:any[]=[]
  departamentos: any =[]
  
  
  constructor(private http: HttpClient) {
    }


    getUnUsuario(index:number): Funcionario {
      this.funcionarios = this.getFuncionarios();
      return this.funcionarios[index];
    }

    getFuncionarioSelect(index:number){
      return this.funcionarioSelect[index];
    }

    setFuncionarioFiltro(funcionarios:any[]){
      this.funcionarioSelect = funcionarios
    }

    cambiarContraseña = async (oldPassword: string, newPassword: string,identificacion:number) => {
      this.http.put(`${this.baseUrl}/cambiarContrasena`,{vieja:oldPassword,nueva:newPassword,id:identificacion}).subscribe(data => {
        this.exito = data
      });
      return await this.exito
    }


    getFuncionarios(): Funcionario[] {
      this.http.get(this.baseUrl+"/consultar-Funcionarios").subscribe(_funcionarios => {
        this.funcionarios = _funcionarios
        return this.funcionarios;
      })
      return this.funcionarios;
    }
  

    editarUsuario = async (_body:any)  => {  
      this.http.put<any>(`${this.baseUrl}/editarUsuario`,_body)
      .subscribe(data => {});
      
    }

    login = async (mail : string, password : string)  =>  {
      // Login con body de contrasena y email
      this.http.put(this.baseUrl+'/login',{contraseña : password, 
        correoInstitucional : mail}).subscribe (data => {
          if (data != null) {
            // Iguala usuario con usuario recibido de consulta
            this.usuarioLoggeado = data;
            
            if (this.usuarioLoggeado["tipoUsuario"] == "Administrativo"){
              this.isAdmin = true;
            }
            if (this.usuarioLoggeado["tipoUsuario"] == "Común"){
              this.isAdmin = false;
            }
            
            this.isLoggedInBool = true;
          }else{
            this.failedPassword = true;
          }
         
        })
    
    }

    logout(){
      this.isLoggedInBool = false;
      this.isAdmin = false;
      this.failedPassword = false;
      this.usuarioLoggeado = undefined;
    }

    getUsuarioLoggeado = () => {
      
      return this.usuarioLoggeado
    }

    addFuncionario= async (funcionario:any) => {

        this.http.put(this.baseUrl + "/agregarFuncionario", funcionario)
        .subscribe(_result => {
            return  _result
        })
      
    }   
    deleteFuncionario = async (id:any) => {
      this.http.put(this.baseUrl + "/eliminarFuncionario", {identificacion:id})
      .subscribe(_result => {
          return  _result
      })
    }

    updateFuncionario = async (funcionario:any) => {
      this.http.put(this.baseUrl + "/actualizarFuncionario", funcionario)
      .subscribe(_result => {
          return  _result
      })
    }

    setUsuarioLoggeado = async (usuarioLoggeadoNuevaInfo:any) => {
      this.usuarioLoggeado = usuarioLoggeadoNuevaInfo
    }

    actualInfo = async (usuario:any) => {
      this.usuarioLoggeado = usuario
    }

    getFuncionario = async (funcionarioId:any) => {
      // window.alert("llega aqui")
      this.funcionario = this.http.put(this.baseUrl + "/getFuncionario",{identificacion: funcionarioId})
      .subscribe(_result => {
          this.funcionario = _result.valueOf()
      })
      return this.funcionario
    }

    getDepartamentos() {
      this.http.get(this.baseUrl+"/consultar-departamentos").subscribe(result => {
        this.departamentos = result;
        return result;
      })
      return this.departamentos;
    }
}
