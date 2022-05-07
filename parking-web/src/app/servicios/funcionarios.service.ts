import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {



  private baseUrl:string = 'http://localhost:8080/api/funcionarios'
  usuarioLoggeado: any;
  mail: any;
  password: any;

    constructor(private http: HttpClient) {
      console.log("Funcionando el servicio de funcionarios")
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
