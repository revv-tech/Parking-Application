import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { threadId } from 'worker_threads';
import { Usuario } from '../model/usuario';
import { FuncionariosService } from '../servicios/funcionarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private funcionarioService : FuncionariosService) { }

  ngOnInit(): void {
  }
  // Usuario loggeado
  user:any
  receivedUsername:any
  receivedPassword:any
  logged = false;
  failedPassword = false;

  submitLoginData() {
    let response = this.funcionarioService.login(this.receivedUsername, this.receivedPassword);
    if (response == null) {
      console.log("Usuario " + this.receivedUsername + "no registrado!")
      this.failedPassword = true;
    }else{
      this.user = response;
      this.logged = true;
      console.log("Usuario encontrado")
      console.log("Usuario " + this.receivedUsername + " Contraseña " + this.receivedPassword)
    }
    
    
  }
}
