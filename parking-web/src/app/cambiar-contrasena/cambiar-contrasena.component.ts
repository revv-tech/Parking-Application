import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {
  oldPassword:string=""
  newPassword:string=""
  identificacion:number=0
  exito:any;

  constructor(private _servicioUsuario:FuncionariosService) { 
    this.identificacion = _servicioUsuario.getUsuarioLoggeado()["identificacion"]
  }

  ngOnInit(): void {
  }

  cambiarContrasena = async () => {
    this.exito = this._servicioUsuario.cambiarContraseña(this.oldPassword, this.newPassword,this.identificacion);
  }

}
