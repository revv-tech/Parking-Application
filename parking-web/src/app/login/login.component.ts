import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  receivedUsername:any
  receivedPassword:any

  submitLoginData(){
    console.log("Usuario " + this.receivedUsername + " Contraseña " + this.receivedPassword)
  }
}
