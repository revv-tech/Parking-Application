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
  user:any
  receivedUsername:any
  receivedPassword:any

  submitLoginData() {
    
    this.funcionarioService.login(this.receivedUsername, this.receivedPassword).subscribe( response => {
      if (!response) {
        console.log("Usuario " + this.receivedUsername + "no registrado!")
      }
      this.user = response;
      console.log("Usuario encontrado(?)" )

    } )
    console.log("Usuario " + this.receivedUsername + " Contraseña " + this.receivedPassword)
    
  }
}
