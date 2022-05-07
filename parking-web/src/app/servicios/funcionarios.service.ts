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

    login(mail : string, password : string): Observable<any> {
      console.log("Results:")
      this.usuarioLoggeado = this.http.put(this.baseUrl+'/login',password)
      return this.usuarioLoggeado;
    }

    

}
