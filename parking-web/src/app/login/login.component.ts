import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FuncionariosService } from '../servicios/funcionarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public funcionarioService : FuncionariosService) { }
  
  ngOnInit(): void {
  }
  // Usuario loggeado
  user:any | undefined
  mensajePadre = false;
  receivedUsername:any
  receivedPassword:any
  logged = false;
  failedPassword = false;

 

  submitLoginData() {

    let response = this.funcionarioService.login(this.receivedUsername, this.receivedPassword);
    if (response == null) {
      this.failedPassword = true;
    }
    if (!this.failedPassword){
      this.user = response;
      this.logged = true;
    }
  }

  
}


