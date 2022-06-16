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
  failedPassword:boolean = false;
  simulacionDia:any;
  failedDate:boolean = false;

 

  async submitLoginData() {

    if(this.simulacionDia){
      let response = await this.funcionarioService.login(this.receivedUsername, this.receivedPassword);
      if (typeof(response)=='undefined') {
        this.failedPassword = true;
      }
      else{
        this.user = response;
        this.logged = true;
      }
      this.funcionarioService.setFechaSimulada(this.getDateFromString(this.simulacionDia))
      this.failedDate = false;
      this.failedPassword = false;
    }
    else{
      this.failedDate = true
    }
  }

  getDateFromString(date:string):Object{
    /*Función que obtiene un string con el formato yyyy-MM-ddTHH:mm y lo convierte en 
    un objeto json con formato {año:yyyy, mes:MM, dia:dd, hora:HH:mm}*/
    let año = date.slice(0,4)
    let mes = date.slice(5,7)
    let dia = date.slice(8,10)
    let hora= date.slice(11,17)
    // console.log("Fecha simulada formato string:",date)
    // console.log("Fecha simulada formato object:",{año:año,mes:mes,dia:dia,hora:hora})
    return {año:año,mes:mes,dia:dia,hora:hora}
  }

  
}


