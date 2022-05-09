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
  
  
  constructor(private http: HttpClient) {
      console.log("Funcionando el servicio de funcionarios")
    }

    getFuncionarios(): Observable<Funcionario[]> {
      console.log("Results:")
      this.http.get(this.baseUrl+"/consultar-Funcionarios").subscribe(_funcionarios => {
        this.funcionarios = _funcionarios
        console.log(_funcionarios)
      })
      return this.funcionarios;
    }
  

    editarUsuario = async (_body:any)  => {  
      return this.http.put<any>(`${this.baseUrl}/editarUsuario`,_body)
      .subscribe(data => {
        console.log(data)
      });
      
    }

    login = async (mail : string, password : string)  =>  {
      console.log("Results:")
      // Login con body de contrasena y email
      this.http.put(this.baseUrl+'/login',{contraseña : password, 
        correoInstitucional : mail}).subscribe (data => {
          if (data != null) {
            // Iguala usuario con usuario recibido de consulta
            this.usuarioLoggeado = data;
            if (this.usuarioLoggeado["tipoUsuario"] == "Administrador" ){
              this.isAdmin = true;
            }
            console.log(data)
            this.isLoggedInBool = true;
          }else{
            this.failedPassword = true;
          }
         
        })
    
    }

    logout(){
      this.isLoggedInBool = false;
      
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
}
