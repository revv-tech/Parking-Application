import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TCampus, TFuncionario, TUsuario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {



  private baseUrl:string = 'http://localhost:8080/api/funcionarios'
  // Usuario obtenido del Login
  usuarioLoggeado: any;
  mail: any;
  password: any;
  

  constructor(private http: HttpClient) {
      console.log("Funcionando el servicio de funcionarios")
    }

    editarUsuario = async (_body:any)  => {
      const url = `http://localhost:8080/api/funcionarios/editarUsuario`    
      return this.http.put<any>(`${this.baseUrl}/editarUsuario`,_body)
      .subscribe(data => {
        console.log(data)
      });
      
    }

    prueba(){
      return this.usuario;
    }

    login = async (mail : string, password : string)  =>  {
      console.log("Results:")
      // Login con body de contrasena y email
      this.http.put(this.baseUrl+'/login',{contraseña : password, 
        correoInstitucional : mail}).subscribe (data => {
          // Iguala usuario con usuario recibido de consulta
          this.usuarioLoggeado = data;
          
          console.log(data)
        })
      return this.usuarioLoggeado;
    }

    

}
