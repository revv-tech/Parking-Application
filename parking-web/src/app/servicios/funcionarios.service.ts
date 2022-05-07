import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TCampus, TFuncionario, TUsuario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private baseUrl:string = 'http://localhost:8080/api/funcionarios'
  usuario:any = {
  identificacion:150188800,
  nombreCompleto:"Marcelino Herrera",
  codigo:"EL",
  correoAlterno:"veunneicreprufri-7026@yopmail.com",
  necesidadEspecial:false,
  correoInstitucional:"marcelinoherrera@courriel.fr.nf",
  vehiculos:["0354 YAX","4370 EAW"],
  contraseña:"$2b$10$asVLP7.ut48VBPZ9CX2oIexwBBLYjsIimr.OuzhS7koZJgc/CJ8ty",
  tipoUsuario:TUsuario.COMUN,
  celular:62513925,
  campus:TCampus.SAN_JOSE,
  tipo:TFuncionario.ADMINISTRATIVO,
  }
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
}
