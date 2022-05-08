import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TCampus, TFuncionario, TUsuario } from '../model/funcionario';
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
  exito:any;
  isLoggedInBool = false;
  failedPassword = false;
  
  constructor(private http: HttpClient) {
      console.log("Funcionando el servicio de funcionarios")
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

    cambiarContraseña = async (oldPassword: string, newPassword: string,identificacion:number) => {
      this.http.put(`${this.baseUrl}/cambiarContrasena`,{vieja:oldPassword,nueva:newPassword,id:identificacion}).subscribe(data => {
        this.exito = data
      });
      return await this.exito
    }
  

}
