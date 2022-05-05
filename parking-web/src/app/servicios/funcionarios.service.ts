import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private baseUrl:string = 'http://localhost:8080/api/funcionarios'

    constructor(private http: HttpClient) {
      console.log("Funcionando el servicio de funcionarios")
    }
}
