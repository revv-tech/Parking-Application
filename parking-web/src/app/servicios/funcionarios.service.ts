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

    login(): Observable<any[]> {
      console.log("Results:")
      this.http.get(this.baseUrl+"/login").subscribe(usuario => {
        this.usuarioLoggeado = usuario
        console.log(usuario)
      })
      return this.usuarioLoggeado;
    }

    

}
